// Generating arrays for Hindi vowels (स्वर) and consonants (व्यंजन)

// Vowels
export const hindiVowels = Array.from({ length: 16 }, (_, i) => ({
  key: 2309 + i,
  value: String.fromCodePoint(2309 + i)
}));
const extraHindiVowelKey = [2317, 2321];
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

export const hindiConsonants = Array.from({ length: 37 }, (_, i) => String.fromCodePoint(2325 + i)).concat(
  additionalConsonants
);

export const matras = {
  aa: String.fromCharCode(2366),
  e: String.fromCharCode(2367),
  ee: String.fromCharCode(2368),
  u: String.fromCharCode(2369),
  uu: String.fromCharCode(2370),
  ae: String.fromCharCode(2375),
  aie: String.fromCharCode(2376),
  au: String.fromCharCode(2379),
  aau: String.fromCharCode(2380),
  an: String.fromCharCode(2385),
  ah: String.fromCharCode(2307),
  ru: String.fromCharCode(2371), 
};

export const barahkhadi = (code: number) => {
  console.log({ code });
  const sanyukat = Object.values(matras);
  const list = [String.fromCharCode(code)];
  console.log(list.concat(sanyukat));
  return list.concat(sanyukat);
};

// exclude 2345 ' 2353 / 2355 / 2356
export const extraLetters = [2345, 2353, 2356];
export const varnmala = Array.from(Array(37), (_, i) => ({ code: 2325 + i, letter: String.fromCharCode(2325 + i) }));
export const varnmala_english = Array.from(Array(26), (_, i) => ({
  code: 65 + i,
  letter: String.fromCharCode(65 + i)
}));

export const varnmala_hindi = varnmala.filter((v) => !extraLetters.includes(v.code));

export const isAlphabet = (key: number) => (65 <= key && key <= 90) || (key >= 97 && key <= 122);
