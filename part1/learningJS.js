//Variables

const x = 1 // const does not define a varaible, but gives a constant whose value can no longer be changed.
let y = 5

console.log(x, y)

y += 10
console.log(x,y)

y = 'sometext'
console.log(x,y)

//x = 4 //Causes an error

var xy = 12 // var is another way to define variables besides let.


//Arrays

const t = [1, -1, 3] //This line declares a constant array named t and initializes it with three elements: 1, -1, and 3.
t.push(5) //This line calls the push method on the array t, which adds the value 5 to the end of the array.
console.log(t.length) // Prints 4
console.log(t) // Output will be [1, -1, 3, 5]
console.log(t[1]) //Prints -1 which is in the position 1 of the numbers listed

t.forEach(value => {
    console.log(value) //Numbers 1, -1, 3 and 5 are printed, each on its own line
})


//The best way to add values to arrays is by creating new arrays all together using the concat function
const t1 = [1, -9, 3]

const t2 = t1.concat(10) //Creates a new array

console.log(t1) //Prints 1, -9, 3
console.log(t2) //Prints 1, -9, 3, 19

//map method
//The map method is used to create a new arrays from previously existing arrays

const m1 = t2.map(value => value *2) //Multiplies each of the values of t2 by 2 and creates a new array, m1
console.log(m1)

//Map can also transform an array into something completely different
const m2 = m1.map(value => '<li>' + value + '</li>')
console.log(m2) // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

const t4 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t4 //This will assign the first and second values of t4 to first and second respectively, and the remaining values are collected and assigned to an array of their own, rest.

console.log(first, second)
console.log(rest)

//OBJECTS
//The common way of defining objects is by listing the properties of the object withing braces
const object1 = {
    name: 'Elly Okinyo',
    age: 27,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

//The values of the properties can be any type, like integers, strings, arrays, objects, etc.
//The properties of an object are referenced by using the dot(.) notation, or by using brackets

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

//We can also add properties to an object by either using dot notation or brackets
object1.address = 'Helsinki'
object1['secret number'] = 12341 //This has been done using the brackets because of the space between secret and number. This space makes it inappropriate to use the dot notation

//FUNCTIONS

const sum = (p1, p2) => { //Writing the function
    console.log(p1)
    console.log(p2)
    return p1 + p2
} //Then calling the function
const result = sum(1, 5)
console.log(result)

//If there is just a single parameter, we can exlude the parentheses from the function definition
const square = p => { //Defining the function
    console.log(p)
    return p * p
} //Then calling the function
const area = square(10)
console.log(area)

const t5 = [1, 2, 3]
const t5Squared = t5.map(p => p * p)
//This line uses the map method to create a new array, t5Squared.
//The map method iterates over each element in the t5 array, applies the provided arrow function (p => p * p) to each element, and returns a new array containing the results.
//The arrow function p => p * p takes each element p from the t5 array, squares it (i.e., multiplies p by itself), and returns the squared value.

//Defining a function

//1. Giving a name in the function declaration
function product (a, b) {
    return a * b
}
const resultp = product(2, 6)
console.log(resultp)

//2. Using a function expression
const average = function(a, b) {
    return (a + b) / 2
}
const resulta = average(2, 5)
console.log(resulta)