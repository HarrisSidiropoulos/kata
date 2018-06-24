/* eslint-disable no-param-reassign,no-console,no-loop-func,no-unused-vars */
const NOT_A_VALID_ROMAN_GLYPH = new Error('Value does not contain roman glyphs');
const NOT_A_VALID_ROMAN_NUMBER = new Error('Value must be a positive interger lower than 4000');

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
  let result = '';
  ROMAN_GLYPHS.forEach(([arabic, roman]) => {
    while (value >= arabic) {
      result += roman;
      value -= arabic;
    }
  })
  return result;
}

const toArabic = (value) => {
  let result = 0;
  while (!!value) {
    ROMAN_GLYPHS.forEach(([arabic, roman]) => {
      const regx = new RegExp(`^${roman}`, 'ig');
      if (!!value && regx.test(value)) {
        result += arabic;
        value = value.replace(regx, '');
      }
    });
  }
  return result;
}

class RomanNumeralConverter {
  convert (value) {
    if (isNaN(parseInt(value, 10))) {
      if (this.isRomanGlyph(value)) {
        return toArabic(value);
      }
      throw NOT_A_VALID_ROMAN_GLYPH;
    }
    if (value > 3999 || value < 1) {
      throw NOT_A_VALID_ROMAN_NUMBER;
    }
    return toRoman(value);
  }

  isRomanGlyph(value) {
    const romanGlyphs = ROMAN_GLYPHS.map(([_, roman]) => roman).join('');
    return new RegExp(`^[${romanGlyphs}]+$`, 'ig').test(value);
  }
}

export  {
  NOT_A_VALID_ROMAN_GLYPH,
  NOT_A_VALID_ROMAN_NUMBER,
}
export default RomanNumeralConverter;
