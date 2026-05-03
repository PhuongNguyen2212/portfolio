import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { skills } from "@/data/skills";
import type { SkillLevel } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const levelTone: Record<SkillLevel, string> = {
  Solid: "text-gold border-gold/30",
  Intermediate: "text-white/80 border-white/20",
  Learning: "text-white/50 border-white/10",
  "In Progress": "text-white/60 border-white/15",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <RevealOnScroll>
          <SectionDivider label="Act II — Toolkit" />
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:mt-12 md:flex-row md:items-end">
            <h2 className="font-cormorant text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Skills,{" "}
              <span className="italic text-gold">honestly rated</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/50 md:text-right">
              Levels reflect how comfortable I am shipping production code. No
              inflation, no checkboxes — just where I actually stand.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <RevealOnScroll
              key={skill.id}
              delay={i * 80}
              as="li"
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-film-card p-6 transition-colors duration-500 hover:border-gold/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    0{skill.id}
                  </p>
                  <h3 className="mt-2 font-cormorant text-3xl text-white">
                    {skill.name}
                  </h3>
                </div>
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em]",
                    levelTone[skill.level],
                  )}
                >
                  {skill.level}
                </span>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline justify-between text-xs text-white/40">
                  <span className="uppercase tracking-[0.2em]">Confidence</span>
                  <span className="font-cormorant text-2xl text-gold">
                    {skill.percent}
                    <span className="text-base text-white/30">%</span>
                  </span>
                </div>
                <div className="mt-3 h-px overflow-hidden bg-white/5">
                  <div
                    className="h-full bg-linear-to-r from-gold/60 via-gold to-gold-light transition-transform duration-1000 ease-out group-hover:bg-gold-light"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
