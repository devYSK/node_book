
# morgan
* 개발용으로 설정된 익스프레스 미들웨어를 배포용으로 전환
  * process.env.NODE_ENV는 배포 환경인지 개발 환경인지를 판단할 수 있는 환경 변수
  
  * 배포 환경일 때는 combined 사용(더 많은 사용자 정보를 로그로 남김)
  
  * NODE_ENV는 뒤에 나오는 cross-env에서 설정해줌

```javascript
if (process.env.NODE_ENV  === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}
```

* 배포환경일 때 주로 morgan을 combined
* 개발환경일 때는 morgan을 dev 모드


# 시퀄라이즈 
* 시퀄라이즈 설정도 하드코딩 대신 process.env로 변경
* JSON 파일은 변수를 사용할 수 없으므로 JS 파일을 설정 파일로 써야 함
* config.json을 지우고 config.js 사용

```javascript
require('dotenv').config();


module.exports = {
    development: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    test: {
        usename: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
    },

};
```
# cross-env
* 동적으로 process.env 변경 가능
* 운영체제 상관 없이 일괄 적용 가능(맥, 윈도, 리눅스)
* package.json을 다음과 같이 수정(배포용과 개발용 스크립트 구분)
```json
{
  "name": "nodebird",
  ...
  "main": "app.js",
  "scripts": {
    "start": "NODE_ENV=production PORT=80 node server",
    "dev" : "nodemon server",
    "test": "jest",
    "coverage": "jest --coverage"
  },
...
```

* 문제점: 윈도에서는 NODE_ENV를 위와 같이 설정할 수 없음
* 이 때 cross-env가 필요
* `npm i cross-env`

# XSS 방어
* XSS(Cross Site Scripting) 공격 방어
* npm i sanitize-html
* 허용하지 않은 html 입력을 막음

# csurf
* CSRF(Cross Site Request Forgery) 공격 방어

* npm i csurf

* csrfToken을 생성해서 프런트로 보내주고(쿠키로)

* Form 등록 시 csrfToken을 같이 받아 일치하는지 비교


```javascript
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});

app.get('/form', csrfProtection, (req, res) => {
    res.render('csrf', { csrfToken: req.csrfToken()});
});

app.post('/form', csrfProtection, (req, res) => {
    res.send('ok');
});
```

# pm2

* 원활한 서버 운영을 위한 패키지
  * 서버가 에러로 인해 꺼졌을 때 서버를 다시 켜 줌

  * 멀티 프로세싱 지원(노드 프로세스 수를 1개 이상으로 늘릴 수 있음)

  * 요청을 프로세스들에 고르게 분배

  * 단점: 프로세스간 서버의 메모리 같은 자원 공유 불가

  * 극복: memcached나 redis같은 메모리 DB 사용(공유 메모리를 별도 DB에 저장)

```json
{
  "name": "nodebird",
  ...
  "main": "app.js",
  "scripts": {
    "start": "cross-env NODE_ENV=production PORT=80 pm2 start server.js",
    "dev": "nodemon server",
    "test": "jest",
    "coverage": "jest --coverage"
  },
```

* 리눅스나 맥에선 sudo 권한 필요 

* pm2 list로 프로세스 목록 확인 가능
  * 프로세스가 백그라운드로 돌아가기 때문에 콘솔에 다른 명령어 입력 가능

* pm2 start [파일명] –i [프로세스 수] 명령어로 멀티 프로세싱 가능
  * 프로세스 수에 원하는 프로세스의 수 입력
  * 0이면 CPU 코어 개수만큼 생성, -1이면 CPU 코어 개수보다 1개 적게 생성
  * -1은 하나의 프로세스를 노드 외의 작업 수행을 위해 풀어주는 것

* pm2 monit으로 프로세스 모니터링
  * 프로세스별로 로그를 실시간으로 볼 수 있음


# winston - 로그용
* console.log와 console.error를 대체하기 위한 모듈 
  * 위 두 메서드는 휘발성

  * 로그를 파일에 기록하는 것이 좋음

  * 윈스턴 설치 후 logger.js 작성

* logger.js
```javascript
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
```

* createLogger로 로거 인스턴스를 생성
  * level은 로그의 심각도(error, warn, info, verbose, debug, silly 순, 중요도 순)

  * info를 고른 경우 info보다 심각한 단계 로그도 같이 기록됨

  * format은 로그의 형식(json, label, timestamp, printf, combine, simple 등 지원)

  * 기본적으로는 JSON으로 기록하지만 로그 시간을 표시하려면 timestamp를 쓰는 게 좋음

  * transports는 로그 저장 방식

  * new transports.File은 파일로 저장한다는 뜻, new transports.Console은 콘솔에 출력한다는 뜻

  * 인자로 filename(파일명), level(심각도) 제공

* npm run dev로 개발용 서버 실행
  * http://localhost:8001/abcd 에 접속

  * 각각의 로그가 파일에 기록됨

  * 파일에 로그가 저장되어 관리 가능

  * winston-daily-rotate-file이라는 패키지로 날짜별로 관리 가능

# helmet, hpp로 보안 관리

* npm i helmet hpp

* 모든 취약점을 방어해주진 않지만 실무에서 필수인 패키지

* 배포 환경일 때만 사용하면 됨


# connect-redis

* npm i redis connect-redis
* 멀티 프로세스간 메모리 공유를 위해 redis 사용
  * connect-redis가 익스프레스와 레디스를 연결해줌

* redislabs 웹사이트 접속, LOGIN 버튼 클릭

* Endpoint와 Redis password를 복사해 .env에 붙여 넣기
  * endpoint에서 host와 port 분리
```.dotenv
REDIS_HOST=redis-18271.c74.us-east-1-4.ec2.cloud.redislabs.com:18271
REDIS_PORT=18271
REDIS_PASSWORD= 4wevoksVWduZ8MzdkvwLSTGiab1F2RG4
```

```javascript
const redis = require('redis');
const RedisStore = require('connect-redis')(session);


dotenv.config();

const redisClient = redis.createClient({
    url : `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASSWORD,
});

...
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },

  store: new RedisStore({ client: redisClient}),
};
```

* connect-redis는 express-session에 의존성이 있으므로 인수를 꼭 넣어주자 .
* dotenv.config()보다 아래에 있어야 한다
  * .env파일의 데이터는 dotenv.config()다음에 생성됨. 


# 노드 버전 업데이트 패키지

## nvm, n

* 윈도우 : nvm-installer
* 리눅스, 맥 : n

# aws 시작 

