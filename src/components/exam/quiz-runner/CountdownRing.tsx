import { Clock } from "lucide-react";

import { EXAM_DURATION_SECONDS, formatDuration } from "@/lib/quizUtils";

interface CountdownRingProps {
  secondsLeft: number;
  total?: number;
  color: string;
}

export function CountdownRing({ secondsLeft, total = EXAM_DURATION_SECONDS, color }: CountdownRingProps) {
  const size = 56;
  const stroke = 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.max(0, secondsLeft) / total;
  const offset = circumference - percentage * circumference;
  const urgent = secondsLeft <= 300;
  const timerColor = urgent ? "var(--danger)" : color;

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative shrink-0">
        <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-muted" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={timerColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s" }}
          />
        </svg>
        <Clock size={14} className="absolute inset-0 m-auto" style={{ color: timerColor }} />
      </div>
      <div className="leading-tight">
        <p className="text-xs font-bold tabular-nums" style={{ color: timerColor }}>
          {formatDuration(secondsLeft)}
        </p>
        <p className="text-[10px] text-muted-foreground">{urgent ? "الوقت ينفد" : "الوقت المتبقي"}</p>
      </div>
    </div>
  );
}
