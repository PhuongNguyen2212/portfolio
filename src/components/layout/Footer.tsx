import {
  OWNER_EMAIL,
  OWNER_GITHUB,
  OWNER_HANDLE,
  OWNER_NAME,
} from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-film-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:gap-8 sm:px-6 sm:py-12 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3 font-cormorant text-2xl text-white">
          <span className="text-gold">◆</span>
          <span className="font-medium">{OWNER_HANDLE}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.25em] text-white/40">
          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="transition-colors hover:text-gold"
          >
            Email
          </a>
          <a
            href={OWNER_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            GitHub
          </a>
          <a
            href="#hero"
            className="transition-colors hover:text-gold"
          >
            Back to top
          </a>
        </div>

        <p className="text-xs tracking-wide text-white/30">
          © {year} {OWNER_NAME}. Crafted with intent.
        </p>
      </div>
    </footer>
  );
}
