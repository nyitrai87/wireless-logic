import { execute } from './execute.js';

/**
 * It runs the "execute" method, and once the data is collected, it writes it on the console.
 */
execute()
    .then((products) => console.log(products));