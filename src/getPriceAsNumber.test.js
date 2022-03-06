import { getPriceAsNumber } from './getPriceAsNumber.js';

describe('Get price as number', () => {
    it('should extract price from a string as a number', () => {
        expect(getPriceAsNumber('Save £15.99 a year')).toBe(15.99);
        expect(getPriceAsNumber('Save £15 a year')).toBe(15);
    });
    it('should return 0 if the string does NOT contain £ sign', () => {
        expect(getPriceAsNumber('Save 15.99 pounds a year')).toBe(0);
    });
    it('should return 0 if price can NOT be parsed as a number', () => {
        expect(getPriceAsNumber('Save £a a year')).toBe(0);
    });
    it('should return 0 if input string is empty', () => {
        expect(getPriceAsNumber('')).toBe(0);
    });
})