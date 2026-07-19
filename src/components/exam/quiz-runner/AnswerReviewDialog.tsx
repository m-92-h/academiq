"use client";

import { useState } from "react";
import { BookOpenCheck, Download, Loader2, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

import { downloadReviewPdf } from "./downloadReviewPdf";
import { getScorePercentage } from "@/lib/quizUtils";
import { ReviewCard } from "./ReviewCard";
import type { QuizReviewPayload } from "@/types/quiz-runner";

interface AnswerReviewDialogProps extends QuizReviewPayload {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  color: string;
  bgSoft: string;
  isRTL: "rtl" | "ltr";
}

export function AnswerReviewDialog({ open, onOpenChange, color, bgSoft, isRTL, ...payload }: AnswerReviewDialogProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const percentage = getScorePercentage(payload.score, payload.total);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadReviewPdf(payload);
    } catch {
      toast.error("تعذر إنشاء ملف PDF");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="max-h-[88dvh] max-w-[calc(100%-2rem)] gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogHeader className="border-b bg-card px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: bgSoft }}>
              <BookOpenCheck size={19} style={{ color }} />
            </div>
            <div className="min-w-0 flex-1">
              <DialogTitle className="text-base font-black text-card-foreground">مراجعة الإجابات</DialogTitle>
              <DialogDescription className="mt-0.5 text-xs">
                {payload.score} إجابة صحيحة من {payload.total} سؤال
              </DialogDescription>
            </div>
            <Button type="button" variant="outline" size="icon" className="border-0 cursor-pointer" onClick={() => onOpenChange(false)} aria-label="إغلاق مراجعة الإجابات">
              <X size={15} />
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Progress value={percentage} className="h-1.5 flex-1" dir={isRTL} />
            <span className="text-xs font-black tabular-nums" style={{ color }}>
              {percentage}%
            </span>
          </div>
        </DialogHeader>

        <ScrollArea dir="rtl" className="h-[58dvh] bg-card/50">
          <div className="flex flex-col gap-4 px-5 py-4">
            {payload.questions.map((question, index) => (
              <ReviewCard key={question.id} question={question} userAnswer={payload.answers[index] ?? null} index={index} />
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="m-0 rounded-none border-t bg-card px-5 py-4">
          <Button type="button" onClick={handleDownload} disabled={isDownloading} className="h-10 w-full gap-2 rounded-xl font-black text-white cursor-pointer" style={{ backgroundColor: color }}>
            {isDownloading ? <Loader2 className="size-4 animate-spin" /> : <Download size={15} />}
            تنزيل المراجعة PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
