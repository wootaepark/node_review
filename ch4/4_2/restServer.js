const fs = require('fs').promises;
const http = require('http');
const path = require('path');
const { json } = require('stream/consumers');

const users = {}; // 데이터 저장용

http.createServer(async (req, res)=>{

    try{
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile(path.join(__dirname, 'restFront.html'));
                res.writeHead(200,{'Content-type' : 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if(req.url === '/about'){
                const data = await fs.readFile(path.join(__dirname,'about.html'));
                res.writeHead(200,{'Content-type' : 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if(req.url === '/users'){
                res.writeHead(200,{'COntent-type' : 'application/json; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }

            try{ // 나머지 라우터에 대한 코드 (css파일을 요청 받으면 그 내용 보냄)
                const data = await fs.readFile(path.join(__dirname,req.url));
                return res.end(data);
            }
            catch(err){
                //404 에러 발생
            }
        }

        else if (req.method === 'POST'){
            if(req.url === '/user'){
                let body =''; // 스트림 형식으로 body를 받음
                req.on('data',(data)=>{
                    body += data;
                });

                return req.on('end',()=>{
                    console.log('POST 본문 (Body) : ',body);
                    const {name} = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201, {'Content-type' : 'text/plain; charset=utf-8'});
                    res.end('등록 성공');
                });
            }

        }
        else if(req.method === 'PUT'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                let body ='';
                req.on('data',(data)=>{
                    body += data;
                });
                return req.on('end',()=>{
                    console.log('PUT 본문(Body):', body);
                    users[key] = JSON.parse(body).name; // key 는 name 이다.
                    res.writeHead(200,{'Content-type': 'application/json; charset=utf-8'});
                    return res.end(JSON.stringify(users));
                })
            }
        }
        else if(req.method = 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users[key];
                res.writeHead(200, {'Content-type' : 'application/json: charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('Not Found');
        
    }
    catch(err){
        console.error(err);
        res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
        res.end(err.message);
    }

})
.listen(3000,()=>{
    console.log('3000번 포트에서 대기중입니다.');
});