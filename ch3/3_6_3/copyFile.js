const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt')
    .then(()=>{
        console.log('복사 완료');
    })
    .catch((error)=>{
        console.log(error);
    });


//createReadStream, createWriteStream을 하지 않고 파일 복사하기