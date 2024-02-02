const a = 0
const b = a || 3; // || 는 falsy 값이면 뒤로 넘어감
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ??는 null, undefined 일때만 뒤로 넘어감
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f);

const g = undefined;
const h = g ?? 3;
console.log(h); // 3;


//ex23 : 널 병합 (0, '', false, Nan, null, undefined) 중 null 과 undefined 만 따로 구분한다.