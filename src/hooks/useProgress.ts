"use client";

import { useState, useCallback } from "react";

export interface ProgressState {
  [subjectId: string]: {
    [topicId: string]: boolean;
  };
}

const STORAGE_KEY = "edu-platform-progress";

function loadProgress(): ProgressState {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // quota exceeded – silent fail
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  /** Returns true if the topic is marked complete */
  const isComplete = useCallback(
    (subjectId: string, topicId: string): boolean => {
      return progress[subjectId]?.[topicId] === true;
    },
    [progress],
  );

  /** Toggle a topic's completion status and persist */
  const toggleComplete = useCallback((subjectId: string, topicId: string) => {
    setProgress((prev) => {
      const current = prev[subjectId]?.[topicId] ?? false;
      const next: ProgressState = {
        ...prev,
        [subjectId]: {
          ...(prev[subjectId] ?? {}),
          [topicId]: !current,
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  /** Returns { completed, total } for a subject */
  const subjectProgress = useCallback(
    (subjectId: string, allTopicIds: string[]) => {
      const completed = allTopicIds.filter((id) => progress[subjectId]?.[id] === true).length;
      return { completed, total: allTopicIds.length };
    },
    [progress],
  );

  /** Returns overall platform progress across all subjects */
  const overallProgress = useCallback(
    (subjectsMap: Record<string, string[]>) => {
      let completed = 0;
      let total = 0;
      for (const [subjectId, topicIds] of Object.entries(subjectsMap)) {
        total += topicIds.length;
        completed += topicIds.filter((id) => progress[subjectId]?.[id] === true).length;
      }
      return { completed, total };
    },
    [progress],
  );

  return { isComplete, toggleComplete, subjectProgress, overallProgress, progress };
}
