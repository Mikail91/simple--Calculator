#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Please enter 1st Number",
    type: "number",
    name: "firstNum",
  },
  {
    message: "Please enter 2nd Number",
    type: "number",
    name: "secondNum",
  },
  {
    message: "Please Select Opertor",
    type: "list",
    name: "opertor",
    choices: ["Addition", "Subtraction", "Multiplication", "Divide"],
  },
]);

if (answer.opertor === "Addition") {
  console.log(answer.firstNum + answer.secondNum);
} else if (answer.opertor === "Subtraction") {
  console.log(answer.firstNum - answer.secondNum);
} else if (answer.opertor === "Multiplication") {
  console.log(answer.firstNum * answer.secondNum);
} else if (answer.opertor === "Divide") {
  console.log(answer.firstNum / answer.secondNum);
} else {
  console.log("Please Select Valid Opertor");
}
