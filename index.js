import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = 'https://demo.comesconnected.com/'
const selectors = {
    packages: '.package',
    title: '.header h3',
    description: '.package-name',
    price: '.price-big',
    discountText: '.package-price p'
};

function execute () {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            const products = getProductDataFromHTML(html);
            products.sort(compareAnnualPrices);
            console.log(products);
        });
}

function getProductDataFromHTML(html) {
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

function processProductElement(title, description, price, discountText) {
    let discount = 0;

    if(discountText !== ''){
        discount = getPriceAsNumber(discountText);
    }

    return {title, description, price, discount};
}

function getAnnualPrice(product) {
    let annualPrice = product.price;

    if(product.title.includes('Months')) {
        annualPrice = product.price * 12;
    } 

    return annualPrice;
}

function compareAnnualPrices(product1, product2) {
    return getAnnualPrice(product2) - getAnnualPrice(product1);
}

function getPriceAsNumber(string) {
    return +((string.split(' ').find(element => element.startsWith('£')) || '').substring(1))
}

execute();