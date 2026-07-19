import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { OptionKey } from "@/hooks/useQuiz";

interface OptionButtonProps {
  optionKey: OptionKey;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
  color: string;
}

export function OptionButton({ optionKey, text, isSelected, onSelect, color }: OptionButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onSelect}
      className={cn("h-auto w-full justify-start gap-4 rounded-xl border p-4 text-sm font-bold whitespace-normal", "hover:bg-muted/60 active:scale-[0.99]", isSelected && "bg-muted")}
      style={{
        borderColor: isSelected ? color : undefined,
        backgroundColor: isSelected ? `${color}10` : undefined,
      }}
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-black"
          style={{
            backgroundColor: isSelected ? color : "hsl(215 16% 65%)",
            color: "#fff",
          }}
        >
          {optionKey}
        </span>
        <span className="min-w-0 leading-relaxed text-foreground">{text}</span>
      </span>
    </Button>
  );
}
