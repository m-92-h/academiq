import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, HelpCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { OptionKey, QuizQuestion } from "@/hooks/useQuiz";

import { OptionButton } from "./OptionButton";
import { OPTION_KEYS } from "@/lib/quizUtils";

interface QuestionCardProps {
  question: QuizQuestion;
  questionIndex: number;
  selectedOption: OptionKey | null;
  onSelect: (option: OptionKey) => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isFirst: boolean;
  isLast: boolean;
  color: string;
  bgSoft: string;
  isRTL: "rtl" | "ltr";
}

export function QuestionCard({ question, questionIndex, selectedOption, onSelect, onPrev, onNext, onSubmit, isFirst, isLast, color, bgSoft, isRTL }: QuestionCardProps) {
  const rtl = isRTL === "rtl";

  const t = {
    prev: rtl ? "السابق" : "Previous",
    next: rtl ? "التالي" : "Next",
    submit: rtl ? "تسليم الاختبار" : "Submit Quiz",
  };

  const PrevIcon = rtl ? ChevronRight : ChevronLeft;
  const NextIcon = rtl ? ChevronLeft : ChevronRight;

  return (
    <motion.div
      key={questionIndex}
      dir={isRTL}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="mb-12 overflow-hidden rounded-2xl border bg-card shadow-sm"
    >
      <div className="flex items-start gap-3.5 border-b p-5 pb-4">
        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: bgSoft }}>
          <HelpCircle size={18} style={{ color }} />
        </div>
        <p className="text-base font-extrabold leading-relaxed text-card-foreground sm:text-lg">{question.question}</p>
      </div>

      <div className="flex flex-col gap-3 p-5 pb-4">
        {OPTION_KEYS.map((option) => (
          <OptionButton key={option} optionKey={option} text={question.options[option]} isSelected={selectedOption === option} onSelect={() => onSelect(option)} color={color} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t p-5 pt-3">
        <Button type="button" variant="secondary" onClick={onPrev} disabled={isFirst} className="h-10 gap-2 rounded-xl px-4 font-black">
          <PrevIcon size={16} />
          {t.prev}
        </Button>

        {isLast ? (
          <Button type="button" onClick={onSubmit} className="h-10 gap-2 rounded-xl px-5 font-black text-white" style={{ backgroundColor: color }}>
            <Send size={15} />
            {t.submit}
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={onNext} className="h-10 gap-2 rounded-xl px-5 font-black">
            {t.next}
            <NextIcon size={16} />
          </Button>
        )}
      </div>
    </motion.div>
  );
}
