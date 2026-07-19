export type SubjectId = "cs" | "arabic" | "english";
export type OptionKey = "A" | "B" | "C" | "D";
export const SUBJECT_ORDER: SubjectId[] = ["arabic", "cs", "english"];

export interface ReadingRef {
  title: string;
  author: string;
  year: number;
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  keyPoints: string[];
}

export type LessonBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "note"; text: string }
  | { type: "tip"; text: string };

export interface QuizQuestion {
  id: string;
  question: string;
  options: Record<OptionKey, string>;
  correctAnswer: OptionKey;
  explanation: string;
}
