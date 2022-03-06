// This function collects all products from a website and returns them in decreasing order. 
// At first it fetches the URL and gets the HTML code as a response.
// Then it obtains the products presented in the HTML with the help of "getProductDataFromHTML" method.
// Finally it compares the products with the help of "compareAnnualPrices" and returns them in decreasing order.

import fetch from 'node-fetch';
import { compareAnnualPrices } from './compareAnnualPrices.js';
import { getProductDataFromHTML } from './getProductDataFromHTML.js';

const url = 'https://wltest.dns-systems.net/'

export function execute() {
    return fetch(url)
        .then(res => res.text())
        .then(html => {
            const products = getProductDataFromHTML(html);
            products.sort(compareAnnualPrices);
            return products;
        });
}