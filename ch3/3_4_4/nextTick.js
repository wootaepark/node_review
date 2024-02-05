setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=>{
    console.log('timeout');
},0); // 보통은 위의 setImmediate 와 같이 사용하지는 않는다.
 
Promise.resolve().then(()=>console.log('promise')); // Promise 또한 nextTick 과 마찬가지로 다른 콜백보다 우선시 된다.




// process.nextTick(콜백) - 이벤트 루프가 다른 콜백 함수들 보다 nextTick의 콜백 함수르 우선으로 처리하도록 한다.