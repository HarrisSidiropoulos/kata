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

const toRoman = (value) => {
  if (value <= 0 || value > 3999) {
    throw new Error('Value must be greater than 0');
  }
  let result = '';
  ROMAN_GLYPHS.forEach(([arabic, roman]) => {
    while (value >= arabic) {
      result += roman;
      value -= arabic;
    }
  });
  return result;
}

const toArabic = (value) => {
  let preValue = value;
  let result = 0;
  while (!!value) {
    preValue = value;
    ROMAN_GLYPHS.forEach(([arabic, roman]) => {
      const reg = new RegExp(`^${roman}`)
      if (reg.test(value)) {
        result += arabic;
        value = value.replace(reg, '');
      }
    });
    if (preValue === value || result > 3999) {
      throw new Error(`Could not convert roman to arabic`);
    }
  }
  return result;
};

class RomanNumeralConverter {
  convert (value) {
    if (isNaN(parseInt(value, 10))) {
      return toArabic(value.toUpperCase());
    }
    return toRoman(value);
  }
}

export default RomanNumeralConverter;
