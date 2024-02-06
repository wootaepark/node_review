const fs = require('fs');


console.log('시작');
fs.readFile('./readme2.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt',(err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        });
    });
});


// 비동기로 처리하면서 순서대로 출력하기
// 단점 : 콜백 지옥