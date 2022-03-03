import { getAnnualPrice } from './getAnnualPrice.js';
import { compareAnnualPrices } from './compareAnnualPrices.js';

jest.mock('./getAnnualPrice.js', () => ({
    getAnnualPrice: jest.fn()
}));

beforeEach(() => jest.clearAllMocks());

describe('Compare annual prices', () => {
    it('should determine if the second product is more expensive', () => {
        const testProduct1 = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
        const testProduct2 = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
        getAnnualPrice.mockReturnValueOnce(191.88).mockReturnValueOnce(159.99);
        expect(compareAnnualPrices(testProduct1, testProduct2)).toBeGreaterThan(0);
    });
    it('should determine if the first product is more expensive', () => {
        const testProduct1 = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
        const testProduct2 = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
        getAnnualPrice.mockReturnValueOnce(159.99).mockReturnValueOnce(191.88);
        expect(compareAnnualPrices(testProduct1, testProduct2)).toBeLessThan(0);
    });
    it('should determine if the first product is more expensive', () => {
        const testProduct1 = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
        const testProduct2 = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 191.88, discount: 15.99 };
        getAnnualPrice.mockReturnValueOnce(191.88).mockReturnValueOnce(191.88);
        expect(compareAnnualPrices(testProduct1, testProduct2)).toBe(0);
    });    
})