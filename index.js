const inquirer = require("inquirer");

const svg = require("./lib/svg");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes.js");
const Svg = require("./lib/svg");
const { prependListener } = require("process");



//Function that utilizes inquirer to prompt user for input
const questions = [

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
        name: "shapeBackgroundColor",
    },

    {
        type: "list",
        message: "Choose the shape you would like for your logo (Ex: triangle, square, circle)",
        name: "shape",
        choices: ["Triangle", "Square", "Circle"]
    },
]

//Function writes the SVG File to prompt user for input

function writeToFile(fileName, data) {
console.log(`Writing [${data}] to file [${fileName}]`);
fs.writeFile(fileName, data, function (err) {
if (err) {
  return console.log(err);
}
console.log('You have Generated a logo.svg!');
});
}

async function init() {
console.log('Starting init');
let svgString = '';
const svg_file = 'logo.svg';

// Prompt the user for answers to questions
const answers = await inquirer.prompt(questions);

// User text
const userText = answers.text.slice(0, 3);
console.log(`User text: [${userText}]`);

// User font color
const userFontColor = answers['textColor'];
console.log(`User font color: [${userFontColor}]`);

// User shape color
const userShapeColor = answers['shapeBackgroundColor'];
console.log(`User shape color: [${userShapeColor}]`);

// User shape type
const userShapeType = answers['shape'];
console.log(`User entered shape = [${userShapeType}]`);

// User shape
let userShape;
if (userShapeType.toLowerCase() === 'square') {
userShape = new Square();
console.log('User selected Square shape');
} else if (userShapeType.toLowerCase() === 'circle') {
userShape = new Circle();
console.log('User selected Circle shape');
} else if (userShapeType.toLowerCase() === 'triangle') {
userShape = new Triangle();
console.log('User selected Triangle shape');
} else {
console.log('Invalid shape!');
return;
}
userShape.setColor(userShapeColor);

// Create a new Svg and add the shape and text elements to it
const svg = new Svg();
svg.setTextElement(userText, userFontColor);
svg.setShapeElement(userShape);
svgString = svg.render();

console.log("Shape generation complete!");
console.log("Writing shape to Examples folder...");
// putting created svg file into Examples folder
const filePath = './Examples/' + svg_file;
writeToFile(filePath, svgString); 
}

init();