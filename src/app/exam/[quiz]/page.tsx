import type { Metadata } from "next";
import { QuizRunner } from "@/components/exam/QuizRunner";

interface PageProps {
  params: Promise<{ quiz: string }>;
}

const QUIZ_NAMES: Record<string, string> = {
  arabic: "اللغة العربية",
  english: "اللغة الإنجليزية",
  cs: "الحاسوب",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quiz } = await params;
  const subjectName = QUIZ_NAMES[quiz] ?? "الكفاءة الوطنية";
  const title = `اختبار ${subjectName}`;
  const description = `اختبار تجريبي يحاكي امتحان الكفاءة الوطنية في مادة ${subjectName}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | أكاديميك`,
      description,
      url: `https://academiq.org/exam/${quiz}`,
    },
  };
}

export default async function QuizPage({ params }: PageProps) {
  const { quiz } = await params;
  return <QuizRunner quizId={quiz} />;
}
