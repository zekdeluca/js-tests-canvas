import { MyClass } from './src/my_class.js';
import { MyMainClass } from './src/my_main_class.js';

const inputs = {
    Item: [1, 2, 3],
};

const main = new MyMainClass([new MyClass(...inputs['Item'])]);
const items = main.performMainAction();
