import type { QuizQuestion } from "@/types/data";
import { csQuestions } from "./subjects/cs/questions";
import { arabicQuestions } from "./subjects/arabic/questions";
import { englishQuestions } from "./subjects/english/questions";

export type { QuizQuestion } from "@/types/data";

const QUESTION_POOL: Record<string, { questions: QuizQuestion[]; count: number }> = {
  cs: { questions: csQuestions, count: 40 },
  arabic: { questions: arabicQuestions, count: 60 },
  english: { questions: englishQuestions, count: 40 },
};

// Fisher-Yates shuffle — returns a new shuffled copy
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns `count` randomly-selected questions for the given subject.
export function pickRandomQuestions(subjectId: string): QuizQuestion[] {
  const pool = QUESTION_POOL[subjectId];
  if (!pool) return [];
  return shuffle(pool.questions).slice(0, Math.min(pool.count, pool.questions.length));
}
