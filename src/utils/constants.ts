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
    name: "Barahkhadi",
    title: "Barahkhadi",
    path: "/barahkhadi",
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
    name: "Alphabets",
    title: "Alphabets",
    path: "/alphabets",
    isActive: true
  },
  {
    name: "India",
    title: "India Map",
    path: "/map",
    isActive: true
  },
  {
    name: "Societree",
    title: "Clan",
    path: "/clan",
    isActive: true
  },
  {
    name: "Feedback",
    title: "Feedback Form",
    path: "/feedback",
    isActive: true
  }
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
  },
  {
    title: "Blogs",
    path: "/blog",
    isActive: true
  }
];

export const colors = [
  "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", // Blue
  "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", // Sky
  "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)", // Indigo
  "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)", // Teal
  "linear-gradient(135deg, #34d399 0%, #10b981 100%)" // Emerald
];
