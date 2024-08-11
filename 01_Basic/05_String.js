const name = "Himan-fc";
const repoCount = 50;
//console.log(name + repoCount + 'Value') //It is bad way of writing/concatinating string

console.log('Hello my Name is ${name} and my repo count is ${repoCount}') //It is called Bactix and this the right way to concatinate.

const gameName = new String('Himan');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0, 4)// output: H, i, m
const againString = gameName.slice(-8, 4) //output : i, m, a
