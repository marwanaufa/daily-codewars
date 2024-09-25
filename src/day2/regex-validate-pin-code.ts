// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// =======================================================================================================================
// My Solution
// =======================================================================================================================
export class Kata {
  static validatePin(pin: string): boolean {
    if (pin.length === 4 || pin.length === 6) {
      const checkNonDigit = pin.match(/\D+/);
      const hasil = checkNonDigit === null ? true : false;
      return hasil;
    } else {
      return false;
    }
  }
}

console.log(Kata.validatePin("1")); // false, "Wrong output for '1'"
console.log(Kata.validatePin("12")); // false, "Wrong output for '12'"
console.log(Kata.validatePin("123")); // false, "Wrong output for '123'"
console.log(Kata.validatePin("12345")); // false, "Wrong output for '12345'
console.log(Kata.validatePin("1234567")); //  false, "Wrong output for '1234567'"
console.log(Kata.validatePin("-1234")); //  false, "Wrong output for '-1234'"
console.log(Kata.validatePin("1.234")); //  false, "Wrong output for '1.234'"
console.log(Kata.validatePin("00000000")); //  false, "Wrong output for '00000000'"
console.log(Kata.validatePin("a234")); // false, "Wrong output for 'a234'"
console.log(Kata.validatePin(".234")); // false, "Wrong output for '.234'"
console.log(Kata.validatePin("1234")); // true, "Wrong output for '1234'"
console.log(Kata.validatePin("0000")); // true, "Wrong output for '0000'"
console.log(Kata.validatePin("1111")); // true, "Wrong output for '1111'"
console.log(Kata.validatePin("123456")); //  true, "Wrong output for '123456'"
console.log(Kata.validatePin("098765")); //  true, "Wrong output for '098765'"
console.log(Kata.validatePin("000000")); //  true, "Wrong output for '000000'"
console.log(Kata.validatePin("123456")); //  true, "Wrong output for '123456'"
console.log(Kata.validatePin("090909")); //  true, "Wrong output for '090909'"

// =======================================================================================================================
// Other Solution
// =======================================================================================================================

// // 1
// export class Kata {
//   static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

//   static validatePin(pin: string): boolean {
//     return Kata.pinFormat.test(pin);
//   }
// }

// // 2
// export class Kata {
//   static validatePin(pin: string) {
//     return /^(\d{4}|\d{6})$/.test(pin);
//   }
// }

// // 3
// export class Kata {
//   static validatePin(pin: string): boolean {
//     return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
//   }
// }

// // 4
// export class Kata {
//   static validatePin(pin: string): boolean {
//     return /^(\d{4}|\d{6})$/.test(pin);
//   }
// }

// // 5
// export class Kata {
//   static validatePin(pin: string): boolean {
//     const validRegex = new RegExp("^(\\d{4}|\\d{6})$");
//     return validRegex.test(pin);
//   }
// }
