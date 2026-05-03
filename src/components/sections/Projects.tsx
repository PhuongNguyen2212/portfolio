import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const statusTone: Record<ProjectStatus, string> = {
  Completed: "bg-gold/15 text-gold",
  Building: "bg-white/10 text-white/80",
  "Coming Soon": "bg-white/5 text-white/40",
};

export function Projects() {
  return (
    <section id="projects" className="relative bg-film-dark py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <RevealOnScroll>
          <SectionDivider label="Act III — Selected work" />
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:mt-12 md:flex-row md:items-end">
            <h2 className="font-cormorant text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Things I&apos;ve{" "}
              <span className="italic text-gold">actually shipped</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/50 md:text-right">
              A small reel of side projects, experiments, and one or two things
              still in the cutting room.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll
              key={project.id}
              delay={i * 100}
              as="li"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-film-card transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_60px_-20px_rgba(184,150,62,0.25)]"
            >
              <div
                className={cn(
                  "relative aspect-[16/9] w-full overflow-hidden bg-linear-to-br",
                  project.gradient,
                )}
              >
                <span className="absolute left-5 top-5 font-cormorant text-6xl italic leading-none text-white/15 transition-colors duration-500 group-hover:text-gold/30 sm:left-6 sm:top-6 sm:text-7xl">
                  {project.num}
                </span>
                <span
                  className={cn(
                    "absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] sm:right-6 sm:top-6",
                    statusTone[project.status],
                  )}
                >
                  {project.status}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-film-card to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-6 md:p-8">
                <h3 className="font-cormorant text-2xl text-white sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-4 pt-4 text-xs uppercase tracking-[0.25em]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold transition-colors hover:text-gold-light"
                    >
                      Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-white/30">In production</span>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
