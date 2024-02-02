const promise1 = Promise.resolve('성공');
const promise2 = Promise.reject('실패');
const promise3 = Promise.resolve('성공');


// 사이코드

Promise.allSettled([promise1,promise2])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    })