const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const pageRouter = require('./routes/page');

dotenv.config();


const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

nunjucks.configure('views',{ // views 폴더를 html 렌더할 곳으로 설정
    express : app,
    watch : true,
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use('/', pageRouter);

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
