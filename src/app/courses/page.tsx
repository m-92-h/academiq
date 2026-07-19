import type { Metadata } from "next";
import SubjectsGrid from "@/components/courses/SubjectsGrid";
import SubjectsHero from "@/components/courses/SubjectsHero";

export const metadata: Metadata = {
  title: "مواد المراجعة",
  description: "تصفّح مواد المراجعة لامتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات. محتوى مُنظَّم ومُوجَز لكل موضوع.",
  openGraph: {
    title: "مواد المراجعة | أكاديميك",
    description: "تصفّح مواد المراجعة لامتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات.",
    url: "https://academiq.org/courses",
  },
};

export default function CoursesPage() {
  return (
    <main className="hero-grid-secondary min-h-screen bg-background" dir="rtl">
      <SubjectsHero />
      <SubjectsGrid />
    </main>
  );
}
