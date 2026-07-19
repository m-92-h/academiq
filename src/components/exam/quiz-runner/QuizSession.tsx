"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import { Award, LayoutGrid } from "lucide-react";
import { toast } from "sonner";

import type { OptionKey, QuizQuestion } from "@/hooks/useQuiz";

import { CountdownRing } from "./CountdownRing";
import { EXAM_DURATION_SECONDS, getBadgeKey } from "@/lib/quizUtils";
import { QuestionCard } from "./QuestionCard";
import { QuizProgress } from "./QuizProgress";
import { ResultScreen } from "./ResultScreen";
import type { QuizAnswer, QuizSubjectMeta } from "@/types/quiz-runner";

interface QuizSessionProps {
  questions: QuizQuestion[];
  meta: QuizSubjectMeta;
  onRetry: () => void;
}

export function QuizSession({ questions, meta, onRetry }: QuizSessionProps) {
  const [viewIndex, setViewIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>(() => Array(questions.length).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_SECONDS);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [timeExpired, setTimeExpired] = useState(false);

  const color = meta.color;
  const bgSoft = meta.bgSoft;
  const currentQuestion = questions[viewIndex];
  const isRTL = meta.id === "cs" || meta.id === "arabic" ? "rtl" : "ltr";

  const finalizeQuiz = useCallback(
    (finalAnswers: QuizAnswer[], expired: boolean) => {
      const finalScore = questions.reduce((acc, question, index) => acc + (finalAnswers[index] === question.correctAnswer ? 1 : 0), 0);

      setScore(finalScore);
      setElapsed(expired ? EXAM_DURATION_SECONDS : EXAM_DURATION_SECONDS - secondsLeft);
      setTimeExpired(expired);
      setSubmitted(true);
    },
    [questions, secondsLeft],
  );

  useEffect(() => {
    if (submitted || questions.length === 0) return;

    const intervalId = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [questions.length, submitted]);

  useEffect(() => {
    if (!submitted && secondsLeft === 0) {
      const timeoutId = window.setTimeout(() => finalizeQuiz(answers, true), 0);

      return () => window.clearTimeout(timeoutId);
    }
  }, [answers, finalizeQuiz, secondsLeft, submitted]);

  const handleSelect = useCallback(
    (option: OptionKey) => {
      if (submitted) return;

      setAnswers((previousAnswers) => {
        const nextAnswers = [...previousAnswers];
        nextAnswers[viewIndex] = option;
        return nextAnswers;
      });
    },
    [submitted, viewIndex],
  );

  const handleSubmit = useCallback(() => {
    const firstUnanswered = answers.findIndex((answer) => answer === null);

    if (firstUnanswered !== -1) {
      setViewIndex(firstUnanswered);
      toast.warning(`السؤال ${firstUnanswered + 1} لم تتم الإجابة عليه بعد`, {
        description: "يرجى الإجابة على جميع الأسئلة قبل التسليم.",
        duration: 4000,
        position: "top-center",
      });
      return;
    }

    finalizeQuiz(answers, false);
  }, [answers, finalizeQuiz]);

  const badgeKey = useMemo(() => getBadgeKey(score, questions.length), [score, questions.length]);

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      {!submitted && (
        <header className="flex justify-around gap-4 border-b pb-4 sm:items-center sm:justify-between">
          <div className="space-y-1">
            <Link href="/exam" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground transition hover:text-foreground">
              <LayoutGrid size={12} />
              مركز الاختبارات
            </Link>
            <h1 className="flex items-center gap-2 text-lg font-black text-foreground sm:text-xl">
              <Award size={20} style={{ color }} />
              اختبار {meta.label}
            </h1>
          </div>
          <CountdownRing secondsLeft={secondsLeft} color={color} />
        </header>
      )}

      {!submitted ? (
        <div className="mx-auto max-w-[90%] space-y-5 sm:max-w-full">
          <QuizProgress currentIndex={viewIndex} isRTL={isRTL} total={questions.length} answers={answers} onJump={setViewIndex} color={color} />

          <AnimatePresence mode="wait">
            <QuestionCard
              key={viewIndex}
              question={currentQuestion}
              questionIndex={viewIndex}
              selectedOption={answers[viewIndex]}
              onSelect={handleSelect}
              onPrev={() => setViewIndex((index) => Math.max(0, index - 1))}
              onNext={() => setViewIndex((index) => Math.min(questions.length - 1, index + 1))}
              onSubmit={handleSubmit}
              isFirst={viewIndex === 0}
              isLast={viewIndex === questions.length - 1}
              color={color}
              bgSoft={bgSoft}
              isRTL={isRTL}
            />
          </AnimatePresence>
        </div>
      ) : (
        <ResultScreen
          score={score}
          total={questions.length}
          elapsed={elapsed}
          timeExpired={timeExpired}
          badgeKey={badgeKey}
          color={color}
          bgSoft={bgSoft}
          questions={questions}
          answers={answers}
          onRetry={onRetry}
          subjectLabel={meta.label}
          isRTL={isRTL}
        />
      )}
    </div>
  );
}
