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
      expect(converter.convert(1)).to.be.equal('I');
      expect(converter.convert(3)).to.be.equal('III');
      expect(converter.convert(4)).to.be.equal('IV');
      expect(converter.convert(5)).to.be.equal('V');
      expect(converter.convert(9)).to.be.equal('IX');
      expect(converter.convert(20)).to.be.equal('XX');
      expect(converter.convert(1986)).to.be.equal('MCMLXXXVI');
      expect(() => converter.convert(4000)).to.be.throw(Error);
    });
  });

  describe('convert from roman to arabic', () => {
    it('should convert from roman to arabic', () => {
      expect(converter.convert('I')).to.be.equal(1);
      expect(converter.convert('III')).to.be.equal(3);
      expect(converter.convert('IV')).to.be.equal(4);
      expect(converter.convert('V')).to.be.equal(5);
      expect(converter.convert('IX')).to.be.equal(9);
      expect(converter.convert('XX')).to.be.equal(20);
      expect(converter.convert('MCMLXXXVI')).to.be.equal(1986);
    });
  });
});
