var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJs : function(){
        console.log('JS');
    },
    sayNode: sayNode, // key : value (key 값은 내가 맘대로 정의 가능, value 값은 있는 값을 써야 한다.)

};
oldObject[es+6] = 'Fantastic'; // 객체에 동적으로 속성 추가 
oldObject.sayNode(); // Node 
oldObject.sayJs(); // JS
console.log(oldObject.ES6); //'Fantastic'



// ex4 : 객체 리터럴  (oldObject), ex5와 비교해보기