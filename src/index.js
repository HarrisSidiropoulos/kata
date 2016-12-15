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
const BREAK_EXCEPTION = {}

class RomanNumeralConverter {
  convert(value) {
    if (isNaN(parseInt(value, 10))) {
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
  convertArabicToRoman(value) {
    if (value>3999) {
      throw new Error('Can not convert values greater than 3999')
    } else if(value<=0) {
      throw new Error('Can not convert values less or equal 0')
    }
    let result = ''
    try {
      ROMAN_GLYPHS.forEach(([num,glyph])=>{
        while(value>=num) {
          result += glyph
          value -= num
          if (value===0) {
            throw BREAK_EXCEPTION
          }
        }
      })
    } catch(e) {
      if (e!==BREAK_EXCEPTION) {
        throw e
      }
    }
    return result
  }
  convertRomanToArabic(value) {
    if (value==='') {
      throw new Error('Can not convert empty string')
    } else if (!this.isRomanNumber(value)) {
      throw new Error(`${value} is not a Roman number`)
    }
    let result = 0
    while (value) {
      try {
        ROMAN_GLYPHS.forEach(([num,glyph])=>{
          const test = new RegExp(`^${glyph}`)
          if (test.test(value)) {
            result += num
            value = value.replace(test, '')
          }
          if (value==='') {
            throw BREAK_EXCEPTION
          }
        })
      } catch(e) {
        if (e!==BREAK_EXCEPTION) {
          throw e
        }
      }
    }
    return result
  }
  isRomanNumber(value) {
    const glyphs = ROMAN_GLYPHS.map(([_,glyph])=>glyph)
    return value.split('').every((char)=>glyphs.includes(char))
  }
}
export default RomanNumeralConverter
