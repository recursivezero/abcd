import type { AlphabetDataset } from "@/types/alphabet";

const vehicleData = [
  { letter: "A", text: "Airplane", emoji: "✈️", description: "Flies high in sky!" },
  { letter: "B", text: "Bus", emoji: "🚌", description: "Takes kids to school!" },
  { letter: "C", text: "Car", emoji: "🚗", description: "Family rides in it!" },
  { letter: "D", text: "Dump Truck", emoji: "🚚", description: "Carries heavy dirt loads!" },
  { letter: "E", text: "Excavator", emoji: "🔧", description: "Digs deep into ground!" },
  { letter: "F", text: "Fire Truck", emoji: "🚒", description: "Puts out big fires!" },
  { letter: "G", text: "Glider", emoji: "🪂", description: "Silent flying no-engine plane!" },
  { letter: "H", text: "Helicopter", emoji: "🚁", description: "Hovers and spins above!" },
  { letter: "I", text: "Ice Cream Truck", emoji: "🍦", description: "Plays music sells treats!" },
  { letter: "J", text: "Jeep", emoji: "🚙", description: "Off-road adventure vehicle!" },
  { letter: "K", text: "Kayak", emoji: "🛶", description: "Paddled boat for rivers!" },
  { letter: "L", text: "Limousine", emoji: "🚘", description: "Extra-long fancy party car!" },
  { letter: "M", text: "Motorcycle", emoji: "🏍️", description: "Two-wheeled speedy ride!" },
  { letter: "N", text: "Navy Ship", emoji: "🚢", description: "Floats and protects seas!" },
  { letter: "O", text: "Off-Roader", emoji: "🚜", description: "Drives on bumpy trails!" },
  { letter: "P", text: "Police Car", emoji: "🚓", description: "Catches bad guys fast!" },
  { letter: "Q", text: "Quad Bike", emoji: "🏎️", description: "Four-wheeled muddy fun!" },
  { letter: "R", text: "Rocket", emoji: "🚀", description: "Blasts off into space!" },
  { letter: "S", text: "Submarine", emoji: "🛸", description: "Dives deep under ocean!" },
  { letter: "T", text: "Train", emoji: "🚂", description: "Choo-choo on tracks!" },
  { letter: "U", text: "Unicycle", emoji: "🎪", description: "One-wheeled circus bike!" },
  { letter: "V", text: "Van", emoji: "🚐", description: "Carries lots of people!" },
  { letter: "W", text: "Wheelbarrow", emoji: "🧰", description: "Helps gardeners move dirt!" },
  { letter: "X", text: "X-ray Van", emoji: "🏥", description: "Checks inside things secretly!" },
  { letter: "Y", text: "Yacht", emoji: "⛵", description: "Fancy boat for sailing!" },
  { letter: "Z", text: "Zeppelin", emoji: "🎈", description: "Giant old flying balloon!" }
];

export const VEHICLE_DATASETS: AlphabetDataset = {
  category: "hindi",
  description: "Fun transportation from A to Z!",
  icon: "🚙",
  data: vehicleData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};
