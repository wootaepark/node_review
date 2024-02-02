const findAndSaveUser = async (Users)=>{
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





// ex19 : 화살표 함수의 async/await 사용