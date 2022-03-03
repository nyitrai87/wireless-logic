import * as getAnnualPrice from './getAnnualPrice';

export function getPriceAsNumber(string) {
    const price = +((string.split(' ').find(element => element.startsWith('£')) || '').substring(1));
    
    if(isNaN(price)) {
        return 0;
    }

    return price;
}

export function compareAnnualPrices(product1, product2) {
    return getAnnualPrice.getAnnualPrice(product2) - getAnnualPrice.getAnnualPrice(product1);
}