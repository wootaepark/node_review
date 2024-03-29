const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.join = async (req, res, next) =>{
    const {email, nick, password} = req.body;
    try{
        const exUser = await User.findOne({where : { email}});
        if(exUser){
            return res.redirect('/join?error=exist'); // 이메일 중복 비허용
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password : hash,
        });
        return res.redirect('/');

    }catch(error){
        console.error(error);
        return next(error); 
    }
}

exports.login = async (req, res, next) =>{
    passport.authenticate('local', (authError, user, info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?error=${info.message}`);

        }
        return req.login(user, (loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙여야한다.
};

exports.logout = (req, res) =>{
    req.logout(()=>{
        req.session.destroy();
        res.redirect('/');
    });
};

// 위의 req.login 과 req.logout은 passport 가 실행되면서 req 에 생성되는 것이다.