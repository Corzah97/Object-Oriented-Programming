const inquirer = require("inquirer");

const svg = require("./lib/svg");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes.js");
const Svg = require("./lib/svg");
const { prependListener } = require("process");

//Function writes the SVG File to prompt user for input

function writeToFile(fileName, answers) {

      // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
 svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  
    svgString += "<g>";
  
    svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

 
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
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
            type: "list",
            message: "Choose the shape you would like for your logo (Ex: triangle, square, circle)",
            name: "shape",
            chocies: ["Triangle", "Square", "Circle"]
        },
    ])

    .then((answers) => {
        let shape = null
        if (answers.shape === "Triangle") {
            shape = new Triangle()
        }
        else if(answers.shape === "Square") {
            shape = new Square()
        }
        else {shape = new Circle()}

        shape.setColor(answers.shapebackgroundColor)
        
        if (answers.text.length > 3) {
            console.log("Please choose no more then 3 characters");
            promptUser();
        } else {
            let svgInst = new Svg()
            svgInst.setText(answers.text,answers.textColor);
            svgInst.setShape(shape);
            fs.writeToFile("logo-test.svg", svgInst.render());
        }
        
    
});
}
promptUser()