const timeout =  setTimeout(()=>{
    console.log('1.5초 후 실행');
},1500);

const interval = setInterval(()=>{
    console.log('1초 마다 실행');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');// 2.5초에 timeout2와 interval 이 아래 함수에 의해 종료되기 때문
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const immediate = setImmediate(()=>{
    console.log('즉시 실행');
});

const immediate2 = setImmediate(()=>{
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2); // 위의 immediate2 중지

