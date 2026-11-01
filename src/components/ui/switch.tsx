import * as React from "react";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef<
  HTMLButtonElement,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => onCheckedChange?.(!checked)}
    className={cn(
      "inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:opacity-40",
      checked ? "bg-primary justify-end" : "bg-surface-2 justify-start",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "pointer-events-none block size-5 rounded-full transition-colors",
        checked ? "bg-primary-fg" : "bg-fg",
      )}
    />
  </button>
));
Switch.displayName = "Switch";
