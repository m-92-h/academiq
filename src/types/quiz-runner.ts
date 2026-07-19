import type { LucideIcon } from "lucide-react";

import type { SUBJECTS_META } from "@/data/subjectsMeta";
import type { OptionKey, QuizQuestion } from "@/hooks/useQuiz";

export type QuizSubjectMeta = (typeof SUBJECTS_META)[number];
export type QuizAnswer = OptionKey | null;
export type QuizBadgeKey = "excellent" | "good" | "needsImprovement";

export interface QuizReviewPayload {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  score: number;
  total: number;
  elapsed: number;
  subjectLabel: string;
}

export interface ResultBadgeConfig {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  barColor: string;
  ring: string;
}
