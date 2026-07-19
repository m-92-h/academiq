import { BookOpen, FileText, Globe, Building2, ClipboardCheck, ScrollText, Users, Trophy, GraduationCap, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────────
type Step = {
  number: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  anchor?: string;
  highlight?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  note?: React.ReactNode;
};

// ── Data ───────────────────────────────────────────────────────────────────
const AXIS_COL_WIDTH = 64;

const admissionSteps: Step[] = [
  {
    number: 1,
    icon: BookOpen,
    title: "تحديد التخصص المتطابق",
    subtitle: "المرحلة الأولى",
    description:
      "حدد التخصص الذي يتطابق مع خلفيتك العلمية، إذ يشترط القبول في الدراسات العليا التطابق بين تخصص البكالوريوس والتخصص المراد الدراسة فيه. يمكنك الاستفسار من كليتك أو مراجعة وزارة التعليم العالي والبحث العلمي لمعرفة التخصصات المتطابقة.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "اجتياز اختبار الكفاءة الوطني العراقي",
    subtitle: "المرحلة الثانية",
    description:
      "امتحان الكفاءة الوطني هو الشرط المحوري للقبول في الدراسات العليا، ويُعقد على مستوى العراق بشكل حضوري. يشمل مادة الحاسوب واللغة العربية واللغة الإنجليزية. تعرّف على آلية الحجز والتقديم بالتفصيل في الصفحة المخصصة.",
    anchor: "national-exam",
    highlight: true,
    ctaLabel: "دليل الامتحان الوطني",
    ctaHref: "/guide/national-exam",
  },
  {
    number: 3,
    icon: FileText,
    title: "تجهيز الوثائق والمستندات",
    subtitle: "المرحلة الثالثة",
    description:
      "جمّع المستندات المطلوبة وفق إعلان الوزارة، وتشمل عادةً: وثيقة التخرج من البكالوريوس للمتقدم لدراسة الماجستير، أو وثيقة التخرج من الماجستير للمتقدم للدكتوراه، وكشف بمعدل المتقدم ومعدل الأول على القسم وعدد الدفعة مصدّراً بالجهة المراد التقديم إليها، إضافةً إلى الاستمارات الرسمية كـ٥٠٠ و٥٠١ و٥٠٤ و٥٠٦ وغيرها مما تحدده الجهات الرسمية.",
    note: "تُعلَن قائمة المستندات الرسمية من قبل الوزارة مع كل دورة تقديم.",
  },
  {
    number: 4,
    icon: Globe,
    title: "التقديم الإلكتروني عبر منصة الوزارة",
    subtitle: "المرحلة الرابعة",
    description:
      "عند فتح فترة التقديم، سجّل طلبك إلكترونياً عبر منصة وزارة التعليم العالي والبحث العلمي على الرابط الرسمي. تأكد من رفع جميع المستندات بصيغ صحيحة وأن بياناتك مطابقة تماماً للوثائق الرسمية.",
    note: (
      <>
        الرابط يُفتح فقط خلال فترة التقديم المعلنة:{" "}
        <a
          href="https://pga.mohesr.gov.iq"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          pga.mohesr.gov.iq
        </a>
      </>
    ),
  },
  {
    number: 5,
    icon: Building2,
    title: "التقديم الحضوري في الكلية",
    subtitle: "المرحلة الخامسة",
    description:
      "بعد التقديم الإلكتروني، توجّه حضورياً إلى الكلية التي تقدمت لها لإجراء التدقيق والتحقق من مستنداتك والحصول على ختم التأكيد النهائي. ستُعطى استمارة التقديم المختومة، ثم استعد لأداء الامتحان التنافسي في الموعد الذي تحدده الوزارة.",
  },
  {
    number: 6,
    icon: ScrollText,
    title: "الامتحان التنافسي",
    subtitle: "المرحلة السادسة",
    description:
      "أدِّ الامتحان التنافسي في الموعد المحدد من قبل الوزارة، والاستمارة المختومة شرط أساسي لدخول القاعة. بعد انتهاء الامتحان، استعد لإجراء المقابلة الشخصية التي تُعقد وفق إعلان القسم العلمي وحسب تعليمات الوزارة.",
  },
  {
    number: 7,
    icon: Users,
    title: "المقابلة الشخصية",
    subtitle: "المرحلة السابعة",
    description: "تُجري الأقسام العلمية مقابلة شخصية مع المتقدمين المرشحين للقبول بعد الامتحان التنافسي. يُعلَن موعدها ومكانها عبر الموقع الرسمي للكلية.",
  },
  {
    number: 8,
    icon: Trophy,
    title: "إعلان نتائج القبول",
    subtitle: "المرحلة الثامنة",
    description: "تُعلَن نتائج القبول الأولي والنهائي عبر الموقع الرسمي للكلية والجامعة وفق الأولوية والدرجات. يحق لمن لم يُقبل تقديم اعتراض رسمي خلال الفترة المحددة.",
  },
  {
    number: 9,
    icon: GraduationCap,
    title: "المباشرة والتسجيل النهائي",
    subtitle: "المرحلة التاسعة",
    description: "بعد صدور قرار القبول النهائي، راجع القسم العلمي في الموعد المحدد لاستكمال اجراءات التسجيل وبدأ المباشرة بالدوام. تأكد من موعد بدء الدراسة وأي متطلبات إضافية.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function StepNote({ note }: { note: React.ReactNode }) {
  return (
    <p
      className="mt-3 rounded-lg px-3 py-2 text-xs leading-relaxed"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
        borderRight: "3px solid var(--border)",
      }}
    >
      {note}
    </p>
  );
}

