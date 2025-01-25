import type { LinkProps } from "@/types";

export const APP_NAME = "Template";

export const NavbarLinks: LinkProps[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    isActive: true
  },
  {
    name: "About",
    title: "About",
    path: "/about",
    isActive: true
  },
  {
    name: "Varnmala",
    title: "Varnmala",
    path: "/varnmala",
    isActive: true
  },
  {
    name: "Panel",
    title: "Panel",
    path: "/panel",
    isActive: true
  },
  {
    name: "IndiaMap",
    title: "IndiaMap",
    path: "/indiaMap",
    isActive: true
  },
  {
    name: "Capital",
    title: "Capital",
    path: "/capitals",
    isActive: true
  },
  {
    name: "HideNSeek",
    title: "HideNSeek",
    path: "/hidenseek",
    isActive: true
  },
  {
    name: "Canvas",
    title: "Canvas",
    path: "/canvas",
    isActive: true
  },
  {
    name: "Math",
    title: "Math",
    path: "/math",
    isActive: true
  },
];

export const FooterLinks: LinkProps[] = [
  {
    title: "privacy Policy",
    path: "/privacy",
    isActive: true
  },
  {
    title: "Terms and Condition",
    path: "/terms",
    isActive: true
  }
];
