import { BookOpen, ClipboardList, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GuideFooterCTA() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-accent relative overflow-hidden rounded-2xl p-8 text-center sm:p-12">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 size-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -right-12 size-40 rounded-full bg-white/5" />
          </div>

          <div className="relative">
            <h2 className="mb-3 text-2xl font-bold text-white! sm:text-3xl">جاهز لبدء مسيرتك؟</h2>
            <p className="mb-8 text-base text-foreground">ابدأ المراجعة الآن مع اختبارات أكاديميك التجريبية ومواد المراجعة</p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="gap-2 px-8 font-semibold" style={{ backgroundColor: "#fff", color: "var(--accent)" }} asChild>
                <Link href="/exam">
                  <ClipboardList className="size-4" />
                  ابدأ الاختبار التجريبي
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="gap-2 px-8 border-accent font-medium text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/courses" className="group">
                  <BookOpen className="size-4" />
                  مواد المراجعة
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
