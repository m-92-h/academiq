"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Monitor, Feather, BookOpen, Clock, ListChecks, Zap, Brain, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SUBJECTS_META, type SubjectMeta } from "@/data/subjectsMeta";

const EXAM_CONFIG: Record<string, { questions: number; duration: number }> = {
  cs: { questions: 40, duration: 60 },
  arabic: { questions: 60, duration: 60 },
  english: { questions: 40, duration: 60 },
};

const ICON_MAP: Record<SubjectMeta["icon"], React.ElementType> = {
  Monitor,
  Feather,
  BookOpen,
};

function StatChip({ icon: Icon, label, colorVar, softVar }: { icon: React.ElementType; label: string; colorVar: string; softVar: string }) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-bold"
      style={{
        backgroundColor: `var(${softVar})`,
        color: `var(${colorVar})`,
      }}
    >
      <Icon size={12} />
      {label}
    </div>
  );
}

function ExamCard({ subject, index }: { subject: SubjectMeta; index: number }) {
  const Icon = ICON_MAP[subject.icon];
  const config = EXAM_CONFIG[subject.id];

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}>
      <div
        className={cn("group relative flex flex-col h-full overflow-hidden rounded-md border", "transition-all duration-300 hover:-translate-y-1")}
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
        }}
      >
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(to right, ${subject.color}, ${subject.color}99)`,
          }}
        />

        {/* Card body */}
        <div className="flex flex-col h-full gap-0 p-5">
          <div className="flex items-start justify-between">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shrink-0"
              style={{ backgroundColor: `var(${subject.colorSoftVar})` }}
            >
              <Icon size={22} style={{ color: `var(${subject.colorVar})` }} />
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-end mt-4">
            <h2 className="text-lg font-black leading-snug line-clamp-1" style={{ color: `var(${subject.colorVar})` }}>
              {subject.label}
            </h2>
            <p className="mt-1 text-xs text-main font-semibold leading-relaxed line-clamp-2 min-h-10">{subject.description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            <StatChip icon={ListChecks} label={`${config.questions} سؤال`} colorVar={subject.colorVar} softVar={subject.colorSoftVar} />
            <StatChip icon={Clock} label={`${config.duration} دقيقة`} colorVar={subject.colorVar} softVar={subject.colorSoftVar} />
          </div>

          <Link href={`/exam/${subject.id}`}>
            <button
              className={`btn-luxury mt-6 flex w-full items-center justify-center gap-2 py-2 text-sm font-black shrink-0 cursor-pointer`}
              style={{
                color: `${subject.color}`,
              }}
              aria-hidden
            >
              <Zap size={14} />
              ابدأ الاختبار التجريبي
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main ExamHub ─────────────────────────────────────────────────────────────
export function ExamHub() {
  return (
    <div className="hero-grid-secondary min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <motion.header className="mb-12 text-center" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Badge
            className="mb-3 gap-2 px-4 py-1.5 text-sm font-medium"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid var(--accent-soft)",
            }}
          >
            <Brain className="size-4" />
            مركز الاختبارات
          </Badge>

          <h1 className="text-3xl font-black leading-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            اختبر معلوماتك وابدأ التجربة
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-secondary)" }}>
            أسئلة تحاكي الامتحان الوطني الفعلي — يمكنك إعادة الاختبار في أي وقت، مع عرض فوري للنتيجة ومراجعة كاملة للإجابات.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {SUBJECTS_META.map((subject, i) => (
            <ExamCard key={subject.id} subject={subject} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          للاطلاع على درجات الاجتياز المطلوبة —{" "}
          <a href="/guide/national-exam#passing-scores" className="underline! underline-offset-2! text-primary!">
            راجع دليل الامتحان الوطني
          </a>
        </p>

        <div dir="rtl" className={cn("flex gap-3 items-start my-12!", "rounded-xl border border-amber-200 dark:border-amber-800/60", "bg-amber-50 dark:bg-amber-900/20", "px-4 py-3.5")}>
          <AlertTriangle className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" size={18} />
          <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300">
            <span className="font-bold">تنبيه: </span>
            المحتوى التعليمي والاختبارات المقدّمة في هذا الموقع من إعداد{" "}
            <Link href="https://www.instagram.com/mhmt.7273" target="_blank" rel="noopener noreferrer" className="text-blue-600! underline! underline-offset-2! mx-1 font-semibold">
              الأستاذ محمد حسين
            </Link>{" "}
            بشكل مستقل — شارك الموقع مع زملائك لتعم الفائدة.
          </p>
        </div>
      </div>
    </div>
  );
}
