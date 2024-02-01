var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic', // 선언
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6); // ES 대소문자 구별 안해도 됨



// ex5 : 객체 리터럴 (newObject), ex4와 비교해보기