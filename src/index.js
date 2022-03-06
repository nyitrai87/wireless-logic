// This file is the heart of the application. It runs the "execute" method and once the data is collected, it writes it on the console.

import { execute } from './execute.js';

execute()
    .then((products) => console.log(products));