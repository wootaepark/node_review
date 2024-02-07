const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir)=>{
        console.log('폴더 내용 확인',dir);
        return fs.unlink('./folder/newfile.js');
    })
    .then(()=>{
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder');
    })
    .then(()=>{
        console.log('폴더 삭제 성공');
    })
    .catch((err)=>{ // err에는 위 .then 문에서 처리되지 못한 에러가 매개변수로 들어가며 출력된다. (예 : 삭제하려는 폴더가 없는 경우);
        console.error(err);
    })