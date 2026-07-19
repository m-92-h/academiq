import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Subjects from "@/components/home/Subjects";
import ExamCards from "@/components/home/ExamCards";
import FeaturesSection from "@/components/home/FeaturesSection";
import { ProgressSection } from "@/components/home/ProgressSection";
import LearningSteps from "@/components/home/LearningSteps";

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "أكاديميك — منصة تعليمية مجانية تساعد طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات",
  openGraph: {
    title: "أكاديميك | منصة الطلاب للدراسات العليا",
    description: "منصة تعليمية مجانية تساعد طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة الوطنية في اللغة العربية والإنجليزية والحاسبات",
    url: "https://academiq-edu.vercel.app/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Subjects />
      <ExamCards />
      <FeaturesSection />
      <ProgressSection />
      <LearningSteps />
    </main>
  );
}
