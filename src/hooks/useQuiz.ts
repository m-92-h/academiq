"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { OptionKey, QuizQuestion } from "@/types/data";

export type { OptionKey, QuizQuestion } from "@/types/data";

export interface QuizState {
  currentIndex: number;
  answers: (OptionKey | null)[];
  isAnswered: boolean;
  selectedOption: OptionKey | null;
  quizComplete: boolean;
  timeExpired: boolean;
  secondsLeft: number;
  secondsElapsed: number;
  score: number;
  totalQuestions: number;
  currentQuestion: QuizQuestion;
}

const EXAM_DURATION_SECONDS = 60 * 60; // 60 minutes

export function useQuiz(questions: QuizQuestion[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(OptionKey | null)[]>(Array(questions.length).fill(null));
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_SECONDS);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Use ref so timer callback always has current quizComplete value
  const quizCompleteRef = useRef(false);

  useEffect(() => {
    quizCompleteRef.current = quizComplete;
  }, [quizComplete]);

  // ── Countdown timer ───────────────────────────────────────────────────────
  useEffect(() => {
    if (questions.length === 0) return;

    const interval = setInterval(() => {
      if (quizCompleteRef.current) {
        clearInterval(interval);
        return;
      }
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto-submit when time runs out
          setTimeExpired(true);
          setQuizComplete(true);
          return 0;
        }
        return prev - 1;
      });
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [questions.length]);

  // ── Select an option ──────────────────────────────────────────────────────
  const selectOption = useCallback(
    (option: OptionKey) => {
      if (isAnswered || quizComplete) return;
      setSelectedOption(option);
      setIsAnswered(true);
      setAnswers((prev) => {
        const next = [...prev];
        next[currentIndex] = option;
        return next;
      });
    },
    [isAnswered, quizComplete, currentIndex],
  );

  // ── Go to next question ───────────────────────────────────────────────────
  const goToNextQuestion = useCallback(() => {
    if (!isAnswered) return;
    if (currentIndex >= questions.length - 1) {
      // Last question — complete quiz
      setQuizComplete(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [isAnswered, currentIndex, questions.length]);

  // ── Reset ─────────────────────────────────────────────────────────────────
  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizComplete(false);
    setTimeExpired(false);
    setSecondsLeft(EXAM_DURATION_SECONDS);
    setSecondsElapsed(0);
  }, [questions.length]);

  // ── Score calculation ─────────────────────────────────────────────────────
  const score = answers.filter((ans, i) => ans !== null && ans === questions[i]?.correctAnswer).length;

  // ── Performance badge ─────────────────────────────────────────────────────
  const getPerformanceBadgeKey = useCallback((): "excellent" | "good" | "needsImprovement" => {
    const pct = questions.length > 0 ? (score / questions.length) * 100 : 0;
    if (pct >= 85) return "excellent";
    if (pct >= 50) return "good";
    return "needsImprovement";
  }, [score, questions.length]);

  const currentQuestion = questions[currentIndex];

  return {
    currentIndex,
    currentQuestion,
    answers,
    selectedOption,
    isAnswered,
    quizComplete,
    timeExpired,
    secondsLeft,
    secondsElapsed,
    totalQuestions: questions.length,
    score,
    selectOption,
    goToNextQuestion,
    resetQuiz,
    getPerformanceBadgeKey,
  };
}
