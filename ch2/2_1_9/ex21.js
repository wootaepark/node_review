const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1); // 중복 미 허용
s.add(2);

console.log(s.size); // 4

s.has(1);
console.log(s.has(1));

for (const a of s){
    console.log(a);
}
s.forEach((a)=>{
    console.log(a);
})

s.delete(2);
s.clear();

//ex 21 : Set 자료구조 사용 예시