function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
};

function caesarCipher(str, shift) {
  const isUpperCase = (char) => /^[A-Z]$/.test(char);
  const isLowerCase = (char) => /^[a-z]$/.test(char);

  return str
    .split('')
    .map((char) => {
      if (isUpperCase(char)) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
      } else if (isLowerCase(char)) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');
}

function analyzeArray(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: sum / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
