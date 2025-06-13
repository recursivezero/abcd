import HomeIcon from "@/assets/icons/home.svg";
import RecordIcon from "@/assets/icons/record.svg";
import type { LinkProps } from "@/types/index.ts";

export const APP_NAME = "Template";

let BASE_URL = "http://localhost:4321";
let IMAGE_DIR = "/assets/images/background";

if (import.meta.env.PROD) {
  BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas";
  IMAGE_DIR = "/assets/images/background";
}

const colorBox = [
  "#f00000",
  "#38c138",
  "#0a6de8",
  "#e69110",
  "#1b1818",
  "#632363",
  "#f1e904",
  "#102923",
  "#000000",
  "#d4d4d4"
];

const fontColor = [
  "#FFFFFF",
  "#1A1A1A",
  "#0D47A1",
  "#F44336",
  "#4CAF50",
  "#FFEB3B",
  "#9C27B0",
  "#795548",
  "#00BCD4",
  "#FF9800",
  "#607D8B",
  "#E0E0E0"
];

const numberBox: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};

const fontBox = ["Arial" , "Verdana" , "Trebuchet MS" , "Times New Roman","Georgia","Courier New","Comic Sans MS","Impact","boisuStroke", "BungeeSpice", "atkinson", "sportrop", "MudraMohta", "Roboto"];

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
    name: "Record",
    title: "Record",
    path: "/record",
    icon: RecordIcon,
    isActive: false
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
    name: "Vedic",
    title: "Vedic Time",
    path: "/vedic",
    isActive: true
  },
  {
    name: "Crossword",
    title: "English Cross words",
    path: "/crossword",
    isActive: true
  },
  {
    name: "Societree",
    title: "Clan",
    path: "/clan",
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
    path: "/selection",
    isActive: true
  },
  {
    name: "Math",
    title: "Math",
    path: "/math",
    isActive: true
  },
  {
    name: "Indic",
    title: "Indic",
    path: "/kannada",
    isActive: true
  },
  {
    name: "Draw",
    title: "Draw",
    path: "/draw",
    isActive: true
  },
  {
    name: "Cards",
    title: "Cards",
    path: "/Cards",
    isActive: true
  },
  {
    name: "Numbers", 
    title: "Numbers", 
    path: "/numbers", 
    isActive: true
  },
  {
    name: "Glossary", 
    title: "Glossary", 
    path: "/glossary", 
    isActive: true
  },
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

export { BASE_URL, IMAGE_DIR };

export { colorBox, fontBox, fontColor, numberBox };
