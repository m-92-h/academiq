"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { SUBJECTS_MAP, SUBJECTS_META } from "@/data/subjectsMeta";
import type { SubjectId } from "@/types/data";
import { SUBJECT_TW } from "@/lib/subjectStyles";
import { cn } from "@/lib/utils";

function RadialRing({
  percent,
  subjectId,
  size = 96,
  stroke = 8,
}: {
  percent: number;
  subjectId: SubjectId;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  const tw = SUBJECT_TW[subjectId];

  return (
    <svg width={size} height={size} className={cn("-rotate-90", tw.text)}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        className="text-slate-200 dark:text-slate-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        className="transition-[stroke-dashoffset] duration-700 ease-out"
      />
    </svg>
  );
}

interface SubjectCardProps {
  subjectId: SubjectId;
  label: string;
  description: string;
  href: string;
  completed: number;
  total: number;
}

function SubjectCard({
  subjectId,
  label,
  description,
  href,
  completed,
  total,
}: SubjectCardProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const tw = SUBJECT_TW[subjectId];

  return (
    <div className="group bg-app relative flex flex-col items-center gap-4 rounded-3xl border border-border p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative">
        <RadialRing percent={percent} subjectId={subjectId} size={100} stroke={9} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-xl font-black", tw.text)}>{percent}%</span>
          <span className="text-muted text-[10px] font-bold tracking-wide uppercase">
            مكتمل
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-main text-base font-black">{label}</h3>
        <p className="text-muted mt-1 text-xs leading-relaxed">{description}</p>
      </div>

      <div
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold",
          tw.bgSoft,
          tw.text,
        )}
      >
        {completed} / {total} درس
      </div>

      <Link
        href={href}
        className="btn-luxury flex items-center justify-center gap-1.5 py-1 w-full"
      >
        <span
          className={cn(
            "text-sm font-semibold transition-all duration-200 group-hover:gap-2",
            tw.text,
          )}
        >
          {!percent ? "ابدأ الآن" : percent === 100 ? "مكتمل" : "تابع تقدمك"}
        </span>
        <ArrowLeft
          className={cn(
            "h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1",
            tw.text,
          )}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

function OverallBar({ completed, total }: { completed: number; total: number }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-app rounded-3xl border border-border p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-main text-base font-black">التقدم الإجمالي</h3>
          <p className="text-muted text-xs">عبر جميع المواد</p>
        </div>
        <span className="text-accent text-3xl font-black tabular-nums">{percent}%</span>
      </div>

      <div className="bg-soft h-3 w-full overflow-hidden rounded-full">
        <div
          className="h-full rounded-full bg-linear-to-r from-accent to-indigo-400 transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-muted mt-2 text-xs">
        {completed} من {total} درس مكتمل
      </p>
    </div>
  );
}

function ProgressDashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      {/* Overall bar skeleton */}
      <div className="bg-app rounded-3xl border border-border p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-2">
            <div className="bg-soft h-4 w-32 rounded-full" />
            <div className="bg-soft h-3 w-20 rounded-full" />
          </div>
          <div className="bg-soft h-9 w-16 rounded-xl" />
        </div>
        <div className="bg-soft h-3 w-full rounded-full" />
        <div className="bg-soft mt-2 h-3 w-28 rounded-full" />
      </div>

      {/* Subject cards skeleton */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-app flex flex-col items-center gap-4 rounded-3xl border border-border p-6"
          >
            <div className="bg-soft h-25 w-25 rounded-full" />
            <div className="space-y-2 text-center">
              <div className="bg-soft mx-auto h-4 w-24 rounded-full" />
              <div className="bg-soft mx-auto h-3 w-32 rounded-full" />
            </div>
            <div className="bg-soft h-7 w-24 rounded-lg" />
            <div className="bg-soft h-8 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressDashboardInner() {
  const { subjectProgress, overallProgress } = useProgress();
  const overall = overallProgress(SUBJECTS_MAP);

  return (
    <div className="flex flex-col gap-6">
      <OverallBar completed={overall.completed} total={overall.total} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS_META.map((s) => {
          const { completed, total } = subjectProgress(s.id, SUBJECTS_MAP[s.id] ?? []);
          return (
            <SubjectCard
              key={s.id}
              subjectId={s.id}
              label={s.label}
              description={s.description}
              href={`/courses/${s.id}`}
              completed={completed}
              total={total}
            />
          );
        })}
      </div>
    </div>
  );
}

const ProgressDashboard = dynamic(() => Promise.resolve(ProgressDashboardInner), {
  ssr: false,
  loading: () => <ProgressDashboardSkeleton />,
});

export function ProgressSection() {
  return (
    <section className="bg-soft px-4 pb-20 hero-grid-secondary">
      <div className="mx-auto max-w-5xl pt-12">
        <div className="mb-8 text-center">
          <h2 className="text-main text-2xl font-black sm:text-3xl">تقدّمك الدراسي</h2>
          <p className="text-muted mt-2 text-sm">نظرة شاملة على ما أنجزته في كل مادة</p>
        </div>

        <ProgressDashboard />
      </div>
    </section>
  );
}