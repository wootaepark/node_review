async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
         user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
    }
    catch(error){
        console.log(error);
    }
    

};


// Promise 가 들어간 함수를 사용 할 때 앞에 await을 붙여서 사용 그리고 그것을 가지는 함수는
// async 를 앞에 꼭 붙여줘야한다.

// ex18 : 일반 적인 함수를 async/await 사용