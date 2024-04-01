#!/user/bin/env node
// 3 task doing
// computer genrate number random
//user input for guessing number
//compare user input with computer guessing number
import chalk from "chalk";
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.yellow.italic.underline.bgBlack(("WELLCOME to MY guessis GAME SHOW ")));
const answers = await inquirer.prompt([
    {
        name: "userguessisnumber",
        type: "number",
        message: chalk.blue("please guess a number between 1-6 "),
    },
]);
if (answers.userguessisnumber === randomnumber) {
    console.log(chalk.green("congratulation you guessis Right number"));
}
else {
    console.log(chalk.red("Sorry you guessis wrong number"));
}
