#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let conditions = true;
console.log("\n\t Welcome to Code with Syed Ather Ul Hassan - Todo-List Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            messsage: "What do you want to add in your Todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        },
    ]);
    todos.push(addTask.todos);
    conditions = addTask.addMore;
    console.log(todos);
}
let delTask = [];
let condition = true;
while (condition) {
    let delTask = await inquirer.prompt([
        {
            name: "del",
            type: "confirm",
            messsage: "Do you want to Delete in your Todos?",
            default: "false",
        },
    ]);
    todos.pop();
    condition = delTask.del;
    console.log(todos);
}
