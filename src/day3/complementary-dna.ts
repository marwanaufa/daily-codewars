// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// =======================================================================================================================
// My Solution
// =======================================================================================================================

export class Kata {
  static dnaStrand(dna: string) {
    const reg: { [index: string]: string } = { A: "T", C: "G", T: "A", G: "C" };
    const hasil = dna.replace(/[ACTG]/g, (m) => reg[m]);
    return hasil;
  }
}

console.log(Kata.dnaStrand("AAAA")); // "TTTT"
console.log(Kata.dnaStrand("ATTGC")); // "TAACG"
console.log(Kata.dnaStrand("GTAT")); // "CATA"

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export class Kata {
//   static dnaStrand(dna: string) {
//     return dna.replace(/./g, (c) => ({ A: "T", T: "A", G: "C", C: "G" }[c]));
//   }
// }

// // 2
// export class Kata {
//   static dnaStrand(dna: string): string {
//     //your code here
//     const match = {
//       A: "T",
//       T: "A",
//       G: "C",
//       C: "G",
//     };
//     return Array.from(dna, (v) => match[v]).join("");
//   }
// }

// // 3
// enum DNA {
//   "A" = "T",
//   "C" = "G",
//   "T" = "A",
//   "G" = "C",
// }

// export class Kata {
//   static dnaStrand(dna: string) {
//     return Array.from(dna)
//       .map((f) => DNA[f])
//       .join("");
//   }
// }

// // 4
// export class Kata {
//   static dnaStrand(dna: string) {
//     return dna
//       .split("")
//       .map((symbol) => {
//         switch (symbol) {
//           case "A":
//             return "T";
//           case "T":
//             return "A";
//           case "C":
//             return "G";
//           case "G":
//             return "C";
//           default:
//             return symbol;
//         }
//       })
//       .join("");
//   }
// }

// // 5
// interface IDictionary {
//   [index: string]: string;
// }

// var params: IDictionary = {};
// params["A"] = "T";
// params["T"] = "A";
// params["G"] = "C";
// params["C"] = "G";

// export class Kata {
//   static dnaStrand(dna: string) {
//     let result: string = "";
//     let arrayLength: number = dna.length;
//     let i: number = 0;

//     for (i = 0; i < arrayLength; i++) {
//       result = result + params[dna[i]];
//     }

//     return result;
//   }
// }
