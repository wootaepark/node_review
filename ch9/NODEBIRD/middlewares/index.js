exports.isLoggedIn = (req, res, next) =>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.status(403).send('로그인 필요');
    }

};

exports.isNotLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        next();
    }
    else{
        const message = encodeURIComponent('로그인 한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};

/*

 const isLoggedIn = (req, res, next) =>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.status(403).send('로그인 필요');
    }

};

const isNotLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        next();
    }
    else{
        const message = encodeURIComponent('로그인 한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};


module.exports = {isLoggedIn, isNotLoggedIn};



*/

// 위 코드와 동일한 역할