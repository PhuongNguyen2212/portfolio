import type { NavLink } from "@/types/portfolio";

type ClassValue = string | number | null | false | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE_URL = "https://phuong-dev.vercel.app";

export const OWNER_NAME = "Tran Dinh Phuong Nguyen";
export const OWNER_HANDLE = "phuong.dev";
export const OWNER_EMAIL = "dinhphuong78945@gmail.com";
export const OWNER_GITHUB = "https://github.com/PhuongNguyen2212";

export const NAV_LINKS: readonly NavLink[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;
