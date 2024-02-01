const candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy, status :{count}} = candyMachine; // 객체의 경우 key 값이 정확히 일치해야 한다.
console.log(getCandy, count);

// ex10 : 구조분해 할당 코드 (할당 후 코드), 결과는 ex9와 동일