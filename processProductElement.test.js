import { getPriceAsNumber } from './getPriceAsNumber.js';
import { processProductElement } from './processProductElement';

jest.mock('./getPriceAsNumber.js', () => ({
    getPriceAsNumber: jest.fn()
}));

beforeEach(() => jest.clearAllMocks());

describe('Process product element', () => {
    it('should create a product object with discount', () =>{
        const title = 'Test Product - 1 Year';
        const description = 'Yearly test package';
        const price = 159.99;
        const discountText = 'Save £15.99';

        getPriceAsNumber.mockReturnValueOnce(15.99);
        expect(processProductElement(title, description, price, discountText)).toStrictEqual({
            title: 'Test Product - 1 Year',
            description: 'Yearly test package',
            price: 159.99,
            discount: 15.99
        });
    });
    it('should create a product object without discount', () =>{
        const title = 'Test Product - 1 Year';
        const description = 'Yearly test package';
        const price = 159.99;
        const discountText = '';

        expect(processProductElement(title, description, price, discountText)).toStrictEqual({
            title: 'Test Product - 1 Year',
            description: 'Yearly test package',
            price: 159.99,
            discount: 0
        });
        expect(getPriceAsNumber).toHaveBeenCalledTimes(0);
    });
})