// Создайте пустой объект;
// Добавьте несколько свойств со значениями разных типов;
// Добавьте метод;
// Удалите одно из созданных свойств.

// const arr = {
//     name: 'Oleg',
//     surname: 'Zolotar',
//     age: 24,
//     position: 'bezdelnik'
// }
// arr.status = 'podKablukom';
// delete arr.age;
// console.log(arr);

// console.log(arr['name']);

// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const gamer = {
    name: 'Oleg',
    surname: 'Olegov',
    age: 24,
    city: 'Kazan',
    position: 'programmer'
}

for (let key in gamer){
    console.log(key + ' - ' + gamer[key] + ';')
}