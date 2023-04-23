class Svg {
    constructor () {
        this.textElement = ''
        this.shapeElement = ''
    }
    setText (txt,color) {
        return `<text width='300' height='200' text-anchor='middle' x='150' y='100' font-size='60' fill='${color}'>${txt}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape.render
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
}
module.exports=Svg