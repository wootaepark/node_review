const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번',data.toString());
console.log('끝');

// 동기로 순서대로 출력되도록 하기