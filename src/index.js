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

const arabicToRoman = value => {
  var roman = '';

  if (value <= 0 || value > 3999) {
    throw new Error('Value should be greater than 0 or less than 3999');
  }

  ROMAN_GLYPHS.forEach(([num, sym,]) => {
    while (value >= num) {
      roman += sym;
      value -= num;
    }
  });

  return roman;
};

const romanToArabic = value => {
  var arabic = 0;

  if (isValidRoman (value)) {
    ROMAN_GLYPHS.forEach(([num, sym,]) => {
      while (value.indexOf(sym) === 0) {
        arabic += num;
        value = value.replace(sym, '');
      }
    });

    return arabic;
  } else {
    throw new Error('Please give a correct roman value');
  }
};

const isValidRoman = value => {
  var substring =  ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I',];
  const compare = value.split('');
  return compare.every(el => substring.includes(el));
};  
class RomanNumeralConverter {
  convert (value) {
    if (typeof value === 'string') {
      return romanToArabic(value);
    }
    return arabicToRoman(value);
  }
}
export default RomanNumeralConverter;
