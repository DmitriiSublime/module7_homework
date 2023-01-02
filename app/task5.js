// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



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
