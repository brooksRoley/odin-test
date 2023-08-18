// Write tests for the following, and then make the tests pass!

// A capitalize function that takes a string and returns it with the first character capitalized.

// A reverseString function that takes a string and returns it reversed.

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./function'); // Import your functions here

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('does not change an already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});

describe('reverseString', () => {
  it('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  it('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe('caesarCipher', () => {
  it('shifts characters in a string', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  it('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  it('keeps the same case', () => {
    expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme');
  });

  it('handles punctuation', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
});

describe('analyzeArray', () => {
  it('analyzes an array of numbers', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
