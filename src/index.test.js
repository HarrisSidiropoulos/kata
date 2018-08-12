import convert from './index.js';

describe('convert', () => {
  it('should be a function', () => {
    expect(convert).toBeInstanceOf(Function);
  })
  describe('convertion from arabic to roman', () => {
    it('should convert 1 to I', () => {
      expect(convert(1)).toBe('I')
    })
    it('should convert 2 to II', () => {
      expect(convert(2)).toBe('II')
    })
    it('should convert 4 to IV', () => {
      expect(convert(4)).toBe('IV')
    })
    it('should convert 5 to V', () => {
      expect(convert(5)).toBe('V')
    })
    it('should convert 9 to IX', () => {
      expect(convert(9)).toBe('IX')
    })
    it('should convert 10 to X', () => {
      expect(convert(10)).toBe('X')
    })
    it('should convert 20 to XX', () => {
      expect(convert(20)).toBe('XX')
    })
    it('should convert 2018 to MMXVIII', () => {
      expect(convert(2018)).toBe('MMXVIII')
    })
    it('should throw error if value is greater than 3999', () => {
      expect(() => convert(4000)).toThrowError();
    })
    it('should throw error if value is less than 1', () => {
      expect(() => convert(0)).toThrowError();
    })
  })

  describe('convertion from roman to arabic', () => {
    it('should convert I to 1', () => {
      expect(convert('I')).toBe(1);
    })
    it('should convert II to 2', () => {
      expect(convert('II')).toBe(2);
    })
    it('should convert MMXVIII to 2018', () => {
      expect(convert('MMXVIII')).toBe(2018);
    })
    it('should throw error if value is not a roman glyph', () => {
      expect(() => convert('MMXVIIAI')).toThrowError();
      expect(() => convert('')).toThrowError();
      expect(() => convert('sdvs')).toThrowError();
    })
  })
})
