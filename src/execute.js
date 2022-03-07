import fetch from 'node-fetch';
import { compareAnnualPrices } from './compareAnnualPrices.js';
import { getProductDataFromHTML } from './getProductDataFromHTML.js';

const url = 'https://wltest.dns-systems.net/';

/**
 * Collects all products from a website and returns them in decreasing order.
 * The function fetches an URL with the help of the "node-fetch" npm library and gets the HTML structure of the website as a response.
 * By using "getProductDataFromHTML" method, it obtains the products presented in the HTML text.
 * Finally it is sorting the products in decreasing order by their annual prices by using "compareAnnualPrices" method.
 * 
 * @param {string} url - A string containing the URL to be fetched.
 * @returns with an array containing all the product objects in decreasing order.
 * @author nyitrai87
 */
export function execute() {
	return fetch(url)
		.then(res => res.text())
		.then(html => {
			const products = getProductDataFromHTML(html);
			products.sort(compareAnnualPrices);
			return products;
		});
}