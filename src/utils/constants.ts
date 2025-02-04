import PlaceholderIcon from "@/assets/icons/placeholder.svg";
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
    icon: PlaceholderIcon,
    isActive: true
  },
  {
    name: "Varnmala",
    title: "Varnmala",
    path: "/varnmala",
    icon: PlaceholderIcon,
    isActive: true
  },
  {
    name: "Panel",
    title: "Panel",
    path: "/panel",
    icon: PlaceholderIcon,
    isActive: true
  },
  {
    name: "Reader",
    title: "Reader",
    path: "/reader",
    icon: PlaceholderIcon,
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
    name: "Hindi",
    title: "Hindi",
    path: "/hindi",
    icon: PlaceholderIcon,
    isActive: true
  },
  {
    name: "Typing",
    title: "Typing",
    path: "/typing",
    icon: PlaceholderIcon,
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
