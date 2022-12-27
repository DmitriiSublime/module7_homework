// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const details = function (string, object){
    return (object in string)
}

const gamer = {
    name: 'Oleg',
    surname: 'Olegov',
    age: 24,
    city: 'Kazan',
    position: 'programmer'
}

console.log(details(gamer, 'city'));
console.log(details(gamer, 'profession'));

