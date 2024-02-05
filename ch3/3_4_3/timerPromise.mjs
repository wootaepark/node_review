import {setTimeout, setInterval}  from 'timers/promises';

const timer1 = await setInterval(3000);
console.log('3초 뒤 실행');

for await (const startTime of setInterval (1000, Date.now())){
    console.log('1초 마다 실행', new Date(startTime));
}