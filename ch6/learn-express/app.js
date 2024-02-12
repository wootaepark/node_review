const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config(); // process.env를 사용할 수 있도록 하는 명령어
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 서명을 위한 비밀 키를 설정한다. (.env 파일에 따로 설정)
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },name : 'session-cookie',
}));


const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어서 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname,ext) + Date.now() + ext);
        },
    }),
    limits : {fileSize : 5*1024*1024},
});

app.get('/upload', (req,res)=>{
    res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.fields([{name : 'image1'},{name:'image2'}]), (req,res)=>{
    console.log(req.file);
    res.send('Ok');
})


app.use((req,res,next)=>{

    console.log('모든 요청에 다 실행됩니다');
    next();
});

app.get('/',(req,res,next)=>{

    console.log('GET / 요청에서만 실행됩니다.');
    next();
    
},(req, res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 대기 중');
})