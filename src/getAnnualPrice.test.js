import { getAnnualPrice } from './getAnnualPrice.js';

describe('Get annual prices', () => {
	it('should return the annual price of a yearly subscription', () => {
		const testProduct = { title: 'Test Product - 1 Year', description: 'Yearly test package', price: 159.99, discount: 15.99 };
		expect(getAnnualPrice(testProduct)).toBe(159.99);
	});
	it('should return the annual price of a monthly subscription', () => {
		const testProduct = { title: 'Test Product - 12 Months', description: 'Monthly test package', price: 15.99, discount: 0 };
		expect(getAnnualPrice(testProduct)).toBe(191.88);
	});
});