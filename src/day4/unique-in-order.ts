// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// =======================================================================================================================
// My Solution
// =======================================================================================================================

// export function uniqueInOrder(
//   iterable: string | (string | number)[]
// ): (string | number)[] {
//   if (typeof iterable === "string" || typeof iterable === "number") {
//     return Array.from(new Set(iterable.split("")));
//   } else {
//     return Array.from(new Set(iterable));
//   }
// }

// chatgpt
export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  if (typeof iterable === "string" || typeof iterable === "number") {
    return iterable
      .split("")
      .filter((item, index, arr) => item !== arr[index - 1]);
  } else {
    return iterable.filter((item, index) => item !== iterable[index - 1]);
  }
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"];
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"];
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3];

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export function uniqueInOrder(
//   iterable: string | (string | number)[]
// ): (string | number)[] {
//   return [...iterable].filter((x, i) => x != iterable[i - 1]);
// }
