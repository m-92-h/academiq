import { AlertTriangle, Medal, Trophy } from "lucide-react";

import type { QuizBadgeKey, ResultBadgeConfig } from "@/types/quiz-runner";

export const OPTION_KEYS = ["A", "B", "C", "D"] as const;
export const EXAM_DURATION_SECONDS = 60 * 60;

export function formatDuration(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function getScorePercentage(score: number, total: number) {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}

export function getBadgeKey(score: number, total: number): QuizBadgeKey {
  const percentage = total > 0 ? (score / total) * 100 : 0;

  if (percentage >= 85) return "excellent";
  if (percentage >= 50) return "good";
  return "needsImprovement";
}

export function getResultBadgeConfig(key: QuizBadgeKey, color: string, bgSoft: string): ResultBadgeConfig {
  const badges: Record<QuizBadgeKey, ResultBadgeConfig> = {
    excellent: {
      icon: Trophy,
      label: "ممتاز",
      subtitle: "أداء استثنائي — استمر على هذا المستوى!",
      iconColor: "#f59e0b",
      gradientFrom: "#fef3c7",
      gradientTo: "#fde68a",
      barColor: "var(--success)",
      ring: "#f59e0b",
    },
    good: {
      icon: Medal,
      label: "جيد",
      subtitle: "أداء جيد. راجع الأسئلة الخاطئة وأعِد المحاولة.",
      iconColor: color,
      gradientFrom: bgSoft,
      gradientTo: bgSoft,
      barColor: color,
      ring: color,
    },
    needsImprovement: {
      icon: AlertTriangle,
      label: "يحتاج مراجعة",
      subtitle: "كل محاولة تقرّبك أكثر — راجع التفسيرات وحاول مجدداً.",
      iconColor: "var(--danger)",
      gradientFrom: "rgba(220,38,38,0.06)",
      gradientTo: "rgba(220,38,38,0.03)",
      barColor: "var(--danger)",
      ring: "var(--danger)",
    },
  };

  return badges[key];
}

export function buildReviewFileName(subjectLabel: string): string {
  const date = new Date().toISOString().slice(0, 10);
  const normalizedSubject = subjectLabel.trim().replace(/\s+/g, "-");

  return `-اكاديميك-اختبار-${normalizedSubject}-${date}.pdf`;
}
