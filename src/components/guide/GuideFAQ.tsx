"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, FileText, BookOpen, Sparkles, ChevronDown, HelpCircle, ArrowLeft } from "lucide-react";

//  Types
type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
};

type FAQItem = {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
};

//  Data
const categories: Category[] = [
  { id: "all", label: "الكل", icon: HelpCircle, color: "var(--accent)" },
  { id: "eligibility", label: "الأهلية", icon: GraduationCap, color: "var(--subject-arabic)" },
  { id: "exam", label: "الامتحان", icon: FileText, color: "var(--subject-cs)" },
  { id: "admission", label: "القبول", icon: BookOpen, color: "var(--subject-english)" },
  { id: "platform", label: "المنصة", icon: Sparkles, color: "var(--accent)" },
];

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    categoryId: "eligibility",
    question: "كيف أقدم على دراسة الماجستير في العراق؟",
    answer:
      "يتم التقديم عبر بوابة التقديم للدراسات العليا الإلكترونية لجامعات العراق كافة، ما عدا كلية الذكاء الاصطناعي والمعهد العالي للدراسات المالية والمحاسبية — فتقديمهما عبر موقع جامعة بغداد. إذا لم يكن لديك حساب، أنشئ حساباً جديداً ببريدك الشخصي.",
  },
  {
    id: "faq-2",
    categoryId: "eligibility",
    question: "اسئلة المقابلة الشخصية لدراسة الماجستير؟",
    answer: "أسئلة تركز على أسباب اختيارك للبرنامج، أهدافك المهنية، خبراتك السابقة، وتصورك المبدئي لمشروع بحثك.",
  },
  {
    id: "faq-3",
    categoryId: "eligibility",
    question: "هل تستغرق درجة الماجستير سنة واحدة أم سنتين؟",
    answer: "تستغرق دراسة الماجستير عادةً عامين ، لكن المدة قد تختلف من شخص لآخر. وبحسب برنامج دراستك وما إذا كنت تدرس بدوام كامل أو جزئي، فقد تستغرق مدة أقصر أو أطول للحصول على شهادة الماجستير.",
  },
  {
    id: "faq-4",
    categoryId: "eligibility",
    question: "ماذا يسمى حامل شهادة الماجستير؟",
    answer: "يطلق على حامل شهادة الماجستير أكاديمياً لقب باحث أو طالب دراسات عليا.",
  },
  {
    id: "faq-5",
    categoryId: "exam",
    question: "ما هي مادة الامتحان الوطني وكيف تكون صعوبته؟",
    answer: "يتكون الامتحان الوطني من ثلاث اختبارات (اللغة العربية، اللغة الانجليزية، الحاسوب). مستوى الصعوبة يعتمد على التخصص، وعموماً توجد في منصة أكاديميك اختبارات تجريبية تساعدك على الاستعداد.",
  },
  {
    id: "faq-6",
    categoryId: "exam",
    question: "كم تبلغ مدة الاختبار، وكم عدد الاسئلة؟",
    answer: "مدة الاختبار 60 دقيقة. عدد الأسئلة: 40 سؤالاً لكل من اللغة الإنجليزية والحاسوب، و60 سؤالاً للغة العربية.",
  },
  {
    id: "faq-7",
    categoryId: "exam",
    question: "ماذا لو رسبت في الامتحان الوطني؟",
    answer: "يحق لك إعادة التقديم. لا يوجد حد أقصى لعدد المحاولات، لكن يُفضل التحضير الجيد قبل إعادة التقديم. ننصح بالاستفادة من اختبارات أكاديميك لتحديد نقاط الضعف وتعزيزها.",
  },
  {
    id: "faq-8",
    categoryId: "exam",
    question: "ما هي رسوم امتحان الكفاءة الوطنية؟",
    answer: "رسوم المحاولة الأولى 30,000 دينار، وما بعدها 20,000 دينار لكل محاولة.",
  },
  {
    id: "faq-9",
    categoryId: "exam",
    question: "ما هي متطلبات اللغة الإنجليزية للتقديم على الدراسات العليا؟",
    answer: "يُشترط اجتياز الاختبار الوطني الموحد للغة الإنجليزية داخل العراق (INELT)، أو تقديم شهادة دولية معتمدة مثل IELTS أو TOEFL بالدرجات المطلوبة.",
  },
  {
    id: "faq-10",
    categoryId: "exam",
    question: "ما هو الامتحان التنافسي؟",
    answer: "هو امتحان وزاري موحد أو محلي تجريه الجامعات، يشمل المناهج الأساسية لتخصص البكالوريوس، ويمثل نسبة 30% من معدل المفاضلة التنافسي للقبول.",
  },
  {
    id: "faq-11",
    categoryId: "admission",
    question: "هل يوجد شرط للعمر وسنوات الخدمة؟",
    answer: "نعم، غالباً ما يُشترط أن لا يزيد عمر المتقدم للماجستير عن (45) سنة.",
  },
  {
    id: "faq-12",
    categoryId: "admission",
    question: "هل الدراسة في الدراسات العليا مدفوعة أم مجانية؟",
    answer: "تنقسم المقاعد إلى قسمين: مقاعد حكومية مجانية، ومقاعد موازية برسوم دراسية تحددها كل جامعة. تُعلَن نسبة توزيع المقاعد ضمن تعليمات القبول السنوية.",
  },
  {
    id: "faq-13",
    categoryId: "admission",
    question: "ما هي طبيعة القبول في النفقة الخاصة؟",
    answer: "هو نظام مدفوع التكاليف (موازي)، وتكون المنافسة فيه مستقلة عن مقاعد القبول العام (النفقة العامة).",
  },
  {
    id: "faq-14",
    categoryId: "platform",
    question: "كيف تساعدني منصة أكاديميك في الاستعداد للامتحان؟",
    answer: "توفر أكاديميك مجموعة اختبارات تجريبية مصنّفة حسب المادة، إلى جانب مواد مراجعة تغطي المحاور الأساسية للامتحان الوطني. يمكنك تتبع تقدمك وتحديد النقاط التي تحتاج إلى تعزيز.",
  },
  {
    id: "faq-15",
    categoryId: "platform",
    question: "هل المنصة مدفوعة؟",
    answer: "كلا، المنصة مجانية بالكامل ولا تتطلب أي اشتراك.",
  },
  {
    id: "faq-16",
    categoryId: "platform",
    question: "هل يمكنني إعادة الاختبار أكثر من مرة؟",
    answer: "نعم، يمكنك إعادة الاختبار في أي وقت وبدون حد للمحاولات.",
  },
  {
    id: "faq-17",
    categoryId: "platform",
    question: "بماذا تتميز منصة أكاديميك؟",
    answer:
      "أكاديميك مجانية بالكامل، وتجمع بين مواد المراجعة والاختبارات التجريبية ودليل الامتحان الوطني الذي يشرح آلية الحجز والتقديم الإلكتروني خطوة بخطوة — دون الحاجة للاستعانة بأحد أو دفع أي رسوم.",
  },
];

