class Shape {
  constructor() {
    this.color = "";
  }
  
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Triangle class properties defined in Shape class
class Triangle extends Shape {
  render() {
    
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

// Square class properties defined in Shape class
class Square extends Shape {
  render() {
    
    return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
  }
}

// Circle class properties defined in Shape class
class Circle extends Shape {
  render() {
    
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
  }
}


module.exports = { Triangle, Square, Circle };