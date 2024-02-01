var candyMachine = {
    status : {
        name: 'node',
        count : 5,
    },
    getCandy : function(){
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy; // 참조
//candyMachine.getCandy();
var count = candyMachine.status.count;      


console.log(getCandy, count);

// ex 9 : 구조 분해 할당 (할당 전 코드, 할당 후 코드는 ex 10)