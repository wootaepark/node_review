const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd; // 문자열 (var.js 에 정의되어 있다.)
    }
    return even;

}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));