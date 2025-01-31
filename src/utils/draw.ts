let BASE_URL = "http://localhost:4321/draw";
let IMAGE_DIR = "/images/background";

if (import.meta.env.PROD) {
  BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas";
  IMAGE_DIR = "https://d2fcibdfky04dz.cloudfront.net/background";
}

export const colorBox = [
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

export const htmlPageNames = [
  "about",
  "canvas",
  "draw",
  "hide-n-seek",
  "math",
  "theme"
];

export const numberBox: Record<number, string> = {
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

export const fontBox = [
  "boisuStroke",
  "atkinson",
  "sportrop",
  "Ananda",
  "boisuStroke",
  "MudraMohta",
  "Roboto"
];

export { BASE_URL, IMAGE_DIR };
