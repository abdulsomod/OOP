function Rectangle(width, height){
  this.width = width;
  this.height = height;
  this.draw = () => {
    console.log(`drawing.... Spec => width: ${this.width}, height: ${this.height}`);
    console.log(this);
  }
}

const rectangle = new Rectangle
rectangle.draw()