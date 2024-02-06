const min = 2;
const max = 10000000;
const primes = [];

function findPrimes(start, range){
    let isPrime = true;
    const end = start + range;
    for(let i = start ; i < end ; i++){
        for(let j = min  ; j < Math.sqrt(end) ; j++){
            if(i !== j && i % j === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime === true){
            primes.push(i);
        }
        isPrime = true;
    }

}
console.time('prime');
findPrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);


// 소수 개수 구하는 프로그램 (나중에 worker 로 분리하여 작업할 것이다.)