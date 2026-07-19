import type { LucideIcon } from "lucide-react";
import { BookOpen, Feather, Monitor } from "lucide-react";
import { getTopicIds } from "./subjects";
import type { SubjectId } from "@/types/data";

export type { SubjectId };

export interface SubjectMeta {
  id: SubjectId;
  label: string;
  description: string;
  homeDescription: string;
  examLabel: string;
  examDescription: string;
  colorVar: string;
  colorSoftVar: string;
  color: string;
  bgSoft: string;
  gradient: string;
  icon: "Monitor" | "Feather" | "BookOpen";
}

export const SUBJECT_ICON_MAP: Record<SubjectMeta["icon"], LucideIcon> = {
  Monitor,
  Feather,
  BookOpen,
};

export function getSubjectIcon(name: SubjectMeta["icon"]): LucideIcon {
  return SUBJECT_ICON_MAP[name];
}

export const SUBJECTS_META: SubjectMeta[] = [
  {
    id: "cs",
    label: "الحاسوب",
    description: "مراجعة في Windows 10 والإنترنت والشبكات، وبرامج Word وExcel وPowerPoint.",
    homeDescription: "راجع موضوعات Windows 10 والإنترنت والشبكات، إلى جانب برامج Wordو Excel وPowerPoint.",
    examLabel: "Windows 10 · إنترنت · شبكات · Office",
    examDescription: "راجع معلوماتك من خلال اختبار تجريبي يغطي Windows 10 والإنترنت والشبكات وبرامج Office.",
    colorVar: "--subject-cs",
    colorSoftVar: "--subject-cs-soft",
    color: "var(--subject-cs)",
    bgSoft: "var(--subject-cs-soft)",
    gradient: "from-blue-600 to-indigo-900",
    icon: "Monitor",
  },
  {
    id: "arabic",
    label: "اللغة العربية",
    description: "مراجعة في الإملاء والنحو والصرف، إلى جانب موضوعات أدبية ولغوية متنوعة.",
    homeDescription: "راجع موضوعات الإملاء والنحو والصرف، إلى جانب مجموعة من الموضوعات الأدبية واللغوية.",
    examLabel: "إملاء · نحو · صرف · أدب ولغة",
    examDescription: "راجع معلوماتك من خلال اختبار تجريبي يغطي موضوعات في الإملاء والنحو والصرف والأدب واللغة.",
    colorVar: "--subject-arabic",
    colorSoftVar: "--subject-arabic-soft",
    color: "var(--subject-arabic)",
    bgSoft: "var(--subject-arabic-soft)",
    gradient: "from-amber-600 to-orange-950",
    icon: "Feather",
  },
  {
    id: "english",
    label: "اللغة الإنجليزية",
    description: "القواعد، الأزمنة، وظائف اللغة، الجمل الشرطية",
    homeDescription: "راجع أهم قواعد اللغة الإنجليزية من أجزاء الكلام والأزمنة والجمل الشرطية ووظائف اللغة.",
    examLabel: "قواعد · أزمنة · وظائف اللغة",
    examDescription: "تحدَّ مستواك الأكاديمي واختبر مدى إتقانك للقواعد من أجزاء الكلام والأزمنة والجمل الشرطية ووظائف اللغة.",
    colorVar: "--subject-english",
    colorSoftVar: "--subject-english-soft",
    color: "var(--subject-english)",
    bgSoft: "var(--subject-english-soft)",
    gradient: "from-teal-600 to-emerald-950",
    icon: "BookOpen",
  },
];

// Topic IDs per subject — derived from content files
export const SUBJECTS_MAP: Record<SubjectId, string[]> = {
  cs: getTopicIds("cs"),
  arabic: getTopicIds("arabic"),
  english: getTopicIds("english"),
};
