// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note
// If you are given an array with multiple answers, return the lowest correct index.

// =======================================================================================================================
// My Solution
// =======================================================================================================================
// export function findEvenIndex(arr: number[]): number {
//   for (let i = 0; i < arr.length; i++) {
//     const arr1: number[] = arr.slice(0, i);
//     const arr2: number[] = arr.slice(i + 1, arr.length);
//     const sumArr1: number = arr1.reduce((a, b) => a + b, 0);
//     const sumArr2: number = arr2.reduce((a, b) => a + b, 0);

//     if (sumArr1 === sumArr2) {
//       return i;
//     }
//   }
//   return -1;
// }

export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    const arr1: number[] = arr.slice(0, i);
    const arr2: number[] = arr.slice(i + 1, arr.length);

    if (arr1.reduce((a, b) => a + b, 0) === arr2.reduce((a, b) => a + b, 0)) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([0, 0, 0, 0, 0])); // 0

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// const sumArr = (arr: number[]): number =>
//   arr.reduce((prevVal, val) => prevVal + val, 0);

// export const findEvenIndex = (arr: number[]): number =>
//   arr.findIndex((v, index) => {
//     const leftSide = arr.slice(0, index);
//     const rightSide = arr.slice(index + 1);

//     return sumArr(leftSide) === sumArr(rightSide);
//   });

// // 2
// export function findEvenIndex(arr: number[]): number {
//   let i = 0,
//     lSum = 0,
//     rSum = arr.reduce((acc, cur) => acc + cur, 0);

//   do {
//     const n = arr[i];
//     rSum -= n;
//     if (lSum === rSum) {
//       return i;
//     }
//     lSum += n;
//     i++;
//   } while (i < arr.length);

//   return -1;
// }

// // 3
// export function findEvenIndex(arr: number[]): number {
//   const sum = (a: number, e: number) => a + e;
//   return arr.findIndex(
//     (e, i, arr) =>
//       arr.slice(0, i).reduce(sum, 0) ===
//       arr.slice(++i, arr.length).reduce(sum, 0)
//   );
// }

// // 4
// export function findEvenIndex(arr: number[]): number {
//   const totalSum = arr.reduce((acc, cv) => (acc += cv), 0);
//   let leftSum = 0;
//   return arr.findIndex((currentValue) => {
//     if (2 * leftSum + currentValue === totalSum) {
//       return true;
//     }
//     leftSum += currentValue;
//     return false;
//   });
// }

// // 5
// export function findEvenIndex(arr: number[]): number {
//   if (arr.length <= 1) return 0;

//   let i = 0;
//   while (i <= arr.length - 1) {
//     const left = arr.slice(0, i).reduce((acc, val) => (acc += val), 0) || 0;
//     const right = arr
//       .slice(i + 1, arr.length)
//       .reduce((acc, val) => (acc += val), 0);

//     if (left === right) return i;
//     i++;
//   }

//   return -1;
// }
