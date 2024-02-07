const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end(); // 쓰기 종료를 의미하는 코드로서 이후 위의 'finish' 리스너가 실행된다.