// function add(a,b) {
// 	return a + b;
// }

// console.log(add(1,3))

// let arr = [1,2,3];


// console.log(add(...arr));

// let groupa = ['f1', 'f2'];
// let groupb = ['f3', 'f4'];

// let final = [...groupa, ...groupb];

// console.log(final);

// let personA = ['jason', 41];
// let personB = ['tala', 40];

// function sayHi (name, age) {
// 	return 'Hello, ' + name + '! You are ' + age + '.';
// }

// console.log(sayHi(...personA));
// console.log(sayHi(...personB));

//spread operator
// let names = ['Sofia', 'Stella'];
// let final = ['Tala'];

// final = [...final, ...names];

// final.map(c => console.log('Hello ' + c + '!'));

//moment
//january 1 1970 0:00:00
const moment = require('moment');

console.log(moment().format());

let now = moment();
console.log(now.unix());

let timestamp = now.unix();
let currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mmA'));