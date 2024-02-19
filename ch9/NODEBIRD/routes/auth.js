const express = require('express');
const passport = require('passport');

const {isLoggedIn, isNotLoggedIn} = require('../middlewares');
const {join, login, logout} = require('../controllers/auth');

const router = express.Router();

// POST /join

router.post('/join', isNotLoggedIn, join);

router.post('/login', isNotLoggedIn, login);

router.get('/logout', isLoggedIn, logout);

router.get('/kakao', isLoggedIn, logout);

router.get('/kakao', passport.authenticate('kakao'));

// GET /auth/kakao/callback
router.get('/kakao/callback', passport.authenticate('kakao,',{
    failureRedirect : '/?error=카카오로그인 실패',
}), (req, res)=>{
    res.redirect('/'); // 로그인 성공 시 '/' 로 이동
});

module.exports = router;



module.exports = router;
