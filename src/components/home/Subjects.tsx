import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SUBJECT_ORDER } from "@/types/data";
import { SUBJECTS_MAP, SUBJECTS_META, getSubjectIcon } from "@/data/subjectsMeta";
import { SUBJECT_TW } from "@/lib/subjectStyles";
import { cn } from "@/lib/utils";

const subjectsById = Object.fromEntries(SUBJECTS_META.map((s) => [s.id, s]));

export default function Subjects() {
  return (
    <section id="subjects" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-main text-3xl font-bold sm:text-4xl">استكشف مواد المراجعة</h2>
        <p className="text-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed">كل مادة تحتوي على موضوعات مراجعة مصممة لاجتياز امتحانات الكفاءة الوطنية</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SUBJECT_ORDER.map((id) => {
          const subject = subjectsById[id];
          const Icon = getSubjectIcon(subject.icon);
          const tw = SUBJECT_TW[id];
          const totalTopics = SUBJECTS_MAP[id]?.length ?? 0;

          return (
            <div key={id} className="subject-card group relative flex flex-col gap-5 overflow-hidden p-7">
              <span aria-hidden className={cn("pointer-events-none absolute -top-10 -inset-e-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40", tw.glow)} />

              <div className={cn("transition-base inline-flex h-12 w-12 items-center justify-center rounded-xl group-hover:scale-110", tw.bgSoft, tw.text)}>
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <h3 className="text-main text-lg font-bold">{subject.label}</h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">{subject.homeDescription}</p>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-2">
                <span className="text-muted text-xs">{totalTopics} موضوع</span>
                <Link href={`/courses/${id}`} className={cn("btn-luxury px-3 py-0.5 inline-flex items-center gap-1 text-xs font-semibold", tw.text)}>
                  استكشف
                  <ArrowLeft className={cn("h-3 w-3 transition-transform duration-200 group-hover:-translate-x-1", tw.text)} aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
