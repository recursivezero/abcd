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
