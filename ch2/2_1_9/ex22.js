const arr = [1,3,2,7,2,6,3,5];

console.log(arr);

const s = new Set(arr);
console.log(s);

const result = Array.from(s);
console.log(result); // 중복 제거후 배열 폼으로 변경

//ex22 : 배열에서 중복 제거하기