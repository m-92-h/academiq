import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  description: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main dir="rtl" className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Error code */}
      <div className="text-9xl font-extrabold mb-4 leading-none" style={{ color: "var(--accent)", opacity: 0.15 }} aria-hidden="true">
        404
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        الصفحة غير موجودة
      </h1>

      {/* Subtext */}
      <p className="text-base max-w-md mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        يبدو أن الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها. تحقق من الرابط أو عد إلى الصفحة الرئيسية.
      </p>

      {/* CTA */}
      <Link href="/" className="btn-primary-luxury group inline-flex items-center gap-2 px-6 py-3 text-background! text-sm">
        العودة إلى الرئيسية
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
      </Link>
    </main>
  );
}
