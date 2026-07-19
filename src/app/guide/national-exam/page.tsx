import type { Metadata } from "next";
import NationalExamSection from "@/components/guide/NationalExamSection";
import ExamScoresTables from "@/components/guide/ExamScoresTables";
import GuideFooterCTA from "@/components/guide/GuideFooterCTA";

export const metadata: Metadata = {
  title: "دليل امتحان الكفاءة الوطني",
  description: "كل ما تحتاج معرفته عن امتحان الكفاءة الوطني — هيكل الامتحان، درجات النجاح، جدول الدرجات، والنصائح للاستعداد.",
  openGraph: {
    title: "دليل امتحان الكفاءة الوطني | أكاديميك",
    description: "كل ما تحتاج معرفته عن امتحان الكفاءة الوطني — هيكل الامتحان، درجات النجاح، وجدول الدرجات.",
    url: "https://academiq-edu.vercel.app/guide/national-exam",
  },
};

export default function NationalExamGuide() {
  return (
    <div>
      <NationalExamSection />
      <ExamScoresTables />
      <GuideFooterCTA />
    </div>
  );
}
