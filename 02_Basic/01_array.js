// array

const myArr = [0,1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);

console.log(myArr[2]); // It is called indexing || Output : 1

//Array methods

myArr.push (6) // it adds the element | output: [0,1,2,3,4,5,6]

myArr.pop()// remves the last value | output : [0,1,2,3,4,5]

myArr.unshift(9) // it shift the index 0 to the given number | output: [9,0,1,2,3,4,5]

myArr.shift() // remove the first index number | output: [0,1,2,3,4,5]
console.log(myArr.includes(9))// help you find is the given value is or not in the array | output: false

console.log(myArr.indexof(2))//helps you find the index of the number | output : 3

myArr.join // adds all the item in the array to a string

myArr.slice(1,3)