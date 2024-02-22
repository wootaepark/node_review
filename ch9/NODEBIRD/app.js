const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const {sequelize} = require('./models');
const passport = require('passport');
const passportConfig = require('./passport'); // 뒤에 /index.js 가 생략되었다. (index 생략 가능)


dotenv.config();
passportConfig();

const app = express();
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'html');

nunjucks.configure('views',{ // views 폴더를 html 렌더할 곳으로 설정
    express : app,
    watch : true,
});
sequelize.sync({force : false})
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.error(err);
    });


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img',express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));


app.use(passport.initialize());
app.use(passport.session()); // express-session 미들웨어 보다 뒤에 있어야 한다.

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    
    next(error);
});



app.use((err, req, res, next)=>{
    res.locals.message = err. message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');

});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
})
