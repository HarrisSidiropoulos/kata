# Roman numeral converter (kata)

Create a RomanNumerals helper that can convert a roman numeral to and from an integer value.

1. (`toRoman` method) Takes a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
2. (`toArabic` method) Takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
3. (`convert` method) Takes a value that can convert a Roman numeral to an integer value or an arabic numeral to roman value.

it should throw an error if value is not a Roman or arabic numeral or value is less than one or value is greater than 3999.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

http://chaijs.com/api/bdd/

http://www.calculateme.com/cRomanNumerals/RomanNumeralsToArabic.htm

``` javascript
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

const regx = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
```
