const {odd, even} = require('./var');

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;

// exports.checkOddOrEven = checkOddOrEven; 으로 쓸 수 있다.
// index.js 에서는 해당 모듈을 불러온다 .(예를 들어 check 라는 이름으로)
// 그러면 거기서는 check.checkOddOrEven(10) 과 같이 이용할 수 있다.