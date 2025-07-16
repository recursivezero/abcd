import type { AlphabetDataset } from "@/types/alphabet";

const actionsData = [
  { letter: "A", text: "Act", emoji: "🎭", description: "Pretend to be!" },
  { letter: "B", text: "Bounce", emoji: "🏀", description: "Jump up down!" },
  { letter: "C", text: "Clap", emoji: "👏", description: "Hands make noise!" },
  { letter: "D", text: "Dance", emoji: "💃", description: "Move to music!" },
  { letter: "E", text: "Eat", emoji: "🍎", description: "Yummy food bite!" },
  { letter: "F", text: "Fly", emoji: "🕊️", description: "Soar like bird!" },
  { letter: "G", text: "Giggle", emoji: "😆", description: "Little happy laugh!" },
  { letter: "H", text: "Hop", emoji: "🐰", description: "Jump one foot!" },
  { letter: "I", text: "Imagine", emoji: "💭", description: "Think creative thoughts!" },
  { letter: "J", text: "Jump", emoji: "🦘", description: "Spring high air!" },
  { letter: "K", text: "Kick", emoji: "⚽", description: "Hit ball foot!" },
  { letter: "L", text: "Laugh", emoji: "😂", description: "Big happy sound!" },
  { letter: "M", text: "March", emoji: "🥁", description: "Walk like soldier!" },
  { letter: "N", text: "Nod", emoji: "👍", description: "Move head yes!" },
  { letter: "O", text: "Open", emoji: "🚪", description: "Unlock door wide!" },
  { letter: "P", text: "Paint", emoji: "🎨", description: "Color with brush!" },
  { letter: "Q", text: "Quiet", emoji: "🤫", description: "Shhh no noise!" },
  { letter: "R", text: "Run", emoji: "🏃", description: "Move feet fast!" },
  { letter: "S", text: "Sing", emoji: "🎤", description: "Make music voice!" },
  { letter: "T", text: "Twirl", emoji: "💫", description: "Spin around fun!" },
  { letter: "U", text: "Unwrap", emoji: "🎁", description: "Open gift surprise!" },
  { letter: "V", text: "Visit", emoji: "🏠", description: "Go see someone!" },
  { letter: "W", text: "Wave", emoji: "👋", description: "Hello hand move!" },
  { letter: "X", text: "Xerox", emoji: "📄", description: "Copy paper duplicate!" },
  { letter: "Y", text: "Yell", emoji: "🗣️", description: "Say it loud!" },
  { letter: "Z", text: "Zoom", emoji: "🚀", description: "Move super fast!" }
];

export const ACTION_DATASETS: AlphabetDataset = {
  category: "Professions",
  description: "Movement verbs to get kids active!",
  icon: "🏃",
  data: actionsData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};
