/** @format */

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// =======================================================================================================================
// My Solution
// =======================================================================================================================
export const isPangram = (phrase: string): boolean => {
  const lowerCase: string = phrase.toLowerCase();
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  for (const char of alphabet) {
    if (!lowerCase.includes(char)) {
      return false;
    }
  }
  return true;
};

isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("This is not a pangram."); // false

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export const isPangram = (phrase: string): boolean =>
//   new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;

// // 2
// export const isPangram = (phrase: string): boolean =>
//   [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ].every((l) => phrase.toLowerCase().includes(l));

// // 3
// export const isPangram = (phrase: string): boolean => {
//   const allLetters = "abcdefghijklmnopqrstuvwxyz";
//   const allLettersArr = allLetters.split("");
//   const phraseArr = phrase.toLowerCase().split("");
//   return allLettersArr.every((alphabet) => phraseArr.includes(alphabet));
// };

// // 4
// export function isPangram(phrase: string): boolean {
//   let newString: Set<string> = new Set(
//     phrase.replace(/\W|\d/g, "").toLowerCase()
//   );
//   if (newString.size == 26) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // 5
// export const isPangram = (phrase: string): boolean =>
//   new Set(phrase.toLowerCase().match(/[a-zA-Z]/gi)).size === 26;
