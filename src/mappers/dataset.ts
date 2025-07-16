import { ACTION_DATASETS } from "@/mappers/actions";
import { PROFESSION_DATASETS } from "@/mappers/profession";
import { VEHICLE_DATASETS } from "@/mappers/vehicles";
import type { AlphabetDataset } from "@/types/alphabet";

/** Body Parts */
const bodyPartData = [
  { letter: "A", text: "Arm", description: "Arm (Upper limb)", emoji: "💪" },
  { letter: "B", text: "Belly", description: "Belly (Stomach area)", emoji: "🤰" },
  { letter: "C", text: "Cheek", description: "Cheek (Side of the face)", emoji: "😊" },
  { letter: "D", text: "Diaphragm", description: "Muscle that helps you breathe!", emoji: "🌬️" },
  { letter: "E", text: "Ear", description: "Ear (Hearing organ)", emoji: "👂" },
  { letter: "F", text: "Finger", description: "Finger (Digit of the hand)", emoji: "☝️" },
  { letter: "G", text: "Gum", description: "Gum (Mouth tissue)", emoji: "🦷" },
  { letter: "H", text: "Hand", description: "Hand (End of the arm)", emoji: "✍" },
  { letter: "I", text: "Iris", description: "Iris (Colored part of the eye)", emoji: "👁️" },
  { letter: "J", text: "Jaw", description: "Jaw (Lower part of the face)", emoji: "🦷" },
  { letter: "K", text: "Knee", description: "Knee (Leg joint)", emoji: "🦵" },
  { letter: "L", text: "Lip", description: "Lip (Mouth part)", emoji: "👄" },
  { letter: "M", text: "Mouth", description: "Mouth (Opening in the face)", emoji: "👄" },
  { letter: "N", text: "Nose", description: "Nose (Smelling organ)", emoji: "👃" },
  { letter: "O", text: "Organ", description: "Organ (Internal body part)", emoji: "❤️" },
  { letter: "P", text: "Palm", description: "Palm (Inner hand)", emoji: "✋" },
  { letter: "Q", text: "Quick feet", description: "Quick feet (Movement for Q)", emoji: "🏃" },
  { letter: "R", text: "Rib", description: "Rib (Chest bone)", emoji: "🦴" },
  { letter: "S", text: "Shoulder", description: "Shoulder (Upper body)", emoji: "🤷" },
  { letter: "T", text: "Toe", description: "Toe (Foot digit)", emoji: "🦶" },
  { letter: "U", text: "Underarm", description: "Underarm (Armpit)", emoji: "🙆" },
  { letter: "V", text: "Voice", description: "Voice (Vocal cords)", emoji: "🗣️" },
  { letter: "W", text: "Waist", description: "Waist (Midsection)", emoji: "🩳" },
  { letter: "X", text: "X marks the spot", description: "X marks the spot (Belly button)", emoji: "❌" },
  { letter: "Y", text: "Yawn", description: "Yawn (Open mouth wide)", emoji: "🥱" },
  { letter: "Z", text: "Zzz", description: "Zzz (Pretend to sleep)", emoji: "😴" }
];

