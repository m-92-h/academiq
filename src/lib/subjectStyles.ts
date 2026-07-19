import type { SubjectId } from "@/types/data";

// Tailwind class maps for per-subject CSS variables (static strings for purge safety).
export const SUBJECT_TW: Record<
  SubjectId,
  {
    text: string;
    bgSoft: string;
    glow: string;
    iconBg: string;
    gradientWash: string;
    bottomLine: string;
  }
> = {
  cs: {
    text: "text-[color:var(--subject-cs)]",
    bgSoft: "bg-[color:var(--subject-cs-soft)]",
    glow: "bg-[color:var(--subject-cs)]",
    iconBg: "bg-[color-mix(in_srgb,var(--subject-cs)_14%,transparent)]",
    gradientWash: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--subject-cs)_8%,transparent),transparent)]",
    bottomLine: "bg-[color:var(--subject-cs)]",
  },
  arabic: {
    text: "text-[color:var(--subject-arabic)]",
    bgSoft: "bg-[color:var(--subject-arabic-soft)]",
    glow: "bg-[color:var(--subject-arabic)]",
    iconBg: "bg-[color-mix(in_srgb,var(--subject-arabic)_14%,transparent)]",
    gradientWash: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--subject-arabic)_8%,transparent),transparent)]",
    bottomLine: "bg-[color:var(--subject-arabic)]",
  },
  english: {
    text: "text-[color:var(--subject-english)]",
    bgSoft: "bg-[color:var(--subject-english-soft)]",
    glow: "bg-[color:var(--subject-english)]",
    iconBg: "bg-[color-mix(in_srgb,var(--subject-english)_14%,transparent)]",
    gradientWash: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--subject-english)_8%,transparent),transparent)]",
    bottomLine: "bg-[color:var(--subject-english)]",
  },
};
