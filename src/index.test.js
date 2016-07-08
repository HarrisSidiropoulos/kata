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
    it('should convert 1 to I', ()=> {
      expect(converter.convert(1)).to.eql('I');
    });
    it('should convert 2 to II', ()=> {
      expect(converter.convert(2)).to.eql('II');
    });
    it('should convert 4 to IV', ()=> {
      expect(converter.convert(4)).to.eql('IV');
    });
    it('should convert 5 to V', ()=> {
      expect(converter.convert(5)).to.eql('V');
    });
    it('should convert 6 to VI', ()=> {
      expect(converter.convert(6)).to.eql('VI');
    });
    it('should convert 9 to IX', ()=> {
      expect(converter.convert(9)).to.eql('IX');
    });
    it('should convert 10 to X', ()=> {
      expect(converter.convert(10)).to.eql('X');
    });
    it('should convert 20 to XX', ()=> {
      expect(converter.convert(20)).to.eql('XX');
    });
    it('should convert 40 to XL', ()=> {
      expect(converter.convert(40)).to.eql('XL');
    });
    it('should convert 50 to L', ()=> {
      expect(converter.convert(50)).to.eql('L');
    });
    it('should convert 90 to XC', ()=> {
      expect(converter.convert(90)).to.eql('XC');
    });
    it('should convert 100 to C', ()=> {
      expect(converter.convert(100)).to.eql('C');
    });
    it('should convert 400 to CD', ()=> {
      expect(converter.convert(400)).to.eql('CD');
    });
    it('should convert 500 to D', ()=> {
      expect(converter.convert(500)).to.eql('D');
    });
    it('should convert 900 to CM', ()=> {
      expect(converter.convert(900)).to.eql('CM');
    });
    it('should convert 1000 to M', ()=> {
      expect(converter.convert(1000)).to.eql('M');
    });
    it('should convert 2013 to MMXIII', ()=> {
      expect(converter.convert(2013)).to.eql('MMXIII');
    });
    it('should convert 3999 to MMMCMXCIX', ()=> {
      expect(converter.convert(3999)).to.eql('MMMCMXCIX');
    });
    it('should convert 0 to empty string', ()=> {
      expect(converter.convert(0)).to.be.empty;
    });
    it('should convert -2013 to -MMXIII', ()=> {
      expect(converter.convert(-2013)).to.eql('-MMXIII');
    });
    it('should throw error if value bigger than 3999', ()=> {
      expect(() => converter.convert(4000)).to.throw(Error);
    });
  });

  describe('convert from roman to arabic', () => {
    it('should convert I to 1', ()=> {
      expect(converter.convert("I")).to.eql(1);
    });
    it('should convert II to 2', ()=> {
      expect(converter.convert('II')).to.eql(2);
    });
    it('should convert IV to 4', ()=> {
      expect(converter.convert('IV')).to.eql(4);
    });
    it('should convert V to 5', ()=> {
      expect(converter.convert('V')).to.eql(5);
    });
    it('should convert VI to 6', ()=> {
      expect(converter.convert('VI')).to.eql(6);
    });
    it('should convert IX to 9', ()=> {
      expect(converter.convert('IX')).to.eql(9);
    });
    it('should convert X to 10', ()=> {
      expect(converter.convert('X')).to.eql(10);
    });
    it('should convert XX to 20', ()=> {
      expect(converter.convert('XX')).to.eql(20);
    });
    it('should convert XL to 40', ()=> {
      expect(converter.convert('XL')).to.eql(40);
    });
    it('should convert L to 50', ()=> {
      expect(converter.convert('L')).to.eql(50);
    });
    it('should convert XC to 90', ()=> {
      expect(converter.convert('XC')).to.eql(90);
    });
    it('should convert C to 100', ()=> {
      expect(converter.convert('C')).to.eql(100);
    });
    it('should convert CD to 400', ()=> {
      expect(converter.convert('CD')).to.eql(400);
    });
    it('should convert D to 500', ()=> {
      expect(converter.convert('D')).to.eql(500);
    });
    it('should convert CM to 900', ()=> {
      expect(converter.convert('CM')).to.eql(900);
    });
    it('should convert M to 1000', ()=> {
      expect(converter.convert('M')).to.eql(1000);
    });
    it('should convert MMXIII to 2013', ()=> {
      expect(converter.convert('MMXIII')).to.eql(2013);
    });
    it('should convert MMMCMXCIX to 3999', ()=> {
      expect(converter.convert('MMMCMXCIX')).to.eql(3999);
    });
    it('should convert empty string to 0', ()=> {
      expect(converter.convert('')).to.eql(0);
    });
    it('should convert -MMXIII to -2013', ()=> {
      expect(converter.convert('-MMXIII')).to.eql(-2013);
    });
    it('should throw error if value is not a Roman Number', ()=> {
      expect(() => converter.convert('AA')).to.throw(Error);
    });
  });
});
