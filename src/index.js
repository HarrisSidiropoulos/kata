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
        return -this.convertRomanToPositiveArabic(value.replace(/^\-/, ''))
    }
    return this.convertRomanToPositiveArabic(value)
  }
  convertRomanToPositiveArabic(value) {
    if(!this.isRomanNumber(value)) {
      throw new Error(`Could not convert ${value}. Value is not a Roman Number`);
    }
    let result = 0;
    while(value) {
      ROMAN_GLYPHS.forEach(([num, glyph])=> {
        const reg = new RegExp(`^${glyph}`);
        if (reg.test(value)) {
          value = value.replace(reg, '')
          result += num;
        }
      });
    }
    return result;
  }
  convertArabicToRoman(value) {
    if (value>3999) {
      throw new Error(`Can not convert values greater than 3999`);
    }
    if (value<0) {
      return '-'+this.convertArabicToPositiveRoman(Math.abs(value));
    }
    return this.convertArabicToPositiveRoman(value);
  }
  convertArabicToPositiveRoman(value) {
    let result = "";
    ROMAN_GLYPHS.forEach(([num, glyph])=> {
      while (value>=num) {
        result += glyph;
        value -= num;
      }
    })
    return result;
  }
  isRomanNumber(value) {
    const characters = value.split('');
    const GLYPHS = ROMAN_GLYPHS.map(([num,glyph])=>glyph);
    return characters.every((char)=> GLYPHS.indexOf(char)>=0);
  }
}
export default RomanNumeralConverter
