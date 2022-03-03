import { getPriceAsNumber } from './getPriceAsNumber.js';

export function processProductElement(title, description, price, discountText) {
    let discount = 0;

    if (discountText !== '') {
        discount = getPriceAsNumber(discountText);
    }

    return { title, description, price, discount };
}