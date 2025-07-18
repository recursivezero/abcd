export const getRandomValue = <T>(arr: T[] = []): T => arr[Math.floor(Math.random() * arr.length)];

// Generate unicode characters for Hindi and Kannada
export const generateAlphabet = (startCode: number, length: number, extraKeys: number[] = []): string[] =>
  Array.from({ length }, (_, i) => String.fromCodePoint(startCode + i)).filter(
    (_, index) => !extraKeys.includes(startCode + index)
  );

// Function to generate random colors with good contrast
export const getRandomColor = () => {
  // Changing the color generation for better visibility in help mode
  // Using more pastel colors with higher lightness and lower alpha
  const hue = Math.floor(Math.random() * 360); // Random hue (0-359)
  const saturation = 80 + Math.floor(Math.random() * 15);
  const lightness = 70 + Math.floor(Math.random() * 15);
  const alpha = 0.7;
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};

export const generateRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

export const getFlagEmoji = (countryCode: string = "IN") => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const sortById = (a: any, b: any) => {
  // Compare as numbers if both ids are numeric, else as strings
  const aId = typeof a.id === "number" ? a.id : Number(a.id);
  const bId = typeof b.id === "number" ? b.id : Number(b.id);
  if (!isNaN(aId) && !isNaN(bId)) {
    return aId - bId;
  }
  return String(a.id).localeCompare(String(b.id));
};

export const getInitials = (name: string): string => {
  let initials = "";
  let prevChar = " ";

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (prevChar === " " && char !== " ") {
      initials += char.toUpperCase();
      if (initials.length === 2) break; // Stop early if we have 2 initials
    }
    prevChar = char;
  }

  return initials;
};
