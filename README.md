# Roman numeral converter (kata)

Create a RomanNumerals helper that can convert a roman numeral to and from an integer value.

1. (convertArabicToRoman method) Takes a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
2. (convertRomanToArabic method) Takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
3. (convert method) Takes a value that can convert a roman numeral to an integer value or an arabic numeral to roman value.

Value must be less than 4000.
it should throw an error if value is not a Roman or arabic numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

http://chaijs.com/api/bdd/

http://www.calculateme.com/cRomanNumerals/RomanNumeralsToArabic.htm
