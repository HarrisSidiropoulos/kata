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
const BreakException = {};

class RomanNumeralConverter {
  convert(value) {
    if (isNaN(parseInt(value, 10))) {
      if (value.indexOf('-')===0) {
        return -this.convertRomanToArabic(value.substr(1).toUpperCase());
      }
      return this.convertRomanToArabic(value.toUpperCase());
    } else {
      const result = this.convertArabicToRoman(Math.abs(value));
      if (value<0) {
        return -result;
      }
      return result;
    }
  }
  convertRomanToArabic(value) {
    if (!this.isRomanGlyph(value)) {
      throw new Error('String does not contain known Roman Glyphs')
    }
    let result = 0
    while(value.length>0) {
      try {
        ROMAN_GLYPHS.forEach(([num,glyph])=>{
          const startsWithGlyph = new RegExp(`^${glyph}`)
          if (startsWithGlyph.test(value)) {
            result += num
            value = value.replace(startsWithGlyph,'')
          }
          if (value.length===0) {
            throw BreakException
          }
        })
      } catch(e) {
        if (e!==BreakException) {
          throw e;
        }
      }
    }
    return result
  }
  convertArabicToRoman(value) {
    if (value>3999) {
      throw new Error('Can not convert numbers greater than 3999')
    }
    let result = ''
    try {
      ROMAN_GLYPHS.forEach(([num,glyph])=>{
        while(value>=num) {
          result += glyph;
          value -= num;
        }
        if (value===0) {
          throw BreakException
        }
      })
    } catch(e) {
      if (e!==BreakException) {
        throw e;
      }
    }
    return result;
  }
  isRomanGlyph(value) {
    return new RegExp(`([${ROMAN_GLYPHS.map(([num,glyph])=>glyph).join('')}])`).test(value) || value===''
  }
}
export default RomanNumeralConverter
