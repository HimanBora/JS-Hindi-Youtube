const score = 400 ;

const balance = new Number(100) //new : to make sure that you get the right data type you expected.
console.log(balance)

console.log(balance.toString); //toString : converts the other data type to string.

console.log(balance.toFixed(2)); // output : 100.00 | Reason : because their are some product where you need very accurate number you use this, it help you to ascertain how many decimal you need.

const otherNumber = 123.8966 ; 
console.log(otherNumber.toPrecision(4)) //The toPrecision() method formats a number to a specified length. A decimal point and nulls are added (if needed), to create the specified length. | output : 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); // output : 10,00,000 | put commas to better read large number.

//********* Maths *******************/

console.log(Math);
console.log(Math.abs(-4)) ; // output: 4 | it changes the negative sign to positive only not vice versa.

console.log(Math.round(4.3)) ; // output : 4 | mae your decima figure round off.
console.log(Math.ceil(4.2)) ; // output : 5 | it round off to the highest valure.
console.log(Math.floor(4.9)) // output : 4 | it round off to the lowest value.
console.log(Math.min(4,3,5,6,7)) // output : 3
console.log(Math.max(1,2,3,4,5,6,7))//output : 7
console.log(Math.random()) ; //output : can give you any number between 0 and 1(eg: 0.543)

console.log((Math.random()*10) + 1);
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)+ min))