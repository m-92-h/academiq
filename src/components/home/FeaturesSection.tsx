"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, BarChart3, ClipboardList, TimerReset } from "lucide-react";

interface HomeFeature {
  icon: LucideIcon;
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
}

const HOME_FEATURES: HomeFeature[] = [
  {
    icon: ClipboardList,
    title: "مجموعة أسئلة واقعية",
    stat: "60 / 40",
    statLabel: "سؤالاً لكل امتحان",
    desc: "أسئلة مصنّفة تحاكي صيغة الامتحان الوطني الفعلية — 60 سؤالاً للغة العربية، و40 لكل من الحاسوب والإنجليزية.",
  },
  {
    icon: BookOpenCheck,
    title: "مواد مراجعة منظّمة",
    stat: "3",
    statLabel: "مسارات دراسية",
    desc: "دروس مرتّبة لكل مادة، أكمل كل درس بضغطة زر واحدة ودع المنصة تتابع مكانك تلقائيًا.",
  },
  {
    icon: BarChart3,
    title: "سجّل تقدّمك",
    stat: "100%",
    statLabel: "محفوظ على جهازك",
    desc: "رسوم بيانية تُظهر إنجازك لكل مادة على حدة، وسجل كامل بالدروس المكتملة يُحفظ تلقائياً على متصفحك دون الحاجة لحساب.",
  },
  {
    icon: TimerReset,
    title: "محاكاة الامتحان",
    stat: "بيئة",
    statLabel: "مطابقة للواقع",
    desc: "اختبر نفسك في ظروف الامتحان الحقيقية — عدّاد زمني، أسئلة عشوائية، ونتيجة فورية في نهاية الجلسة.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-main text-3xl font-bold tracking-tight sm:text-4xl">كل ما تحتاجه للتحضير</h2>
        <p className="text-muted mt-3">أربع ميزات مصممة لمحاكاة صيغة الامتحان الوطني وتوفير تجربة تحضير واضحة من البداية حتى النتيجة</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HOME_FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group bg-card relative overflow-hidden rounded-2xl border border-border p-6 transition-shadow duration-300 hover:shadow-elegant"
            >
              <span aria-hidden className="bg-accent pointer-events-none absolute -top-8 -inset-e-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-15" />

              <div className="bg-accent-soft text-accent mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>

              <div className="mb-3 flex items-baseline gap-1.5">
                <span className="text-main text-2xl font-bold leading-none tabular-nums">{f.stat}</span>
                <span className="text-muted text-xs">{f.statLabel}</span>
              </div>

              <h3 className="text-main text-base font-semibold">{f.title}</h3>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
