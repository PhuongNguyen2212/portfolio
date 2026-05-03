import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Ticker } from "@/components/ui/Ticker";
import { OWNER_NAME } from "@/lib/utils";

const TICKER_ITEMS = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "React",
  "Node.js",
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 sm:px-6 md:px-10">
        <RevealOnScroll>
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.35em] text-gold/80 sm:text-xs sm:tracking-[0.4em]">
            <span className="h-px w-8 bg-gold/60 sm:w-10" />
            A portfolio in four acts
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <h1 className="font-cormorant text-[clamp(3rem,12vw,9rem)] font-light leading-[0.95] tracking-tight text-white">
            {OWNER_NAME.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} className="block">
                {i === 1 ? (
                  <span className="italic text-gold">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={260}>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base md:mt-10 md:text-lg">
            A developer crafting cinematic, performant web experiences. Currently
            shaping interfaces with{" "}
            <span className="text-white">Next.js</span>,{" "}
            <span className="text-white">TypeScript</span> and a stubborn love
            for serif typography.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-12">
            <Button href="#projects" className="w-full sm:w-auto">
              View selected work →
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Get in touch
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={560}>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:mt-20 sm:gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                Now
              </p>
              <p className="mt-2 font-cormorant text-xl text-white/80 sm:text-2xl">
                Building <span className="italic text-gold">phuong.dev</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                Based in
              </p>
              <p className="mt-2 font-cormorant text-xl text-white/80 sm:text-2xl">
                Brisbane, AU
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-20 sm:mt-24">
        <Ticker items={TICKER_ITEMS} />
      </div>
    </section>
  );
}
