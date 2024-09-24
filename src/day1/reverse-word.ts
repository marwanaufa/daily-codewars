/** @format */

// =======================================================================================================================
// My Solution
// =======================================================================================================================
export function reverseWords(str: string): string {
  const reversedWords = str.split(" ");
  const reverse = reversedWords.map((word) => {
    return word.split("").reverse().join("");
  });
  const hasil = reverse.join(" ");
  return hasil;
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // ehT kciuq nworb xof spmuj revo eht yzal .god
console.log(reverseWords("apple")); // elppa
console.log(reverseWords("a b c d")); // a b c d
console.log(reverseWords("double  spaced  words")); // elbuod  decaps  sdrow

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// const reverse = (x: string) => x.split("").reverse().join("");

// export const reverseWords = (str: string): string =>
//   str.split(" ").map(reverse).join(" ");

// // 2
// export function reverseWords(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// // 3
// export function reverseWords(str: string): string {
//   // 1. first create an array with the original words
//   // 2. loop through each word and make it an array of characters
//   // 3. reverse the array and make it a string again, so it is a word again but reversed
//   // 4. join the resulting array

//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// // 4
// export const reverseWords = (str: string): string =>
//   str
//     .split(" ")
//     .map((word) => Array.from(word).reverse().join(""))
//     .join(" ");

// // 5
// export function reverseWords(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
