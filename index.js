import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

fetch('https://demo.comesconnected.com/')
    .then(res => res.text())
    .then(html => {
        const $ = cheerio.load(html);
        const result = [];
        const packages = $('.package');

        packages.each(function () {
            const title = $(this).find('.header h3').text();
            const description = $(this).find('.package-name').text();
            const price = +($(this).find('.price-big').text().substring(1));
            const discountText = $(this).find('.package-price p').text();
            let discount = 0;

            if(discountText !== ''){
                discount = +((discountText.split(' ').find(element => element.startsWith('£')) || '').substring(1));
            }

            let annualPrice = price;

            if(title.includes('Months')) {
                annualPrice = price * 12;
            } 

            result.push({title, description, price, discount, annualPrice});
        });

        result.sort((product1, product2) => product2.annualPrice - product1.annualPrice);
        result.forEach(product => delete product.annualPrice);
        console.log(result);
    });