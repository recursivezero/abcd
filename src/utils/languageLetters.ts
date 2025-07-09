import { englishVowels, englishConsonants } from "@/utils/constants.ts";

type LetterPair = {
  hindi: string;
  kannada: string;
  marathi: string;
  gujarati: string;
  punjabi: string;
  malayalam: string;
  bengali: string;
  assamese: string;
  tamil: string;
  telugu: string;
  odia: string;
  dogri: string;
  mithilakshar: string; // Older name for Mathili , Maithili is also kmown as Tirhuti
  english: string;
  type: "vowel" | "consonant" | "separator";
};

// Generate unicode characters for languages
type GenerateAlphabetParams = {
  startCode: number;
  totalLength: number;
  extraKeys?: number[];
  insertEmptyAt?: number[]; // Indices to insert "಍"
  insertUnicodeAt?: { index: number; unicode: number }[]; // Indices to insert a specific Unicode character
};
/**
 * @input generateAlphabets({ startCode: 2309, totalLength: 16 })
 * @output [ "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ऎ", "ए", "ऐ", "ऑ", "ऒ", "ओ", "औ" ]
 */
const generateAlphabets = (params: GenerateAlphabetParams): string[] => {
  const {
    startCode,
    totalLength,
    extraKeys = [],
    insertEmptyAt = [],
    insertUnicodeAt = [] // Default to empty array if not provided
  } = params;
  // Step 1: Generate the base characters after filtering out extraKeys
  const baseCharacters: string[] = [];
  for (let i = 0; i < totalLength; i++) {
    const codePoint = startCode + i;
    //excluding extra characters
    if (!extraKeys.includes(codePoint)) {
      baseCharacters.push(String.fromCodePoint(codePoint));
    }
  }
  // Step 2: Determine the maximum required length for the final array
  // Consider both insertEmptyAt and insertUnicodeAt for the maximum index
  const maxIndexInEmptyInserts = insertEmptyAt.length > 0 ? Math.max(...insertEmptyAt) : -1;
  const maxIndexInUnicodeInserts =
    insertUnicodeAt.length > 0 ? Math.max(...insertUnicodeAt.map((item) => item.index)) : -1;
  const finalLength = Math.max(baseCharacters.length, maxIndexInEmptyInserts + 1, maxIndexInUnicodeInserts + 1);
  // Step 3: Create the final result array, initially filled with "಍" (or a default empty string if you prefer)
  // Using "಍" as per your existing code's behavior for default fill.
  const result: string[] = Array(finalLength).fill("಍");
  // Step 4: Populate the result array
  let baseCharIndex = 0;
  for (let i = 0; i < finalLength; i++) {
    // Check for specific Unicode insertions first (highest priority)
    const unicodeToInsert = insertUnicodeAt.find((item) => item.index === i);
    if (unicodeToInsert) {
      result[i] = String.fromCodePoint(unicodeToInsert.unicode);
      continue; // Move to the next index after inserting a specific Unicode
    }
    // Check for empty string insertions (next priority)
    if (insertEmptyAt.includes(i)) {
      result[i] = "಍"; // Ensure it's "಍"
      continue; // Move to the next index
    }
    // Otherwise, insert a base character if available
    if (baseCharIndex < baseCharacters.length) {
      result[i] = baseCharacters[baseCharIndex];
      baseCharIndex++;
    }
    // If no specific insertion and no base character left, it remains "಍" from initial fill
  }
  return result;
};

// Define allAlphabets structure
const allAlphabet = {
  vowels: {
    hindi: generateAlphabets({ startCode: 2309, totalLength: 16 }),
    kannada: generateAlphabets({ startCode: 3205, totalLength: 16 }),
    gujarati: generateAlphabets({ startCode: 2693, totalLength: 16 }),
    punjabi: generateAlphabets({ startCode: 2565, totalLength: 16 }),
    malayalam: generateAlphabets({
      startCode: 3333,
      totalLength: 16,
      insertUnicodeAt: [
        { index: 9, unicode: 3343 },
        { index: 10, unicode: 3342 }
      ]
    }),
    bengali: generateAlphabets({ startCode: 2437, totalLength: 16 }),
    assamese: generateAlphabets({ startCode: 2437, totalLength: 16 }),
    tamil: generateAlphabets({ startCode: 2949, totalLength: 16 }),
    telugu: generateAlphabets({ startCode: 3077, totalLength: 16 }),
    odia: generateAlphabets({ startCode: 2821, totalLength: 16 }),
    dogri: generateAlphabets({ startCode: 71680, totalLength: 16, insertEmptyAt: [6, 7, 8, 9, 12, 13] }),
    mithilakshar: generateAlphabets({ startCode: 70785, totalLength: 16, extraKeys: [70792] }),
    english: englishVowels // Directly use the array
  },
  consonants: {
    hindi: generateAlphabets({ startCode: 2325, totalLength: 38, insertEmptyAt: [37] }),
    kannada: generateAlphabets({ startCode: 3221, totalLength: 37 }),
    gujarati: generateAlphabets({ startCode: 2709, totalLength: 37 }),
    punjabi: generateAlphabets({ startCode: 2581, totalLength: 37 }),
    malayalam: generateAlphabets({ startCode: 3349, totalLength: 38 }),
    bengali: generateAlphabets({ startCode: 2453, totalLength: 37 }),
    assamese: generateAlphabets({
      startCode: 2453,
      totalLength: 39,
      extraKeys: [2480, 2485],
      insertUnicodeAt: [
        { index: 32, unicode: 2544 },
        { index: 27, unicode: 2545 }
      ]
    }),
    tamil: generateAlphabets({ startCode: 2965, totalLength: 37 }),
    telugu: generateAlphabets({ startCode: 3093, totalLength: 37 }),
    odia: generateAlphabets({ startCode: 2837, totalLength: 37 }),
    dogri: generateAlphabets({ startCode: 71690, totalLength: 37, insertEmptyAt: [20, 28, 30, 31] }),
    mithilakshar: generateAlphabets({ startCode: 70799, totalLength: 37, insertEmptyAt: [20, 28, 30, 31] }),
    english: englishConsonants // Directly use the array
  }
};

