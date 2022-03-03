import * as getAnnualPrice from './getAnnualPrice';
import * as functions from './functions';
import {jest} from '@jest/globals';

jest.mock('./getAnnualPrice', () => ({
    getAnnualPrice: jest.fn()
}));

describe('Get price as number', () => {
    it('should extract price from a string as a number', () => {
        expect(functions.getPriceAsNumber('Save £15.99 a year')).toBe(15.99);
        expect(functions.getPriceAsNumber('Save £15 a year')).toBe(15);
    });
    it('should return 0 if the string does NOT contain £ sign', () => {
        expect(functions.getPriceAsNumber('Save 15.99 pounds a year')).toBe(0);
    });
    it('should return 0 if price can NOT be parsed as a number', () => {
        expect(functions.getPriceAsNumber('Save £a a year')).toBe(0);
    });
    it('should return 0 if input string is empty', () => {
        expect(functions.getPriceAsNumber('')).toBe(0);
    });
})

/*describe('Get annual prices', () => {
    it('should return the annual price of a yearly subscription', () => {
        const testProduct = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
        expect(functions.getAnnualPrice(testProduct)).toBe(159.99);
    });
    it('should return the annual price of a monthly subscription', () => {
        const testProduct = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
        expect(functions.getAnnualPrice(testProduct)).toBe(191.88);
    });
})*/

it('', () => {
    const testProduct1 = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
    const testProduct2 = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
    getAnnualPrice.getAnnualPrice.mockResolvedValueOnce(159.99).mockResolvedValueOnce(191.88);
    expect(functions.compareAnnualPrices(testProduct1, testProduct2)).toBeGreaterThan(0);
})

/*describe('Compare annual prices', () => {
    it('', () => {
        const testProduct1 = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
        const testProduct2 = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
        getAnnualPrice.getAnnualPrice.mockResolvedValueOnce(159.99).mockResolvedValueOnce(191.88);
        expect(functions.compareAnnualPrices(testProduct1, testProduct2)).toBeGreaterThan(0);
    })
})*/