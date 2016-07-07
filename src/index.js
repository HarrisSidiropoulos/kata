const ROMAN_GLYPHS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
];

class RomanNumeralConverter {
  convert(value) {
    if (typeof value === 'string') {
      return this.convertRomanToArabic(value);
    }
    return this.convertArabicToRoman(value);
  }
  convertRomanToArabic(value) {
    if (value.indexOf('-')===0) {
        return -this.convertRomanToPositiveArabic(value.replace(/^-/, ''));
    }
    return this.convertRomanToPositiveArabic(value);
  }
  convertRomanToPositiveArabic(value) {
    let result = 0;
    while(value) {
      ROMAN_GLYPHS.forEach(([num, glyph])=> {
        let reg = new RegExp(`^${glyph}`);
        if (reg.test(value)) {
          result += num;
          value = value.replace(reg, '');
        }
      });
    }
    return result;
  }
  convertArabicToRoman(value) {
    if (value<0) {
      return '-'+this.convertArabicToPositiveRoman(Math.abs(value));
    }
    return this.convertArabicToPositiveRoman(value);
  }
  convertArabicToPositiveRoman(value) {
    let result = '';
    ROMAN_GLYPHS.forEach(([num, glyph])=>{
      while (value>=num) {
        result += glyph;
        value -= num;
      }
    })
    return result;
  }
}
export default RomanNumeralConverter
