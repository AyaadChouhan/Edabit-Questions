// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

class Circle {
  constructor(radius){
    this.radius = radius
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
let circy = new Circle(11)
let circy2 = new Circle(4.44)
console.log(circy.getArea())
console.log(circy2.getPerimeter())

