// This function takes a string as a parameter and returns the price as a number.
// First it splits the string at every space.
// Then checks if it contains a substring starting with a pound sign.
// If it finds that substring, it removes the pound sign and converts it to number format.
// If the string is empty string or the character(s) after the pound sign is(are) not a number, the price will be 0.

export function getPriceAsNumber(string) {
    const price = +((string.split(' ').find(element => element.startsWith('£')) || '').substring(1));

    if (isNaN(price)) {
        return 0;
    }

    return price;
}