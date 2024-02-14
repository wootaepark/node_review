const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const indexRouter = require('./routes'); // index 는 생략 가능하다.
const userRouter = require('./routes/user');


dotenv.config(); // process.env를 사용할 수 있도록 하는 명령어
const app = express();
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'html');// pug 기본 등록 및 설정
const nunjucks = require('nunjucks');

nunjucks.configure('views',{
    express : app, // app.js 와 연결
    watch : true,
});

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

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
    //res.status(404).send('Not Found');
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
}); // 해당 경로가 아닌 경우 404 에러 ('/' 경로와 '/user' 경로)


const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어서 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
// 위 try 문은 폴더가 없을 시 한번 사용되므로 구지 fs 를 비동기적으로 사용할 필요 없다고 판단

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
    
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 배포 상태인지 개발자 상태인지에 따라서 에러표시 혹은 빈 표시
    res.status(err.status||500);
    res.render('error')
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 대기 중');
});