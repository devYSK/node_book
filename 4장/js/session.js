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

const session = {};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();

        session[uniqueInt] = {
            name,
            expires,
        };

        res.writeHead(302, {
            Location: '/',
            'Set-Cookie':`session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });

        res.end();

        // 세션 쿠키가 존재하고 만료 기간이 지나지 않앗다면
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안냐세용`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }

})
    .listen(8085, () => {
        console.log('8085번 포트에서 서버 대기 중 입니다!');
    });

