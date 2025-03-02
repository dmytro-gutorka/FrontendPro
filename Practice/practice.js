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
