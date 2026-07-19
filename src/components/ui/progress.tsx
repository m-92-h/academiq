"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Progress({ className, value, dir, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & { dir?: "rtl" | "ltr" }) {
  const filled = value || 0;
  const translate = dir === "rtl" ? `translateX(${100 - filled}%)` : `translateX(-${100 - filled}%)`;
  return (
    <ProgressPrimitive.Root data-slot="progress" dir={dir} className={cn("relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted", className)} {...props}>
      <ProgressPrimitive.Indicator data-slot="progress-indicator" className="size-full flex-1 bg-primary transition-all" style={{ transform: translate }} />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
