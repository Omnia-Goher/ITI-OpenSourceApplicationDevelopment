class shape{
    constructor(name,sides,sideLength){
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }

    calcPerimeter(){
        let circumference = this.sideLength * this.sides
        console.log(`Perimeter of ${this.name} = ${circumference}`)
    }
}

/*let square = new shape("square",4,5)
square.calcPerimeter()
let triangle = new shape("triangle",3,3)
triangle.calcPerimeter()*/

class square extends shape{
    constructor(sideLength){
        super("square",4,sideLength)
    }
    calcArea(){
        let area = this.sideLength * this.sideLength
        console.log(`Area of square= ${area}`)
    }
}

let sq = new square(6);
sq.calcPerimeter();
sq.calcArea();