// This function takes 4 parameters and returns them in an object.
// Discount is 0 by default, but if the given 'discountText' parameter is not an empty string,
// it sets the discount price to the amount the string contains with the help of the 'getPriceAsNumber' function. 

import { getPriceAsNumber } from './getPriceAsNumber.js';

export function processProductElement(title, description, price, discountText) {
    let discount = 0;

    if (discountText !== '') {
        discount = getPriceAsNumber(discountText);
    }

    return { title, description, price, discount };
}