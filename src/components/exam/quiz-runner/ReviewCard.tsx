import { Check, Info, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { QuizQuestion } from "@/hooks/useQuiz";

import { OPTION_KEYS } from "@/lib/quizUtils";
import type { QuizAnswer } from "@/types/quiz-runner";

interface ReviewCardProps {
  question: QuizQuestion;
  userAnswer: QuizAnswer;
  index: number;
}

export function ReviewCard({ question, userAnswer, index }: ReviewCardProps) {
  const isCorrect = userAnswer !== null && userAnswer === question.correctAnswer;
  const isUnanswered = userAnswer === null;

  return (
    <article className="rounded-2xl border bg-card">
      <div className="flex items-start gap-3 border-b p-4">
        <div
          className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
          style={{ backgroundColor: isUnanswered ? "var(--muted-foreground)" : isCorrect ? "var(--success)" : "var(--danger)" }}
        >
          {index + 1}
        </div>
        <p className="flex-1 text-sm font-bold leading-relaxed text-card-foreground">{question.question}</p>
        {isUnanswered ? <Badge variant="secondary">لم يجب</Badge> : " "}
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        {OPTION_KEYS.map((option) => {
          const isThisCorrect = option === question.correctAnswer;
          const isThisUser = option === userAnswer;
          const isWrongUser = isThisUser && !isThisCorrect;

          return (
            <div
              key={option}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold"
              style={{
                backgroundColor: isThisCorrect ? "rgba(22,163,74,0.1)" : isWrongUser ? "rgba(220,38,38,0.1)" : "transparent",
                color: isThisCorrect ? "var(--success)" : isWrongUser ? "var(--danger)" : "var(--muted-foreground)",
              }}
            >
              <span
                className="flex size-5 shrink-0 items-center justify-center rounded-md text-[10px] font-black"
                style={{
                  backgroundColor: isThisCorrect ? "var(--success)" : isWrongUser ? "var(--danger)" : "var(--muted)",
                  color: isThisCorrect || isWrongUser ? "#fff" : "var(--muted-foreground)",
                }}
              >
                {option}
              </span>
              <span className="flex-1">{question.options[option]}</span>
              {isThisCorrect && <Check size={13} />}
              {isWrongUser && <X size={13} />}
            </div>
          );
        })}
      </div>

      {!isCorrect && (
        <div className="mx-4 mb-4 rounded-xl bg-muted p-3" style={{ borderInlineStart: "3px solid var(--danger)" }}>
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-black text-destructive">
            <Info size={11} />
            الإجابة الصحيحة والتفسير
          </div>
          <p className="text-xs leading-relaxed text-foreground">
            <span className="font-black text-emerald-600">({question.correctAnswer}) </span>
            {question.explanation}
          </p>
        </div>
      )}
    </article>
  );
}
