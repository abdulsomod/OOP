these are the four pillars od OOP, encapsulation, abstraction, inheritance and polymophism


1. Encapsulation - is d grouping of related methods and propertirs into an object.

2. Abstraction - is when complexities or properties and methods are hidden from the scope of an object. un abstraction, you reduce complexities and the impact of/on change

3. Inheritance - is the process of inheriting from a parent object.

4. Polymorphism : poly(many, multiple) morph(form) - many forms, is the process of many things happening in the form of an entity

```
let baseSalary = 40_000;
let incentive = 10;
let points = 30;

function getMonthlyPay (baseSalary, incentive, points){
  return baseSalary + incentive * points;
}

console.log(getMonthlyPay(baseSalary, incentive, points));

let employee = {
  baseSalary: 40_000,
  incentive: 1000,
  points: 290,
  getMonthlyPay: function(){
    return this.baseSalary + this.incentive * this.points;
  },
};
console.log(employee.getMonthlyPay())
```


1. Factories - are functions used to generate an object.
```
const rectangle = {
  width: 10,
  height: 10,
  location: {x:0, y:0},
  draw(){
    console.log(`drawing....Spec => width: ${this.width}, height: ${this.height}`)
  },
};

rectangle.draw();

```
2. Constructor - is a function that help us create an object,

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

```
primitive type: number, boolean, string, symbol, null, undefined -  are copied by there values

let a = 10;
let b = a;
a = 20;

console.log({a,b});

let x =  {value: 15};
let y = x;

x.value = 10;

console.log(x.value);
console.log(y.value);

```


```
reference types: object(are copied by there reference), function and array

```