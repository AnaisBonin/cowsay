const importInfo = require('./information');
const chalk = require('chalk');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I am sexy and I know it",
    e : "- O",
    T : "U "
}));

for (let i = 0; i < 3; i++){
    console.log(`${chalk.greenBright("\\/\\/\\/\\/\\/\\/\\salim/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\")}`);
}