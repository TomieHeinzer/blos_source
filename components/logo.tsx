import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7", className)} aria-hidden="true">
      <circle cx="8.6" cy="6.1" r="3.5" fill="currentColor" />
      <rect x="5.2" y="9" width="6.8" height="19.4" rx="1.4" fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.3 18.6a8.2 8.2 0 1 0 16.4 0 8.2 8.2 0 1 0-16.4 0zm4.1 0a4.1 4.1 0 1 1 8.2 0 4.1 4.1 0 1 1-8.2 0z"
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
    <span className={cn("inline-flex items-center gap-1.5 text-[#1c1917]", className)}>
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
