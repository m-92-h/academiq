"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { SubjectId, SUBJECT_ORDER } from "@/types/data";
import { SUBJECTS_META, getSubjectIcon } from "@/data/subjectsMeta";
import { SUBJECT_TW } from "@/lib/subjectStyles";
import { cn } from "@/lib/utils";

const EXAM_CARD_INDEX: Record<SubjectId, string> = {
  arabic: "01",
  cs: "02",
  english: "03",
};

const subjectsById = Object.fromEntries(SUBJECTS_META.map((s) => [s.id, s]));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExamCards() {
  return (
    <section className="bg-soft py-24 hero-grid-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-main mt-2 text-3xl font-bold tracking-tight sm:text-4xl">اختبر نفسك الآن</h2>
          <p className="text-muted mt-3 leading-relaxed">ثلاثة اختبارات تجريبية لقياس مستواك والتحضير لامتحانات الكفاءة الوطنية</p>
        </div>

        <motion.div className="mt-14 grid gap-5 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {SUBJECT_ORDER.map((id) => {
            const subject = subjectsById[id];
            const Icon = getSubjectIcon(subject.icon);
            const tw = SUBJECT_TW[id];

            return (
              <motion.div key={id} variants={cardVariants}>
                <div className="group bg-card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-7 transition-shadow duration-300 hover:shadow-elegant focus-visible:ring-2 focus-visible:outline-none">
                  <div className={cn("pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100", tw.gradientWash)} />

                  <div className="relative mb-6 flex items-start justify-between">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105", tw.iconBg, tw.text)}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>

                    <span className={cn("font-mono text-2xl font-bold leading-none tabular-nums opacity-15 transition-opacity duration-300 group-hover:opacity-30", tw.text)}>
                      {EXAM_CARD_INDEX[id]}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col">
                    <span className={cn("mb-2 text-[11px] font-semibold tracking-wider uppercase", tw.text)}>{subject.examLabel}</span>

                    <h3 className="text-main text-xl font-bold">{subject.label}</h3>
                    <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">{subject.examDescription}</p>

                    <Link href={`/exam/${id}`} className="btn-luxury mt-6 flex items-center gap-1.5 w-fit px-3 py-1" aria-label={`ابدأ امتحان ${subject.label}`}>
                      <span className={cn("text-sm font-semibold transition-all duration-200 group-hover:gap-2", tw.text)}>ابدأ الاختبار التجريبي </span>
                      <ArrowLeft className={cn("h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1", tw.text)} aria-hidden="true" />
                    </Link>
                  </div>

                  <div className={cn("absolute right-0 bottom-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full", tw.bottomLine)} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
