import { getAnnualPrice } from './getAnnualPrice.js';

/**
 * Compares the annual price of 2 products.
 * The function parses the annual price of two product to determine which one has the higher price.
 * 
 * @param {object} product1 - A product object containing title, description, price and discount properties.
 * @param {object} product2 - A product object containing title, description, price and discount properties.
 * @returns with a number representing which product is more expensive. If positive, product2 is more expensive, if negative, then product1 has higher price.
 * @author nyitrai87
*/
export function compareAnnualPrices(product1, product2) {
    return getAnnualPrice(product2) - getAnnualPrice(product1);
}