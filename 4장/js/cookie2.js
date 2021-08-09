const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

// 문자열을 객체로 바꿔주는 함수
const parseCookies = (cookie = '') =>
    // 쿠키를 파싱해서 데이터 꺼내기 이 함수를 거치면 {mycookie: 'test'}가 된다.
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

   // 주소가 /login으로 시작하는 경우

   if (req.url.startsWith('/login')) {
       const { query } = url.parse(req.url);
       const { name } = qs.parse(query);
       const expires = new Date();
       // zㅜ키 유효 시간을 현재 시간 + 5분으로 설정
       expires.setMinutes(expires.getMinutes() + 5);

       // 헤더에는 한글을 설정할 수 없으므로 인코딩, Set-Cookie의 값으로는 제한된 ASCII코드만 들어가야 하므로 줄바꿈이 들어가면안댐!
       res.writeHead(302, {
           Location: '/',
           'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
       });

       res.end();
       //name이라는 쿠키가 있는 경우
   } else if (cookies.name) {
       console.log(cookies.name);
       console.log('쿠킹쿠킹');
       res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8'});
       res.end(`${cookies.name}님 안녕하세용`);
   } else {
       try {
           const data = await fs.readFile('./cookie2.html');
           res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
           res.end(data);
       } catch (err) {
           res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
           res.end(err.message);
       }
   }

})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기중 입니다!');
    })


