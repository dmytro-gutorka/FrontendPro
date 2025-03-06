// function sumSequence(n) {
//   if (n === 0) return 0.0;
//
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / 2 ** i;
//   }
//
//   return sum.toFixed(2);
// }
//
// function mergeArrays(...arr) {
//   return arr.flat();
// }
//
// function countLetters(str) {
//   let amountOfLetters = {};
//
//   for (let letter of str) {
//     if (letter !== " ")
//       amountOfLetters[letter] = amountOfLetters[letter] + 1 || 1;
//   }
//
//   return amountOfLetters;
// }
//
// function divideArrays(arr, size) {
//   let newArr = [];
//
//   if (size <= 0) {
//     return [];
//   } else if (arr.length <= size) {
//
//     return [arr];
//   } else {
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, size + i));
//     }
//   }
//
//   return newArr;
// }
//
// function encrypt(str, n) {
//   if (n <= 0) return str;
//
//   let endUpperAlphabet = 90;
//   let shiftedString = "";
//   let encryptedLetters = str.split("").map((x) => x.charCodeAt(0));
//   let shiftedLetters = [];
//
//   for (let currentLetter of encryptedLetters) {
//     shiftedLetters.push(90 - ((90 - currentLetter + n) % 26));
//   }
//
//   shiftedString = String.fromCharCode(...shiftedLetters);
//
//   return shiftedString;
// }
//
// function isPalindrome(str) {
//   let numberOfLetters = Object.values(countLetters(str));
//
//   if (str.length % 2 === 0) {
//
//     return !numberOfLetters.some((i) => i % 2 !== 0);
//
//   } else if (str.length % 2 !== 0) {
//     let counter = 0;
//
//     for (let i of numberOfLetters) {
//       if (i % 2 !== 0) {
//         counter++;
//
//         return counter < 3;
//       }
//     }
//   }
// }
//


console.log('HeLLo'.replace(/l/gi, ''))