const {Worker, isMainThread, parentPort,} = require('worker_threads');

if(isMainThread){ // 메인스레드 인 경우
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker',message));
    worker.on('exit', ()=> console.log('worker exit'));
    worker.postMessage('ping');

}
else{
    parentPort.on('message', (value)=>{
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}


// 노드에서 멀티스레딩 하기 