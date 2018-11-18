import convert from './index';

describe('Roman Numeral Converter', () => {
  it('should have function convert', () => {
    expect(typeof convert).toBe('function');
  });

  describe('Arabic to roman conversion', () => {
    it('should convert 1 to I', () => {
      expect(convert(1)).toEqual('I');
    });
    it('should convert 2 to II', () => {
      expect(convert(2)).toEqual('II');
    });
    it('should convert 4 to IV', () => {
      expect(convert(4)).toEqual('IV');
    });
    it('should convert 5 to V', () => {
      expect(convert(5)).toEqual('V');
    });
    it('should convert 6 to VI', () => {
      expect(convert(6)).toEqual('VI');
    });
    it('should convert 9 to IX', () => {
      expect(convert(9)).toEqual('IX');
    });
    it('should convert 10 to X', () => {
      expect(convert(10)).toEqual('X');
    });
    it('should convert 20 to XX', () => {
      expect(convert(20)).toEqual('XX');
    });
    it('should convert 2018 to MMXVIII', () => {
      expect(convert(2018)).toEqual('MMXVIII');
    });
    it('should convert 4000 to throw an error', () => {
      expect(() => convert(4000)).toThrow(Error);
    });
    it('should convert 0 to throw an error', () => {
      expect(() => convert(0)).toThrow(Error);
    });
  });

  describe('Roman to Arabic conversion', () => {
    it('should convert A to throw an error', () => {
      expect(() => convert('A')).toThrow(Error);
    });
    it('should convert I to 1', () => {
      expect(convert('I')).toEqual(1);
    });
    it('should convert MMXVIII to 2018', () => {
      expect(convert('MMXVIII')).toEqual(2018);
    });
    it('should convert MMMM to throw an Error', () => {
      expect(() => convert('MMMM')).toThrow(Error);
    });
  });
});

// 3 = III
// 4 = IV
// 5 = V
// 6 = VI
// 7 = VII
// 8 = VIII
// 9 = IX
// 10 = X
