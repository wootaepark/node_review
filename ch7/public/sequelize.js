// 사용자 이름을 눌렀을 때 댓글 로딩 (프론트엔드 코드)

document.querySelectorAll('#user-list tr').forEach((el,index)=>{
    if(index>0){
        el.addEventListener('mouseover', function() {
        el.style.cursor = 'pointer';  // 마우스를 올릴 때 커서를 포인터로 변경
        el.style.backgroundColor = '#f0f0f0';  // 원하는 배경색으로 변경
    });

    el.addEventListener('mouseout', function() {
        el.style.cursor = 'default';  // 마우스를 내릴 때 기본 커서로 변경
        el.style.backgroundColor = '';  // 배경색을 초기화
    });
    }
    
    
    el.addEventListener('click', function(){
        const id=el.querySelector('td').textContent;
        getComment(id);
    });
});

//사용자 로딩
async function getUser(){
    try{
        const res = await axios.get('/users');
        const users = res.data;
        console.log(users);
        const tbody = document.querySelector('#user-list tbody');
        tbody.innerHTML = '';
        users.map(function(user){
            const row = document.createElement('tr');
            row.addEventListener('click', ()=>{
                getComment(user.id);
            });

            // 로우 셀 추가
            let td = document.createElement('td');
            td.textContent = user.id;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = user.name;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = user.age;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = user.married ? '기혼' : '미혼';
            row.appendChild(td);
            tbody.appendChild(row);
        })


    }
    catch(err){
        console.error(err);
    }
};


// 댓글 로딩

async function getComment(id){
    try{
        const res = await axios.get(`/users/${id}/comments`);
        const comments = res.data;
        const tbody = document.querySelector('#comment-list tbody');
        tbody.innerHTML = '';
        comments.map(function(comment){
            // 로우 셀 추가
            const row = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = comment.id;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = comment.User.name;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = comment.comment;
            row.appendChild(td);
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async ()=>{ // 수정 버튼 클릭 시
                const newComment = prompt('바꿀 내용을 입력');
                if (!newComment){
                    return alert('내용을 반드시 입력하셔야 합니다.');
                }
                try{
                    await axios.patch(`/comments/${comment.id}`, {comment : newComment});
                    getComment(id); // 수정, 또는 삭제 후 다시 로딩
                }
                catch(err){
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async()=>{ // 삭제 버튼 클릭 시
                try{
                    await axios.delete(`/comments/${comment.id}`);
                    getComment(id);
                }
                catch(err){
                    console.error(err);
                }
            });
            // 버튼 추가
            td = document.createElement('td');
            td.appendChild(edit);
            row.appendChild(td);
            td = document.createElement('td');
            td.appendChild(remove);
            row.appendChild(td);
            tbody.appendChild(row);

        })
    }
    catch(err){
        console.error(err);
    }
};

// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    const name = e.target.username.value;
    const age = e.target.age.value;
    const married = e.target.married.checked;
    if(!name){
        return alert('이름을 입력하세요'); // return 이 있어야 초기화 되어 다시 입력이 가능
    }
    if(!age){
        return alert('나이를 입력하세요');
    }
    try{
        await axios.post('/users',{name, age, married});
        getUser();
    }
    catch(err){
        console.error(err);
    }
    e.target.username.value='';
    e.target.age.value='';
    e.target.married.checked='';


});

// 댓글 등록 시
document.getElementById('comment-form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    const id = e.target.userid.value;
    const comment = e.target.comment.value;
    if(!id){
        return alert('아이디를 입력하세요');
    }
    if(!comment){
        return alert('댓글을 입력하세요');
    }
    try{
        await axios.post('/comments', {id, comment});
        getComment(id);
    }
    catch(err){
        console.error(err);
    }
    e.target.userid.value='';
    e.target.comment.value='';
});
