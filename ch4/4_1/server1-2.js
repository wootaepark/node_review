const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf8'});
    res.write('<h1>Hello Node!!</h1>');
    res.end('<p>Hello Server!!</h2>');
})
.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기중');
});

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf8'});
    res.write('<h1>Hello Node!!</h1>');
    res.end('<p>Hello Server!!</h2>');
})
.listen(3001,()=>{
    console.log('3001번 포트에서 서버 대기중');
});


// 한번에 여러서버 실행하는 경우