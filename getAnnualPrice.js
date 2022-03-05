// This function takes a product object as a parameter and returns the annual price.
// If the product based on yearly subscription, the annual price will be the price of the product.
// If the product based on monthly subscription, the annual price will be the price of the product multiplied by 12. 

export function getAnnualPrice(product) {
    let annualPrice = product.price;

    if(product.title.toLowerCase().includes('months')) {
        annualPrice = product.price * 12;
    } 

    return annualPrice;
}