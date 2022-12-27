// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.




// function Staff (name, voltage, room){
//     this.name = name,        
//     this.voltage = voltage,
//     this.room = room,

//     Staff.prototype.location = function (){
//         console.log(name + ' in ' + room)
//     }
//     Staff.prototype.switch = function (){
//         console.log(name + ' is ON')
//     }  
//     Staff.prototype.power = function (){
//         console.log(name + ' voltage is ' + 'W' + voltage)
//     }   
// }
  
// let laptop = new Staff('Laptop', 80, 'Bedroom');
// let fridge = new Staff('Fridge', 120, 'Hall');
// let kettle = new Staff('Kettle', 180, 'Kitchen');
// let hairDryer = new Staff('Hair dryer', 210, 'Bathroom');

// laptop.location();
// laptop.power();
// laptop.switch();


function Staff (name, voltage, room){
    this.name = name,
    this.room = room,
    this.voltage = voltage
    this.switch = function (){
        console.log(name + ' is ON')
    }
    this.power = function (){
        console.log(name + ' voltage is ' + 'W' + voltage)
    }
    this.location = function (){
        console.log(name + ' in ' + room)
    } 
}
let laptop = new Staff('Laptop', 80, 'Bedroom');
let fridge = new Staff('Fridge', 120, 'Hall');
let kettle = new Staff('Kettle', 180, 'Kitchen');
let hairDryer = new Staff('Hair dryer', 210, 'Bathroom');

laptop.location();
laptop.power();
laptop.switch();

fridge.location();
fridge.power();
fridge.switch();













// function ElectricalAppliance (name, manufacturer, power, turn ){
//     this.name= name,
//     this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
//     this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
//     this.manufacturer = function(){      
//       console.log(`The ${name} is manufacturied by ${manufacturer}.`)
//     }
//   }
  
//   const iron = new ElectricalAppliance('iron', 'Tefal');
//   const power  = new ElectricalAppliance('iron', '', 650);
//   const turn = new ElectricalAppliance('iron', '', '', 'on');
//   iron.manufacturer();
//   power.power();
//   turn.turn();
  
//////////////


//   function Lighting (name, manufacturer, power, led){
//     this.name= name,
//     this.led = function(){console.log(`The ${this.name} is ${led}.`)}
//     this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
//     this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
//   }
  
//   const lamp = new Lighting('lamp', 'IKEA');
//   const power  = new Lighting('lamp','', 50);
//   const led = new Lighting('lamp','', '', 'LED');
//   power.power();
//   lamp.manufacturer();
//   led.led();
  
  
//   function PC (name, manufacturer, display, power){
//     this.name= name,
//     this.display = display,
//     this.power = power,
//     this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
//     Display is ${this.display}'. Power is ${this.power} W.`)}
//   }
  
//   const comp = new PC('computer', 'IBM', 17, 220);
  
//   comp.manufacturer();