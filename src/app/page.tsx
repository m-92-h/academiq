import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

const Subjects = nextDynamic(() => import("@/components/home/Subjects"), { ssr: true });
const ExamCards = nextDynamic(() => import("@/components/home/ExamCards"), { ssr: true });
const FeaturesSection = nextDynamic(() => import("@/components/home/FeaturesSection"), { ssr: true });
const LearningSteps = nextDynamic(() => import("@/components/home/LearningSteps"), { ssr: true });

const ProgressSection = nextDynamic(() => import("@/components/home/ProgressSection").then(mod => mod.ProgressSection), { ssr: true });

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "الرئيسية | أكاديميك",
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
