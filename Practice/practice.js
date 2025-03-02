function sumSequence(n) {
  if (n === 0) return 0.0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / 2 ** i;
  }

  return sum.toFixed(2);
}



function mergeArrays(...arr) {
  return arr.flat();
}


function countLetters(str) {
  let amountOfLetters = {};

  for (let letter of str) {
    if (letter !== " ")
      amountOfLetters[letter] = amountOfLetters[letter] + 1 || 1;
  }

  return amountOfLetters;
}



function isPalindrome(str) {
  let numberOfLetters = Object.values(countLetters(str));

  if (str.length % 2 === 0) {
    if (numberOfLetters.some((i) => i % 2 !== 0)) {
      return false;
    } else {
      return true;
    }
  } else if (str.length % 2 !== 0) {
    let conter = 0;

    for (let i of numberOfLetters) {
      if (i % 2 !== 0) {
        conter++;
      }
    }

    if (conter >= 3) {
      return false;
    } else {
      return true;
    }
  } else {
    return str === str.split("").reverse().join("");
  }
}

