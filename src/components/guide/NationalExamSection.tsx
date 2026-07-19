"use client";

import { useState } from "react";
import { CheckCircle2, Clock, MapPin, AlertCircle, LayoutGrid, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type ExamStep = {
  id: number;
  title: string;
  description: string;
  tips?: string[];
  imageAlt: string;
  imageSrc?: string;
};

const examSteps: ExamStep[] = [
  {
    id: 1,
    title: "الدخول إلى البوابة الإلكترونية لوزارة التعليم العالي",
    description: "افتح متصفحك وانتقل إلى الموقع الرسمي لوزارة التعليم العالي والبحث العلمي عبر الرابط أعلاه. من هنا تبدأ رحلة التقديم للامتحان الوطني.",
    imageAlt: "الموقع الرسمي لوزارة التعليم العالي",
  },
  {
    id: 2,
    title: "إنشاء حساب جديد أو تسجيل الدخول",
    description:
      "إذا كانت هذه أول مرة تسجل فيها، انقر على «إنشاء حساب» وأدخل بياناتك الشخصية كاملة (الاسم الرباعي، رقم الهوية او البطاقة الموحدة، رقم الهاتف، البريد الإلكتروني). إذا كان لديك حساب مسبق، سجّل دخولك مباشرة.",
    tips: ["استخدم بريدًا إلكترونيًا نشطًا لاستقبال رسائل التأكيد", "احتفظ ببيانات دخولك في مكان آمن"],
    imageAlt: "شاشة تسجيل الدخول وإنشاء الحساب",
    imageSrc: "/images/exam-guide/step-2-login.png",
  },
  {
    id: 3,
    title: "بدء الحجز الإلكتروني",
    description:
      "بعد تسجيل الدخول مباشرةً، يظهر عداد تنازلي من 10 إلى صفر. عند انتهائه يظهر زر «بدء الحجز»؛ اضغط عليه لتحديد نوع الاختبار والمحافظة والمركز والموعد المناسب. تنشر الوزارة جدول الاختبارات مسبقًا، لذا تابع الإعلانات الرسمية لمعرفة المواعيد المتاحة.",
    tips: ["اختر مركزًا قريبًا من محل إقامتك لتفادي تعقيدات السفر", "المواعيد تُملأ بسرعة — تابع فتح البوابة فور إعلانها"],
    imageAlt: "شاشة العداد التنازلي وبدء الحجز",
    imageSrc: "/images/exam-guide/step-3-booking.png",
  },
  {
    id: 4,
    title: "دفع رسوم التسجيل",
    description: "بعد إتمام الحجز الإلكتروني، توجّه إلى مركز الاختبار المحدد لدفع رسوم التسجيل. انتبه: يحق للمركز إلغاء حجزك تلقائيًا إذا لم تُسدَّد الرسوم خلال 48 ساعة من تأكيد الحجز.",
    tips: ["احرص على الذهاب خلال 48 ساعة من الحجز لتفادي الإلغاء", "احتفظ بإيصال الدفع — ستحتاجه للمراجعة"],
    imageAlt: "مركز دفع رسوم الاختبار",
    imageSrc: "/images/exam-guide/step-4-payment.png",
  },
  {
    id: 5,
    title: "استلام الشهادة وتنزيلها",
    description: "بعد إجراء الاختبار وصدور النتائج، تظهر شهادة الاجتياز في قسم «الشهادات» داخل حسابك على البوابة. من هذا القسم يمكنك تنزيل الشهادة وطباعتها بصيغة PDF رسمية معتمدة.",
    tips: ["تأكد من صحة بياناتك في الشهادة فور ظهورها", "احتفظ بنسخة رقمية وورقية من الشهادة"],
    imageAlt: "قسم الشهادات وتنزيل شهادة الاجتياز",
    imageSrc: "/images/exam-guide/step-5-certificate.png",
  },
];

const importantNotes = [
  { icon: Clock, text: "يُغلق تأكيد الحجز قبل ساعة من بدء الاختبار — قد يُلغى الحجز بعد 48 ساعة إذا لم تُسدَّد الرسوم" },
  { icon: MapPin, text: "الاختبار يُعقد في مراكز محددة في جميع المحافظات العراقية" },
  { icon: AlertCircle, text: "الهوية الوطنية أو جواز السفر مطلوبان عند التأكيد وحضور الاختبار" },
];

// Step 1: Ministry Portal SVG card (no image)
function MinistryPortalCard() {
  return (
    <Link href="https://inpt.rdd.edu.iq/" target="_blank" rel="noopener noreferrer" className="group block w-full">
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-lg border transition-colors duration-200"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border)",
          borderStyle: "dashed",
        }}
      >
        <Image
          src="/images/exam-guide/step-1-logo.png"
          alt="شعار وزارة التعليم العالي والبحث العلمي"
          width={112}
          height={112}
          className="w-28 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
        />

        <div className="text-center">
          <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
            وزارة التعليم العالي والبحث العلمي
          </p>
          <p className="mt-1 font-mono text-xs tracking-wide group-hover:underline" style={{ color: "var(--accent)" }} dir="ltr">
            inpt.rdd.edu.iq
            <ExternalLink className="mr-1 inline size-3" />
          </p>
        </div>
      </div>
    </Link>
  );
}

