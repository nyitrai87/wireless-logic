// This function takes a product object as a parameter and returns its annual price.
// If the product based on yearly subscription, the annual price will be the same as the price of the product.
// If the product based on monthly subscription, the annual price will be the price of the product multiplied by 12. 
// By default the annual price is the price of the product. Then the function checks if the title of the product contains the word "months".
// If it contains, then it overwrites the annualPrice variable with te price of the product multiplied by 12.

export function getAnnualPrice(product) {
    let annualPrice = product.price;

    if (product.title.toLowerCase().includes('months')) {
        annualPrice = product.price * 12;
    }

    return annualPrice;
}