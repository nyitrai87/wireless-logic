import { getPriceAsNumber } from './getPriceAsNumber.js';

/**
 * Creates a product object from the provided data.
 * The function sets the amount of the discount to 0 by default. Then it checks wether the "discountText" parameter is not an empty string.
 * If it's not empty, it sets the discount price to the amount the string contains by using the 'getPriceAsNumber' method. 
 * 
 * @param {string} title - A string containing the title of a product.
 * @param {string} description - A string containing the description of a product. 
 * @param {number} price - A number representing the price of a product.
 * @param {string} discountText - A string containing the the discount of a product.
 * @returns with an object containing title, description, price and discount properties of a product.
 * @author nyitrai87
 */
export function processProductElement(title, description, price, discountText) {
    let discount = 0;

    if (discountText !== '') {
        discount = getPriceAsNumber(discountText);
    }

    return { title, description, price, discount };
}