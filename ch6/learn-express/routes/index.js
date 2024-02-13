const express = require('express');
const path = require('path');

const router = express.Router();

// GET / 라우터

router.get('/', (req, res)=>{
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname,'..','/views/main.html'));
});

module.exports = router;