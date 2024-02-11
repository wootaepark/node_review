const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key : fs.readFileSync('도메인 비밀 키 경로'),
    ca : [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],

}, (req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Helo Node!</p?');
    res.end('<p>Hello Server</p>');

})
.listen(403,()=>{
    console.log('403번 포트에서 대기 중입니다.');
})
// 기존 server1.js를 https 모듈을 사용하여 서버를 암호화 하는 예시이다.
// 이 코드는 발급받은 인증서가 있어야 동작한다.