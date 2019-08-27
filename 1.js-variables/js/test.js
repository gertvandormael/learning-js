// Let is used in a block and not global like var 
{
let myName; 

myName = "Gert";

console.log(myName);
console.log("Hello world");
console.dir(myName)

// Var are global and can be redeclared
var myAge;

myAge = "28";

console.log(myAge);

// Const can't be redeclared like var, global adn block
const number = 5 + 10;

console.log(number);

// Starts from 0 and keeps adding 1 untill i in console = 10
for(let i = 0; i<10; i++) {
    console.log(i)
  }

// Numbers
let myInt = 5;
let myFloat = 6.667;
console.log("");
console.log(typeof myFloat);
console.log(myInt * 5);

let num1 = 10;
let num2 = 50;
console.log(num1 ** 3);
console.log(5 + 10 * 3);
console.log(num2 % 9 * num1);
console.log(num2 + num1 / 8 + 2);

// adds 1 to num1
console.log(num1++)
console.log(num1)

// Are values identical?
console.log (5 === 2 + 4)
// Are values not identical?
console.log (5 != 2 + 3)

// Strings
let string = "The revolution will not be televised.";
console.log("")
console.log(string)
let badString = string;
console.log(badString);

let one = "Hello, ";
let two = "how are you?";
console.log(one + two);

console.log('Front ' + 242);

let myDate = "19 + 6";
console.log(typeof myDate); 

console.log(two.length);
console.log(two.indexOf("are"));

// Arrays
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
console.log(shopping[0]);

shopping[0] = "tahini";
console.log(shopping[0]);

console.log (shopping.length);

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(",");
console.log(myArray);

myArray.push("Cardiff");
console.log(myArray);
myArray.push("Bradford", "Brighton");
console.log(myArray);

let newLength = myArray.push("Bristol");
console.log(myArray);
console.log(newLength);
}