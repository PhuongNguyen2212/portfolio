import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-film-black";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-film-black hover:bg-gold-light hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(184,150,62,0.4)] hover:shadow-[0_8px_24px_-8px_rgba(212,175,98,0.6)]",
  ghost:
    "border border-white/15 text-white/80 hover:border-gold/60 hover:text-gold",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
