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