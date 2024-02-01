
const relationship2 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends2(){
        this.friends.forEach(friend => { // 여기서의 this 는 필수, 없으면 friends 인식을 못하는 듯 
            console.log(this.name, friend)
        });
    },
};
relationship2.logFriends2();

//ex8 : 화살표 함수 내부에서의 this (ex7과 비교해보기)