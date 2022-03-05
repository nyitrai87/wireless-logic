import { getProductDataFromHTML } from './getProductDataFromHTML.js';

describe('Get product data from HTML', () => {
    it('should obtain product data from an HTML', () => {
        const testHtml = '<!DOCTYPE html><html><head></head><body><main><div class="package"><div class="header"><h3>Basic: 500MB Data - 12 Months</h3></div><div class="package-name">The basic starter subscription providing you with all you need to get your device up and running with inclusive Data and SMS services.</div><div class="package-price"><span class="price-big">£5.99</span></div></div><div class="package"><div class="header"><h3>Basic: 6GB Data - 1 Year</h3></div><div class="package-name">The basic starter subscription providing you with all you need to get you up and running with Data and SMS services to allow access to your device.</div><div class="package-price"><span class="price-big">£66.00</span><p>Save £5.86 on the monthly price</p></div></div></main></body></html>';
        const testResult = [
            {
                title: 'Basic: 500MB Data - 12 Months',
                description: 'The basic starter subscription providing you with all you need to get your device up and running with inclusive Data and SMS services.',
                price: 5.99,
                discount: 0
            },
            {
                title: 'Basic: 6GB Data - 1 Year',
                description: 'The basic starter subscription providing you with all you need to get you up and running with Data and SMS services to allow access to your device.',
                price: 66.00,
                discount: 5.86
            }
        ];

        expect(getProductDataFromHTML(testHtml)).toStrictEqual(testResult);
    })
})