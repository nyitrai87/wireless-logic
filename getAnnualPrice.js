export function getAnnualPrice(product) {
    let annualPrice = product.price;

    if(product.title.toLowerCase().includes('months')) {
        annualPrice = product.price * 12;
    } 

    return annualPrice;
}