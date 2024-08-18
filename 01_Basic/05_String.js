const name = "Himan-fc";
const repoCount = 50;
//console.log(name + repoCount + 'Value') //It is bad way of writing/concatinating string

console.log('Hello my Name is ${name} and my repo count is ${repoCount}') //It is called Bactix and this the right way to concatinate.

const gameName = new String('Himan');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0, 4)// output: H, i, m, a, n
const againString = gameName.slice(-8, 4) //output : i, m, a

const newString = gameName.substring(-8, 4)// output: Himan | reason: substring ignores negative values and starts from 0 if you provide one.


const newStringOne = '  himan  '
console.log(newStringOne)//output: '  himan  '

console.log(newStringOne.trim)//output: 'himan' | Does : remove unwanted spaces

const url = 'https://himan.com/himan%20bora'

url.replace('%20','_') //output: 'https://himan.com/himan_bora' | Does: replaces a particular substring within a string

url.includes('himan') //output: True | Does: find out is this string is a part of the other string. 
