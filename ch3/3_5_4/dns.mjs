import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
console.log('IP : ',ip);

const a = await dns.resolve('gilbut.co.kr', 'A');
console.log('A', a);

// 위 두가지 방법으로 ip 주소를 얻을 수 있다. 둘다 ipv4 를 나타내며 resolve는 뒤의 속성에 따라 ipv4, ipv6, NS, SOA 등 추가 속성을 알 수 있다.

const mx = await dns.resolve('gilbut.co.kr','MX');
console.log('MX', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME')
console.log('CNAME',cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY');
console.log('ANY',any);