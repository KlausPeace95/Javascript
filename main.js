//BASIC JAVASCRIPT COURSE

//Printing out a plain text
console.log('Hello, From Main.js')

// VARIABLES IN JS (let and const declarations)

let age = 30
console.log('I am', age, 'years old') // can be initialised and reassigned another value

const salary = 150000
console.log('My salary is $',salary, 'per year') // all const must be initialised and cannot be changed

// DATA TYPES (Primitive (7) and Non-primitive(1) types)

//Strings using '', "" or ``
const name = 'Klaus Peace'
const language = "JavaScript"
const channel = `Codevolution`

//Number (integer and floating point)
const total = 0
const PI = 3.142

//Boolean (logical)
const isPrimaryNumber = true
const isNewUser = false

//Undefined (Not assigned value)
let result
console.log(result)

const res = undefined

//Null (Empty or Unkown value)
const data = null

//Bigint (Value bigger than int can hold)



//Non-primitive
//Object (Complex declaration)
const person = {
    'firstName' : 'Klaus',
    'lastName' : 'Peace',
    'age' : 30,
}

console.log(person.firstName, person.lastName, 'is', person.age, 'years old')


//Arrays

const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[3], 'is at array index number 3 of odd numbers')


//OPERATORS (Perform operation on values of variables)

//Assignment, Arithmetic Operators
let x = 10
let y = 5
console.log(x+y, x-y, x*y, x % y, ++x, --y, )

//Comparison Operators (Returns true or false)
console.log(x==y, x!=y, x===y, y<x, y<=x)

//Logical Operators (Perform Logical operations and return true or false)
//Logical AND
const isValidNumber = x > 8 && 8 > y
console.log(isValidNumber)

//Logical OR
const isValidNumber1 = x > 20 || 8 > y
console.log(isValidNumber1)

//Logical NOT
const isValid = false
console.log(!isValid)

//String Operators
console.log('Klaus ' + 'Peace')

//Ternary Operator (Returns value based on the condition)
const isEven = 10 % 2 === 0 ? true : false
console.log(isEven)


//TYPE CONVERSION

console.log(2 + '3') //result is string after concatenation
console.log('4' - '2') //result is integer after substraction
console.log('6' - 5) //result is integer after sbstraction
console.log('7' * '8') //result is integer after multiplication
console.log('9' * 8) //result is integer after multiplication
console.log('Klaus' - 'Peace') //result id NaN (not a number)
console.log('6' / '11') //result is FPN after division
console.log('Klaus' + 9) //result is string after concatenation

console.log('8' - true) //result is 8-1 = 7
console.log(false - '-9') //result is 0--9 = 9

console.log(parseInt('9'), parseFloat('2.71')) //converting string to integer and FPN

console.log((10002).toString())
console.log(Boolean(10)) //all nuberic values return true (null, undefined, 0, '', NaN return false)
console.log(Boolean(null))

//EQUALITY (== allows coercion and === does not allow coercion)


const var1 = 5 
const var2 = '5'

console.log(var1 == var2)   //true (JS coerces variables to the same type)
console.log(var1 === var2)  //false  (variables must be of the same type before considered equal)

//CONDITIONAL STATEMENTS

//If, Else if, Else statements

let x = 8
const y = 95

console.log("x =",x)
console.log("y =",y)

if(x > y){
    console.log("x is bigger than y")
}
else if(x == y){
    console.log("x and y are equal")
}
else{
    console.log("x is less than y")
}

//Case Statement


let color = prompt("Enter Color: ")

switch (color){
    case 'red':
        console.log("No!")
        break
    case 'green':
        console.log("No!")
        break
    case 'blue':
        console.log("No!")
        break
    case 'purple':
        console.log("Yes!")
        break
    case 'Yellow':
        console.log("No!")
        break
    default:
        console.log("Invalid Color!")   
}

LOOPS

//For Loop

for(let i=1; i<=10; i++){
    console.log('Iteration Number', i)
}

//While Loop

let j = 1

while(j <= 10){
    console.log("Iteration Number", j)
    j++; 
}

//Do...While Loop

let k = 1

do {
    console.log("Iteration Number", k)
    k++
} while (k <= 10)

//For...Of Loop

const numArray = [45, 26, -41, 0, 73]

for (const num of numArray){
    console.log('Iteration Number', num)
}


//FUNCTIONS

//Factorial Function

function factorial(num) {
    let fact = 1
    if (num < 0){
        console.log(num, "Factorial Does not exixt")
        return
    }
    else if (num == 0){
        console.log(num, "Factorial is:")
    }
    else {
        for (let i = 1; i <= num; i++){
            fact = fact*i
        }
        console.log(num, "Factorial is:")
    }
    return fact
}

console.log(factorial(11))

//Fibonaccy Numbers

function fibonacci(numb) {
    let fib1 = 0, fib2 = 1, fib

    console.log('Fibonacci Series of', numb)

    for(let i = 1; i<= numb; i++) {
        console.log(fib1)
        fib = fib1 + fib2
        fib1 = fib2
        fib2 = fib
    }
   
}

fibonacci(8)

//Pay Salary

function pay(name, matricule, experience) {
    
    let salary = 220000.00
    if (experience >= 1){
        salary = salary + experience*(10000)
    }
    
    console.log(name,":", matricule + ", You Have", experience, "Years of experience", "Your Salary is", salary, "FCFA")

}

pay('Tanjoh Klaus', 'U-081293', 4)
pay('Dan Moelle', '563401-D', 25)
pay('Mih Joel', 'Y-142083', 0)
pay('Kom Vivian', '625018-F', 18)


//Arrow Functions
const arrowSum = (a, b) => a + b // You can omit {} anf retun keyword if we have only one statement to execute  
const addFive = num => num + 5 // You can omit () if we have just one parameter

const sum = arrowSum(45, 91)
console.log(sum)

const add5 = addFive(34)
console.log(add5)

// //SCOPE

//Block Scope (Variables declared inside {} cannot ba accessed from outside the {})

const myName = 'Global Joel' // Globally declared variable will not overwrite block or function scope variables

if (true){
    const myName = 'Block Klaus'   //Block Scope
    console.log(myName) //Correct
}


//Function Scope
function testFn(){
    const myName = 'Function Peace'  //Function Scope
    console.log(myName)
}
testFn()

console.log(myName)



// Global Scope

const myNum = 100;
if (true){
    console.log(myNum) //Gets global variable from block
}








