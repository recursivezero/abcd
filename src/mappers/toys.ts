import type { AlphabetDataset } from "@/types/alphabet";

const toyData = [
  { letter: "A", text: "Action Figure", emoji: "🦸", description: "Hero toy for adventures" },
  { letter: "B", text: "Ball", emoji: "⚽", description: "Bouncy plaything" },
  { letter: "C", text: "Crayons", emoji: "🖍️", description: "Colorful drawing sticks" },
  { letter: "D", text: "Doll", emoji: "👧", description: "Cuddly pretend friend" },
  { letter: "E", text: "Etch A Sketch", emoji: "✏️", description: "Magic drawing screen" },
  { letter: "F", text: "Frisbee", emoji: "🥏", description: "Flying disc toy" },
  { letter: "G", text: "Game Console", emoji: "🎮", description: "Electronic fun machine" },
  { letter: "H", text: "Hula Hoop", emoji: "🟢", description: "Spinning waist toy" },
  { letter: "I", text: "Ice Skates", emoji: "⛸️", description: "Slippery shoe toys" },
  { letter: "J", text: "Jack-in-the-Box", emoji: "🎪", description: "Surprise popping toy" },
  { letter: "K", text: "Kite", emoji: "🪁", description: "Flies in wind" },
  { letter: "L", text: "Lego", emoji: "🧱", description: "Building block fun" },
  { letter: "M", text: "Marble", emoji: "🔵", description: "Small glass ball" },
  { letter: "N", text: "Nerf Gun", emoji: "🔫", description: "Foam dart shooter" },
  { letter: "O", text: "Origami", emoji: "📄", description: "Paper folding art" },
  { letter: "P", text: "Puzzle", emoji: "🧩", description: "Picture pieces game" },
  { letter: "Q", text: "Quilt", emoji: "🛏️", description: "Snuggly blanket toy" },
  { letter: "R", text: "Robot", emoji: "🤖", description: "Moving machine friend" },
  { letter: "S", text: "Slinky", emoji: "🌀", description: "Springy stepping toy" },
  { letter: "T", text: "Teddy Bear", emoji: "🧸", description: "Soft cuddle buddy" },
  { letter: "U", text: "Uno Cards", emoji: "🃏", description: "Colorful number game" },
  { letter: "V", text: "Volleyball", emoji: "🏐", description: "Bouncy net game" },
  { letter: "W", text: "Water Gun", emoji: "🔫", description: "Squirting summer fun" },
  { letter: "X", text: "Xylophone", emoji: "🎼", description: "Musical rainbow bars" },
  { letter: "Y", text: "Yo-yo", emoji: "🪀", description: "Up-down spinning toy" },
  { letter: "Z", text: "Zoo Set", emoji: "🐘", description: "Animal figurines collection" }
];

export const TOY_DATASETS: AlphabetDataset = {
  category: "Toys",
  description: "Fun toys from A to Z!",
  icon: "🧸",
  data: toyData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};
