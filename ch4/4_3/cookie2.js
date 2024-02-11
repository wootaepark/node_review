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
        },{}); // 빈 객체에 위에서 설정된 쿠키 문자열을 누적해서 acc에 저장하여 리턴


http.createServer(async (req, res)=>{
    const cookies = parseCookies(req.headers.cookie);

    // 주소가 /login 으로 시작
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, 'http://localhost:3003');
        const name = url.searchParams.get('name');
        const expires = new Date();

        // 쿠키 유효시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location : '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires = ${expires.toGMTString()}; HttpOnly; Path=/`,

        });
        res.end();
    }
    // 주소가 / 이면서 name 이라는 쿠키가 있는 경우
    else if(cookies.name){
        res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    }
    // 주소가 / 이면서 name 이라는 쿠키가 없는 경우
    else{
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(data);
        }
        catch(err){
            res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
            res.end(err.message);
        }

    }

})
.listen(3003, ()=>{
    console.log('3003번 포트에서 서버 대기 중입니다.');
})