import { Document, Font, Page, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { QuizReviewPayload } from "@/types/quiz-runner";
import { getScorePercentage, OPTION_KEYS } from "@/lib/quizUtils";
import { type SubjectType, getSubjectType, getTextDirection, getFontUrl } from "@/lib/pdfTextUtils";

Font.register({
  family: "Cairo",
  fonts: [
    { src: getFontUrl("Cairo-Regular.ttf"), fontWeight: 400 },
    { src: getFontUrl("Cairo-SemiBold.ttf"), fontWeight: 600 },
    { src: getFontUrl("Cairo-Bold.ttf"), fontWeight: 700 },
    { src: getFontUrl("Cairo-ExtraBold.ttf"), fontWeight: 800 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

// Design Tokens
const C = {
  royalBlue: "#1e40af",
  royalLight: "#3b82f6",
  royalPale: "#eff6ff",
  royalMid: "#dbeafe",
  white: "#ffffff",
  pageBg: "#f8faff",
  ink: "#0f172a",
  inkMid: "#334155",
  inkSoft: "#64748b",
  correctBorder: "#16a34a",
  correctText: "#15803d",
  correctFill: "#f0fdf4",
  wrongBorder: "#dc2626",
  wrongText: "#b91c1c",
  wrongFill: "#fff5f5",
  watermarkColor: "#1e3a8a",
  divider: "#cbd5e1",
};

// Styles Factory
function createStyles(type: SubjectType) {
  const isRTL = type !== "english";
  const textAlign = isRTL ? ("right" as const) : ("left" as const);
  const rowDir = isRTL ? ("row-reverse" as const) : ("row" as const);
  const dir = getTextDirection(type);

  return StyleSheet.create({
    page: {
      paddingTop: 0,
      paddingBottom: 44,
      paddingHorizontal: 0,
      fontFamily: "Cairo",
      backgroundColor: C.pageBg,
      color: C.ink,
      direction: dir,
    },

    watermark: {
      position: "absolute",
      top: "42%",
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 48,
      fontWeight: 800,
      color: C.watermarkColor,
      opacity: 0.06,
      transform: "rotate(-30deg)",
      zIndex: -1,
    },

    header: {
      paddingTop: 20,
      paddingBottom: 14,
      paddingHorizontal: 28,
      marginBottom: 18,
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 1.5,
      borderBottomColor: C.divider,
      backgroundColor: "transparent",
    },
    headerRight: {
      flexDirection: "column",
      alignItems: "flex-end",
      flex: 1,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: 800,
      color: C.ink,
      textAlign,
      lineHeight: 1.3,
      direction: dir,
    },
    headerSubtitle: {
      fontSize: 8.5,
      color: C.inkSoft,
      textAlign,
      marginTop: 3,
      fontWeight: 600,
      direction: dir,
    },
    scoreBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: C.royalPale,
      borderWidth: 1,
      borderColor: C.royalMid,
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginLeft: isRTL ? 4 : 0,
      marginRight: isRTL ? 0 : 4,
    },
    scoreDivider: {
      width: 1,
      height: 18,
      backgroundColor: C.royalMid,
    },
    scoreValue: {
      fontSize: 17,
      fontWeight: 800,
      color: C.royalBlue,
      textAlign: "center",
    },
    scoreLabel: {
      fontSize: 7,
      color: C.inkSoft,
      textAlign: "center",
      fontWeight: 700,
      letterSpacing: 0.3,
    },

    body: {
      paddingHorizontal: 24,
    },

    question: {
      backgroundColor: "transparent",
      marginBottom: 14,
      paddingBottom: 12,
      borderBottomWidth: 0.75,
      borderBottomColor: C.divider,
    },
    questionInner: {},
    questionHeader: {
      flexDirection: rowDir,
      alignItems: "flex-start",
      gap: 8,
      marginBottom: 8,
    },
    questionNumberBubble: {
      backgroundColor: C.royalBlue,
      borderRadius: 5,
      paddingVertical: 2,
      paddingHorizontal: 6,
      minWidth: 24,
      alignItems: "center",
      flexShrink: 0,
      marginTop: 1,
    },
    questionNumberText: {
      fontSize: 8,
      fontWeight: 700,
      color: C.white,
      textAlign: "center",
    },
    questionTitle: {
      fontSize: 11,
      fontWeight: 700,
      lineHeight: 1.6,
      textAlign,
      color: C.ink,
      flex: 1,
      direction: dir,
    },
    statusPill: {
      borderRadius: 5,
      paddingVertical: 2,
      paddingHorizontal: 7,
      flexShrink: 0,
      marginTop: 1,
    },
    statusText: {
      fontSize: 8,
      fontWeight: 700,
      textAlign: "center",
    },

    optionsContainer: {
      gap: 3,
      marginBottom: 0,
    },
    option: {
      flexDirection: rowDir,
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 8,
      paddingVertical: 4,
      paddingHorizontal: 6,
      borderRadius: 6,
    },
    optionKey: {
      width: 18,
      height: 18,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    optionKeyText: {
      fontSize: 7.5,
      fontWeight: 800,
      textAlign: "center",
    },
    optionText: {
      fontSize: 9.5,
      lineHeight: 1.5,
      textAlign,
      flex: 1,
      direction: dir,
    },

    explanation: {
      marginTop: 8,
      paddingTop: 7,
      paddingHorizontal: 8,
      paddingBottom: 7,
      flexDirection: "column",
      gap: 3,
    },
    explanationAnswer: {
      fontSize: 8.5,
      fontWeight: 700,
      color: C.royalBlue,
      textAlign,
      direction: dir,
    },
    explanationText: {
      fontSize: 8.5,
      lineHeight: 1.6,
      color: C.inkMid,
      textAlign,
      direction: dir,
    },

    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 26,
      backgroundColor: "transparent",
      borderTopWidth: 1,
      borderTopColor: C.divider,
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 24,
    },
    footerLinks: {
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: 4,
    },
    footerLink: {
      fontSize: 7.5,
      fontWeight: 600,
      color: C.royalLight,
      textDecoration: "underline",
    },
    footerSeparator: {
      fontSize: 7.5,
      color: C.divider,
      fontWeight: 400,
    },
    footerPage: {
      fontSize: 7.5,
      fontWeight: 700,
      color: C.inkSoft,
    },
  });
}

// Helpers
function getOptionStyles(isCorrect: boolean, isWrong: boolean) {
  if (isCorrect)
    return {
      container: { backgroundColor: "transparent" },
      keyBg: { backgroundColor: C.correctBorder },
      keyText: { color: C.white },
      text: { color: C.correctText, fontWeight: 600 as const },
    };
  if (isWrong)
    return {
      container: { backgroundColor: "transparent" },
      keyBg: { backgroundColor: C.wrongBorder },
      keyText: { color: C.white },
      text: { color: C.wrongText, fontWeight: 600 as const },
    };
  return {
    container: { backgroundColor: "transparent" },
    keyBg: { backgroundColor: C.royalPale },
    keyText: { color: C.inkSoft },
    text: { color: C.inkMid, fontWeight: 400 as const },
  };
}

function getStatusStyles(status: string) {
  if (status === "صحيح" || status === "true") {
    return { bg: C.correctFill, border: C.correctBorder, color: C.correctText };
  }
  if (status === "خطأ" || status === "false") {
    return { bg: C.wrongFill, border: C.wrongBorder, color: C.wrongText };
  }
  return { bg: "transparent", border: C.divider, color: C.inkSoft };
}

// Component
export function ReviewPdfDocument({ questions, answers, score, total, subjectLabel }: QuizReviewPayload) {
  const percentage = getScorePercentage(score, total);
  const subjectType: SubjectType = getSubjectType(subjectLabel);
  const styles = createStyles(subjectType);
  const isRTL = subjectType !== "english";

  return (
    <Document title={`نتائج اختبار ${subjectLabel}`} author="الأستاذ محمد حسين">
      <Page size="A4" style={styles.page} wrap>
        {/* ── Watermark ── */}
        <View style={styles.watermark} fixed>
          <Text>الأستاذ محمد حسين</Text>
        </View>

        {/* ── Header ── */}
        <View style={styles.header} fixed>
          <View style={styles.headerRight}>
            <Text style={styles.headerTitle}>اختبار {subjectLabel}</Text>
            <Text style={styles.headerSubtitle}>أكاديميك — استعد لاختبار الكفاءة الوطني</Text>
          </View>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreValue}>{percentage}%</Text>
            <View style={styles.scoreDivider} />
            <Text style={styles.scoreLabel}>النتيجة</Text>
          </View>
        </View>

        {/* ── Body ── */}
        <View style={styles.body}>
          {questions.map((question, index) => {
            const userAnswer = answers[index] ?? null;
            const isCorrect = userAnswer !== null && userAnswer === question.correctAnswer;
            const isWrongAnswer = userAnswer !== null && !isCorrect;
            const status = userAnswer === null ? (isRTL ? "لم يجب" : "He did not answer") : isCorrect ? (isRTL ? "صحيح" : "true") : isRTL ? "خطأ" : "false";
            const statusSt = getStatusStyles(status);

            return (
              <View key={question.id} style={styles.question} wrap={false}>
                <View style={styles.questionInner}>
                  <View style={styles.questionHeader}>
                    <View style={styles.questionNumberBubble}>
                      <Text style={styles.questionNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.questionTitle}>{question.question}</Text>
                    <View style={[styles.statusPill, { backgroundColor: statusSt.bg, borderWidth: 1, borderColor: statusSt.border }]}>
                      <Text style={[styles.statusText, { color: statusSt.color }]}>{status}</Text>
                    </View>
                  </View>

                  <View style={styles.optionsContainer}>
                    {OPTION_KEYS.map((option) => {
                      const isUserOption = option === userAnswer;
                      const isChosenCorrect = isUserOption && isCorrect;
                      const isChosenWrong = isUserOption && isWrongAnswer;
                      const optSt = getOptionStyles(isChosenCorrect, isChosenWrong);

                      return (
                        <View key={option} style={[styles.option, optSt.container]}>
                          <View style={[styles.optionKey, optSt.keyBg]}>
                            <Text style={[styles.optionKeyText, optSt.keyText]}>{option}</Text>
                          </View>
                          <Text style={[styles.optionText, { color: optSt.text.color, fontWeight: optSt.text.fontWeight }]}>{question.options[option]}</Text>
                        </View>
                      );
                    })}
                  </View>
                </View>

                {/* Explanation */}
                {isWrongAnswer && (
                  <View style={styles.explanation}>
                    <Text style={styles.explanationAnswer}>
                      {isRTL ? "الصواب" : "Correct Answer"}: ({question.correctAnswer})
                    </Text>
                    <Text style={styles.explanationText}>{question.explanation}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer} fixed>
          <View style={styles.footerLinks}>
            <Link style={styles.footerLink} src="https://bit.ly/4bhJfLa">
              <Text> الأستاذ محمد حسين</Text>
            </Link>
            <Text style={styles.footerSeparator}> | </Text>
            <Link style={styles.footerLink} src="https://academiq-nine.vercel.app/">
              <Text>أكاديميك</Text>
            </Link>
          </View>
          <Text style={styles.footerPage} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
