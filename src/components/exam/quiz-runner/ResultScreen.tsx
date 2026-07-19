"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpenCheck, CheckCircle2, Clock, RefreshCw, Timer, X, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { QuizQuestion } from "@/hooks/useQuiz";

import { AnswerReviewDialog } from "./AnswerReviewDialog";
import { formatDuration, getResultBadgeConfig, getScorePercentage } from "@/lib/quizUtils";
import type { QuizAnswer, QuizBadgeKey } from "@/types/quiz-runner";

interface ResultScreenProps {
  score: number;
  total: number;
  elapsed: number;
  timeExpired: boolean;
  badgeKey: QuizBadgeKey;
  color: string;
  bgSoft: string;
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  onRetry: () => void;
  subjectLabel: string;
  isRTL: "rtl" | "ltr";
}

function ResultStat({ icon: Icon, label, value, color, bgSoft }: { icon: React.ElementType; label: string; value: string; color: string; bgSoft: string }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl p-4" style={{ backgroundColor: bgSoft }}>
      <div className="flex size-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}20` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <span className="text-xl font-black tabular-nums" style={{ color }}>
        {value}
      </span>
      <span className="text-center text-[11px] font-semibold text-muted-foreground">{label}</span>
    </div>
  );
}

export function ResultScreen({ score, total, elapsed, timeExpired, badgeKey, color, bgSoft, questions, answers, onRetry, subjectLabel, isRTL }: ResultScreenProps) {
  const [reviewOpen, setReviewOpen] = useState(false);
  const percentage = getScorePercentage(score, total);
  const unanswered = answers.filter((answer) => answer === null).length;
  const wrong = total - score - unanswered;
  const badge = getResultBadgeConfig(badgeKey, color, bgSoft);
  const BadgeIcon = badge.icon;

  return (
    <>
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mx-auto my-6 max-w-lg px-3">
        <div className="relative mx-auto overflow-hidden rounded-2xl border bg-card shadow-xl">
          <Button asChild variant="outline" size="icon" className="absolute left-4 top-4 z-20 border-0 rounded-full" aria-label="إغلاق النتائج">
            <Link href="/exam">
              <X size={15} />
            </Link>
          </Button>

          <div className="flex flex-col items-center gap-4 px-8 pb-8 pt-10 text-center" style={{ background: `linear-gradient(160deg, ${badge.gradientFrom}, ${badge.gradientTo})` }}>
            {timeExpired && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-black text-destructive">
                <Clock size={11} />
                انتهى الوقت وتم التسليم تلقائياً
              </div>
            )}

            <div className="flex size-28 items-center justify-center rounded-full bg-card" style={{ boxShadow: `0 0 0 5px ${badge.ring}25, 0 0 0 10px ${badge.ring}10, 0 12px 32px rgba(0,0,0,0.14)` }}>
              <BadgeIcon size={52} style={{ color: badge.iconColor }} />
            </div>

            <div>
              <h2 className="text-3xl font-black text-card-foreground sm:text-4xl">{badge.label}</h2>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-muted-foreground">{badge.subtitle}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black tabular-nums" style={{ color }}>
                {percentage}
              </span>
              <span className="text-2xl font-bold" style={{ color }}>
                %
              </span>
            </div>
          </div>

          <div className="border-t px-7 py-5">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-muted-foreground">
              <span>
                {score} إجابة صحيحة من {total}
              </span>
              <span style={{ color }}>{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2.5" dir={isRTL} />
          </div>

          <div className="grid grid-cols-3 gap-3 border-t px-6 py-5">
            <ResultStat icon={CheckCircle2} label="صحيحة" value={String(score)} color="var(--success)" bgSoft="rgba(22,163,74,0.07)" />
            <ResultStat icon={XCircle} label="خاطئة" value={String(wrong)} color="var(--danger)" bgSoft="rgba(220,38,38,0.07)" />
            <ResultStat icon={Timer} label="مدة الحل" value={formatDuration(elapsed)} color={color} bgSoft={bgSoft} />
          </div>

          <div className="grid gap-3 border-t px-6 py-6 sm:grid-cols-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setReviewOpen(true)}
              className="btn-luxury h-11 gap-2 rounded-xl font-black sm:col-span-1 cursor-pointer"
              style={{ borderColor: color, color }}
            >
              <BookOpenCheck size={16} />
              مراجعة
            </Button>
            <Button type="button" onClick={onRetry} className="h-11 gap-2 rounded-xl font-black text-white sm:col-span-1 cursor-pointer" style={{ backgroundColor: color }}>
              <RefreshCw size={15} />
              إعادة
            </Button>
          </div>
        </div>
      </motion.section>

      <AnswerReviewDialog
        open={reviewOpen}
        onOpenChange={setReviewOpen}
        color={color}
        bgSoft={bgSoft}
        questions={questions}
        answers={answers}
        score={score}
        total={total}
        elapsed={elapsed}
        subjectLabel={subjectLabel}
        isRTL={isRTL}
      />
    </>
  );
}
