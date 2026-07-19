"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { SUBJECTS_META, SUBJECTS_MAP } from "@/data/subjectsMeta";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

function SubjectRow({ subject, index }: { subject: (typeof SUBJECTS_META)[number]; index: number }) {
  const { subjectProgress } = useProgress();
  const topicIds = SUBJECTS_MAP[subject.id] ?? [];
  const { completed, total } = subjectProgress(subject.id, topicIds);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const isStarted = completed > 0;
  const isComplete = total > 0 && completed === total;

  const colorVar = `--subject-${subject.id}`;
  const colorSoftVar = `--subject-${subject.id}-soft`;

  const glyphMap: Record<string, string> = {
    arabic: "ض",
    cs: "</>",
    english: "A",
  };
  const glyph = glyphMap[subject.id] ?? subject.id[0].toUpperCase();

  return (
    <div
      className="subject-row group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 rounded-lg"
      style={
        {
          "--row-color": `var(${colorVar})`,
          "--row-soft": `var(${colorSoftVar})`,
        } as React.CSSProperties
      }
    >
      <div className="subject-row-inner relative overflow-hidden rounded-lg bg-card shadow-(--shadow-card) transition-shadow duration-200 group-hover:shadow-(--shadow-card-hover)">
        <div className="absolute inset-y-0 inset-e-0 w-1 rounded-e-(--radius-card)" style={{ backgroundColor: `var(${colorVar})` }} aria-hidden="true" />

        {/* Glyph watermark */}
        <span
          className="pointer-events-none absolute inset-s-0 top-2/5 sm:top-1/2 -translate-y-1/2 select-none font-black leading-none opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
          style={{
            color: `var(${colorVar})`,
            fontSize: "clamp(70px, 11vw, 130px)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          {glyph}
        </span>

        {/* ── Main content ── */}
        <div className="relative z-10 flex items-center gap-5 px-7 py-6 sm:px-9 sm:py-7">
          <div className="hidden shrink-0 text-3xl font-black tabular-nums leading-none opacity-20 sm:block" style={{ color: `var(${colorVar})` }} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h2 className="text-xl font-bold sm:text-2xl" style={{ color: `var(${colorVar})` }}>
                {subject.label}
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{subject.description}</p>

            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <div
                className="h-1.5 w-28 overflow-hidden rounded-full sm:w-36"
                style={{ backgroundColor: `var(${colorSoftVar})` }}
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`تقدم ${subject.label}: ${pct}٪`}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: `var(${colorVar})`,
                  }}
                />
              </div>
              <span className="text-xs font-bold tabular-nums" style={{ color: `var(${colorVar})` }}>
                {pct}٪
              </span>
              <span className="text-xs text-muted-foreground">
                {completed}/{total} موضوع
              </span>
            </div>
            <Link
              href={`/courses/${subject.id}`}
              className="btn-luxury text-sm py-0.5 mt-2 font-semibold flex items-center justify-center gap-1.5 sm:hidden"
              style={{ color: `var(${colorVar})` }}
              aria-label={`انتقل إلى ${subject.label}`}
            >
              {isComplete ? "مكتمل" : isStarted ? "تابع التقدم" : "ابدأ الآن"}
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          {/* CTA */}
          <Link href={`/courses/${subject.id}`} className="hidden shrink-0 flex-col items-center gap-1.5 sm:flex" aria-label={`انتقل إلى ${subject.label}`}>
            <span className="text-sm font-semibold" style={{ color: `var(${colorVar})` }}>
              {isComplete ? "مكتمل" : isStarted ? "تابع التقدم" : "ابدأ الآن"}
            </span>
            <div
              className="flex size-9 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
              style={{
                backgroundColor: `var(${colorSoftVar})`,
                color: `var(${colorVar})`,
              }}
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
            </div>
          </Link>
        </div>

        {/* Hover overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ backgroundColor: `var(${colorSoftVar})` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

// ── SubjectsGrid ──────────────────────────────────────────────────────────────
export default function SubjectsGrid() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">مواد الامتحان الوطني</span>
        <span className="text-xs text-muted-foreground">{SUBJECTS_META.length} مواد</span>
      </div>

      <div className="flex flex-col gap-3">
        {SUBJECTS_META.map((subject, i) => (
          <SubjectRow key={subject.id} subject={subject} index={i} />
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">يُحفظ تقدمك تلقائياً — استأنف من حيث توقفت في أي وقت.</p>

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
    </section>
  );
}
