let score = "himan" ;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);


// "33" => 33
// "33abc" => Nan(Not A Number)
// "true" => 1 "false" => 0

let isLoggedIn = "himan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; "himan" => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


//****************Operations******************
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**2);
console.log(2%2);

let str1 = "hello"
let str2 = " Himan"
let str3 = str1 + str2 ;
console.log(str3)

console.log(2 + 1 + "2");
//because 2 int were first so they got added and then converted into string

console.log("1" + 2 + 2);
//because string is first the entire stuf was converted into string

console.log(3 + 4 * 5 % 3); //Bad way of writing

console.log((3 + 4) * 5 % 3); // right way

console.log(+true) ; // Bad way >2
console.log(+"") ; // Bad way  > 0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++ ;
console.log(gameCounter);