const fs = require('fs');

fs.writeFile('./writeme.txt','글이 입력된다.', (err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt',(err,data)=>{
        if(err){
            throw err;
        }
        console.log(data);
        console.log(data.toString());
    })

})