// Create letter pairs with all three scripts
const letterPairs: LetterPair[] = [
  ...allAlphabet.vowels.hindi.map((hindi, i) => ({
    hindi,
    marathi: allAlphabet.vowels.hindi[i], // Marathi shares Hindi vowels
    kannada: allAlphabet.vowels.kannada[i],
    gujarati: allAlphabet.vowels.gujarati[i],
    punjabi: allAlphabet.vowels.punjabi[i],
    malayalam: allAlphabet.vowels.malayalam[i],
    bengali: allAlphabet.vowels.bengali[i],
    assamese: allAlphabet.vowels.assamese[i],
    tamil: allAlphabet.vowels.tamil[i],
    telugu: allAlphabet.vowels.telugu[i],
    odia: allAlphabet.vowels.odia[i],
    dogri: allAlphabet.vowels.dogri[i],
    mithilakshar: allAlphabet.vowels.mithilakshar[i],
    english: allAlphabet.vowels.english[i],
    type: "vowel" as const
  })),
  ...allAlphabet.consonants.hindi.map((hindi, i) => ({
    hindi,
    marathi: allAlphabet.consonants.hindi[i], // Marathi shares Hindi consonants
    kannada: allAlphabet.consonants.kannada[i],
    gujarati: allAlphabet.consonants.gujarati[i],
    punjabi: allAlphabet.consonants.punjabi[i],
    malayalam: allAlphabet.consonants.malayalam[i],
    bengali: allAlphabet.consonants.bengali[i],
    assamese: allAlphabet.consonants.assamese[i],
    tamil: allAlphabet.consonants.tamil[i],
    telugu: allAlphabet.consonants.telugu[i],
    odia: allAlphabet.consonants.odia[i],
    dogri: allAlphabet.consonants.dogri[i],
    mithilakshar: allAlphabet.consonants.mithilakshar[i],
    english: allAlphabet.consonants.english[i] || "",
    type: "consonant" as const
  }))
];

const languages = [
  { code: "PL", name: "Select Primary Language", disabled: true },
  { code: "as", name: "assamese" },
  { code: "bn", name: "bengali" },
  { code: "do", name: "dogri" },
  { code: "en", name: "english" },
  { code: "gu", name: "gujarati" },
  { code: "hi", name: "hindi" },
  { code: "kn", name: "kannada" },
  { code: "ml", name: "malayalam" },
  { code: "mr", name: "marathi" },
  { code: "mi", name: "mithilakshar" },
  { code: "or", name: "odia" },
  { code: "pa", name: "punjabi" },
  { code: "tm", name: "tamil" },
  { code: "te", name: "telugu" }
];
const languages2 = [
  { code: "SL", name: "Select Secondary Language", disabled: true },
  { code: "as", name: "অসমীয়া" },
  { code: "bn", name: "বাংলা" },
  { code: "do", name: "𑠖𑠵𑠌𑠤𑠮" },
  { code: "en", name: "english" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "hi", name: "हिंदी" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
  { code: "mi", name: "𑒧𑒱𑒟𑒱𑒪𑒰𑒏𑓂𑒬𑒰𑒩" },
  { code: "mr", name: "मराठी" },
  { code: "or", name: "ଓଡ଼ିଆ" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "tm", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" }
];
let selectedLanguage1 = "hi";
let selectedLanguage2 = "kn";

const getLetterForLanguage = (pair: LetterPair, langCode: string): string => {
  switch (langCode) {
    case "hi":
      return pair.hindi;
    case "mr":
      return pair.marathi;
    case "kn":
      return pair.kannada;
    case "gu":
      return pair.gujarati;
    case "pa":
      return pair.punjabi;
    case "ml":
      return pair.malayalam;
    case "bn":
      return pair.bengali;
    case "as":
      return pair.assamese;
    case "tm":
      return pair.tamil;
    case "te":
      return pair.telugu;
    case "do":
      return pair.dogri;
    case "mi":
      return pair.mithilakshar;
    case "en":
      return pair.english;
    default:
      return "";
  }
};

export {
  englishVowels,
  englishConsonants,
  allAlphabet,
  letterPairs,
  languages,
  languages2,
  selectedLanguage1,
  selectedLanguage2,
  getLetterForLanguage
};
