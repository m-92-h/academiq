import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SUBJECT_ORDER } from "@/types/data";
import { SUBJECTS_META, getSubjectIcon } from "@/data/subjectsMeta";
import { SUBJECT_TW } from "@/lib/subjectStyles";
import { cn } from "@/lib/utils";

const subjectsById = Object.fromEntries(SUBJECTS_META.map((s) => [s.id, s]));

const FLOAT_DELAYS = ["[animation-delay:0s]", "[animation-delay:0.4s]", "[animation-delay:0.8s]"] as const;

export default function Hero() {
  return (
    <section className="hero-grid bg-soft relative flex min-h-[85vh] items-center justify-center px-4">
      <div className="relative z-10 mx-auto max-w-3xl py-16 text-center">
        <Badge className="gap-2 border border-(--accent-soft) bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
          <GraduationCap className="size-4" />
          الدراسات العليا
        </Badge>

        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">أكاديميك</h1>

        <p className="text-main mt-5 text-base leading-relaxed md:text-lg">مصممة لطلاب الدراسات العليا الساعين لاجتياز امتحانات الكفاءة الوطنية</p>
        <p className="text-muted mt-2 text-sm">منصة تعليمية مستقلة</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/courses" className="btn-primary-luxury group inline-flex items-center gap-2 px-6 py-3 text-background! text-sm">
            ابدأ المراجعة
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
          <Link href="/guide/national-exam" className="btn-luxury group inline-flex items-center gap-2 px-6 py-3 text-sm">
            دليل الامتحان الوطني
          </Link>
        </div>

        <div className="mt-12 hidden flex-wrap items-center justify-center gap-3 md:flex">
          {SUBJECT_ORDER.map((id, i) => {
            const subject = subjectsById[id];
            const Icon = getSubjectIcon(subject.icon);
            const tw = SUBJECT_TW[id];

            return (
              <div
                key={id}
                className={cn(
                  "bg-card text-main flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold shadow-md",
                  "animate-[floaty_4s_ease-in-out_infinite]",
                  FLOAT_DELAYS[i],
                )}
              >
                <Icon size={14} className={tw.text} />
                {subject.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
