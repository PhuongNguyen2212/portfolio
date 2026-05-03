import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { OWNER_EMAIL, OWNER_GITHUB } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 md:px-10">
        <RevealOnScroll>
          <SectionDivider label="Act IV — Roll credits" />
        </RevealOnScroll>

        <RevealOnScroll delay={140}>
          <h2 className="mt-12 font-cormorant text-4xl font-light leading-[1.05] text-white sm:mt-14 sm:text-6xl md:text-7xl">
            Have a project that&apos;d benefit from{" "}
            <span className="italic text-gold">careful craft</span>?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={280}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            I&apos;m open to freelance, collaborations, and the kind of work
            where details actually matter. The fastest way to reach me is email.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={420}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href={`mailto:${OWNER_EMAIL}`}>Send an email →</Button>
            <Button href={OWNER_GITHUB} variant="ghost">
              View GitHub
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={560}>
          <p className="mt-14 break-all font-cormorant text-lg italic text-white/40 sm:mt-16 sm:text-2xl">
            {OWNER_EMAIL}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
