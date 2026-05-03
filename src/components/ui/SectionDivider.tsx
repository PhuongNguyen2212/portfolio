import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-6 text-xs uppercase tracking-[0.4em] text-white/40",
        className,
      )}
    >
      <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
      {label && <span className="text-gold/80">{label}</span>}
      <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
