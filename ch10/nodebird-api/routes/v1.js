const express = require('express');

const {verifyToken} = require('../middlewares');
const {createToken, tokenTest} = require('../controllers/v1');

const router= express.Router();

// POST /v1/token // 토큰 발급 라우터
router.post('/token', createToken);

// GET /v1/text // 토큰 테스트 라우터
router.get('/test', verifyToken, tokenTest);

module.exports = router