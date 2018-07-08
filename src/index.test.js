import { expect, } from 'chai';
import RomanNumeralConverter from './index';

describe('RomanNumerals', () => {
  const converter = new RomanNumeralConverter();

  describe('class', () => {
    it('should not be undefined', () => {
      expect(converter).to.not.be.an('undefined');
    });
    it('should be an object', () => {
      expect(converter).to.be.an('object');
    });
    describe('method convert', () => {
      it('should not be undefined', () => {
        expect(converter.convert).to.not.be.an('undefined');
      });
      it('should be a function', () => {
        expect(converter.convert).to.be.a('function');
      });
    });
  });
  describe('convert from arabic to roman', () => {
    it('should convert from arabic to roman', () => {
      expect(() => converter.convert(0)).to.throw(Error);
      expect(converter.convert(1)).to.be.equal('I');
      expect(converter.convert(2)).to.be.equal('II');
      expect(converter.convert(4)).to.be.equal('IV');
      expect(converter.convert(5)).to.be.equal('V');
      expect(converter.convert(6)).to.be.equal('VI');
      expect(converter.convert(9)).to.be.equal('IX');
      expect(converter.convert(10)).to.be.equal('X');
      expect(converter.convert(2018)).to.be.equal('MMXVIII');
      expect(converter.convert(3999)).to.be.equal('MMMCMXCIX');
      expect(() => converter.convert(4000)).to.be.throw(Error);
    });

    it('should convert from roman to arabic', () => {
      expect(converter.convert('I')).to.be.equal(1);
      expect(converter.convert('II')).to.be.equal(2);
      expect(converter.convert('IV')).to.be.equal(4);
      expect(converter.convert('V')).to.be.equal(5);
      expect(converter.convert('VI')).to.be.equal(6);
      expect(converter.convert('X')).to.be.equal(10);
      expect(converter.convert('MMXVIII')).to.be.equal(2018);
      expect(converter.convert('x')).to.be.equal(10);
      expect(converter.convert('MMMCMXCIX')).to.be.equal(3999);
      expect(() => converter.convert('a')).to.be.throw(Error);
    })
  });

  describe('convert from roman to arabic', () => {

  });
});
