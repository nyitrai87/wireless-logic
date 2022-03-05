// This function gets a string containing HTML code and returns them in an array of objects.
// It processes the HTML structure with the help of the Cheerio npm library.
// The necessary data collected by combination of HTML tags and classes, provided in the "selectors" object.
// Once the data for a product is collected, it processes the data with the help of "processProductElement" method.
// Finally it adds the processed package object to the "result" array. Once all product have been processed, it returns with the array.

import * as cheerio from 'cheerio';
import { processProductElement } from './processProductElement.js';

const selectors = {
    packages: '.package',
    title: '.header h3',
    description: '.package-name',
    price: '.price-big',
    discountText: '.package-price p'
};

export function getProductDataFromHTML(html) {
    const $ = cheerio.load(html);
    const result = [];
    const packages = $(selectors.packages);

    packages.each(function () {
        const title = $(this).find(selectors.title).text();
        const description = $(this).find(selectors.description).text();
        const price = +($(this).find(selectors.price).text().substring(1));
        const discountText = $(this).find(selectors.discountText).text();
        result.push(processProductElement(title, description, price, discountText));
    })

    return result;
}