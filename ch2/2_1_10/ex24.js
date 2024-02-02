const a = {};
a.b; // a 가 객체이므로 문제 없음

const c = null;
try{
    c.d;
}
catch(e){
    console.error(e);
}
c?.d; // 문제 없음

try{
    c.f();
}
catch(e){
    console.error(e);
}
c?.f();

try {
    c[0];
}
catch(e){
    console.error(e);
}
c?.[0]; 


// ex24 : 옵셔널 체이닝