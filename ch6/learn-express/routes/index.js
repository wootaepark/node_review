const express = require('express');
const path = require('path');

const router = express.Router();

// GET / 라우터

router.get('/', (req, res)=>{
    //res.send('Hello, Express');
    //res.sendFile(path.join(__dirname,'..','/views/main.html'));
    res.render('index',{title : 'Express'});

    //res.locals.title = 'Express';
    //res.render('index');

    // 위 두줄은 주석처리 하지 않은 코드와 동일 한 역할
});

module.exports = router;