const fs = require('fs');

fs.watch('./target.txt', (eventType, filename)=>{
    console.log(eventType, filename);
});

// 파일의 내용을 수정하는것