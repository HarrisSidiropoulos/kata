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
    it('should covert 1 to I', ()=> {
      expect(converter.convert(1)).to.be.equal('I');
    });
    it('should covert 2 to II', ()=> {
      expect(converter.convert(2)).to.be.equal('II');
    });
    it('should covert 4 to IV', ()=> {
      expect(converter.convert(4)).to.be.equal('IV');
    });
    it('should covert 5 to V', ()=> {
      expect(converter.convert(5)).to.be.equal('V');
    });
    it('should covert 9 to IX', ()=> {
      expect(converter.convert(9)).to.be.equal('IX');
    });
    it('should covert 10 to X', ()=> {
      expect(converter.convert(10)).to.be.equal('X');
    });
    it('should covert 40 to XL', ()=> {
      expect(converter.convert(40)).to.be.equal('XL');
    });
    it('should covert -40 to -XL', ()=> {
      expect(converter.convert(-40)).to.be.equal('-XL');
    });
  });

  describe('convert from roman to arabic', () => {
    it('should covert I to 1', ()=> {
      expect(converter.convert('I')).to.be.equal(1);
    });
    it('should covert II to 2', ()=> {
      expect(converter.convert('II')).to.be.equal(2);
    });
    it('should covert IV to 4', ()=> {
      expect(converter.convert('IV')).to.be.equal(4);
    });
    it('should covert V to 5', ()=> {
      expect(converter.convert('V')).to.be.equal(5);
    });
    it('should covert IX to 9', ()=> {
      expect(converter.convert('IX')).to.be.equal(9);
    });
    it('should covert X to 10', ()=> {
      expect(converter.convert('X')).to.be.equal(10);
    });
    it('should covert XL to 40', ()=> {
      expect(converter.convert('XL')).to.be.equal(40);
    });
    it('should covert -XL yo -40', ()=> {
      expect(converter.convert('-XL')).to.be.equal(-40);
    });
  });
});
