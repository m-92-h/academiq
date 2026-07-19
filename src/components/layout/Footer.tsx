"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Copy, Check, CreditCard, BookOpen, ClipboardList, LifeBuoy } from "lucide-react";
import { useState } from "react";

//  Social Icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

// Data
const MASTER_NUMBER = "07XXXXXXXXX"; // ← ضع رقمك هنا

const courses = [
  { href: "/courses/cs", label: "مراجعة الحاسوب" },
  { href: "/courses/arabic", label: " مراجعة اللغة العربية" },
  { href: "/courses/english", label: " مراجعة اللغة الإنجليزية" },
];

const admissionLinks = [
  { href: "/exam", label: "الاختبارات التجريبية" },
  { href: "/guide", label: "دليل قبول الدراسات العليا" },
  { href: "/guide/national-exam", label: "آلية التقديم للامتحان الوطني" },
];

const supportLinks = [
  { href: "/guide/faq", label: "الأسئلة الشائعة" },
  { href: "https://t.me/academiq_iq", label: "مجتمع تلغرام", external: true },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/mohamedh92t/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
    hoverColor: "#0A66C2",
    hoverBg: "rgba(10, 102, 194, 0.1)",
  },
  {
    href: "https://www.instagram.com/mhmt.7273/",
    label: "Instagram",
    Icon: InstagramIcon,
    hoverColor: "#E1306C",
    hoverBg: "rgba(225, 48, 108, 0.1)",
  },
];

// Sub-components
function FooterHeading({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
      {Icon && <Icon size={13} aria-hidden="true" />}
      {children}
    </h4>
  );
}

function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        style={{ color: "var(--text-secondary)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cls}
      style={{ color: "var(--text-secondary)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
    >
      {children}
    </Link>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.9 }}
      className="flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200"
      style={{
        color: copied ? "var(--accent)" : "var(--text-secondary)",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border)",
      }}
      aria-label="نسخ الرقم"
      title="نسخ الرقم"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </motion.button>
  );
}

// Main Footer
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo.svg" alt="شعار أكاديميك" width={28} height={28} />
              <span className="text-xl font-bold leading-none tracking-tight text-card-foreground">أكاديميك</span>
            </div>

            <p className="text-sm leading-relaxed text-justify" style={{ color: "var(--text-secondary)" }}>
              منصة تعليمية تطوعية تهدف إلى توفير مواد مراجعة، اختبارات تجريبية، وأدلة القبول لمساعدة طلاب الدراسات العليا في مسيرتهم العلمية.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, Icon, hoverColor, hoverBg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hoverColor;
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.backgroundColor = hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Courses */}
          <div>
            <FooterHeading icon={BookOpen}>مواد المراجعة</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {courses.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href}>{s.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Admission */}
          <div>
            <FooterHeading icon={ClipboardList}>القبول والامتحانات</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {admissionLinks.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href}>{s.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Support */}
          <div>
            <FooterHeading icon={LifeBuoy}>الموارد والمجتمع</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href} external={s.external}>
                    {s.label}
                  </FooterLink>
                </li>
              ))}
            </ul>

            {/* Mastercard — professional institutional style */}
            <div
              className="mt-6 rounded-xl p-4"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <p className="mb-3 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                ساهم في استمرار المنصة عبر Mastercard:
              </p>
              <div className="flex items-center gap-2" dir="ltr">
                <span
                  className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <CreditCard size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span className="text-sm font-mono tracking-widest" style={{ color: "var(--text-primary)" }}>
                    {MASTER_NUMBER}
                  </span>
                </span>
                <CopyButton text={MASTER_NUMBER} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
          <p>أكاديميك — منصة تعليمية مستقلة، تصميماً وبرمجةً ومحتوىً، من تطوير الأستاذ محمد حسين.</p>
          <p className="mt-1">
            جميع حقوق هذا الموقع محفوظة <span dir="ltr">© 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
