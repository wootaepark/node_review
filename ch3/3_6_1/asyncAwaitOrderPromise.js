const fs = require('fs').promises;




const readFile = async ()=>{
    console.log('시작');
    try{
        let data = await fs.readFile('./readme2.txt');
        console.log('1번', data.toString());
        data = await fs.readFile('./readme2.txt');
        console.log('2번', data.toString());
        data = await fs.readFile('./readme2.txt');
        console.log('3번', data.toString());

        console.log('끝');
    }
    catch(err){
        throw err;
    }
    
}

readFile();