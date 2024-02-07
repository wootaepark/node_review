const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req,res)=>{
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200,{'Content-type' : 'text/html; charset=utf8'});
        res.end(data);
    }
    catch(error){
        console.error(error);
        res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
        res.end(error.message);
    }
})
.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기 중입니다.');
})

// 외부 html 파일 불러와서 서빙하기