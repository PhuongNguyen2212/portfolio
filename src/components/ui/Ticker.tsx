import { cn } from "@/lib/utils";

interface TickerProps {
  items: readonly string[];
  className?: string;
}

export function Ticker({ items, className }: TickerProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-film-dark py-6",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker gap-12 whitespace-nowrap">
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="font-cormorant text-3xl italic text-white/40 sm:text-4xl md:text-5xl"
          >
            {item}
            <span className="ml-12 text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
