"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const mainLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/courses", label: "المراجعة" },
    { to: "/exam/", label: "الاختبارات" },
    { to: "/guide", label: "دليل قبول الدراسات العليا" },
  ] as const;

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md"
      style={{
        height: 64,
        backgroundColor: "color-mix(in oklab, var(--bg-primary) 85%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-85">
          <Image src="/images/icons/logo.svg" className="rounded-[21.875%]" alt="شعار أكاديميك" width={24} height={24} priority />
          <span className="text-[17px] font-bold leading-none tracking-tight text-card-foreground">أكاديميك</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainLinks.map((link) => (
            <Link key={link.to} href={link.to} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === link.to ? "text-(--accent)" : "text-muted hover:text-main"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="toggle_theme"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md border border-app bg-card text-main hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-main">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-transparent cursor-pointer" onClick={() => setOpen(false)} aria-hidden="true" />{" "}
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-16 z-50 md:hidden"
              style={{
                backgroundColor: "color-mix(in oklab, var(--bg-card) 98%, transparent)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--border)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.to}
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === link.to ? "text-(--accent)" : "text-muted hover:text-main"}`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <button
                    onClick={toggleTheme}
                    className="flex w-full h-10 items-center justify-center gap-2 rounded-md border border-app bg-card text-sm font-medium text-main transition-colors hover:bg-muted"
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
