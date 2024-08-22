// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

let sum = 0;
nums1.forEach(num => {
    sum += num;
})
console.log(sum);
console.log();
//?==========================================

// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

const newObj = names.map(name => {
    namesObject.push({
        name: name[0].toUpperCase() + name.slice(1),
        nameLength: name.length,
    })

})
console.log(namesObject);
console.log();
// let newObj = {...names};
// let newString = names.toString();
// names.forEach((element) => {
//     newObj[`name`] = element.toUpperCase([0]);
// })
// console.log(newObj);

//?==========================================

// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach(newFunction);

function newFunction(chislo) {
    numsRes.push({
        number: chislo,
        square: chislo ** 2,
        cube: chislo ** 3,
    })
}
console.log(numsRes);
console.log();

//?==========================================

// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.slice().reverse().forEach(numero => reversedNumberRow.push(numero))

console.log(reversedNumberRow);
console.log();

//?==========================================

// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    }
];

let theText = "";

cars.forEach(auto => {
    theText += `This is a ${auto.color} ${auto.make}. It costs ${auto.price}$.`

})

console.log(theText);


