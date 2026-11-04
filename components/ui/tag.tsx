import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const tones = {
  primary: {
    box: "bg-[#d4843a14] text-[#a85c22]",
    corner: "border-[#f0c49a]",
  },
  white: {
    box: "bg-white/10 text-white",
    corner: "border-white/70",
  },
} as const;

export function Tag({
  children,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof tones;
}) {
  const tone = tones[variant];
  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2",
          tone.corner,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2",
          tone.corner,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2",
          tone.corner,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2",
          tone.corner,
        )}
      />
      <span
        className={cn(
          "inline-flex items-center justify-center px-3 py-1 text-center text-sm font-semibold",
          tone.box,
        )}
      >
        {children}
      </span>
    </div>
  );
}
