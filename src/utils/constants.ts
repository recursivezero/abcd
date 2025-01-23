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
    name: "Reader",
    title: "Reader",
    path: "/reader",
    isActive: true
  },
  {
    name: "Record",
    title: "Record",
    path: "/record",
    isActive: true
  },
  {
    name: "Hindi",
    title: "Hindi",
    path: "/hindi",
    isActive: true
  },
  {
    name: "Typing",
    title: "Typing",
    path: "/typing",
    isActive: true
  }
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
