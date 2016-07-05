import {expect} from 'chai';
import RomanNumeralConverter from './index';

describe('RomanNumerals', () => {
  const converter = new RomanNumeralConverter()

  describe('class', () => {
    it('should not be undefined', ()=> {
      expect(converter).to.not.be.an('undefined');
    })
    it('should be an object', ()=> {
      expect(converter).to.be.an('object');
    })
    describe('method convert', () => {
      it('should not be undefined', ()=> {
        expect(converter.convert).to.not.be.an('undefined');
      });
      it('should be a function', ()=> {
        expect(converter.convert).to.be.a('function');
      });
    });
  });
  describe('convert from arabic to roman', () => {

  });

  describe('convert from roman to arabic', () => {

  });
});
