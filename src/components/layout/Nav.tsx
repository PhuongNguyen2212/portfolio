"use client";

import { useEffect, useMemo, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { NAV_LINKS, OWNER_EMAIL, OWNER_HANDLE, cn } from "@/lib/utils";

export function Nav() {
  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.id), []);
  const active = useScrollSpy(sectionIds);
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-white/5 bg-film-black/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-10 md:py-5">
          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex items-center gap-2 font-cormorant text-lg tracking-wide text-white sm:text-xl"
          >
            <span className="text-gold transition-colors group-hover:text-gold-light">
              ◆
            </span>
            <span className="font-medium">{OWNER_HANDLE}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm tracking-wide transition-colors",
                      isActive
                        ? "text-gold"
                        : "text-white/60 hover:text-white",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold/80" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold hover:bg-gold/10 md:inline-flex"
            >
              Get in touch
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold/40 active:border-gold md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 right-0 h-px bg-current transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 h-px bg-current transition-all duration-300",
                    open
                      ? "top-1.5 -rotate-45 opacity-100"
                      : "top-1.5 opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 h-px bg-current transition-all duration-300",
                    open ? "top-1.5 opacity-0" : "bottom-0 opacity-100",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        <div
          className="h-px origin-left bg-linear-to-r from-gold via-gold-light to-transparent"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-film-black/95 backdrop-blur-2xl transition-opacity duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-12 pt-28">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-baseline gap-4 py-3 font-cormorant text-4xl transition-colors sm:text-5xl",
                      isActive
                        ? "text-gold"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={`mailto:${OWNER_EMAIL}`}
            onClick={closeMenu}
            className="block"
          >
            <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30">
              Get in touch
            </span>
            <span className="mt-2 block break-all font-cormorant text-xl italic text-gold">
              {OWNER_EMAIL}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
