/**
 * Calculates annual price of a product option.
 * The function parses the product's title to determine whether it denotes a monthly or yearly
 * subscription.
 * Annual price is the base price multiplied by 12 when product is a monthly subscription or the
 * price itself otherwise.
 *
 * @param product A product object containing title, description, price and discount properties.
 * @returns with a number representing annual price.
 * @author  nyitrai87
 */
export function getAnnualPrice(product) {
    let annualPrice = product.price;

    if (product.title.toLowerCase().includes('months')) {
        annualPrice = product.price * 12;
    }

    return annualPrice;
}