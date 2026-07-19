"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Brain, LayoutGrid, Lightbulb, Menu, X, Monitor, Feather, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { SUBJECTS_META } from "@/data/subjectsMeta";
import { getSubjectTopics, getTopicData } from "@/data/subjects";
import type { Topic } from "@/types/data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ProgressHook = ReturnType<typeof useProgress>;

function SubjectIcon({ icon, className }: { icon: "Monitor" | "Feather" | "BookOpen"; className?: string }) {
  if (icon === "Monitor") return <Monitor className={className} />;
  if (icon === "Feather") return <Feather className={className} />;
  return <BookOpen className={className} />;
}

// ─── Reading progress bar ────────────────────────────────────────────────────
function ReadingProgressBar({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const getScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      return docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    };

    const animate = () => {
      const diff = targetRef.current - currentRef.current;

      if (Math.abs(diff) < 0.05) {
        currentRef.current = targetRef.current;
        setProgress(currentRef.current);
        rafRef.current = null;
        return;
      }

      currentRef.current += diff * 0.12;
      setProgress(currentRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      targetRef.current = getScrollProgress();

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    targetRef.current = getScrollProgress();
    currentRef.current = targetRef.current;
    setProgress(targetRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-s-0 inset-e-0 z-30 h-0.5 bg-border"
      style={{ top: 64 }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="تقدم القراءة"
    >
      <div
        className="h-full origin-[100%_50%] will-change-transform"
        style={{
          backgroundColor: color,
          transform: `scaleX(${progress / 100})`,
        }}
      />
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function TopicSidebar({
  subjectId,
  currentTopicId,
  onClose,
  isComplete,
  subjectProgress,
}: {
  subjectId: string;
  currentTopicId: string;
  onClose?: () => void;
  isComplete: ProgressHook["isComplete"];
  subjectProgress: ProgressHook["subjectProgress"];
}) {
  const meta = SUBJECTS_META.find((s) => s.id === subjectId);
  const topics = getSubjectTopics(subjectId);
  const color = meta?.color ?? "var(--accent)";
  const bgSoft = meta?.bgSoft ?? "var(--accent-soft)";
  const isRTL = meta?.id === "cs" || meta?.id === "arabic" ? "rtl" : "ltr";
  const topicIds = topics.map((t) => t.id);
  const { completed, total } = subjectProgress(subjectId, topicIds);
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const currentIdx = topics.findIndex((t) => t.id === currentTopicId);

  return (
    <aside dir="rtl" className="flex h-full w-72 flex-col border-s border-border bg-card overflow-hidden" aria-label="قائمة الدروس">
      <div className="flex items-start justify-between border-b border-border p-4">
        <div className="min-w-0">
          <Link href="/courses" className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground" onClick={onClose}>
            <LayoutGrid size={11} />
            مواد المراجعة
          </Link>
          <Link href={`/courses/${subjectId}`} className="text-sm font-black leading-snug text-foreground transition-opacity hover:opacity-70" style={{ color }} onClick={onClose}>
            {meta?.label ?? subjectId}
          </Link>
          {currentIdx >= 0 && (
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              درس {currentIdx + 1} من {total}
            </p>
          )}
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded-lg p-1.5 transition-colors hover:bg-secondary md:hidden" aria-label="إغلاق القائمة">
            <X size={15} className="text-muted-foreground" />
          </button>
        )}
      </div>

      <div className="border-b border-border px-4 py-2.5">
        <div className="mb-1.5 flex items-center justify-between text-[11px]">
          <span className="font-medium text-muted-foreground">التقدم الكلي</span>
          <span className="font-black" style={{ color }}>
            {percent}%
          </span>
        </div>
        <Progress value={percent} className="h-1" dir={isRTL} />

        <p className="mt-1 text-[10px] text-muted-foreground">
          {completed} من {total} دروس مكتملة
        </p>
      </div>

      <ScrollArea className="flex-1 overflow-y-auto" dir="rtl">
        <nav className="p-3" aria-label="دروس المادة">
          {topics.map((topic, i) => {
            const done = isComplete(subjectId, topic.id);
            const active = currentTopicId === topic.id;

            return (
              <Link
                key={topic.id}
                href={`/courses/${subjectId}/${topic.id}`}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group mb-1 flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active ? "font-bold" : "font-medium text-foreground hover:bg-secondary",
                  active && "border-s-[3px]",
                )}
                style={active ? { backgroundColor: bgSoft, color, borderInlineStartColor: color } : undefined}
              >
                <span className="mt-0.5 shrink-0">
                  {done ? <CheckCircle2 size={16} style={{ color }} /> : <Circle size={16} className={cn(active ? "" : "text-muted-foreground")} style={active ? { color } : undefined} />}
                </span>
                <span className="leading-snug" style={active ? { color } : done ? { color: "var(--text-secondary)" } : undefined}>
                  <span className="me-1 opacity-40">{i + 1}.</span>
                  {topic.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="border-t border-border p-3">
        <Link
          href={`/exam/${subjectId}`}
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-white! transition-opacity hover:opacity-90"
          style={{ backgroundColor: color }}
        >
          <Brain size={16} />
          بدء الاختبار
        </Link>
      </div>
    </aside>
  );
}

// ─── Lesson hero ─────────────────────────────────────────────────────────────
function LessonHero({
  topic,
  meta,
  subjectId,
  lessonIndex,
  totalLessons,
  done,
}: {
  topic: Topic;
  meta: (typeof SUBJECTS_META)[number] | undefined;
  subjectId: string;
  lessonIndex: number;
  totalLessons: number;
  done: boolean;
}) {
  const gradient = meta?.gradient ?? "from-blue-600 to-indigo-900";

  return (
    <section className={cn("relative overflow-hidden rounded-md bg-linear-to-bl p-5 text-white shadow-lg md:p-7", gradient)}>
      <div className="pointer-events-none absolute top-0 inset-s-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -inset-e-10 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 space-y-3">
        <Breadcrumb>
          <BreadcrumbList className="flex justify-start ustify-end text-white/75">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/courses" className="text-xs hover:text-white">
                  الرئيسية
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/40 [&>svg]:rotate-180" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/courses/${subjectId}`} className="text-xs hover:text-white">
                  {meta?.label ?? subjectId}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/40 [&>svg]:rotate-180" />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-40 truncate text-xs font-semibold text-white sm:max-w-xs">{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-bold" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
          {meta && <SubjectIcon icon={meta.icon} className="h-3 w-3" />}
          {meta?.label ?? subjectId}
        </div>

        <h1 className="text-xl font-black leading-snug md:text-2xl text-white!">{topic.title}</h1>
        <p className="max-w-xl text-sm leading-relaxed text-white/85">{topic.subtitle}</p>

        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold text-white/75">
          <span className="rounded-md bg-white/10 px-2 py-0.5">
            درس {lessonIndex + 1} من {totalLessons}
          </span>
          {done && (
            <span className="flex items-center gap-1 rounded-md px-2 py-0.5" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
              <CheckCircle2 size={10} />
              مكتمل
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Key points & further reading ────────────────────────────────────────────
function KeyPointsSection({ keyPoints, color, bgSoft }: { keyPoints: string[]; color: string; bgSoft: string }) {
  return (
    <section dir="rtl" className="mt-2" role="region" aria-labelledby="key-points-heading">
      <h3 id="key-points-heading" className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
        <Lightbulb size={13} style={{ color }} />
        <span style={{ color }}>النقاط الأساسية</span>
      </h3>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {keyPoints.map((kp, i) => (
          <div key={i} className="flex gap-2.5 rounded-md p-3" style={{ backgroundColor: bgSoft, borderInlineStart: `3px solid ${color}` }}>
            <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color }} />
            <span className="text-sm leading-relaxed text-foreground">{kp}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Mobile sticky nav ─────────────────────────────────────────────────────────
function MobileStickyNav({
  subjectId,
  prev,
  next,
  done,
  color,
  onToggleComplete,
  onPrev,
  onNext,
}: {
  subjectId: string;
  prev: Topic | null;
  next: Topic | null;
  done: boolean;
  color: string;
  onToggleComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 p-3 backdrop-blur-md md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
        <Button variant="outline" size="sm" disabled={!prev} onClick={onPrev} className="rounded-xl text-xs" aria-label="الدرس السابق">
          <ChevronRight size={16} /> السابق
        </Button>

        <Button
          variant={done ? "default" : "outline"}
          size="sm"
          onClick={onToggleComplete}
          className="flex-1 rounded-xl font-bold"
          style={done ? { backgroundColor: color, color: "#fff" } : { borderColor: color, color }}
          aria-label={done ? "إلغاء تحديد الدرس كمكتمل" : "تحديد الدرس كمكتمل"}
        >
          {done ? (
            <>
              <CheckCircle2 size={14} />
              مكتمل
            </>
          ) : (
            <>
              <Circle size={14} />
              إكمال
            </>
          )}
        </Button>

        {next ? (
          <Button variant="outline" size="sm" onClick={onNext} className="rounded-xl text-xs" aria-label="الدرس التالي">
            التالي <ChevronLeft size={16} />
          </Button>
        ) : (
          <Button variant="default" size="sm" asChild className="rounded-xl text-xs" style={{ backgroundColor: color, color: "#fff" }}>
            <Link href={`/exam/${subjectId}`} aria-label="بدء الاختبار">
              <Brain size={16} /> الاختبار
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Lesson content ────────────────────────────────────────────────────────────
function LessonContent({
  subjectId,
  topicId,
  isComplete,
  toggleComplete,
}: {
  subjectId: string;
  topicId: string;
  isComplete: ProgressHook["isComplete"];
  toggleComplete: ProgressHook["toggleComplete"];
}) {
  const router = useRouter();
  const meta = SUBJECTS_META.find((s) => s.id === subjectId);
  const topics = getSubjectTopics(subjectId);
  const topic = getTopicData(subjectId, topicId);

  const color = meta?.color ?? "var(--accent)";
  const bgSoft = meta?.bgSoft ?? "var(--accent-soft)";

  const idx = topics.findIndex((t) => t.id === topicId);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;
  const done = isComplete(subjectId, topicId);

  const handleToggleComplete = useCallback(() => {
    const wasDone = isComplete(subjectId, topicId);
    toggleComplete(subjectId, topicId);
    if (!wasDone) {
      toast.success("تم تحديد الدرس كمكتمل!", {
        description: topic?.title,
      });
    }
  }, [isComplete, subjectId, topicId, toggleComplete, topic?.title]);

  if (!topic) {
    return (
      <div className="flex flex-1 items-center justify-center p-12 text-center">
        <div>
          <p className="text-muted-foreground">الدرس غير موجود</p>
          <Link href={`/courses/${subjectId}`}>
            <Button variant="outline" size="sm" className="mt-4">
              العودة للمادة
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = topic.content.split(/\n\n+/);

  return (
    <>
      <motion.article
        key={topicId}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl px-4 py-6 pb-28 md:px-6 md:py-8 md:pb-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative space-y-6">
          <LessonHero topic={topic} meta={meta} subjectId={subjectId} lessonIndex={idx} totalLessons={topics.length} done={done} />

          <section className="hero-grid-book lesson-prose rounded-sm p-6 md:p-8" dir="rtl">
            {paragraphs.map((p, i) => (
              <ReactMarkdown
                key={i}
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => (
                    <p className={cn("text-[15px] tracking-wide text-inherit mb-4 block", i === 0 && "text-base font-semibold")} style={{ lineHeight: "38px" }}>
                      {children}
                    </p>
                  ),
                  li: ({ children }) => (
                    <li className="list-disc list-inside mr-4 my-2 text-[15px]" style={{ lineHeight: "38px" }}>
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 w-full border border-amber-900/10 dark:border-amber-500/10 rounded-md">
                      <table className="min-w-full divide-y divide-amber-900/20 dark:divide-amber-500/20 text-right text-[14px]">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-amber-900/4 dark:bg-amber-500/4">{children}</thead>,
                  th: ({ children }) => <th className="px-4 py-3 font-bold text-[#3d2b1f] dark:text-[#e8d8b8] border-b border-amber-900/20 dark:border-amber-500/20 text-right">{children}</th>,
                  tr: ({ children }) => (
                    <tr className="border-b border-amber-900/10 dark:border-amber-500/10 hover:bg-amber-900/2 dark:hover:bg-amber-500/2 transition-colors odd:bg-transparent even:bg-amber-900/1 dark:even:bg-amber-500/1">
                      {children}
                    </tr>
                  ),
                  td: ({ children }) => <td className="px-4 py-2.5 text-[#3d2b1f]/90 dark:text-[#e8d8b8]/90 text-right whitespace-nowrap">{children}</td>,
                }}
              >
                {p}
              </ReactMarkdown>
            ))}
          </section>

          <KeyPointsSection keyPoints={topic.keyPoints} color={color} bgSoft={bgSoft} />

          <footer dir="rtl" className="hidden flex-wrap items-center justify-between gap-3 border-t border-border pt-5 md:flex">
            <Button
              variant="outline"
              disabled={!prev}
              onClick={() => prev && router.push(`/courses/${subjectId}/${prev.id}`)}
              className="flex items-center gap-1.5 rounded-xl font-bold"
              aria-label="الدرس السابق"
            >
              <ChevronRight size={15} />
              السابق
            </Button>

            <Button
              variant={done ? "default" : "outline"}
              onClick={handleToggleComplete}
              className="flex items-center gap-1.5 rounded-xl font-bold"
              style={done ? { backgroundColor: color, color: "#fff" } : { borderColor: color, color }}
            >
              {done ? (
                <>
                  <CheckCircle2 size={15} />
                  تم الإكمال
                </>
              ) : (
                <>
                  <Circle size={15} />
                  تحديد كمكتمل
                </>
              )}
            </Button>

            {next ? (
              <Button variant="outline" onClick={() => router.push(`/courses/${subjectId}/${next.id}`)} className="flex items-center gap-1.5 rounded-xl font-bold">
                التالي
                <ChevronLeft size={15} />
              </Button>
            ) : (
              <Button variant="default" asChild className="flex items-center gap-1.5 rounded-xl font-bold" style={{ backgroundColor: color, color: "#fff" }}>
                <Link href={`/exam/${subjectId}`}>
                  <Brain size={15} />
                  بدء الاختبار
                </Link>
              </Button>
            )}
          </footer>
        </div>
      </motion.article>

      <MobileStickyNav
        subjectId={subjectId}
        prev={prev}
        next={next}
        done={done}
        color={color}
        onToggleComplete={handleToggleComplete}
        onPrev={() => prev && router.push(`/courses/${subjectId}/${prev.id}`)}
        onNext={() => next && router.push(`/courses/${subjectId}/${next.id}`)}
      />
    </>
  );
}

// ─── TopicLayout ───────────────────────────────────────────────────────────────
export function TopicLayout({ subjectId, topicId }: { subjectId: string; topicId: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isComplete, toggleComplete, subjectProgress } = useProgress();
  const meta = SUBJECTS_META.find((s) => s.id === subjectId);
  const color = meta?.color ?? "var(--accent)";

  return (
    <div className="flex bg-app" style={{ minHeight: "calc(100vh - 64px)" }}>
      <ReadingProgressBar color={color} />

      <div className="sticky top-16 hidden h-[calc(100vh-64px)] shrink-0 self-start md:block">
        <TopicSidebar subjectId={subjectId} currentTopicId={topicId} isComplete={isComplete} subjectProgress={subjectProgress} />
      </div>

      <button
        onClick={() => setSidebarOpen(true)}
        aria-label="فتح قائمة الدروس"
        className="fixed z-30 inline-flex h-10 w-8 items-center justify-center rounded-s-lg border border-border bg-card text-foreground shadow-md transition-colors hover:bg-secondary md:hidden"
        style={{ top: 80, insetInlineEnd: 0 }}
        dir="ltr"
      >
        <Menu size={16} />
      </button>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div className="fixed inset-0 z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} aria-hidden />
            <motion.div
              className="absolute top-0 bottom-0 right-0 overflow-hidden"
              style={{ insetInlineEnd: 0 }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <TopicSidebar subjectId={subjectId} currentTopicId={topicId} onClose={() => setSidebarOpen(false)} isComplete={isComplete} subjectProgress={subjectProgress} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-w-0 flex-1" dir="rtl">
        <LessonContent subjectId={subjectId} topicId={topicId} isComplete={isComplete} toggleComplete={toggleComplete} />
      </main>
    </div>
  );
}
