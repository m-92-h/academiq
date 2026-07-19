import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default function SubjectsHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-14">
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Badge
          className="gap-2 px-4 py-1.5 mb-3 text-sm font-medium"
          style={{
            backgroundColor: "var(--accent-soft)",
            color: "var(--accent)",
            border: "1px solid var(--accent-soft)",
          }}
        >
          <BookOpen className="size-4" />
          مواد المراجعة
        </Badge>
        <h1 className="text-3xl font-bold text-card-foreground sm:text-4xl">ابدأ بمادة وراجع موضوعاتها</h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">ثلاث مواد معدّة لاختبارات الكفاءة الوطنية — ابدأ بأي مادة لتتصفح موضوعاتها وتتابع تقدمك.</p>
      </div>
    </section>
  );
}
