const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!!</h1>');
    res.end('<p>Hello Server!!</h2>');
});

server.listen(3000);

server.on('listening',()=>{
    console.log('3000번 포트 대기중');
});

/*server.listen(3000,()=>{
    console.log('3000번 포트 대기중');
});*/

// 위 코드와 동일 

server.on('error', (error)=>{
    console.error(error);
});