export const BODYPART_DATASETS: AlphabetDataset = {
  category: "body",
  description: "Common body parts for each letter of the alphabet.",
  icon: "🧍",
  data: bodyPartData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

const animalData = [
  { letter: "A", description: "A animal lives in water", text: "Alligator" },
  { letter: "D", description: "A domesticated canine", text: "Dog" },
  { letter: "B", description: "A small bird with blue feathers", text: "Bluebird" },
  { letter: "C", description: "A domestic feline", text: "Cat" },
  { letter: "E", description: "A large mammal with a trunk", text: "Elephant" },
  { letter: "F", description: "A small, carnivorous mammal", text: "Fox" },
  { letter: "G", description: "A tall, long-necked herbivore", text: "Giraffe" },
  { letter: "H", description: "A large, mostly herbivorous mammal", text: "Hippo" },
  { letter: "I", description: "A slow-moving reptile", text: "Iguana" },
  { letter: "J", description: "A large feline native to the Americas", text: "Jaguar" },
  { letter: "K", description: "A marsupial known for its jumping ability", text: "Kangaroo" },
  { letter: "L", description: "A large, carnivorous feline", text: "Lion" },
  { letter: "M", description: "A small, intelligent primate", text: "Monkey" },
  { letter: "N", description: "A medium-sized whale with a long tusk", text: "Narwhal" },
  { letter: "O", description: "A sea creature with eight arms", text: "Octopus" },
  { letter: "P", description: "A flightless bird from Antarctica", text: "Penguin" },
  { letter: "Q", description: "A small, ground-dwelling bird", text: "Quail" },
  { letter: "R", description: "A small mammal known for its long ears", text: "Rabbit" },
  { letter: "S", description: "A legless reptile", text: "Snake" },
  { letter: "T", description: "A large, striped feline", text: "Tiger" },
  { letter: "U", description: "A type of monkey found in South America", text: "Uakari" },
  { letter: "V", description: "A scavenging bird known for its bald head", text: "Vulture" },
  { letter: "W", description: "A large, carnivorous mammal", text: "Wolf" },
  { letter: "X", description: "A fish known for its X-ray-like transparency", text: "X-Ray Fish" },
  { letter: "Y", description: "A domesticated member of the bovine family", text: "Yak" },
  { letter: "Z", description: "A black-and-white striped mammal", text: "Zebra" }
];

export const ANIMAL_DATASETS: AlphabetDataset = {
  category: "animals",
  description: "Animal Alphabet",
  icon: "🐾",
  data: animalData
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map((item, index) => ({
      id: index + 1,
      code: 65 + index, // ASCII code for 'A' is 65
      ...item
    }))
};

/* birds data */

const birdData = [
  { letter: "A", description: "A small, colorful bird", text: "Acanthis" },
  { letter: "B", description: "A small, insect-eating bird", text: "Bunting" },
  { letter: "C", description: "A bird known for its distinctive call", text: "Crow" },
  { letter: "D", description: "A bird with a short, stocky body and a strong beak", text: "Dove" },
  { letter: "E", description: "A large bird of prey", text: "Eagle" },
  { letter: "F", description: "A bird known for its beautiful plumage", text: "Flamingo" },
  { letter: "G", description: "A bird with a long, curved beak", text: "Gull" },
  { letter: "H", description: "A bird with a strong, hooked beak", text: "Hawk" },
  { letter: "I", description: "A small, colorful bird often found in gardens", text: "Ibis" },
  { letter: "J", description: "A bird known for its distinctive song", text: "Jay" },
  { letter: "K", description: "A flightless bird from New Zealand", text: "Kiwi" },
  { letter: "L", description: "A bird known for its melodious song", text: "Lark" },
  { letter: "M", description: "A bird known for its ability to mimic sounds", text: "Mockingbird" },
  { letter: "N", description: "A bird known for its beautiful song", text: "Nightingale" },
  { letter: "O", description: "A bird with a long, slender neck", text: "Ostrich" },
  { letter: "P", description: "A large bird known for its impressive tail", text: "Peacock" },
  { letter: "Q", description: "A bird known for its colorful plumage", text: "Quetzal" },
  { letter: "R", description: "A bird with a long, curved beak", text: "Raven" },
  { letter: "S", description: "A small, insect-eating bird", text: "Sparrow" },
  { letter: "T", description: "A bird known for its striking plumage", text: "Toucan" },
  { letter: "U", description: "A bird with a long, slender body and a sharp beak", text: "Umbrellabird" },
  { letter: "V", description: "A scavenging bird known for its bald head", text: "Vulture" },
  { letter: "W", description: "A bird that builds intricate nests", text: "Weaver" },
  { letter: "X", description: "A bird known for its distinctive call", text: "Xenops" },
  { letter: "Y", description: "A bird with a long, slender body and a sharp beak", text: "Yellowthroat" },
  { letter: "Z", description: "A bird known for its striking plumage", text: "Zebra Finch" }
];

export const BIRDS_DATASETS: AlphabetDataset = {
  category: "birds",
  description: "Birds Alphabet",
  icon: "🐦",
  data: birdData
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map((item, index) => ({
      id: index + 1,
      code: 65 + index, // ASCII code for 'A' is 65
      ...item
    }))
};

/* nato */

export const natoData = [
  { letter: "A", description: "AL fah", text: "Alfa" },
  { letter: "B", description: "BRAH voh", text: "Bravo" },
  { letter: "C", description: "CHAR lee", text: "Charlie" },
  { letter: "D", description: "DELL tah", text: "Delta" },
  { letter: "E", description: "ECK oh", text: "Echo" },
  { letter: "F", description: "FOKS trot", text: "Foxtrot" },
  { letter: "G", description: "GOLF", text: "Golf" },
  { letter: "H", description: "ho TELL", text: "Hotel" },
  { letter: "I", description: "IN dee ah", text: "India" },
  { letter: "J", description: "JEW lee ETT", text: "Juliet" },
  { letter: "K", description: "KEY loh", text: "Kilo" },
  { letter: "L", description: "LEE mah", text: "Lima" },
  { letter: "M", description: "MIKE", text: "Mike" },
  { letter: "N", description: "no VEM ber", text: "November" },
  { letter: "O", description: "OSS cah", text: "Oscar" },
  { letter: "P", description: "pah PAH", text: "Papa" },
  { letter: "Q", description: "keh BECK", text: "Quebec" },
  { letter: "R", description: "ROW me oh", text: "Romeo" },
  { letter: "S", description: "see AIR rah", text: "Sierra" },
  { letter: "T", description: "TANG o", text: "Tango" },
  { letter: "U", description: "YOU nee form", text: "Uniform" },
  { letter: "V", description: "VIK tah", text: "Victor" },
  { letter: "W", description: "WISS key", text: "Whiskey" },
  { letter: "X", description: "ECKS ray", text: "X-ray" },
  { letter: "Y", description: "YANG key", text: "Yankee" },
  { letter: "Z", description: "ZOO loo", text: "Zulu" }
];
export const NATO_DATASETS: AlphabetDataset = {
  category: "nato",
  description: "NATO Phonetic Alphabet",
  icon: "🎖️",
  data: natoData
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map((item, index) => ({
      id: index + 1,
      code: 65 + index, // ASCII code for 'A' is 65
      ...item
    }))
};

/*Morse*/

const morseData = [
  { letter: "A", description: "Morse code for A", text: "•−" },
  { letter: "B", description: "Morse code for B", text: "−•••" },
  { letter: "C", description: "Morse code for C", text: "−•−•" },
  { letter: "D", description: "Morse code for D", text: "−••" },
  { letter: "E", description: "Morse code for E", text: "•" },
  { letter: "F", description: "Morse code for F", text: "••−•" },
  { letter: "G", description: "Morse code for G", text: "−−•" },
  { letter: "H", description: "Morse code for H", text: "••••" },
  { letter: "I", description: "Morse code for I", text: "••" },
  { letter: "J", description: "Morse code for J", text: "•−−−" },
  { letter: "K", description: "Morse code for K", text: "−•−" },
  { letter: "L", description: "Morse code for L", text: "•−••" },
  { letter: "M", description: "Morse code for M", text: "−−" },
  { letter: "N", description: "Morse code for N", text: "−•" },
  { letter: "O", description: "Morse code for O", text: "−−−" },
  { letter: "P", description: "Morse code for P", text: "•−−•" },
  { letter: "Q", description: "Morse code for Q", text: "−−•−" },
  { letter: "R", description: "Morse code for R", text: "•−•" },
  { letter: "S", description: "Morse code for S", text: "•••" },
  { letter: "T", description: "Morse code for T", text: "−" },
  { letter: "U", description: "Morse code for U", text: "••−" },
  { letter: "V", description: "Morse code for V", text: "•••−" },
  { letter: "W", description: "Morse code for W", text: "•−−" },
  { letter: "X", description: "Morse code for X", text: "−••−" },
  { letter: "Y", description: "Morse code for Y", text: "−•−−" },
  { letter: "Z", description: "Morse code for Z", text: "−−••" }
];

export const MORSE_DATASETS: AlphabetDataset = {
  category: "morse",
  description: "Learn the International Morse Code for the English alphabet.",
  icon: "⚫➖",
  data: morseData
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map((item, index) => ({
      id: index + 1,
      code: 65 + index, // ASCII code for 'A'
      ...item
    }))
};

/* Indian */

const indianData = [
  { letter: "A", description: "Ancient Indian mathematician and astronomer who calculated Pi", text: "Aryabhatta" },
  { letter: "B", description: "Creator deity in Hinduism", text: "Brahma" },
  { letter: "C", description: "Ancient Indian teacher, philosopher, and royal advisor", text: "Chanakya" },
  { letter: "D", description: "Hindu goddess of war, strength and protection", text: "Durga" },
  { letter: "E", description: "Skilled archer from the Mahabharata", text: "Eklavya" },
  { letter: "F", description: "Sacred animals in Indian mythology like Garuda and Nandi", text: "Fauna" },
  { letter: "G", description: "Elephant-headed deity known as remover of obstacles", text: "Ganesha" },
  { letter: "H", description: "Monkey deity known for strength, devotion and service", text: "Hanuman" },
  { letter: "I", description: "King of the gods and deity of lightning and thunder", text: "Indra" },
  { letter: "J", description: "Divine eagle who fought Ravana in the Ramayana", text: "Jatayu" },
  { letter: "K", description: "Divine incarnation of Vishnu and key figure in Bhagavad Gita", text: "Krishna" },
  { letter: "L", description: "Goddess of wealth, fortune and prosperity", text: "Lakshmi" },
  { letter: "M", description: "Tamil God also known as Kartikeya", text: "Murugan" },
  { letter: "N", description: "Divine sage famous for carrying news and gossip", text: "Narada" },
  { letter: "O", description: "Sacred sound and spiritual symbol in Indian religions", text: "Om" },
  { letter: "P", description: "Goddess of fertility, love and devotion", text: "Parvati" },
  { letter: "Q", description: "Historic minaret built by Qutb-ud-Din Aibak in Delhi", text: "Qutub Minar" },
  { letter: "R", description: "Seventh avatar of Vishnu and protagonist of the Ramayana", text: "Rama" },
  { letter: "S", description: "One of the principal deities, known as the destroyer", text: "Shiva" },
  { letter: "T", description: "Author who wrote the epic Ramcharitmanas", text: "Tulsidas" },
  { letter: "U", description: "Beautiful apsara (celestial nymph) created from Vishnu's thigh", text: "Urvashi" },
  { letter: "V", description: "Preserver deity with ten avatars including Rama and Krishna", text: "Vishnu" },
  { letter: "W", description: "Puppetry art form influenced by Indian epics and mythology", text: "Wayang" },
  { letter: "X", description: "Persian king who encountered Indian warriors and philosophers", text: "Xerxes" },
  { letter: "Y", description: "God of death and justice who judges souls", text: "Yama" },
  { letter: "Z", description: "Vedic astrology (Jyotish) with its unique zodiac system", text: "Zodiac" }
];

export const INDIAN_DATASETS: AlphabetDataset = {
  category: "indian",
  description: "Mythological Indian culture Alphabets",
  icon: "🕉️",
  data: indianData
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map((item, index) => ({
      id: index + 1,
      code: 65 + index,
      ...item
    }))
};

/*General*/

const generalData = [
  { letter: "A", description: "A sweet red fruit.", text: "Apple", emoji: "🍎" },
  { letter: "B", description: "A flying mammal that comes out at night.", text: "Bat", emoji: "🦇" },
  { letter: "C", description: "A small domesticated carnivorous mammal.", text: "Cat", emoji: "🐱" },
  { letter: "D", description: "A loyal pet that barks.", text: "Dog", emoji: "🐶" },
  { letter: "E", description: "A large animal with a trunk.", text: "Elephant", emoji: "🐘" },
  { letter: "F", description: "An animal that lives in water.", text: "Fish", emoji: "🐟" },
  { letter: "G", description: "A farm animal with horns and beard.", text: "Goat", emoji: "🐐" },
  { letter: "H", description: "A piece of clothing worn on the head.", text: "Hat", emoji: "🎩" },
  { letter: "I", description: "Frozen water used to cool drinks.", text: "Ice", emoji: "🧊" },
  { letter: "J", description: "A container used to hold water.", text: "Jug", emoji: "🏺" },
  { letter: "K", description: "A paper object that flies in the wind.", text: "Kite", emoji: "🪁" },
  { letter: "L", description: "A device that gives light.", text: "Lamp", emoji: "💡" },
  { letter: "M", description: "A bright object that shines at night.", text: "Moon", emoji: "🌙" },
  { letter: "N", description: "A home made by birds.", text: "Nest", emoji: "🐣" },
  { letter: "O", description: "A round, juicy, orange-colored fruit.", text: "Orange", emoji: "🍊" },
  { letter: "P", description: "An object used for writing.", text: "Pen", emoji: "🖊️" },
  { letter: "Q", description: "A female ruler or royal woman.", text: "Queen", emoji: "👑" },
  { letter: "R", description: "A small rodent with a long tail.", text: "Rat", emoji: "🐀" },
  { letter: "S", description: "The star that gives us light and heat.", text: "Sun", emoji: "☀️" },
  { letter: "T", description: "A tall plant with a trunk, branches, and leaves.", text: "Tree", emoji: "🌳" },
  { letter: "U", description: "An object that protects us from rain.", text: "Umbrella", emoji: "☂️" },
  { letter: "V", description: "A vehicle used to carry people or goods.", text: "Van", emoji: "🚐" },
  { letter: "W", description: "A device worn on the wrist to tell time.", text: "Watch", emoji: "⌚" },
  { letter: "X", description: "A machine that makes paper copies.", text: "xerox", emoji: "🖨️" },
  { letter: "Y", description: "A boat that moves with the wind.", text: "Yacht", emoji: "⛵" },
  { letter: "Z", description: "A black and white striped animal.", text: "Zebra", emoji: "🦓" }
];

export const GENERAL_DATASETS: AlphabetDataset = {
  category: "general",
  description: "General knowledge about the English alphabet",
  icon: "🔤",
  data: generalData.map((item, index) => ({
    id: index + 1,
    code: 65 + index,
    ...item
  }))
};

/*Greek*/

const greekData = [
  {
    letter: "A",
    description: "First letter of the Greek alphabet. Sound: 'a' as in father.",
    text: "Alpha (Α α)",
    emoji: "A"
  },
  {
    letter: "B",
    description: "Second letter of the Greek alphabet. Sound: 'v' as in vase (Modern Greek).",
    text: "Beta (Β β)",
    emoji: "Β"
  },
  {
    letter: "G",
    description: "Third letter of the Greek alphabet. Sound: 'g' as in go, or 'y' as in yes.",
    text: "Gamma (Γ γ)",
    emoji: "Γ"
  },
  {
    letter: "D",
    description: "Fourth letter of the Greek alphabet. Sound: 'th' as in then (Modern Greek).",
    text: "Delta (Δ δ)",
    emoji: "Δ"
  },
  {
    letter: "E",
    description: "Fifth letter of the Greek alphabet. Sound: 'e' as in met.",
    text: "Epsilon (Ε ε)",
    emoji: "Ε"
  },
  {
    letter: "Z",
    description: "Sixth letter of the Greek alphabet. Sound: 'z' as in zoo.",
    text: "Zeta (Ζ ζ)",
    emoji: "Ζ"
  },
  {
    letter: "H",
    description: "Seventh letter of the Greek alphabet. Sound: 'i' as in machine.",
    text: "Eta (Η η)",
    emoji: "Η"
  },
  {
    letter: "Q",
    description: "Eighth letter of the Greek alphabet. Sound: 'th' as in thin.",
    text: "Theta (Θ θ)",
    emoji: "Θ"
  },
  {
    letter: "I",
    description: "Ninth letter of the Greek alphabet. Sound: 'i' as in machine.",
    text: "Iota (Ι ι)",
    emoji: "Ι"
  },
  {
    letter: "K",
    description: "Tenth letter of the Greek alphabet. Sound: 'k' as in kite.",
    text: "Kappa (Κ κ)",
    emoji: "Κ"
  },
  {
    letter: "L",
    description: "Eleventh letter of the Greek alphabet. Sound: 'l' as in lamp.",
    text: "Lambda (Λ λ)",
    emoji: "Λ"
  },
  {
    letter: "M",
    description: "Twelfth letter of the Greek alphabet. Sound: 'm' as in map.",
    text: "Mu (Μ μ)",
    emoji: "Μ"
  },
  {
    letter: "N",
    description: "Thirteenth letter of the Greek alphabet. Sound: 'n' as in net.",
    text: "Nu (Ν ν)",
    emoji: "Ν"
  },
  {
    letter: "X",
    description: "Fourteenth letter of the Greek alphabet. Sound: 'x' as in axe.",
    text: "Xi (Ξ ξ)",
    emoji: "Ξ"
  },
  {
    letter: "O",
    description: "Fifteenth letter of the Greek alphabet. Sound: 'o' as in pot.",
    text: "Omicron (Ο ο)",
    emoji: "Ο"
  },
  {
    letter: "P",
    description: "Sixteenth letter of the Greek alphabet. Sound: 'p' as in pen.",
    text: "Pi (Π π)",
    emoji: "Π"
  },
  {
    letter: "R",
    description: "Seventeenth letter of the Greek alphabet. Sound: 'r' as in run (often rolled).",
    text: "Rho (Ρ ρ)",
    emoji: "Ρ"
  },
  {
    letter: "S",
    description: "Eighteenth letter of the Greek alphabet. Sound: 's' as in sun.",
    text: "Sigma (Σ σ/ς)",
    emoji: "Σ"
  },
  {
    letter: "T",
    description: "Nineteenth letter of the Greek alphabet. Sound: 't' as in tap.",
    text: "Tau (Τ τ)",
    emoji: "Τ"
  },
  {
    letter: "U",
    description: "Twentieth letter of the Greek alphabet. Sound: 'i' as in machine (Modern Greek).",
    text: "Upsilon (Υ υ)",
    emoji: "Υ"
  },
  {
    letter: "F",
    description: "Twenty-first letter of the Greek alphabet. Sound: 'f' as in fan.",
    text: "Phi (Φ φ)",
    emoji: "Φ"
  },
  {
    letter: "C",
    description: "Twenty-second letter of the Greek alphabet. Sound: 'ch' as in Scottish loch, or 'h' as in huge.",
    text: "Chi (Χ χ)",
    emoji: "Χ"
  },
  {
    letter: "Y",
    description: "Twenty-third letter of the Greek alphabet. Sound: 'ps' as in psychology.",
    text: "Psi (Ψ ψ)",
    emoji: "Ψ"
  },
  {
    letter: "W",
    description: "Twenty-fourth letter of the Greek alphabet. Sound: 'o' as in go.",
    text: "Omega (Ω ω)",
    emoji: "Ω"
  }
];

export const GREEK_DATASETS: AlphabetDataset = {
  category: "greek",
  description: "Explore the letters of the ancient and modern Greek alphabet.",
  icon: "🔤",
  data: greekData.map((item, index) => ({
    id: index + 1,
    code: item.text.charCodeAt(0),
    ...item
  }))
};

/*Geek*/

const geekData = [
  { letter: "A", description: "Common representations for A.", text: "4, @, /-\\" },
  { letter: "B", description: "Common representations for B.", text: "8, |3, ß" },
  { letter: "C", description: "Common representations for C.", text: "(, <, [, {" },
  { letter: "D", description: "Common representations for D.", text: "|), |>, Ð, ð" },
  { letter: "E", description: "Common representations for E.", text: "3, £, €" },
  { letter: "F", description: "Common representations for F.", text: "|=, ph, ƒ" },
  { letter: "G", description: "Common representations for G.", text: "6, 9, (_+" },
  { letter: "H", description: "Common representations for H.", text: "#, |-|, H" },
  { letter: "I", description: "Common representations for I.", text: "1, !, |, ][" },
  { letter: "J", description: "Common representations for J.", text: "_|, ;|, _/" },
  { letter: "K", description: "Common representations for K.", text: "|<, /<, |{" },
  { letter: "L", description: "Common representations for L.", text: "1, |_, £, |" },
  { letter: "M", description: "Common representations for M.", text: "|\\/|, /\\/\\, (V)" },
  { letter: "N", description: "Common representations for N.", text: "|\\|, /\\/, |V" },
  { letter: "O", description: "Common representations for O.", text: "0, (), <>" },
  { letter: "P", description: "Common representations for P.", text: "|*, |D, |>" },
  { letter: "Q", description: "Common representations for Q.", text: "(_,)" },
  { letter: "R", description: "Common representations for R.", text: "|2, |?, ®" },
  { letter: "S", description: "Common representations for S.", text: "5, $, §" },
  { letter: "T", description: "Common representations for T.", text: "7, +, ']['" },
  { letter: "U", description: "Common representations for U.", text: "|_|, (_), V" },
  { letter: "V", description: "Common representations for V.", text: "\\/, |/" },
  { letter: "W", description: "Common representations for W.", text: "\\/\\/, VV, \\^/" },
  { letter: "X", description: "Common representations for X.", text: "><, %" },
  { letter: "Y", description: "Common representations for Y.", text: "j, `/, ¥" },
  { letter: "Z", description: "Common representations for Z.", text: "2, 7_, >_" }
];

export const GEEK_DATASETS: AlphabetDataset = {
  category: "geek",
  description: "Discover common 'leet speak' and other geeky character representations.",
  icon: "🔤",
  data: geekData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/*Fruits*/

const fruitsData = [
  { letter: "A", text: "Apple", description: "Common red or green fruit" },
  { letter: "B", text: "Banana", description: "Yellow curved tropical fruit" },
  { letter: "C", text: "Cherry", description: "Small red stone fruit" },
  { letter: "D", text: "Date", description: "Sweet brown fruit from palm trees" },
  { letter: "E", text: "Elderberry", description: "Small dark purple berries" },
  { letter: "F", text: "Fig", description: "Sweet Mediterranean fruit" },
  { letter: "G", text: "Grape", description: "Small round fruit growing in clusters" },
  { letter: "H", text: "Honeydew", description: "Sweet green melon variety" },
  { letter: "I", text: "Ice Apple", description: "Translucent fruit from palm trees" },
  { letter: "J", text: "Jackfruit", description: "Large tropical fruit" },
  { letter: "K", text: "Kiwi", description: "Brown fuzzy fruit with green flesh" },
  { letter: "L", text: "Lemon", description: "Sour yellow citrus fruit" },
  { letter: "M", text: "Mango", description: "Sweet tropical stone fruit" },
  { letter: "N", text: "Nectarine", description: "Smooth-skinned peach variety" },
  { letter: "O", text: "Orange", description: "Round citrus fruit" },
  { letter: "P", text: "Pear", description: "Sweet bell-shaped fruit" },
  { letter: "Q", text: "Quince", description: "Hard acidic fruit used in preserves" },
  { letter: "R", text: "Raspberry", description: "Small red aggregate fruit" },
  { letter: "S", text: "Strawberry", description: "Red heart-shaped berry" },
  { letter: "T", text: "Tangerine", description: "Small orange citrus fruit" },
  { letter: "U", text: "Ugli Fruit", description: "Citrus fruit hybrid from Jamaica" },
  { letter: "V", text: "Voavanga", description: "African fruit also known as Spanish tamarind" },
  { letter: "W", text: "Watermelon", description: "Large sweet fruit with green rind and red flesh" },
  { letter: "X", text: "Ximenia", description: "Small orange-colored wild fruit" },
  { letter: "Y", text: "Yellow Watermelon", description: "Watermelon variety with yellow flesh" },
  { letter: "Z", text: "Ziziphus", description: "Small fruit also known as jujube" }
];

export const FRUITS_DATASETS: AlphabetDataset = {
  category: "fruits",
  description: "Fruits of the English alphabet",
  icon: "🍎",
  data: fruitsData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/* Fruits*/

const colorsData = [
  { letter: "A", text: "Amber", description: "A honey-yellow color.", colorCode: "#FFBF00" },
  { letter: "B", text: "Blue", description: "The color of the sky and sea.", colorCode: "#0000FF" },
  { letter: "C", text: "Cyan", description: "A greenish-blue color.", colorCode: "#00FFFF" },
  { letter: "D", text: "Denim", description: "A sturdy cotton twill fabric, typically blue.", colorCode: "#1560BD" },
  { letter: "E", text: "Emerald", description: "A bright green color.", colorCode: "#50C878" },
  { letter: "F", text: "Fuchsia", description: "A vivid purplish-red color.", colorCode: "#FF00FF" },
  { letter: "G", text: "Green", description: "The color of living grass and leaves.", colorCode: "#008000" },
  { letter: "H", text: "Heliotrope", description: "A pink-purple tint.", colorCode: "#DF73FF" },
  {
    letter: "I",
    text: "Indigo",
    description: "A deep and rich color close to the color wheel blue.",
    colorCode: "#4B0082"
  },
  { letter: "J", text: "Jade", description: "A light green color.", colorCode: "#00A86B" },
  { letter: "K", text: "Khaki", description: "A light brownish-yellow color.", colorCode: "#C3B091" },
  { letter: "L", text: "Lavender", description: "A light purple color.", colorCode: "#E6E6FA" },
  { letter: "M", text: "Magenta", description: "A purplish-pink color.", colorCode: "#FF00FF" },
  { letter: "N", text: "Navy", description: "A very dark blue color.", colorCode: "#000080" },
  { letter: "O", text: "Orange", description: "A bright, warm color.", colorCode: "#FFA500" },
  { letter: "P", text: "Purple", description: "A color intermediate between blue and red.", colorCode: "#800080" },
  { letter: "Q", text: "Quartz", description: "A greyish-white color.", colorCode: "#51484F" },
  { letter: "R", text: "Red", description: "The color of blood, or a ruby.", colorCode: "#FF0000" },
  { letter: "S", text: "Silver", description: "A precious shiny grayish-white color.", colorCode: "#C0C0C0" },
  { letter: "T", text: "Teal", description: "A medium to dark greenish-blue color.", colorCode: "#008080" },
  { letter: "U", text: "Ultramarine", description: "A deep blue color pigment.", colorCode: "#120A8F" },
  { letter: "V", text: "Violet", description: "A bluish-purple color.", colorCode: "#EE82EE" },
  { letter: "W", text: "White", description: "The color of milk or fresh snow.", colorCode: "#FFFFFF" },
  { letter: "X", text: "Xanadu", description: "A grayish-green color.", colorCode: "#738678" },
  { letter: "Y", text: "Yellow", description: "The color of ripe lemons or egg yolks.", colorCode: "#FFFF00" },
  { letter: "Z", text: "Zaffre", description: "A deep blue pigment.", colorCode: "#0014A8" }
];

export const COLORS_DATASETS: AlphabetDataset = {
  category: "colors",
  description: "Colors of the English alphabet with their hex codes.",
  icon: "🎨",
  data: colorsData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/*Countries*/

const countriesData = [
  { letter: "A", text: "Australia", description: "Continent and country in Southern Hemisphere" },
  { letter: "B", text: "Brazil", description: "Largest country in South America" },
  { letter: "C", text: "Canada", description: "Second largest country by total area" },
  { letter: "D", text: "Denmark", description: "Nordic country in Europe" },
  { letter: "E", text: "Egypt", description: "North African country with ancient pyramids" },
  { letter: "F", text: "France", description: "Western European country" },
  { letter: "G", text: "Germany", description: "Central European country" },
  { letter: "H", text: "Hungary", description: "Central European country" },
  { letter: "I", text: "India", description: "South Asian country" },
  { letter: "J", text: "Japan", description: "East Asian island country" },
  { letter: "K", text: "Kenya", description: "East African country" },
  { letter: "L", text: "Lithuania", description: "Baltic country in Northern Europe" },
  { letter: "M", text: "Mexico", description: "North American country" },
  { letter: "N", text: "Norway", description: "Nordic country with fjords" },
  { letter: "O", text: "Oman", description: "Middle Eastern country" },
  { letter: "P", text: "Portugal", description: "Southern European country" },
  { letter: "Q", text: "Qatar", description: "Middle Eastern peninsula country" },
  { letter: "R", text: "Russia", description: "Largest country by land area" },
  { letter: "S", text: "Spain", description: "Southern European country" },
  { letter: "T", text: "Turkey", description: "Transcontinental country" },
  { letter: "U", text: "Uganda", description: "East African country" },
  { letter: "V", text: "Vietnam", description: "Southeast Asian country" },
  { letter: "W", text: "Wales", description: "Country part of United Kingdom" },
  { letter: "X", text: "Xianggang", description: "Alternative name for Hong Kong" },
  { letter: "Y", text: "Yemen", description: "Middle Eastern country" },
  { letter: "Z", text: "Zimbabwe", description: "Southern African country" }
];

export const COUNTRIES_DATASETS: AlphabetDataset = {
  category: "countries",
  description: "Countries of the English alphabet",
  icon: "🌍",
  data: countriesData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/* Brail */

const brailleData = [
  { letter: "A", text: "⠁", description: "Braille pattern dots-1" },
  { letter: "B", text: "⠃", description: "Braille pattern dots-1-2" },
  { letter: "C", text: "⠉", description: "Braille pattern dots-1-4" },
  { letter: "D", text: "⠙", description: "Braille pattern dots-1-4-5" },
  { letter: "E", text: "⠑", description: "Braille pattern dots-1-5" },
  { letter: "F", text: "⠋", description: "Braille pattern dots-1-2-4" },
  { letter: "G", text: "⠛", description: "Braille pattern dots-1-2-4-5" },
  { letter: "H", text: "⠓", description: "Braille pattern dots-1-2-5" },
  { letter: "I", text: "⠊", description: "Braille pattern dots-2-4" },
  { letter: "J", text: "⠚", description: "Braille pattern dots-2-4-5" },
  { letter: "K", text: "⠅", description: "Braille pattern dots-1-3" },
  { letter: "L", text: "⠇", description: "Braille pattern dots-1-2-3" },
  { letter: "M", text: "⠍", description: "Braille pattern dots-1-3-4" },
  { letter: "N", text: "⠝", description: "Braille pattern dots-1-3-4-5" },
  { letter: "O", text: "⠕", description: "Braille pattern dots-1-3-5" },
  { letter: "P", text: "⠏", description: "Braille pattern dots-1-2-3-4" },
  { letter: "Q", text: "⠟", description: "Braille pattern dots-1-2-3-4-5" },
  { letter: "R", text: "⠗", description: "Braille pattern dots-1-2-3-5" },
  { letter: "S", text: "⠎", description: "Braille pattern dots-2-3-4" },
  { letter: "T", text: "⠞", description: "Braille pattern dots-2-3-4-5" },
  { letter: "U", text: "⠥", description: "Braille pattern dots-1-3-6" },
  { letter: "V", text: "⠧", description: "Braille pattern dots-1-2-3-6" },
  { letter: "W", text: "⠺", description: "Braille pattern dots-2-4-5-6" },
  { letter: "X", text: "⠭", description: "Braille pattern dots-1-3-4-6" },
  { letter: "Y", text: "⠽", description: "Braille pattern dots-1-3-4-5-6" },
  { letter: "Z", text: "⠵", description: "Braille pattern dots-1-3-5-6" }
];

export const BRAILLE_DATASETS: AlphabetDataset = {
  category: "braille",
  description: "Braille alphabet",
  icon: "⠿",
  data: brailleData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/* Hindi*/

const hindiData = [
  // Swar (Vowels)
  { letter: "अ", text: "अदरक", emoji: "🫚", description: "अदरक (Ginger)" },
  { letter: "आ", text: "आम", emoji: "🥭", description: "आम (Mango)" },
  { letter: "इ", text: "इमली", emoji: "🥔", description: "इमली (Tamarind)" },
  { letter: "ई", text: "ईख", emoji: "🎋", description: "ईख (Sugarcane)" },
  { letter: "उ", text: "उल्लू", emoji: "🦉", description: "उल्लू (Owl)" },
  { letter: "ऊ", text: "ऊँट", emoji: "🐫", description: "ऊँट (Camel)" },
  { letter: "ऋ", text: "ऋषि", emoji: "🧘‍♂️", description: "ऋषि (Sage)" },
  { letter: "ए", text: "एड़ी", emoji: "🦶", description: "एड़ी (Heel)" },
  { letter: "ऐ", text: "ऐनक", emoji: "👓", description: "ऐनक (Glasses)" },
  { letter: "ओ", text: "ओखली", emoji: "🪨", description: "ओखली (Mortar)" },
  { letter: "औ", text: "औरत", emoji: "👩", description: "औरत (Woman)" },

  // Vyanjan (Consonants)
  { letter: "क", text: "कबूतर", emoji: "🐦", description: "कबूतर (Pigeon)" },
  { letter: "ख", text: "खरगोश", emoji: "🐇", description: "खरगोश (Rabbit)" },
  { letter: "ग", text: "गमला", emoji: "🪴", description: "गमला (Flower Pot)" },
  { letter: "घ", text: "घोड़ा", emoji: "🐎", description: "घोड़ा (Horse)" },
  { letter: "च", text: "चम्मच", emoji: "🥄", description: "चम्मच (Spoon)" },
  { letter: "छ", text: "छतरी", emoji: "☂️", description: "छतरी (Umbrella)" },
  { letter: "ज", text: "जहाज़", emoji: "🚢", description: "जहाज़ (Ship)" },
  { letter: "झ", text: "झंडा", emoji: "🏁", description: "झंडा (Flag)" },
  { letter: "ट", text: "टमाटर", emoji: "🍅", description: "टमाटर (Tomato)" },
  { letter: "ठ", text: "ठठेरा", emoji: "🔨", description: "ठठेरा (Brass Smith)" },
  { letter: "ड", text: "डमरू", emoji: "🥁", description: "डमरू (Shiva’s Drum)" },
  { letter: "ढ", text: "ढोलक", emoji: "🪘", description: "ढोलक (Drum)" },
  { letter: "ण", text: "ण", emoji: "♨️", description: "ण (None)" },
  { letter: "त", text: "तरबूज", emoji: "🍉", description: "तरबूज (Watermelon)" },
  { letter: "थ", text: "थाली", emoji: "🍽️", description: "थाली (Plate)" },
  { letter: "द", text: "दिवा", emoji: "🪔", description: "दिवा (Lamp)" },
  { letter: "ध", text: "धनुष", emoji: "🏹", description: "धनुष (Bow)" },
  { letter: "न", text: "नाग", emoji: "🐍", description: "नाग (Snake)" },
  { letter: "प", text: "पतंग", emoji: "🪁", description: "पतंग (Kite)" },
  { letter: "फ", text: "फल", emoji: "🍎", description: "फल (Fruit)" },
  { letter: "ब", text: "बकरी", emoji: "🐐", description: "बकरी (Goat)" },
  { letter: "भ", text: "भैंस", emoji: "🐃", description: "भैंस (Buffalo)" },
  { letter: "म", text: "मक्खी", emoji: "🪰", description: "मक्खी (Fly)" },
  { letter: "य", text: "यज्ञ", emoji: "🔥", description: "यज्ञ (Fire Ritual)" },
  { letter: "र", text: "रंग", emoji: "🎨", description: "रंग (Color)" },
  { letter: "ल", text: "लट्टू", emoji: "🪀", description: "लट्टू (Top)" },
  { letter: "व", text: "वृक्ष", emoji: "🌳", description: "वृक्ष (Tree)" },
  { letter: "श", text: "शंख", emoji: "🐚", description: "शंख (Conch)" },
  { letter: "ष", text: "षट्कोण", emoji: "⬡", description: "षट्कोण (Hexagon)" },
  { letter: "स", text: "सांप", emoji: "🐍", description: "सांप (Snake)" },
  { letter: "ह", text: "हाथी", emoji: "🐘", description: "हाथी (Elephant)" },
  { letter: "क्ष", text: "क्षत्रिय", emoji: "⚔️", description: "क्षत्रिय (Warrior)" },
  { letter: "त्र", text: "त्रिशूल", emoji: "🔱", description: "त्रिशूल (Trident)" },
  { letter: "ज्ञ", text: "ज्ञान", emoji: "📚", description: "ज्ञान (Knowledge)" }
];

export const HINDI_DATASETS: AlphabetDataset = {
  category: "hindi",
  description: "Learn the Hindi alphabet, including Swar (vowels) and Vyanjan (consonants).",
  icon: "🕉️",
  data: hindiData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/** Flowers  */

const flowerData = [
  {
    letter: "A",
    text: "Azalea",
    emoji: "🌸",
    description: "Pink spring-blooming shrub flower"
  },
  {
    letter: "B",
    text: "Bluebell",
    emoji: "🔵",
    description: "Tiny blue bell-shaped forest flowers"
  },
  {
    letter: "C",
    text: "Carnation",
    emoji: "🌺",
    description: "Ruffled petals with spicy fragrance"
  },
  {
    letter: "D",
    text: "Daisy",
    emoji: "🌼",
    description: "White petals with yellow center"
  },
  {
    letter: "E",
    text: "Echinacea",
    emoji: "🟣",
    description: "Purple cone-shaped medicinal flower"
  },
  {
    letter: "F",
    text: "Forget-Me-Not",
    emoji: "💙",
    description: "Tiny blue symbolic remembrance flowers"
  },
  {
    letter: "G",
    text: "Gardenia",
    emoji: "⚪",
    description: "Creamy white highly fragrant blossoms"
  },
  {
    letter: "H",
    text: "Hibiscus",
    emoji: "🌺",
    description: "Tropical trumpet-shaped colorful flowers"
  },
  {
    letter: "I",
    text: "Iris",
    emoji: "⚜️",
    description: "Tall purple fleur-de-lis flower"
  },
  {
    letter: "J",
    text: "Jasmine",
    emoji: "✨",
    description: "Small white night-blooming fragrant flowers"
  },
  {
    letter: "K",
    text: "Kangaroo Paw",
    emoji: "🦘",
    description: "Fuzzy Australian claw-shaped bloom"
  },
  {
    letter: "L",
    text: "Lavender",
    emoji: "🟣",
    description: "Purple spikes with calming scent"
  },
  {
    letter: "M",
    text: "Marigold",
    emoji: "🌼",
    description: "Cheerful orange-yellow festival flowers"
  },
  {
    letter: "N",
    text: "Nasturtium",
    emoji: "🔶",
    description: "Edible orange-red peppery blooms"
  },
  {
    letter: "O",
    text: "Orchid",
    emoji: "🌸",
    description: "Exotic delicate tropical houseplant flower"
  },
  {
    letter: "P",
    text: "Poppy",
    emoji: "🌺",
    description: "Red papery Memorial Day flower"
  },
  {
    letter: "Q",
    text: "Queen Anne's Lace",
    emoji: "⚪",
    description: "Lacy white wild carrot flower"
  },
  {
    letter: "R",
    text: "Rose",
    emoji: "🌹",
    description: "Classic fragrant Valentine's Day bloom"
  },
  {
    letter: "S",
    text: "Sunflower",
    emoji: "🌻",
    description: "Tall yellow sun-tracking bloom"
  },
  {
    letter: "T",
    text: "Tulip",
    emoji: "🌷",
    description: "Cup-shaped spring garden flower"
  },
  {
    letter: "U",
    text: "Ursinia",
    emoji: "🟠",
    description: "Bright orange daisy-like flower"
  },
  {
    letter: "V",
    text: "Violet",
    emoji: "🟣",
    description: "Small purple early spring flower"
  },
  {
    letter: "W",
    text: "Water Lily",
    emoji: "💧",
    description: "Floating pond flower with pads"
  },
  {
    letter: "X",
    text: "Xeranthemum",
    emoji: "☀️",
    description: "Purple everlasting papery bloom"
  },
  {
    letter: "Y",
    text: "Yarrow",
    emoji: "⚪",
    description: "Cluster of tiny white flowers"
  },
  {
    letter: "Z",
    text: "Zinnia",
    emoji: "🌈",
    description: "Colorful long-stemmed summer bloom"
  }
];

export const FLOWER_DATASETS: AlphabetDataset = {
  category: "hindi",
  description: "Alphabetical flower list of worldwide.",
  icon: "🎕",
  data: flowerData.map((item, index) => ({
    id: index + 1,
    code: item.letter.charCodeAt(0),
    ...item
  }))
};

/** TODO: add others from alphabets.json */

export const DATASET: { [key: string]: AlphabetDataset } = {
  english: GENERAL_DATASETS,
  nato: NATO_DATASETS,
  braille: BRAILLE_DATASETS,
  hindi: HINDI_DATASETS,
  indian: INDIAN_DATASETS,
  greek: GREEK_DATASETS,
  morse: MORSE_DATASETS,
  countries: COUNTRIES_DATASETS,
  geek: GEEK_DATASETS,
  animals: ANIMAL_DATASETS,
  birds: BIRDS_DATASETS,
  fruits: FRUITS_DATASETS,
  flowers: FLOWER_DATASETS,
  colors: COLORS_DATASETS,
  body: BODYPART_DATASETS,
  vehicles: VEHICLE_DATASETS,
  profession: PROFESSION_DATASETS,
  actions: ACTION_DATASETS
};

export type AlphabetsData = typeof DATASET;

/** Body Parts  */
