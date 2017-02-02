/* eslint-disable no-param-reassign,no-console,no-loop-func,no-unused-vars */
const ROMAN_GLYPHS = [
  [1000, 'M',],
  [900, 'CM',],
  [500, 'D',],
  [400, 'CD',],
  [100, 'C',],
  [90, 'XC',],
  [50, 'L',],
  [40, 'XL',],
  [10, 'X',],
  [9, 'IX',],
  [5, 'V',],
  [4, 'IV',],
  [1, 'I',],
];
const BREAK_EXCEPTION = 'break_exception';

class RomanNumeralConverter {
  convert (value) {
    if (!isNaN(parseInt(value,10))) {
      if (value <= 0) throw new Error(`Value ${value} should be greater than 0`);
      if (value > 3999) throw new Error(`Value ${value} should be less than 3999`);
      return this.convertArabicToRoman(value);
    } else if (typeof value === 'string') {
      if (value === '') throw new Error('Value should not be empty');
      if (!this.isRomanNumber(value)) throw new Error('Value should be a Roman Character');
      return this.convertRomanToArabic(value);
    }
    throw new Error(`Value must be a number or String not ${typeof value}`);
  }
  convertArabicToRoman (value) {
    let result = '';
    ROMAN_GLYPHS.forEach(([val, char,]) => {
      while (value >= val) {
        result += char;
        value = value - val;
      }
    });
    return result;
  }
  convertRomanToArabic (value) {
    let result = 0;
    while (value !== '') {
      try {
        ROMAN_GLYPHS.forEach(([val, char,]) => {
          const tester = new RegExp(`^${char}`);
          if (tester.test(value)) {
            result += val;
            value = value.replace(tester, '');
            throw BREAK_EXCEPTION;
          }
        });
      } catch (error) {
        if (error !== BREAK_EXCEPTION) {
          throw error;
        }
      }
    }
    return result;
  }
  isRomanNumber (value) {
    const valueChars = value.split('');
    const romanChars = ROMAN_GLYPHS.map(([_, char,]) => char);
    return valueChars.every(char => romanChars.includes(char));
  }
}
export default RomanNumeralConverter;
