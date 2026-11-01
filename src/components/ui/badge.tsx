import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-1.5 py-0.5 text-2xs font-medium tracking-wide",
  {
    variants: {
      tone: {
        default: "bg-surface-2 text-muted",
        crit: "bg-crit/15 text-crit",
        high: "bg-high/15 text-high",
        med: "bg-med/15 text-med",
        low: "bg-low/20 text-low",
        ok: "bg-ok/15 text-ok",
        primary: "bg-primary/15 text-primary",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
