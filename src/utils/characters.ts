// Character and alphabet related functions

// Generating arrays for Hindi vowels (स्वर) and consonants (व्यंजन)

// Vowels
export const hindiVowels = Array.from({ length: 16 }, (_, i) => ({
  key: 2309 + i,
  value: String.fromCodePoint(2309 + i)
}));
const extraHindiVowelKey = [2317, 2321]; // 'ऍ' , 'ऑ'

// String.fromCodePoint(2384); // 'ॐ'
export const hindiVowelList = hindiVowels.filter((v) => !extraHindiVowelKey.includes(v.key));

// Consonants
// क, ख, ग, घ, ङ // च, छ, ज, झ, ञ // ट, ठ, ड, ढ, ण, // त, थ, द, ध, न, // प, फ, ब, भ, म, // य र, ल, व, // श, ष, स, ह
// 'क्ष'  = क + '् + ष
// 'त्र'  = त  + '् + र
// 'ज्ञ'  = ज  + '् + ञ
const additionalConsonants = [
  String.fromCharCode(2325, 2381, 2359),
  String.fromCharCode(2340, 2381, 2352),
  String.fromCharCode(2332, 2381, 2334)
];

export const hindiConsonants = [
  // क-row
  2325, 2326, 2327, 2328, 2329,
  // च-row
  2330, 2331, 2332, 2333, 2334,
  // ट-row
  2335, 2336, 2337, 2338, 2339,
  // त-row
  2340, 2341, 2342, 2343, 2344,
  // प-row
  2346, 2347, 2348, 2349, 2350,
  // य-row
  2351, 2352, 2354, 2357,
  // श-row
  2358, 2359, 2360, 2361
]
  .map((code) => String.fromCharCode(code))
  .concat(additionalConsonants);

export const matras = {
  aa: String.fromCharCode(2366),
  e: String.fromCharCode(2367),
  ee: String.fromCharCode(2368),
  u: String.fromCharCode(2369),
  uu: String.fromCharCode(2370),
  ru: String.fromCharCode(2371),
  ae: String.fromCharCode(2375),
  aie: String.fromCharCode(2376),
  au: String.fromCharCode(2379),
  aau: String.fromCharCode(2380),
  an: String.fromCharCode(2306),
  ah: String.fromCharCode(2307)
};

export const barahkhadi = (code: number) => {
  const sanyukat = Object.values(matras);
  const list = [String.fromCharCode(code)];
  return list.concat(sanyukat);
};

// 2365 avgrah  ==> ऽ

// exclude 2345 ' 2353 / 2355 / 2356
export const extraLetters = [2345, 2353, 2356]; // 'ऩ', 'ऱ', 'ऴ'
export const varnmala = Array.from(Array(37), (_, i) => ({ code: 2325 + i, letter: String.fromCharCode(2325 + i) }));
export const varnmala_english = Array.from(Array(26), (_, i) => ({
  code: 65 + i,
  letter: String.fromCharCode(65 + i)
}));

export const varnmala_hindi = varnmala
  .filter((v) => !extraLetters.includes(v.code))
  .concat(additionalConsonants.map((v, i) => ({ code: 2325 + i, letter: v })));

export const getLetterIndex = (letter: string): number => letter.charCodeAt(0) - 65;

export const getLetterFromIndex = (index: number): string => String.fromCharCode(65 + index);

export const getLetterFromCode = (code: number): string => String.fromCharCode(code);

export const getCodeFromLetter = (letter: string): number => letter.charCodeAt(0);
