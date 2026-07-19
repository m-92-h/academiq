import { cn } from "@/lib/utils";

import type { QuizAnswer } from "@/types/quiz-runner";

interface QuestionDotsProps {
  total: number;
  current: number;
  answers: QuizAnswer[];
  onJump: (index: number) => void;
  color: string;
}

export function QuestionDots({ total, current, answers, onJump, color }: QuestionDotsProps) {
  return (
    <div className="hidden flex-wrap justify-center gap-2 px-4 sm:flex">
      {Array.from({ length: total }).map((_, index) => {
        const isAnswered = answers[index] !== null && answers[index] !== undefined;
        const isCurrent = index === current;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onJump(index)}
            aria-label={`السؤال ${index + 1}`}
            aria-current={isCurrent ? "step" : undefined}
            className={cn(
              "flex size-8 items-center justify-center rounded-full text-xs font-black transition duration-200",
              isCurrent ? "scale-110 text-white shadow-sm" : isAnswered ? "text-white opacity-55" : "bg-muted text-muted-foreground hover:scale-105",
            )}
            style={{
              backgroundColor: isCurrent || isAnswered ? color : undefined,
              boxShadow: isCurrent ? `0 0 0 3px ${color}33` : undefined,
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
