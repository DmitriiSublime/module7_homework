// class Parent {
//constructor(ownCity) {
//this.ownCity = ownCity;
//this.hasFlat = true;
   
//}
   
//getInfo(){
//console.log(`I live in the ${this.ownCity}`)
   
//}
   
//}

/////////////////

// function Parent (ownCity) {
//     this.ownCity = ownCity,
//     this.hasFlat = true;
   
//    }
   
//    Parent.prototype.getInfo(){
//     console.log(`I live in the ${this.ownCity}`)
   
//    }

// let parent = new Parent('Moscow');

// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

// function Staff (name, voltage, room){
//     this.name = name,
//     this.room = room,
//     this.voltage = voltage
//     this.switch = function (){
//         console.log(name + ' is ON')
//     }
//     this.power = function (){
//         console.log(name + ' voltage is ' + 'W' + voltage)
//     }
//     this.location = function (){
//         console.log(name + ' in ' + room)
//     }
    
// }
// let laptop = new Staff('Laptop', 80, 'Bedroom');
// let fridge = new Staff('Fridge', 120, 'Hall');
// let kettle = new Staff('Kettle', 180, 'Kitchen');
// let hairDryer = new Staff('Hair dryer', 210, 'Bathroom');

// laptop.location();
// laptop.power();
// laptop.switch();

// fridge.location();
// fridge.power();
// fridge.switch();


class Staff {
    constructor(name, room, voltage){
    this.name = name,
    this.room = room,
    this.voltage = voltage
    }

    getInfo() {
        return this.name + ' is ON'
    }

    getLocation() {
        return this.name + ' in ' + this.room
    }

    getPower() {
        return this.name + ' voltage is ' + 'W' + this.voltage
    }
}

class HairDryer extends Staff {
    constructor(name, room, voltage, price){
        super(name);        
        this.room = room
        this.voltage = voltage
        this.price = price
    }
    getPrice = function(price){
        return this.name + ' price is ' + this.price
    }
}

let laptop = new Staff('Laptop', 80, 'Bedroom', 570);


console.log(laptop.getInfo);
console.log(laptop.getLocation);
console.log(laptop.getPower);
console.log(laptop.getPrice);


let forHair = new HairDryer('hairdryer', 'Bathroom', 320, 100);

console.log(forHair.getInfo);
console.log(forHair.getLocation);
console.log(forHair.getPower);
console.log(forHair.getPrice);



