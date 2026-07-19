import type { LucideIcon } from "lucide-react";
import { BookOpen, Brain, Layers } from "lucide-react";

export interface LearningStep {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const LEARNING_STEPS: LearningStep[] = [
  {
    n: 1,
    icon: Layers,
    title: "اختر مادة",
    desc: "ثلاث مواد إلزامية في الامتحان الوطني، ابدأ بأيها تشاء.",
  },
  {
    n: 2,
    icon: BookOpen,
    title: "راجع المواضيع",
    desc: "اقرأ شرحاً عميقاً مع نقاط جوهرية.",
  },
  {
    n: 3,
    icon: Brain,
    title: "اختبر نفسك",
    desc: " 40/60 سؤالاً متعدد الخيارات بمستوى الدراسات العليا.",
  },
];

export default function LearningSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-main text-3xl font-bold">كيف تبدأ؟</h2>
        <p className="text-muted mt-3 text-sm">ثلاث خطوات بسيطة للوصول إلى أفضل تحضير</p>
      </div>

      <div className="relative grid gap-8 md:grid-cols-3">
        <div aria-hidden className="absolute top-8 inset-x-[16%] hidden border-t border-dashed border-border md:block" />

        {LEARNING_STEPS.map(({ n, icon: Icon, title, desc }) => (
          <div key={n} className="relative flex flex-col items-center text-center">
            <div className="bg-card text-accent relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent text-xl font-bold">
              {n}
              <span className="bg-accent absolute -bottom-1 -inset-e-1 flex h-7 w-7 items-center justify-center rounded-full text-white">
                <Icon size={14} />
              </span>
            </div>
            <h3 className="text-main mt-5 text-lg font-bold">{title}</h3>
            <p className="text-muted mt-2 max-w-xs text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
