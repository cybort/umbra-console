import { cn } from "@/lib/utils";

export function EclipseMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-primary", className)} aria-hidden>
      <circle cx="11" cy="12" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.2" cy="12" r="6.1" fill="currentColor" />
    </svg>
  );
}

export function GraphMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-primary", className)} aria-hidden>
      <path
        d="M4 16.5 9 11l3.5 3.5L20 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M4 19h16" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