//  Single FAQ card with animated expand
function FAQCard({ item, index, accentColor }: { item: FAQItem; index: number; accentColor: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }} layout>
      <div
        className="card-elev group relative overflow-hidden cursor-pointer select-none"
        onClick={() => setOpen((v) => !v)}
        role="button"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen((v) => !v)}
      >
        {/* Accent sidebar — animates in when open */}
        <motion.div
          className="absolute inset-y-0 inset-e-0 w-1 rounded-s-full"
          style={{ backgroundColor: accentColor }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={open ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Question row */}
        <div className="flex items-center gap-4 px-5 py-4">
          {/* Index badge */}
          <span
            className="hidden shrink-0 items-center justify-center rounded-lg text-xs font-bold tabular-nums sm:flex size-8"
            style={{
              backgroundColor: open ? accentColor : "var(--bg-secondary)",
              color: open ? "#fff" : "var(--text-secondary)",
              transition: "background-color 200ms ease, color 200ms ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="flex-1 text-right text-sm font-semibold leading-snug sm:text-base" style={{ color: "var(--text-primary)" }}>
            {item.question}
          </p>

          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="shrink-0">
            <ChevronDown className="size-5 transition-colors" style={{ color: open ? accentColor : "var(--text-secondary)" }} />
          </motion.div>
        </div>

        {/* Answer — AnimatePresence for smooth unmount */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className="border-t px-5 pb-5 pt-4 text-sm leading-loose sm:pe-16"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Category filter pill
function CategoryPill({ category, active, count, onClick }: { category: Category; active: boolean; count: number; onClick: () => void }) {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
      style={{
        backgroundColor: active ? category.color : "var(--bg-card)",
        color: active ? "#fff" : "var(--text-secondary)",
        border: `1.5px solid ${active ? category.color : "var(--border)"}`,
        boxShadow: active ? `0 4px 14px ${category.color}33` : "var(--shadow-card)",
      }}
    >
      <Icon className="size-4 shrink-0" />
      <span>{category.label}</span>
      <span
        className="rounded-full px-1.5 py-0.5 text-xs font-bold tabular-nums"
        style={{
          backgroundColor: active ? "rgba(255,255,255,0.25)" : "var(--bg-secondary)",
          color: active ? "#fff" : "var(--text-secondary)",
        }}
      >
        {count}
      </span>
    </button>
  );
}

//  Main component
export default function GuideFAQ() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? faqs : faqs.filter((f) => f.categoryId === activeCategory);

  const getCategoryColor = (categoryId: string) => categories.find((c) => c.id === categoryId)?.color ?? "var(--accent)";

  const getCount = (categoryId: string) => (categoryId === "all" ? faqs.length : faqs.filter((f) => f.categoryId === categoryId).length);

  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Subtle grid backdrop */}
      <div className="hero-grid-secondary pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-4">
        {/* ── Header ── */}
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
          {/* Icon badge */}
          <div className="mb-5 flex justify-center">
            <div
              className="relative flex size-16 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "var(--accent-soft)",
                border: "1.5px solid var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <HelpCircle className="size-8" style={{ color: "var(--accent)" }} />
            </div>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            الأسئلة الشائعة
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
            أجوبة على الأسئلة الأكثر تكراراً حول القبول في الدراسات العليا
          </p>
        </motion.div>

        {/* ── Category filters ── */}
        <motion.div className="mb-8 flex flex-wrap justify-center gap-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}>
          {categories.map((cat) => (
            <CategoryPill key={cat.id} category={cat} active={activeCategory === cat.id} count={getCount(cat.id)} onClick={() => setActiveCategory(cat.id)} />
          ))}
        </motion.div>

        {/* ── FAQ list ── */}
        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq, i) => (
              <FAQCard key={faq.id} item={faq} index={i} accentColor={getCategoryColor(faq.categoryId)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div className="mt-10 flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            لم تجد إجابتك؟
          </p>
          <a href="https://t.me/academiq_iq" target="_blank" rel="noopener noreferrer" className="btn-luxury group inline-flex items-center gap-2 px-6 py-2.5 text-sm">
            <span>تواصل معنا</span>
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
