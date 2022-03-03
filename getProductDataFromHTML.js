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