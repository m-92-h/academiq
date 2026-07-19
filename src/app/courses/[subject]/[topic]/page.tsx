import { TopicLayout } from "@/components/courses/TopicLayout";
import { getTopicData, getTopicIds } from "@/data/subjects";
import type { Metadata } from "next";

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const subjects = ['arabic', 'english', 'cs']
  
  return subjects.flatMap((subject) =>
    getTopicIds(subject).map((topic: string) => ({
      subject,
      topic,
    }))
  )
}

interface PageProps {
  params: Promise<{ subject: string; topic: string }>;
}

const SUBJECT_NAMES: Record<string, string> = {
  arabic: "اللغة العربية",
  english: "اللغة الإنجليزية",
  cs: "الحاسوب",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject, topic } = await params;
  const topicData = getTopicData(subject, topic);
  const subjectName = SUBJECT_NAMES[subject] ?? subject;

  const title = topicData?.title ?? "موضوع دراسي";
  const description = topicData?.subtitle ?? `مراجعة ${title} في مادة ${subjectName} — امتحانات الكفاءة الوطنية`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | أكاديميك`,
      description,
      url: `https://academiq-edu.vercel.app/courses/${subject}/${topic}`,
    },
    twitter: {
      card: "summary",
      title: `${title} | أكاديميك`,
      description,
    },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { subject, topic } = await params;
  return <TopicLayout subjectId={subject} topicId={topic} />;
}
