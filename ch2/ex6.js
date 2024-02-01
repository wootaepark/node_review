function add(x, y){
    return x + y;
};
const add2 = (x, y) => {
    return x + y;
};
const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
};
const not2 = x => !x;

console.log(not2(false));

// ex6 : 화살표 함수