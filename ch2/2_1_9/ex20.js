const m = new Map();

m.set('a','b'); // set(key, value)로 Map 에 속성 추가
m.set(3,'c');// 문자열이 아니어도 key 값이 가능하다.
const d = {};
m.set(d, 'e'); // 객체도 key 값이 될 수 있다.

const d_value = m.get(d); // get(키)로 속성 조회
console.log(d_value);

m.size; // size 로 속성 개수 조회
console.log(m.size);

for (const [k,v] of m){
    console.log(k,v);
} // 속성간의 순서 보장

m.forEach((v,k)=>{
    console.log(k,v);
})
// 위 결과와 동일

m.has(d); // has(키)로 속성 존재 여부 판단
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성 삭제
m.clear(); // 모든 속성 제거
console.log(m.size); //0


// ex20 : Map 사용 예시 (객체와 유사하다.)