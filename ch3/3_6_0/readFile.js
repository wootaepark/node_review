const fs = require('fs');

fs.readFile('./readme_.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})