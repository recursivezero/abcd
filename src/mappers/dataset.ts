type DataType = {
  id: string | number;
  code: string | number;
  letter: string;
  description: string;
  text: string;
  [key: string]: any;
};

interface AlphabetDataset {
  category: string;
  description: string;
  icon: string;
  data: Array<DataType>;
}

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

/** TODO: add others from alphabets.json */

export const DATASET: { [key: string]: AlphabetDataset } = {
  animals: ANIMAL_DATASETS,
  birds: BIRDS_DATASETS,
  nato: NATO_DATASETS
};
export type AlphabetsData = typeof DATASET;
