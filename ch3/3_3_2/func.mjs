import {odd, even} from './var.mjs';

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}
export default checkOddOrEven; // module.exports = checkOddOrEven 과 같은 역할 (common js 에서의 )