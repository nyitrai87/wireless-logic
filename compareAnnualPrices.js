// This function compares the annual price of 2 products and retuns the one with the higher price

import { getAnnualPrice } from './getAnnualPrice.js';

export function compareAnnualPrices(product1, product2) {
    return getAnnualPrice(product2) - getAnnualPrice(product1);
}