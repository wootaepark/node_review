const url = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams : ', myURL.searchParams);
console.log('searchParams.getAll() : ', myURL.searchParams.getAll('category'));
console.log('searchParams.get() : ', myURL.searchParams.get('limit'));
console.log('searchParams.has() : ', myURL.searchParams.has('page'));


console.log('searchParams.keys() : ',myURL.searchParams.keys()); // 있는 키 값을 모두 가져온다.
console.log('searchParams.values() : ', myURL.searchParams.values()); // 있는 value 값을 모두 가져온다.

myURL.searchParams.append('filter', 'es3'); 
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');   // 일전에 filter 키 값을 가진 값들을 지우고 해당 key, value 값을 추가한다.
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); // filter 값을 가지는 속성 모두 삭제, 아래는 빈 결과가 출력
console.log(myURL.searchParams.getAll('filter'));


console.log('searchParmas.toString() : ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString(); // 앞부분에 ? 가 추가로 붙는다. (serach 에 대입하면 주소객체에 반영된다)

console.log('url.format(myURL) : ', url.format(myURL));
