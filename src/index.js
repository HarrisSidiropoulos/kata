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
]

const isRoman = (value) => {
  const regx = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
  return regx.test(value)
}

const toRoman = (value) => {
  if (value <= 0 || value > 3999) {
    throw new Error('Cannot convert numbers great than 3999 or less than 1')
  }
  let res = ''
  ROMAN_GLYPHS.forEach(([arabic, roman]) => {
    while (value >= arabic) {
      res += roman
      value -= arabic
    }
  })
  return res
}

const toArabic = (value) => {
  if (!isRoman(value)) {
    throw new Error('Value is not a Roman number')
  }
  let res = 0;
  while(!!value) {
    ROMAN_GLYPHS.forEach(([arabic, roman]) => {
      const regx = new RegExp(`^${roman}`)
      if (regx.test(value)) {
        value = value.replace(regx, '')
        res += arabic
      }
    })
  }
  return res
}

const convert = (value) => {
  if (isNaN(parseInt(value, 10))) {
    return toArabic(value.toUpperCase())
  }
  return toRoman(value)
}

export default convert
