import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    num: "I",
    title: "phuong.dev",
    description:
      "This very portfolio. A cinema-styled showcase exploring serif typography, restrained motion and a dark gold palette.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "Completed",
    liveUrl: "https://phuong-dev.vercel.app",
    githubUrl: "https://github.com/PhuongNguyen2212/portfolio",
    gradient: "from-[#1A0F00] to-[#3A2410]",
  },
  {
    id: 2,
    num: "II",
    title: "Lumos Studio",
    description:
      "A movie discovery platform with personalized lists, ratings and trailers. Powered by the TMDB API.",
    tags: ["React", "TypeScript", "TMDB API"],
    status: "Building",
    liveUrl: "https://lumos-studio-rust.vercel.app/",
    githubUrl: "https://github.com/PhuongNguyen2212/lumos-studio",
    gradient: "from-[#0A0A14] to-[#1F0A2A]",
  },
  {
    id: 3,
    num: "III",
    title: "Lumen Notes",
    description:
      "A markdown-first note app focused on speed and elegance. Local-first sync coming next quarter.",
    tags: ["Next.js", "IndexedDB", "Tailwind"],
    status: "Building",
    gradient: "from-[#0F1012] to-[#2A2515]",
  },
  {
    id: 4,
    num: "IV",
    title: "Astrolog",
    description:
      "A learning journal that tracks daily progress with interactive timelines and skill curves.",
    tags: ["React", "TypeScript", "Framer Motion"],
    status: "Coming Soon",
    gradient: "from-[#0A1015] to-[#102530]",
  },
];
