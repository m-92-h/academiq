import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const highlights = ["تسع مراحل واضحة ومرتبة", "شرح مبسّط لكل مرحلة", "دليل الامتحان الوطني"];

export default function GuideHero() {
  return (
    <section className="relative overflow-hidden flex min-h-[90vh] items-center justify-center pb-20 pt-16">
      {/* Grid background */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />

      {/* Gradient accent blob */}
      <div className="pointer-events-none absolute -top-32 right-1/2 h-125 w-125 translate-x-1/2 rounded-full opacity-10 blur-3xl" style={{ background: "var(--accent)" }} />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <Badge
            className="gap-2 px-4 py-1.5 text-sm font-medium"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid var(--accent-soft)",
            }}
          >
            <GraduationCap className="size-4" />
            دليل قبول الدراسات العليا
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          خطوات التقديم
          <span style={{ color: "var(--accent)" }}> للدراسات العليا </span>
        </h1>

        {/* Sub-heading */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          دليل مبسّط يشرح مراحل التقديم للدراسات العليا في العراق — من تحديد التخصص حتى المباشرة بالدراسة، مع شرح آلية حجز الامتحان الوطني والتقديم عليه.
        </p>

        {/* Highlights */}
        <div className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {highlights.map((highlight) => (
            <span key={highlight} className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <CheckCircle2 className="size-4 shrink-0" style={{ color: "var(--accent)" }} />
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
