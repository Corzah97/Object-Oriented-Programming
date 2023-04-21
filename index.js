// Make SVG file look nicer with line breaks
// Finish README (screenshots/video submission)
// Video submission and add link to README (and submit as well)


const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes.js");

//Function writes the SVG File to prompt user for input

functionwriteToFile(fileName, answers); {

}


//Function that utilizes inquirer to prompt user for input
function promptUser() {
    inquirer.prompt([

        {
            type: "input",
            message: "What text would you like to add to your logo? Choose up to 3 Characters",
            name: "text"
        },

        {
            type: "input",
            message: "Choose the color you would like for your text (Ex: red, blue, green)",
            name: "textColor",
        },

        {
            type: "input",
            message: "Choose the color you would like for your background (Ex: red, blue, green)",
            name: "shapebackgroundColor",
        },

        {
            type: "input",
            message: "Choose the shape you would like for your logo (Ex: triangle, square, circle)",
            name: "shape",
        },
    ])

    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Please choose no more then 3 characters");
            promptUser();
        } else {
            writeToFile("logo.svg", answers);
        }
        
    ));
}