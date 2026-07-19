import type { SubjectId, Topic } from "@/types/data";
import { csTopics } from "./cs/content";
import { arabicTopics } from "./arabic/content";
import { englishTopics } from "./english/content";

export type { Topic, SubjectId, QuizQuestion, ReadingRef, LessonBlock, OptionKey } from "@/types/data";

const registry: Record<SubjectId, Topic[]> = {
  cs: csTopics,
  arabic: arabicTopics,
  english: englishTopics,
};

export function getSubjectTopics(subjectId: string): Topic[] {
  return registry[subjectId as SubjectId] ?? [];
}

export function getTopicData(subjectId: string, topicId: string): Topic | undefined {
  return getSubjectTopics(subjectId).find((t) => t.id === topicId);
}

export function getTopicIds(subjectId: string): string[] {
  return getSubjectTopics(subjectId).map((t) => t.id);
}
