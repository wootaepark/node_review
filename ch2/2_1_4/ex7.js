var relationship1 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends : function(){
        var that = this;
        this.friends.forEach(function(friend){ // .forEach 가 각자에 대해서 실행하는 듯 
            console.log(that.name, friend);
        });
    },

};
relationship1.logFriends();

// ex7 : 일반적인 함수 내부에서의 this (ex8과 비교해보기)