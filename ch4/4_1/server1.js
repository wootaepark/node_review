const http = require('http');

http.createServer((req, res)=>{ // 순서가 중요하다. (type script 에 정의된 바에 의하면)
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>')
})
.listen(3000, ()=>{
    console.log('3000번 포트에서 서버 대기 중 입니다.');
});