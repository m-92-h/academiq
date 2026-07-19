import type { Metadata } from "next";
import GuideHero from "@/components/guide/GuideHero";
import AdmissionSteps from "@/components/guide/AdmissionSteps";
import Link from "next/link";

export const metadata: Metadata = {
  title: "دليل القبول",
  description: "دليل مبسّط خطوة بخطوة للتقديم على الدراسات العليا في العراق — من تحديد التخصص حتى اجتياز الامتحان الوطني والمباشرة بالدراسة.",
  openGraph: {
    title: "دليل القبول في الدراسات العليا | أكاديميك",
    description: "دليل مبسّط خطوة بخطوة للتقديم على الدراسات العليا في العراق — من تحديد التخصص حتى اجتياز الامتحان الوطني.",
    url: "https://academiq.org/guide",
  },
};

export default function GuidePage() {
  return (
    <main dir="rtl">
      <GuideHero />
      <AdmissionSteps />
      <div className="hero-grid-secondary py-12 px-2 text-center">
        <p className="text-muted-foreground">
          هل لديك استفسار لم تجد إجابته؟{" "}
          <Link href="/guide/faq" className="font-semibold transition-opacity hover:opacity-75" style={{ color: "var(--accent)" }}>
            تصفّح الأسئلة الشائعة
          </Link>{" "}
          للاطلاع على أكثر ما يسأل عنه الطلاب.
        </p>
      </div>
    </main>
  );
}
