/** @format */

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// =======================================================================================================================
// My Solution
// =======================================================================================================================
// export function findNextSquare(sq: number): number {
//   const theNum: number = Math.sqrt(sq);
//   if (theNum % 1 === 0) {
//     const nextNum = theNum + 1;
//     const hasil = nextNum ** 2;
//     return hasil;
//   } else {
//     return -1;
//   }
// }

// export function findNextSquare(sq: number): number {
//   const theNum: number = Math.sqrt(sq);
//   if (theNum % 1 === 0) {
//     const hasil: number = (theNum + 1) ** 2;
//     return hasil;
//   } else {
//     return -1;
//   }
// }

// export function findNextSquare(sq: number): number {
//   const theNum: number = Math.sqrt(sq);
//   if (theNum % 1 === 0) {
//     return (theNum + 1) ** 2;
//   } else {
//     return -1;
//   }
// }

// export function findNextSquare(sq: number): number {
//   const theNum: number = Math.sqrt(sq);
//   return theNum % 1 === 0 ? (theNum + 1) ** 2 : -1;
// }

export function findNextSquare(sq: number): number {
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(319225)); // 320356
console.log(findNextSquare(15241383936)); // 15241630849
console.log(findNextSquare(155)); // -1
console.log(findNextSquare(342786627)); // -1

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export function findNextSquare(sq: number): number {
//   return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
// }

// // 2
// export function findNextSquare(sq: number): number {
//   let sqr: number = Math.sqrt(sq);
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return sq % sqr === 0 ? (sqr + 1) * (sqr + 1) : -1;
// }

// // 3
// export function findNextSquare(sq: number): number {
//   const sqrt = Math.sqrt(sq);
//   if (Number.isInteger(sqrt)) {
//     return (sqrt + 1) ** 2;
//   }
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return -1;
// }

// // 4
// export function findNextSquare(sq: number): number {
//   const log = Math.sqrt(sq);

//   return !Boolean(log % 1) ? Math.pow(log + 1, 2) : -1;
// }

// // 5
// export function findNextSquare(sq: number): number {
//   if (Number.isInteger(Math.sqrt(sq))) {
//     let sqrt = Math.sqrt(sq);
//     let nextSquare = (sqrt + 1) * (sqrt + 1);
//     return nextSquare;
//   }
//   return -1;
// }

// // 6
// export function findNextSquare(sq: number): number {
//   let root: number = Math.sqrt(sq);
//   return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
// }
