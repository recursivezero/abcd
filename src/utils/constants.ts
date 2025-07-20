import HomeIcon from "@/assets/icons/home.svg";
import RecordIcon from "@/assets/icons/record.svg";
import type { LinkProps } from "@/types/index.ts";

export const APP_NAME = "abcdkbd";

let BASE_URL = "http://localhost:4321";
let IMAGE_DIR = "/assets/images/background";

if (import.meta.env.PROD) {
  BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas";
  IMAGE_DIR = "https://d2fcibdfky04dz.cloudfront.net/background";
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

const fontBox = [
  "Times New Roman",
  "Arial",
  "Verdana",
  "Trebuchet MS",
  "Georgia",
  "Courier New",
  "Comic Sans MS",
  "Impact",
  "boisuStroke",
  "BungeeSpice",
  "atkinson",
  "sportrop",
  "MudraMohta",
  "Roboto"
];

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
  {
    name: "Capital",
    title: "Capital",
    path: "/capital",
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
    title: "Cross words",
    path: "/crossword",
    isActive: true
  },

  {
    name: "HideNSeek",
    title: "Hide N Seek",
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
  {
    name: "Akshar",
    title: "Akshar",
    path: "/akshar",
    isActive: true
  },
  {
    name: "Draw",
    title: "Draw",
    path: "/draw",
    isActive: true
  },
  {
    name: "Gallery",
    title: "Gallery",
    path: "/gallery",
    isActive: true
  },
  {
    name: "Survey",
    title: "Survey",
    path: "/survey",
    isActive: false
  },
  {
    name: "Zodiac",
    title: "zodiac",
    path: "/zodiac",
    isActive: false
  },
  {
    name: "Nakshtra",
    title: "nakshtra",
    path: "/nakshtra",
    isActive: true
  },
  {
    name: "Societree",
    title: "Clan Explorer",
    path: "/clan",
    isActive: false
  },
  {
    name: "Stories",
    title: "Stories",
    path: "/stories",
    isActive: true
  },
  {
    name: "Poems",
    title: "Poems",
    path: "/poems",
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
    title: "Terms and Conditions",
    path: "/terms",
    isActive: true
  },
  {
    title: "Blog",
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

const fullEnglish = {
  weekday: "long",
  dayPeriod: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "numeric",
  calendar: "iso8601",
  timeZone: "Asia/Kolkata",
  timeZoneName: "short",
  formatMatcher: "basic",
  hourCycle: "h12"
};

const fullHindi = {
  weekday: "long",
  dayPeriod: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "numeric",
  calendar: "indian",
  timeZone: "Asia/Kolkata",
  numberingSystem: "deva",
  formatMatcher: "basic",
  hourCycle: "h12"
};

const styleOption = {
  dateStyle: "full",
  timeStyle: "long",
  calendar: "iso8601", // 'indian',
  /* numberingSystem: 'deva', */
  timeZone: "Asia/Kolkata",
  hour12: false,
  useGrouping: true,
  minimumIntegerDigits: 1
};
const englishVowels = ["a", "ā", "i", "ī", "u", "ū", "಍", "಍", "಍", "಍", "e", "ai", "಍", "಍", "o", "au"];
const englishConsonants = [
  "ka",
  "kha",
  "ga",
  "gha",
  "ṅa",
  "ca",
  "cha",
  "ja",
  "jha",
  "ña",
  "ṭa",
  "ṭha",
  "ḍa",
  "ḍha",
  "ṇa",
  "ta",
  "tha",
  "da",
  "dha",
  "na",
  "಍",
  "pa",
  "pha",
  "ba",
  "bha",
  "ma",
  "ya",
  "ra",
  "಍",
  "la",
  "಍",
  "಍",
  "va",
  "śa",
  "ṣa",
  "sa",
  "ha"
];
const tithiNames = [
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "पूर्णिमा",
  "अमावस्या"
];

export { BASE_URL, englishConsonants, englishVowels, fullEnglish, fullHindi, IMAGE_DIR, styleOption, tithiNames };

export { colorBox, fontBox, fontColor, numberBox };
