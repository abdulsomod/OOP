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


Factories are functions used to generate an object.