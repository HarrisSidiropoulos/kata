/* eslint-disable no-param-reassign,no-console,no-loop-func,no-unused-vars, no-throw-literal, class-methods-use-this */
const ROMAN_GLYPHS = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

const isRomanNumber = (value) => {
  const chars = value.split('');
  const romanChars = ROMAN_GLYPHS.map(([arabic, roman]) => roman);
  return chars.every(char => romanChars.indexOf(char) >= 0);
};

const convertArabicToRoman = (value) => {
  if (value > 3999 || value < 0) {
    throw new Error('Value must be less than 4000');
  }
  let res = '';
  while (value > 0) {
    try {
      ROMAN_GLYPHS.forEach(([roman, arabic]) => {
        if (value >= roman) {
          res += arabic;
          value -= roman;
          throw 'found';
        }
      });
    } catch (err) {
      if (err !== 'found') {
        throw err;
      }
    }
  }
  return res;
};

const convertRomanToArabic = (value) => {
  if (!isRomanNumber(value)) {
    throw new Error(`${value} is not a Roman Number`);
  }
  let res = 0;
  while (value.length > 0) {
    try {
      ROMAN_GLYPHS.forEach(([roman, arabic]) => {
        const testRegEx = new RegExp(`^${arabic}`);
        if (testRegEx.test(value)) {
          res += roman;
          value = value.replace(testRegEx, '');
          throw 'found';
        }
      });
    } catch (err) {
      if (err !== 'found') {
        throw err;
      }
    }
  }
  return res;
};

class RomanNumeralConverter {
  convert(value) {
    if (isNaN(parseInt(value, 10))) {
      return convertRomanToArabic(value);
    }
    return convertArabicToRoman(value);
  }
}
export default RomanNumeralConverter;
