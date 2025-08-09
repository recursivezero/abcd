import type { AlphabetDataset } from "@/types/alphabet";

const professionData = [
  { letter: "A", text: "Astronaut", emoji: "🚀", description: "Explores outer space!" },
  { letter: "B", text: "Baker", emoji: "🍞", description: "Makes yummy breads!" },
  { letter: "C", text: "Chef", emoji: "🍳", description: "Cooks delicious meals!" },
  { letter: "D", text: "Doctor", emoji: "⚕️", description: "Helps sick people!" },
  { letter: "E", text: "Engineer", emoji: "🛠️", description: "Builds cool machines!" },
  { letter: "F", text: "Fire Fighter", emoji: "🚒", description: "Saves people fires!" },
  { letter: "G", text: "Gardener", emoji: "🌱", description: "Grows beautiful plants!" },
  { letter: "H", text: "Hair Dresser", emoji: "💇", description: "Cuts styles hair!" },
  { letter: "I", text: "Inventor", emoji: "🧪", description: "Creates new things!" },
  { letter: "J", text: "Judge", emoji: "⚖️", description: "Makes fair decisions!" },
  { letter: "K", text: "Knight", emoji: "⚔️", description: "Old-time armor hero!" },
  { letter: "L", text: "Librarian", emoji: "📚", description: "Loves books stories!" },
  { letter: "M", text: "Mail Carrier", emoji: "📦", description: "Delivers letters packages!" },
  { letter: "N", text: "Nurse", emoji: "⚕️", description: "Cares for patients!" },
  { letter: "O", text: "Optician", emoji: "👓", description: "Helps eyes see!" },
  { letter: "P", text: "Pilot", emoji: "✈️", description: "Flies airplanes sky!" },
  { letter: "Q", text: "Queen", emoji: "👑", description: "Rules kingdom kindly!" },
  { letter: "R", text: "Reporter", emoji: "📰", description: "Tells news stories!" },
  { letter: "S", text: "Scientist", emoji: "🔬", description: "Discovers new facts!" },
  { letter: "T", text: "Teacher", emoji: "📝", description: "Helps kids learn!" },
  { letter: "U", text: "Umpire", emoji: "⚾", description: "Decides sports rules!" },
  { letter: "V", text: "Veterinarian", emoji: "🐶", description: "Helps animals healthy!" },
  { letter: "W", text: "Waiter", emoji: "🍽️", description: "Serves food tables!" },
  { letter: "X", text: "X-ray Tech", emoji: "🦴", description: "Takes bone pictures!" },
  { letter: "Y", text: "Yoga Instructor", emoji: "🧘", description: "Teaches calm stretching!" },
  { letter: "Z", text: "Zookeeper", emoji: "🦁", description: "Cares for animals!" }
];

export const PROFESSION_DATASETS: AlphabetDataset = {
  category: "Professions",
  description: "Cool careers kids can dream about!",
  icon: "👔",
  data: professionData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};
