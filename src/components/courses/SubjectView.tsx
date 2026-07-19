"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LayoutGrid, Trophy, Award, CheckCircle, Circle, ChevronLeft, BookOpen, Monitor, Feather, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { SUBJECTS_META, SUBJECTS_MAP } from "@/data/subjectsMeta";
import { getSubjectTopics } from "@/data/subjects";

// Constants
const TOPICS_PER_PAGE = 5;

// Subject icon resolver
function SubjectIcon({ icon, className }: { icon: "Monitor" | "Feather" | "BookOpen"; className?: string }) {
  if (icon === "Monitor") return <Monitor className={className} />;
  if (icon === "Feather") return <Feather className={className} />;
  return <BookOpen className={className} />;
}

// Mini radial progress ring
function MiniRing({ percent, color }: { percent: number; color: string }) {
  const size = 48;
  const stroke = 4;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <div className="relative shrink-0">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-slate-200 dark:text-slate-700" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[9px] font-black" style={{ color }}>
          {percent}%
        </span>
      </div>
    </div>
  );
}

//  Pagination builder
function buildPages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) pages.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

//  Main component ─
export function SubjectView({ subjectId }: { subjectId: string }) {
  const { isComplete, toggleComplete, subjectProgress } = useProgress();

  // Search & pagination state
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const meta = SUBJECTS_META.find((s) => s.id === subjectId);
  const topics = getSubjectTopics(subjectId);
  const topicIds = SUBJECTS_MAP[subjectId as keyof typeof SUBJECTS_MAP] ?? topics.map((t) => t.id);
  const { completed, total } = subjectProgress(subjectId, topicIds);
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  // Resolved values — fall back gracefully if meta is missing
  const color = meta?.color ?? "#4f46e5";
  const bgSoft = meta?.bgSoft ?? "rgba(79,70,229,0.1)";
  const gradient = meta?.gradient ?? "from-indigo-600 to-violet-700";
  const label = meta?.label ?? subjectId;
  const icon = meta?.icon ?? "BookOpen";

  // ── Filter topics by search query ──
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter((t) => t.title.toLowerCase().includes(q) || t.subtitle?.toLowerCase().includes(q));
  }, [topics, searchQuery]);

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / TOPICS_PER_PAGE));

  // Reset to page 1 whenever the search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const paginatedTopics = useMemo(() => {
    const start = (currentPage - 1) * TOPICS_PER_PAGE;
    return filteredTopics.slice(start, start + TOPICS_PER_PAGE);
  }, [filteredTopics, currentPage]);

  const pageNumbers = buildPages(currentPage, totalPages);

  // Original index in the full topics array (for "درس N" label)
  const getOriginalIndex = (topicId: string) => topics.findIndex((t) => t.id === topicId);

  return (
    <div className="space-y-8 animate-fade-in mb-16">
      {/* ── Hero ── */}
      <section className={cn("relative overflow-hidden bg-linear-to-br p-6 sm:p-10 shadow-lg text-white", gradient)}>
        <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div className="space-y-4">
            <Link href="/courses" className="inline-flex items-center gap-1 text-xs font-bold text-white/80 hover:text-white transition-colors">
              <LayoutGrid className="h-3.5 w-3.5" />
              مواد المراجعة
            </Link>

            <div className="flex items-center gap-3">
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                <SubjectIcon icon={icon} className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl text-white!">{label}</h1>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{meta?.description ?? "استعد للامتحان بشكل منظم ومتكامل"}</p>
          </div>

          <div className="shrink-0 flex flex-col gap-4 min-w-50 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 hover:bg-white/15 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-80">
              <Trophy className="h-4 w-4 text-amber-300" />
              التقدم في المادة
            </div>

            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="text-2xl font-black">{percent}%</span>
                <span className="text-xs opacity-80">
                  {completed} من {total}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-1.5 text-xs opacity-70">{total - completed} درس متبقٍ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Topic list ── */}
      <section className="space-y-5 px-4 sm:px-8 lg:px-32">
        <div className="flex gap-4 pb-3 border-b border-border items-end sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-foreground sm:text-xl">قائمة الدروس</h3>
            <p className="text-xs text-muted-foreground">اضغط على أيقونة الدائرة لتحديد الدرس كمكتمل</p>
          </div>

          <Link href={`/exam/${subjectId}`} className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="shadow-md hover:shadow-lg hover:scale-[1.1] flex items-center gap-1.5 rounded-xl text-xs font-extrabold cursor-pointer"
              style={{ borderColor: color, color }}
            >
              <Award className="h-4 w-4" />
              بدء الاختبار
            </Button>
          </Link>
        </div>

        {/* ── Search bar ── */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="ابحث عن درس..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className={cn("pr-9 pl-9 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground", "focus-visible:ring-1 transition-shadow")}
            style={
              searchQuery
                ? ({
                    "--tw-ring-color": color,
                    borderColor: `${color}60`,
                  } as React.CSSProperties)
                : undefined
            }
            dir="rtl"
          />
          {searchQuery && (
            <button onClick={() => handleSearch("")} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors" aria-label="مسح البحث">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* ── Results count (when searching) ── */}
        {searchQuery && <p className="text-xs text-muted-foreground">{filteredTopics.length === 0 ? "لا توجد نتائج" : `${filteredTopics.length} درس مطابق`}</p>}

        {/* ── Topic cards ── */}
        <div className="flex flex-col gap-3">
          {paginatedTopics.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <Search className="h-10 w-10 text-muted-foreground/40" />
              <p className="font-semibold text-foreground">لا توجد دروس تطابق بحثك</p>
              <p className="text-sm text-muted-foreground">
                حاول بكلمات مختلفة أو{" "}
                <button onClick={() => handleSearch("")} className="underline underline-offset-2 font-medium cursor-pointer" style={{ color }}>
                  أعد تعيين البحث
                </button>
              </p>
            </div>
          ) : (
            paginatedTopics.map((topic) => {
              const done = isComplete(subjectId, topic.id);
              const originalIndex = getOriginalIndex(topic.id);

              return (
                <div
                  key={topic.id}
                  className="group relative flex flex-col rounded-2xl border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-5"
                  style={done ? { backgroundColor: `${color}08`, borderColor: color } : undefined}
                >
                  {/* ── Row 1 (mobile): toggle + badges + title + subtitle ── */}
                  <div className="flex flex-1 items-start gap-3">
                    <button
                      onClick={() => toggleComplete(subjectId, topic.id)}
                      className="mt-0.5 shrink-0 cursor-pointer rounded-full p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform active:scale-95"
                      title={done ? "اضغط لإلغاء الإكمال" : "اضغط للتحديد كمكتمل"}
                      aria-label={done ? "مكتمل، اضغط للإلغاء" : "غير مكتمل، اضغط للتحديد"}
                    >
                      {done ? (
                        <CheckCircle className="h-6 w-6 transition-transform hover:scale-110" style={{ color }} />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground transition-transform hover:scale-110" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-md px-2 py-0.5 text-[11px] font-bold" style={{ backgroundColor: bgSoft, color }}>
                          درس {originalIndex + 1}
                        </span>
                        {done && (
                          <span className="rounded px-2 py-0.5 text-[10px] font-bold tracking-wide" style={{ backgroundColor: `${color}15`, color }}>
                            مكتمل ✓
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-foreground leading-snug sm:text-base sm:truncate">{topic.title}</h4>

                      {topic.subtitle && <p className="text-xs text-muted-foreground line-clamp-1">{topic.subtitle}</p>}

                      {/* ── Mobile-only CTA row ── */}
                      <div className="flex items-center justify-between pt-2 sm:hidden">
                        <div className="flex items-center gap-2">
                          <div className="bg-muted h-1.5 w-16 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: done ? "100%" : "0%",
                                backgroundColor: color,
                              }}
                            />
                          </div>
                          <span className="text-[10px] font-bold" style={{ color: done ? color : "var(--text-secondary)" }}>
                            {done ? "100%" : "0%"}
                          </span>
                        </div>

                        {/* CTA Button */}
                        <Link href={`/courses/${subjectId}/${topic.id}`}>
                          <Button
                            variant={done ? "outline" : "default"}
                            size="sm"
                            className="flex items-center gap-1 rounded-xl font-bold cursor-pointer text-xs h-8 px-3"
                            style={done ? { borderColor: color, color } : { backgroundColor: color, color: "#fff" }}
                          >
                            <BookOpen className="h-3 w-3" />
                            {done ? "مراجعة" : "ابدأ"}
                            <ChevronLeft className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ── Desktop-only: ring + CTA ── */}
                  <div className="hidden sm:flex items-center gap-3 shrink-0">
                    <MiniRing percent={done ? 100 : 0} color={color} />

                    <Link href={`/courses/${subjectId}/${topic.id}`}>
                      <Button
                        variant={done ? "outline" : "default"}
                        size="sm"
                        className="flex items-center gap-1 rounded-xl font-bold cursor-pointer"
                        style={done ? { borderColor: color, color } : { backgroundColor: color, color: "#fff" }}
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        {done ? "مراجعة" : "ابدأ"}
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ── Pagination ── */}
        {!searchQuery && totalPages > 1 && (
          <div className="pt-2 pb-4">
            <Pagination dir="ltr">
              <PaginationContent className="flex-wrap gap-1">
                {/* السابق */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage((p) => p - 1);
                    }}
                    className={cn("rounded-xl text-xs font-bold transition-opacity", currentPage === 1 && "pointer-events-none opacity-40")}
                  />
                </PaginationItem>

                {/* Page numbers */}
                {pageNumbers.map((page, idx) =>
                  page === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${idx}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                        className={cn("rounded-xl text-xs font-bold transition-all", page === currentPage && "shadow-sm")}
                        style={
                          page === currentPage
                            ? {
                                backgroundColor: color,
                                borderColor: color,
                                color: "#fff",
                              }
                            : undefined
                        }
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                {/* التالي */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage((p) => p + 1);
                    }}
                    className={cn("rounded-xl text-xs font-bold transition-opacity", currentPage === totalPages && "pointer-events-none opacity-40")}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <p className="mt-2 text-center text-xs text-muted-foreground">
              صفحة {currentPage} من {totalPages} · {topics.length} درس إجمالاً
            </p>
          </div>
        )}

        {/* ── Pagination info when searching (no pagination, show all results) ── */}
        {searchQuery && filteredTopics.length > 0 && <p className="text-center text-xs text-muted-foreground pb-2">عرض جميع النتائج المطابقة ({filteredTopics.length} درس)</p>}
      </section>
    </div>
  );
}
