import type { Metadata } from "next";
import GuideFAQ from "@/components/guide/GuideFAQ";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات على أكثر الأسئلة شيوعاً حول القبول في الدراسات العليا وامتحانات الكفاءة الوطنية في العراق.",
  openGraph: {
    title: "الأسئلة الشائعة | أكاديميك",
    description: "إجابات على أكثر الأسئلة شيوعاً حول القبول في الدراسات العليا وامتحانات الكفاءة الوطنية في العراق.",
    url: "https://academiq-edu.vercel.app/guide/faq",
  },
};

export default function FAQ() {
  return <GuideFAQ />;
}
