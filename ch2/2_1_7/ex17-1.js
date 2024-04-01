/*try{
    Promise.reject('에러');
}catch(e){
    console.error(e);
}*/

Promise.reject('에러').catch((error)=>{
    console.error(error);
});
