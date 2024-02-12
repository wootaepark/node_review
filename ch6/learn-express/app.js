const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
    //res.send('Hello Express');
    res.sendFile(path.join(__dirname,'index.html'));
    // '/index.html' 과 'index.html'의 차이점 : (index라는 이름이라 다른것이지 다른 이름이면 같은 역할을 한다.)
    // 슬래시가 있으면 루트 디렉토리에서 시작되도록 하며 절대 경로가 되지만
    // 없으면 현재 디렉토리에서의 상대 경로로 간주된다. (by chat-gpt);
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 대기 중');
})