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
