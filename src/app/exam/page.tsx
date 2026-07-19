import { ExamHub } from "@/components/exam/ExamHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الاختبارات التجريبية",
  description: "اختبر مستواك بامتحانات تجريبية تحاكي امتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات.",
  openGraph: {
    title: "الاختبارات التجريبية | أكاديميك",
    description: "اختبر مستواك بامتحانات تجريبية تحاكي امتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات.",
    url: "https://academiq-edu.vercel.app/exam",
  },
};

export default function ExamPage() {
  return <ExamHub />;
}
