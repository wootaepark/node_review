const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside :{
        inside:{
            key : 'value',

        },
    },
};

console.time('전체 시간'); // 시간 측정 시작 ()안의 이름이 동일해야 한다.
console.log('평범한 로그입니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error 에 담긴다.');

console.table([{name:'태우',birth:'1999'},{name:'zero',birth:'1979'}]); // 테이블 형식으로 표현

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth : 1});

console.time('시간 측정');

for (let i = 0 ;i<100000; i++){} 

console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');

}
function a(){
    b();
}
a();

console.timeEnd('전체 시간'); // 시간 측정 끝