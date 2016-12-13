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
    if (isNaN(parseInt(value, 10))) {
      value = value.toUpperCase()
      if (value.indexOf('-')===0) {
        return -this.convertRomanToArabic(value.substr(1))
      }
      return this.convertRomanToArabic(value)
    } else {
      if (value<0) {
        return '-'+this.convertArabicToRoman(Math.abs(value))
      }
      return this.convertArabicToRoman(value)
    }
  }
  convertRomanToArabic(value) {
    if (!this.isRomanNumber(value)) {
      throw new Error("Value is not a Roman Number")
    }
    let result = 0
    while(value) {
      ROMAN_GLYPHS.forEach(([num,glyph])=> {
        const test = new RegExp(`^${glyph}`)
        if (test.test(value)) {
          result += num
          value = value.replace(test, '')
        }
      })
    }
    return result
  }
  convertArabicToRoman(value) {
    if (Math.abs(value>3999)) {
      throw new Error("Can't convert values greater than 3999")
    }
    let result = ''
    ROMAN_GLYPHS.forEach(([num,glyph])=> {
      while(value>=num) {
        result += glyph
        value -= num
      }
    })
    return result
  }
  isRomanNumber(value) {
    const glyphs = ROMAN_GLYPHS.map(([num,glyph])=>glyph)
    return value!=='' && value.split('').every(char=>glyphs.includes(char))
  }
}
export default RomanNumeralConverter