function StepCta({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="btn-luxury px-2 py-0.5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent)" }}>
      {label} <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
    </a>
  );
}

function StepAxisColumn({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon;

  return (
    <div className="relative hidden shrink-0 flex-col items-center sm:flex" style={{ width: AXIS_COL_WIDTH }}>
      <div
        className={cn(
          "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold transition-all duration-200",
          !step.highlight && "group-hover:border-(--accent) group-hover:shadow-md",
        )}
        style={
          step.highlight
            ? {
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--accent)",
                color: "var(--accent)",
                boxShadow: "0 0 0 5px var(--accent-soft)",
              }
            : {
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--accent)",
              }
        }
      >
        {step.number}
        <span className="absolute -bottom-1 -inset-e-1 flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent)" }}>
          <Icon size={11} color="#fff" />
        </span>
      </div>

      {!isLast && (
        <div
          className="mt-2 w-px flex-1"
          style={{
            backgroundColor: step.highlight ? "var(--accent)" : "var(--border)",
            opacity: step.highlight ? 0.35 : 1,
          }}
        />
      )}
    </div>
  );
}

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className={cn("flex-1 pb-8", isLast && "pb-0")} style={{ paddingTop: "22px" }}>
      <div
        className="card-elev hoverable rounded-xl p-5 transition-all duration-200 sm:ms-4"
        style={
          step.highlight
            ? {
                borderColor: "var(--accent)",
                boxShadow: "0 0 0 2px var(--accent), var(--shadow-card)",
              }
            : {}
        }
      >
        <p className="mb-0.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          {step.subtitle}
        </p>

        <h3 className="mb-2 text-base font-bold text-foreground sm:text-lg">{step.title}</h3>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground text-justify">{step.description}</p>

        {step.note && <StepNote note={step.note} />}

        {step.highlight && step.ctaLabel && step.ctaHref && <StepCta label={step.ctaLabel} href={step.ctaHref} />}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function AdmissionSteps() {
  return (
    <section id="admission-steps" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            خطوات القبول
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">مراحل القبول في الدراسات العليا</h2>
          <p className="mt-3 text-muted-foreground">تسع مراحل متسلسلة من التخطيط حتى بدء الدراسة الفعلية</p>
        </div>

        <div className="flex flex-col">
          {admissionSteps.map((step, idx) => (
            <div key={step.number} id={step.anchor} className="group flex items-stretch gap-0">
              <StepAxisColumn step={step} isLast={idx === admissionSteps.length - 1} />
              <StepCard step={step} isLast={idx === admissionSteps.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
