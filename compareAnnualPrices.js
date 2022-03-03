import { getAnnualPrice } from './getAnnualPrice.js';

export function compareAnnualPrices(product1, product2) {
    return getAnnualPrice(product2) - getAnnualPrice(product1);
}