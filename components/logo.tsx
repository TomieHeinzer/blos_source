import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7", className)} aria-hidden="true">
      <circle cx="8.2" cy="6.5" r="3" fill="currentColor" />
      <rect x="6.3" y="9.2" width="3.8" height="18" rx="1.9" fill="currentColor" />
      <rect x="9.2" y="14.6" width="6.2" height="2.5" rx="1.25" fill="currentColor" />
      <path
        d="M14 13.9a6.6 6.6 0 1 1 0 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  wordClassName,
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[#2a221c]", className)}>
      <Mark />
      <span
        className={cn(
          "font-[family-name:var(--font-outfit)] text-[1.7rem] font-medium leading-none tracking-[-0.06em]",
          wordClassName,
        )}
      >
        blos
      </span>
    </span>
  );
}
