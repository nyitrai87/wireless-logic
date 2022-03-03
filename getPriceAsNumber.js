export function getPriceAsNumber(string) {
    const price = +((string.split(' ').find(element => element.startsWith('£')) || '').substring(1));
    
    if(isNaN(price)) {
        return 0;
    }

    return price;
}