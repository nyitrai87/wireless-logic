/**
 * Extracts the price of a product as a number from a string.
 * The function splits the string at every space. Then checks if it contains a substring starting with - in this case - a pound sign.
 * If it finds a substring like that, it removes the pound sign and converts it to number format.
 * If the string is empty string or the character(s) after the pound sign is(are) not a number, the price will be 0.
 * 
 * @param {string} string - A string which probably contains a substring with a price.
 * @param {object} currencies - An object containing currencies.
 * @returns with a number representing the price or discount.
 */
export function getPriceAsNumber(string) {
	const currencies = {
		pound: '£'
	};
	const price = +((string.split(' ').find(element => element.startsWith(currencies.pound)) || '').substring(1));

	if (isNaN(price)) {
		return 0;
	}

	return price;
}