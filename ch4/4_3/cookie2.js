const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>{
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{}); // 빈 객체에 위에서 설정된 쿠키 문자열을 누적해서 acc에 저장하여 리턴
}