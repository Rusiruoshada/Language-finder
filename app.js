
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {franc} from 'franc'
const langs = require('langs');

const userInput = process.argv.slice(2).toString();
const input = userInput.replace(/,/g, ' ')
let lan = franc(input,{minLength: 3}); 

let total = 0;
let i = 0;
const help = langs.codes(2);
for (i of help) {
    try {
        if (i === lan) {
            const obj = langs.where('2',i);
            const objName = obj.name;
            console.log(`Language is ${objName}`)
        }
    }catch(err){
        console.log(err)
    }
}
    



