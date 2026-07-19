import type { Metadata } from "next";
import { SubjectView } from "@/components/courses/SubjectView";
import { SUBJECTS_META } from "@/data/subjectsMeta";

interface PageProps {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject } = await params;
  const meta = SUBJECTS_META.find((s) => s.id === subject);

  if (!meta) {
    return {
      title: "مادة دراسية",
      description: "تصفّح موضوعات المراجعة لامتحانات الكفاءة الوطنية",
    };
  }

  const titleMap: Record<string, string> = {
    arabic: "مادة اللغة العربية",
    english: "مادة اللغة الإنجليزية",
    cs: "مادة الحاسوب",
  };

  const descriptionMap: Record<string, string> = {
    arabic: "راجع موضوعات الإملاء والنحو والصرف والأدب — مادة اللغة العربية لامتحانات الكفاءة الوطنية",
    english: "راجع قواعد اللغة الإنجليزية والأزمنة والجمل الشرطية ووظائف اللغة لامتحانات الكفاءة الوطنية",
    cs: "راجع موضوعات Windows 10 والإنترنت والشبكات وبرامج Office لامتحانات الكفاءة الوطنية",
  };

  const title = titleMap[subject] ?? meta.label;
  const description = descriptionMap[subject] ?? meta.description;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | أكاديميك`,
      description,
      url: `https://academiq.org/courses/${subject}`,
    },
  };
}

export default async function SubjectPage({ params }: PageProps) {
  const { subject } = await params;
  return <SubjectView subjectId={subject} />;
}
