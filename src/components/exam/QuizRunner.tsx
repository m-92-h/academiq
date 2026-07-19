"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { pickRandomQuestions } from "@/data/quizQuestions";
import { SUBJECTS_META } from "@/data/subjectsMeta";
import type { QuizQuestion } from "@/hooks/useQuiz";
import { QuizSession } from "./quiz-runner/QuizSession";

export function QuizRunner({ quizId }: { quizId: string }) {
  const meta = SUBJECTS_META.find((subject) => subject.id === quizId);

  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>(() => pickRandomQuestions(quizId));
  const [quizKey, setQuizKey] = useState(0);

  const handleRetry = useCallback(() => {
    setActiveQuestions(pickRandomQuestions(quizId));
    setQuizKey((key) => key + 1);
  }, [quizId]);

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 rounded-full bg-destructive/10 p-3 text-destructive">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-xl font-black text-foreground">الاختبار غير موجود</h2>
        <Link href="/exam" className="mt-4 text-sm font-bold text-primary hover:underline">
          العودة لمركز الاختبارات
        </Link>
      </div>
    );
  }

  return <QuizSession key={quizKey} questions={activeQuestions} meta={meta} onRetry={handleRetry} />;
}
