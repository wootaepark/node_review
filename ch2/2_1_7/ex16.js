const condition = true;
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        return new Promise((resolve, reject)=>{
            resolve(message);
        });
    })
    .then((message2)=>{
        return new Promise((resolve, reject)=>{
            resolve(message2);
        });
    })
    .then((message3)=>{
        console.log(message3);
    })
    .catch((error)=>{
        console.error(error);
    })

    // ex16 : 프로미스 리턴을 통해 다음 then 문으로 이동시키는 코드 