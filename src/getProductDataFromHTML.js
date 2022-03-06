import * as cheerio from 'cheerio';
import { processProductElement } from './processProductElement.js';

/**
 * Collects the title, description, price amd doscunt of all product represented in an HTML structure,
 * The function processes a HTML structure by using the Cheerio npm library.
 * It collects the necessary data by combination of HTML tags and classes.
 * Once the data for a product is collected, it processes the data with the help of "processProductElement" method.
 * Finally it adds the processed package object to the "result" array.
 * 
 * @param {string} html - A string containing a HTML structure.
 * @param {object} selectors - An object containing all the necessary HTML tags and classes to collect the necessary data.
 * @returns with an array containing all product objects.
 * @author nyitrai87
 */
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