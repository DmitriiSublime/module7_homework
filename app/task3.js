// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

let emptyFunction = function a() {
    let obj = Object.create(null)
    return obj
}
console.log(emptyFunction());


