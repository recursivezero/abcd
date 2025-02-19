import HomeIcon from "@/assets/icons/home.svg";
import RecordIcon from "@/assets/icons/record.svg";
import type { LinkProps } from "@/types";

export const APP_NAME = "Template";

export const NavbarLinks: LinkProps[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    icon: HomeIcon,
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
    icon: RecordIcon,
    isActive: true
  },
  {
    name: "English",
    title: "English",
    path: "/english",
    isActive: true
  },
  {
    name: "Typing",
    title: "Typing",
    path: "/typing",
    isActive: true
  },
  {
    name: "India",
    title: "India Map",
    path: "/map",
    isActive: true
  },
  {
    name: "Letter",
    title: "Letter Pad",
    path: "/letter",
    isActive: true
  },
  {
    name: "Feedback",
    title: "Feedback Form",
    path: "/feedback",
    isActive: true
  },
  { name: "crossword",
    title: "Crossword",
    path: "/crossword", 
    isActive: true }
];

export const FooterLinks: LinkProps[] = [
  {
    title: "Privacy Policy",
    path: "/privacy",
    isActive: true
  },
  {
    title: "Terms and Condition",
    path: "/terms",
    isActive: true
  }
];
