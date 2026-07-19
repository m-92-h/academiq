import { Progress } from "@/components/ui/progress";

import { QuestionDots } from "./QuestionDots";
import type { QuizAnswer } from "@/types/quiz-runner";

interface QuizProgressProps {
  currentIndex: number;
  isRTL: "rtl" | "ltr";
  total: number;
  answers: QuizAnswer[];
  onJump: (index: number) => void;
  color: string;
}

export function QuizProgress({ currentIndex, total, answers, onJump, color, isRTL }: QuizProgressProps) {
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = total > 0 ? (answeredCount / total) * 100 : 0;
  const rtl = isRTL === "rtl";

  const t = {
    questionOf: rtl ? `السؤال ${currentIndex + 1} من ${total}` : `Question ${currentIndex + 1} of ${total}`,
    answered: rtl ? `${answeredCount} / ${total} تم الإجابة` : `${answeredCount} / ${total} answered`,
  };

  return (
    <div dir={isRTL} className="rounded-2xl border bg-card p-4">
      <div className="mb-3 flex items-center justify-between text-xs font-bold text-muted-foreground">
        <span>{t.questionOf}</span>
        <span style={{ color }}>{t.answered}</span>
      </div>
      <Progress value={progress} className="mb-4 h-1.5" style={{ color }} dir={isRTL} />
      <QuestionDots total={total} current={currentIndex} answers={answers} onJump={onJump} color={color} />
    </div>
  );
}
