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
    if (typeof value === "string") {
      return this.convertToRoman(value);
    }
    return this.convertToArabic(value);
  }
  convertToRoman(value) {
    if (value.indexOf('-')===0) {
      return -this.convertToPositiveRoman(value.replace(/^\-/, ''))
    }
    return this.convertToPositiveRoman(value)
  }
  convertToPositiveRoman(value) {
    let result = 0;
    while (value) {
      ROMAN_GLYPHS.forEach(([num, glyph]) => {
        const reg = new RegExp(`^${glyph}`, 'g');
        if (reg.test(value)) {
          value = value.replace(reg, '')
          result += num
        }
      });
    }
    return result
  }
  convertToArabic(value) {
    if (value>3999) {
      throw new Error('Cannot convert numbers greater than 3999')
    }
    if (value<0) {
      return '-'+this.convertToPositiveArabic(Math.abs(value))
    }
    return this.convertToPositiveArabic(value)
  }
  convertToPositiveArabic(value) {
    let result = "";
    ROMAN_GLYPHS.forEach(([limit, glyph]) => {
      while (value>=limit) {
        result += glyph
        value -= limit
      }
    })
    return result
  }
}
export default RomanNumeralConverter
