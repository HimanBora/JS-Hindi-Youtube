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