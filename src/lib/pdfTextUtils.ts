export type SubjectType = "arabic" | "computer" | "english";

export function getSubjectType(subjectLabel: string): SubjectType {
  const lower = subjectLabel.toLowerCase();
  if (lower.includes("english") || lower.includes("إنجليزي") || lower.includes("الانجليزية") || lower.includes("الإنجليزية")) {
    return "english";
  }
  if (lower.includes("حاسوب") || lower.includes("computer") || lower.includes("حاسب")) {
    return "computer";
  }
  return "arabic";
}

export function getTextDirection(type: SubjectType): "rtl" | "ltr" {
  return type === "english" ? "ltr" : "rtl";
}

export function getFontUrl(filename: string): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/fonts/${filename}`;
  }
  return `/fonts/${filename}`;
}
