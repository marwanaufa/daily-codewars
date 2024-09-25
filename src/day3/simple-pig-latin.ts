// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// =======================================================================================================================
// My Solution
// =======================================================================================================================

// export const pigIt = (a: string): string => {
//   const newString: string[] = a.split(" ");
//   let hasil: string[] = [];
//   newString.map((letter) => {
//     if (letter.match(/[a-z]/gi) !== null) {
//       const newLetter: string[] = letter.split("");
//       const [first, ...rest] = newLetter;
//       const pigLatin: string[] = [...rest, first, "ay"];
//       const newPigLatin: string = pigLatin.join("");
//       hasil.push(newPigLatin);
//     } else {
//       hasil.push(letter);
//     }
//   });
//   return hasil.join(" ");
// };

export const pigIt = (a: string): string => {
  const newString: string[] = a.split(" ");
  let hasil: string[] = [];
  newString.map((letter) => {
    if (letter.match(/[a-z]/gi) !== null) {
      const [first, ...rest] = letter.split("");
      const pigLatin: string = [...rest, first, "ay"].join("");
      hasil.push(pigLatin);
    } else {
      hasil.push(letter);
    }
  });
  return hasil.join(" ");
};

console.log(pigIt("Pig latin is cool")); // "igPay atinlay siay oolcay";
console.log(pigIt("This is my string")); // "hisTay siay ymay tringsay";

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")

// // do first letter (group 1) do rest of letters of word (group 2)
// // note : spaces are not in it
// // do it for all words

// // 2
// export const pigIt = (a: string): string => {
//   return a.replace(/[a-z]+/gi, (x) => x.slice(1) + x[0] + "ay");
// };

// // 3
// export const pigIt = (a: string): string =>
//   a
//     .split(" ")
//     .map((str) =>
//       /[a-zA-Z]+/.test(str) ? str.slice(1) + str.charAt(0) + "ay" : str
//     )
//     .join(" ");

// // 4
// export const pigIt = (a: string): string => {
//   return a.split(" ").map(firstLetterToEndAndAppendAy).join(" ");
// };
// function firstLetterToEndAndAppendAy(text: string) {
//   const word = text.match(/\w+/)?.[0];
//   if (!word) return text;
//   const pigIt = word.substring(1) + word[0] + "ay";
//   return text.replace(word, pigIt);
// }

// // 5
// export const pigIt = (a: string): string => {
//   // Split the input string into words
//   const words = a.split(" ");

//   // Loop through each word
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     // Check if the first character of the word is an alphabetic letter
//     if (word.match(/[a-z]/i)) {
//       // If the word starts with a letter, move the first letter to the end of the word and add "ay"
//       words[i] = word.substring(1) + word.charAt(0) + "ay";
//     }
//   }

//   // Join the words back into a string and return it
//   return words.join(" ");
// };
