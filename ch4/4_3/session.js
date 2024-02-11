const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{}); 

const session={};

http.createServer(async (req, res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, 'http://localhost:3005');
        const name = url.searchParams.get('name'); // html 의 name 속성
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();
        session[uniqueInt]={
            name,
            expires,
        };
        res.writeHead(302,{
            location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires = ${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    }

    else if(cookies.session && session[cookies.session].expires > new Date()){
        res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);


    }
    else{
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
.listen(3005,()=>{
    console.log('3005번 포트에서 서버 대기 중입니다.');
});


// 쿠키의 직접적인 값 대신에 uniqueInt 를 이용해서 변형하여 response 하는 코드이다.