// Steps 2-5: image from /public with fallback
function StepImage({ alt, imageSrc, stepId }: { alt: string; imageSrc: string; stepId: number }) {
  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", borderStyle: "dashed" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent-soft)" }}>
          <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>
            {stepId}
          </span>
        </div>
        <p className="max-w-50 text-xs" style={{ color: "var(--text-secondary)" }}>
          {alt}
        </p>
      </div>
      <Image src={imageSrc} alt={alt} fill sizes="(max-width: 768px) 100vw, 60vw" />
    </div>
  );
}

export default function NationalExamSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = examSteps[activeStep];

  return (
    <section id="national-exam" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Link href="/guide" className="inline-flex items-center gap-1 text-xs font-bold text-white/80 hover:text-white transition-colors">
              <LayoutGrid className="h-3.5 w-3.5" />
              دليل قبول الدراسات العليا
            </Link>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">دليل الامتحان الوطني</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">آلية الحجز والتقديم لامتحان الكفاءة الوطنية خطوة بخطوة</p>
          </div>
        </div>

        {/* Important notes */}
        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          {importantNotes.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-2.5 rounded-xl p-4" style={{ backgroundColor: "var(--accent-soft)", border: "1px solid var(--accent-soft)" }}>
              <Icon className="mt-0.5 size-4 shrink-0" style={{ color: "var(--accent)" }} />
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Main content: Steps navigator + Detail */}
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Steps list (sidebar navigator) */}
          <nav className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {examSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={cn("flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-right transition-all duration-200 lg:w-full", "cursor-pointer")}
                style={
                  activeStep === idx
                    ? { backgroundColor: "var(--accent)", borderColor: "var(--accent)", color: "#fff" }
                    : { backgroundColor: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-primary)" }
                }
              >
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={activeStep === idx ? { backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" } : { backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {step.id}
                </span>
                <span className="hidden text-sm font-medium lg:block">{step.title}</span>
                <span className="text-xs font-medium lg:hidden">خطوة {step.id}</span>
              </button>
            ))}
          </nav>

          {/* Step detail card */}
          <div className="card-elev rounded-2xl p-6 sm:p-8">
            {/* Step header */}
            <div className="mb-6 flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" style={{ backgroundColor: "var(--accent)" }}>
                {currentStep.id}
              </span>
              <div>
                <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  الخطوة {currentStep.id} من {examSteps.length}
                </p>
                <h3 className="text-xl font-bold text-foreground">{currentStep.title}</h3>
              </div>
            </div>

            {/* Visual area */}
            <div className="mb-6">{currentStep.imageSrc === undefined ? <MinistryPortalCard /> : <StepImage imageSrc={currentStep.imageSrc} alt={currentStep.imageAlt} stepId={currentStep.id} />}</div>

            {/* Description */}
            <p className="mb-5 leading-relaxed text-muted-foreground">{currentStep.description}</p>

            {/* Tips */}
            {currentStep.tips && currentStep.tips.length > 0 && (
              <div className="rounded-xl p-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  <CheckCircle2 className="size-4" style={{ color: "var(--success)" }} />
                  نصائح مهمة
                </p>
                <ul className="flex flex-col gap-1.5">
                  {currentStep.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-6 flex items-center justify-between border-t pt-5" style={{ borderColor: "var(--border)" }}>
              <Button variant="outline" size="sm" disabled={activeStep === 0} onClick={() => setActiveStep((p) => p - 1)} className="gap-1.5 cursor-pointer">
                <ArrowRight /> السابق
              </Button>

              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {activeStep + 1} / {examSteps.length}
              </span>

              <Button
                size="sm"
                disabled={activeStep === examSteps.length - 1}
                onClick={() => setActiveStep((p) => p + 1)}
                className="gap-1.5 cursor-pointer"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                التالي <ArrowLeft />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
