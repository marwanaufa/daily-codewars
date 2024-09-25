// =======================================================================================================================
// My Solution
// =======================================================================================================================
export function order(words: string): string {
  if (words === "") {
    return "";
  } else {
    const splitWords: string[] = words.split(" ");
    const sortedWords = splitWords.sort((a: string, b: string): number => {
      const numA: number = parseInt(a.match(/\d+/)![0], 10);
      const numB: number = parseInt(b.match(/\d+/)![0], 10);

      return numA - numB;
    });
    const hasil = sortedWords.join(" ");
    return hasil;
  }
}

console.log(order("is2 Thi1s T4est 3a")); // Thi1s is2 3a T4est
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Fo1r the2 g3ood 4of th5e pe6ople
console.log(order("")); // ""

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export function order(words: String): String {
//   return words
//     .split(" ")
//     .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
//     .join(" ");
// }

// // 2
// export function order(words: String): String {
//   const wordsArray = words.split(" ");
//   const wordsSorted = wordsArray.sort(
//     (a, b) => _calculatePosition(a) - _calculatePosition(b)
//   );

//   return wordsSorted.join(" ");
// }

// function _calculatePosition(word: string): number {
//   const numberString = /[0-9]{1}/.exec(word)[0];
//   return parseInt(numberString, 10);
// }

// // 3
// export function order(words: String): String {
//   return words
//     .split(" ")
//     .sort((l, r) => +/\d/.exec(l)[0] - +/\d/.exec(r)[0])
//     .join(" ");
// }

// // 4
// export function order(words: String): String {
//   const isANum = (letter: String) => !isNaN(Number(letter));
//   return words
//     .split(" ")
//     .sort(
//       (a: String, b: String) =>
//         Number(a.split("").find(isANum)) - Number(b.split("").find(isANum))
//     )
//     .join(" ");
// }

// // 5
// export const order = (words: string) =>
//   words.split(" ").sort(compareStrings).join(" ");
// const getNumber = (word: string) => Number(word.match(/\d/));
// const compareStrings = (a: string, b: string) => getNumber(a) - getNumber(b);
