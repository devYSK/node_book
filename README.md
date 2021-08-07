# [1장 노드 시작하기](#1장-노드-시작하기)
* [1.1 핵심 개념 이해하기](#1.1-핵심-개념-이해하기)
  * [1.1.1 서버](#1.1.1-서버)
  * [1.1.2 자바스크립트 런타임](#1.1.2-자바스크립트-런타임)
  * [1.1.3 이벤트 기반](#1.1.3-이벤트-기반)
  * [1.1.4 논 블로킹 I/O](#1.1.4-논-블로킹-I/O)
  * [1.1.5 싱글 스레드](#1.1.5-싱글-스레드)
* [1.2 서버로서의 노드](#1.2-서버로서의-노드)
* [1.3 서버 외의 노드](#1.3-서버-외의-노드)
* [1.4 개발 환경 설정하기](#1.4-개발-환경-설정하기)
  * [1.4.1 노드 설치하기](#1.4.1-노드-설치하기)
  * [1.4.2 npm 버전 업데이트하기](#1.4.2-npm-버전-업데이트하기)
  * [1.4.3 비주얼 스튜디오 코드 설치하기](#1.4.3-비주얼-스튜디오-코드-설치하기)
* [1.5 함께 보면 좋은 자료](#1.5-함께-보면-좋은-자료)
# [2장 알아두어야 할 자바스크립트](#2장-알아두어야-할-자바스크립트)
* [2.1 ES2015+](#2.1-ES2015+)
  * [2.1.1 const, let](#2.1.1-const,-let)
  * [2.1.2 템플릿 문자열](#2.1.2-템플릿-문자열)
  * [2.1.3 객체 리터럴](#2.1.3-객체-리터럴)
  * [2.1.4 화살표 함수](#2.1.4-화살표-함수)
  * [2.1.5 구조분해 할당](#2.1.5-구조분해-할당)
  * [2.1.6 클래스](#2.1.6-클래스)
  * [2.1.7 프로미스](#2.1.7-프로미스)
  * [2.1.8 async/await](#2.1.8-async/await)
* [2.2 프런트엔드 자바스크립트](#2.2-프런트엔드-자바스크립트)
  * [2.2.1 AJAX](#2.2.1-AJAX)
  * [2.2.2 FormData](#2.2.2-FormData)
  * [2.2.3 encodeURIComponent, decodeURIComponent](#2.2.3-encodeURIComponent,-decodeURIComponent)
  * [2.2.4 데이터 속성과 dataset](#2.2.4-데이터-속성과-dataset)
* [2.3 함께 보면 좋은 자료](#2.3-함께-보면-좋은-자료)
# [3장 노드 기능 알아보기](#3장-노드-기능-알아보기)
* [3.1 REPL 사용하기](#3.1-REPL-사용하기)
* [3.2 JS 파일 실행하기](#3.2-JS-파일-실행하기)
* [3.3 모듈로 만들기](#3.3-모듈로-만들기)
* [3.4 노드 내장 객체 알아보기](#3.4-노드-내장-객체-알아보기)
  * [3.4.1 global](#3.4.1-global)
  * [3.4.2 console](#3.4.2-console)
  * [3.4.3 타이머](#3.4.3-타이머)
  * [3.4.4 filename, dirname](#3.4.4-filename,-dirname)
  * [3.4.5 module, exports, require](#3.4.5-module,-exports,-require)
  * [3.4.6 process](#3.4.6-process)
* [3.5 노드 내장 모듈 사용하기](#3.5-노드-내장-모듈-사용하기)
  * [3.5.1 os](#3.5.1-os)
  * [3.5.2 path](#3.5.2-path)
  * [3.5.3 url](#3.5.3-url)
  * [3.5.4 querystring](#3.5.4-querystring)
  * [3.5.5 crypto](#3.5.5-crypto)
  * [3.5.6 util](#3.5.6-util)
  * [3.5.7 workerthreads](#3.5.7-workerthreads)
  * [3.5.8 childprocess](#3.5.8-childprocess)
  * [3.5.9 기타 모듈들](#3.5.9-기타-모듈들)
* [3.6 파일 시스템 접근하기](#3.6-파일-시스템-접근하기)
  * [3.6.1 동기 메서드와 비동기 메서드](#3.6.1-동기-메서드와-비동기-메서드)
  * [3.6.2 버퍼와 스트림 이해하기](#3.6.2-버퍼와-스트림-이해하기)
  * [3.6.3 기타 fs 메서드 알아보기](#3.6.3-기타-fs-메서드-알아보기)
  * [3.6.4 스레드풀 알아보기](#3.6.4-스레드풀-알아보기)
* [3.7 이벤트 이해하기](#3.7-이벤트-이해하기)
* [3.8 예외 처리하기](#3.8-예외-처리하기)
  * [3.8.1 자주 발생하는 에러들](#3.8.1-자주-발생하는-에러들)
* [3.9 함께 보면 좋은 자료](#3.9-함께-보면-좋은-자료)
# [4장 http 모듈로 서버 만들기](#4장-http-모듈로-서버-만들기)
* [4.1 요청과 응답 이해하기](#4.1-요청과-응답-이해하기)
* [4.2 REST와 라우팅 사용하기](#4.2-REST와-라우팅-사용하기)
* [4.3 쿠키와 세션 이해하기](#4.3-쿠키와-세션-이해하기)
* [4.4 https와 http2](#4.4-https와-http2)
* [4.5 cluster](#4.5-cluster)
* [4.6 함께 보면 좋은 자료](#4.6-함께-보면-좋은-자료)
# [5장 패키지 매니저](#5장-패키지-매니저)
* [5.1 npm 알아보기](#5.1-npm-알아보기)
* [5.2 package.json으로 패키지 관리하기](#5.2-package.json으로-패키지-관리하기)
* [5.3 패키지 버전 이해하기](#5.3-패키지-버전-이해하기)
* [5.4 기타 npm 명령어](#5.4-기타-npm-명령어)
* [5.5 패키지 배포하기](#5.5-패키지-배포하기)
* [5.6 함께 보면 좋은 자료](#5.6-함께-보면-좋은-자료)
# [6장 익스프레스 웹 서버 만들기](#6장-익스프레스-웹-서버-만들기)
* [6.1 익스프레스 프로젝트 시작하기](#6.1-익스프레스-프로젝트-시작하기)
* [6.2 자주 사용하는 미들웨어](#6.2-자주-사용하는-미들웨어)
  * [6.2.1 morgan](#6.2.1-morgan)
  * [6.2.2 static](#6.2.2-static)
  * [6.2.3 body-parser](#6.2.3-body-parser)
  * [6.2.4 cookie-parser](#6.2.4-cookie-parser)
  * [6.2.5 express-session](#6.2.5-express-session)
  * [6.2.6 미들웨어의 특성 활용하기](#6.2.6-미들웨어의-특성-활용하기)
  * [6.2.7 multer](#6.2.7-multer)
* [6.3 Router 객체로 라우팅 분리하기](#6.3-Router-객체로-라우팅-분리하기)
* [6.4 req, res 객체 살펴보기](#6.4-req,-res-객체-살펴보기)
* [6.5 템플릿 엔진 사용하기](#6.5-템플릿-엔진-사용하기)
  * [6.5.1 퍼그(제이드)](#6.5.1-퍼그(제이드))
  * [6.5.2 넌적스](#6.5.2-넌적스)
  * [6.5.3 에러 처리 미들웨어](#6.5.3-에러-처리-미들웨어)
* [6.6 함께 보면 좋은 자료](#6.6-함께-보면-좋은-자료)
# [7장 MySQL](#7장-MySQL)
* [7.1 데이터베이스란?](#7.1-데이터베이스란?)
* [7.2 MySQL 설치하기](#7.2-MySQL-설치하기)
  * [7.2.1 윈도](#7.2.1-윈도)
  * [7.2.2 맥](#7.2.2-맥)
  * [7.2.3 리눅스(우분투)](#7.2.3-리눅스(우분투))
* [7.3 워크벤치 설치하기](#7.3-워크벤치-설치하기)
  * [7.3.1 윈도](#7.3.1-윈도)
  * [7.3.2 맥](#7.3.2-맥)
  * [7.3.3 리눅스(우분투)](#7.3.3-리눅스(우분투))
  * [7.3.4 커넥션 생성하기](#7.3.4-커넥션-생성하기)
* [7.4 데이터베이스 및 테이블 생성하기](#7.4-데이터베이스-및-테이블-생성하기)
  * [7.4.1 데이터베이스 생성하기](#7.4.1-데이터베이스-생성하기)
  * [7.4.2 테이블 생성하기](#7.4.2-테이블-생성하기)
* [7.5 CRUD 작업하기](#7.5-CRUD-작업하기)
  * [7.5.1 Create(생성)](#7.5.1-Create(생성))
  * [7.5.2 Read(조회)](#7.5.2-Read(조회))
  * [7.5.3 Update(수정)](#7.5.3-Update(수정))
  * [7.5.4 Delete(삭제)](#7.5.4-Delete(삭제))
* [7.6 시퀄라이즈 사용하기](#7.6-시퀄라이즈-사용하기)
  * [7.6.1 MySQL 연결하기](#7.6.1-MySQL-연결하기)
  * [7.6.2 모델 정의하기](#7.6.2-모델-정의하기)
  * [7.6.3 관계 정의하기](#7.6.3-관계-정의하기)
  * [7.6.4 쿼리 알아보기](#7.6.4-쿼리-알아보기)
  * [7.6.5 쿼리 수행하기](#7.6.5-쿼리-수행하기)
* [7.7 함께 보면 좋은 자료](#7.7-함께-보면-좋은-자료)
# [8장 몽고디비](#8장-몽고디비)
* [8.1 NoSQL vs. SQL](#8.1-NoSQL-vs.-SQL)
* [8.2 몽고디비 설치하기](#8.2-몽고디비-설치하기)
  * [8.2.1 윈도](#8.2.1-윈도)
  * [8.2.2 맥](#8.2.2-맥)
  * [8.2.3 리눅스(우분투)](#8.2.3-리눅스(우분투))
* [8.3 컴퍼스 설치하기](#8.3-컴퍼스-설치하기)
  * [8.3.1 윈도](#8.3.1-윈도)
  * [8.3.2 맥](#8.3.2-맥)
  * [8.3.3 리눅스(우분투)](#8.3.3-리눅스(우분투))
  * [8.3.4 커넥션 생성하기](#8.3.4-커넥션-생성하기)
* [8.4 데이터베이스 및 컬렉션 생성하기](#8.4-데이터베이스-및-컬렉션-생성하기)
* [8.5 CRUD 작업하기](#8.5-CRUD-작업하기)
  * [8.5.1 Create(생성)](#8.5.1-Create(생성))
  * [8.5.2 Read(조회)](#8.5.2-Read(조회))
  * [8.5.3 Update(수정)](#8.5.3-Update(수정))
  * [8.5.4 Delete(삭제)](#8.5.4-Delete(삭제))
* [8.6 몽구스 사용하기](#8.6-몽구스-사용하기)
  * [8.6.1 몽고디비 연결하기](#8.6.1-몽고디비-연결하기)
  * [8.6.2 스키마 정의하기](#8.6.2-스키마-정의하기)
  * [8.6.3 쿼리 수행하기](#8.6.3-쿼리-수행하기)
* [8.7 함께 보면 좋은 자료](#8.7-함께-보면-좋은-자료)
# [9장 익스프레스로 SNS 서비스 만들기](#9장-익스프레스로-SNS-서비스-만들기)
* [9.1 프로젝트 구조 갖추기](#9.1-프로젝트-구조-갖추기)
* [9.2 데이터베이스 세팅하기](#9.2-데이터베이스-세팅하기)
* [9.3 Passport 모듈로 로그인 구현하기](#9.3-Passport-모듈로-로그인-구현하기)
  * [9.3.1 로컬 로그인 구현하기](#9.3.1-로컬-로그인-구현하기)
  * [9.3.2 카카오 로그인 구현하기](#9.3.2-카카오-로그인-구현하기)
* [9.4 multer 패키지로 이미지 업로드 구현하기](#9.4-multer-패키지로-이미지-업로드-구현하기)
* [9.5 프로젝트 마무리하기](#9.5-프로젝트-마무리하기)
  * [9.5.1 스스로 해보기](#9.5.1-스스로-해보기)
  * [9.5.2 핵심 정리](#9.5.2-핵심-정리)
* [9.6 함께 보면 좋은 자료](#9.6-함께-보면-좋은-자료)
# [10장 웹 API 서버 만들기](#10장-웹-API-서버-만들기)
* [10.1 API 서버 이해하기](#10.1-API-서버-이해하기)
* [10.2 프로젝트 구조 갖추기](#10.2-프로젝트-구조-갖추기)
* [10.3 JWT 토큰으로 인증하기](#10.3-JWT-토큰으로-인증하기)
* [10.4 다른 서비스에서 호출하기](#10.4-다른-서비스에서-호출하기)
* [10.5 SNS API 서버 만들기](#10.5-SNS-API-서버-만들기)
* [10.6 사용량 제한 구현하기](#10.6-사용량-제한-구현하기)
* [10.7 CORS 이해하기](#10.7-CORS-이해하기)
* [10.8 프로젝트 마무리하기](#10.8-프로젝트-마무리하기)
  * [10.8.1 스스로 해보기](#10.8.1-스스로-해보기)
  * [10.8.2 핵심 정리](#10.8.2-핵심-정리)
  * [10.8.3 함께 보면 좋은 자료](#10.8.3-함께-보면-좋은-자료)
# [11장 노드 서비스 테스트하기](#11장-노드-서비스-테스트하기)
* [11.1 테스트 준비하기](#11.1-테스트-준비하기)
* [11.2 유닛 테스트](#11.2-유닛-테스트)
* [11.3 테스트 커버리지](#11.3-테스트-커버리지)
* [11.4 통합 테스트](#11.4-통합-테스트)
* [11.5 부하 테스트](#11.5-부하-테스트)
* [11.6 프로젝트 마무리하기](#11.6-프로젝트-마무리하기)
  * [11.6.1 스스로 해보기](#11.6.1-스스로-해보기)
  * [11.6.2 핵심 정리](#11.6.2-핵심-정리)
# [12장 웹 소켓으로 실시간 데이터 전송하기](#12장-웹-소켓으로-실시간-데이터-전송하기)
* [12.1 웹 소켓 이해하기](#12.1-웹-소켓-이해하기)
* [12.2 ws 모듈로 웹 소켓 사용하기](#12.2-ws-모듈로-웹-소켓-사용하기)
* [12.3 Socket.IO 사용하기](#12.3-Socket.IO-사용하기)
* [12.4 실시간 GIF 채팅방 만들기](#12.4-실시간-GIF-채팅방-만들기)
* [12.5 미들웨어와 소켓 연결하기](#12.5-미들웨어와-소켓-연결하기)
* [12.6 채팅 구현하기](#12.6-채팅-구현하기)
* [12.7 프로젝트 마무리하기](#12.7-프로젝트-마무리하기)
  * [12.7.1 스스로 해보기](#12.7.1-스스로-해보기)
  * [12.7.2 핵심 정리](#12.7.2-핵심-정리)
  * [12.7.3 함께 보면 좋은 자료](#12.7.3-함께-보면-좋은-자료)
# [13장 실시간 경매 시스템 만들기](#13장-실시간-경매-시스템-만들기)
* [13.1 프로젝트 구조 갖추기](#13.1-프로젝트-구조-갖추기)
* [13.2 서버센트 이벤트 사용하기](#13.2-서버센트-이벤트-사용하기)
* [13.3 스케줄링 구현하기](#13.3-스케줄링-구현하기)
* [13.4 프로젝트 마무리하기](#13.4-프로젝트-마무리하기)
  * [13.4.1 스스로 해보기](#13.4.1-스스로-해보기)
  * [13.4.2 핵심 정리](#13.4.2-핵심-정리)
  * [13.4.3 함께 보면 좋은 자료](#13.4.3-함께-보면-좋은-자료)
# [14장 CLI 프로그램 만들기](#14장-CLI-프로그램-만들기)
* [14.1 간단한 콘솔 명령어 만들기](#14.1-간단한-콘솔-명령어-만들기)
* [14.2 commander, inquirer 사용하기](#14.2-commander,-inquirer-사용하기)
* [14.3 프로젝트 마무리하기](#14.3-프로젝트-마무리하기)
  * [14.3.1 스스로 해보기](#14.3.1-스스로-해보기)
  * [14.3.2 핵심 정리](#14.3.2-핵심-정리)
  * [14.3.3 함께 보면 좋은 자료](#14.3.3-함께-보면-좋은-자료)
# [15장 AWS와 GCP로 배포하기](#15장-AWS와-GCP로-배포하기)
* [15.1 서비스 운영을 위한 패키지](#15.1-서비스-운영을-위한-패키지)
  * [15.1.1 morgan과 express-session](#15.1.1-morgan과-express-session)
  * [15.1.2 시퀄라이즈](#15.1.2-시퀄라이즈)
  * [15.1.3 cross-env](#15.1.3-cross-env)
  * [15.1.4 sanitize-html, csurf](#15.1.4-sanitize-html,-csurf)
  * [15.1.5 pm2](#15.1.5-pm2)
  * [15.1.6 winston](#15.1.6-winston)
  * [15.1.7 helmet, hpp](#15.1.7-helmet,-hpp)
  * [15.1.8 connect-redis](#15.1.8-connect-redis)
  * [15.1.9 nvm, n](#15.1.9-nvm,-n)
* [15.2 깃과 깃허브 사용하기](#15.2-깃과-깃허브-사용하기)
  * [15.2.1 깃 설치하기](#15.2.1-깃-설치하기)
  * [15.2.2 깃허브 사용하기](#15.2.2-깃허브-사용하기)
* [15.3 AWS 시작하기](#15.3-AWS-시작하기)
* [15.4 AWS에 배포하기](#15.4-AWS에-배포하기)
* [15.5 GCP 시작하기](#15.5-GCP-시작하기)
* [15.6 GCP에 배포하기](#15.6-GCP에-배포하기)
* [15.7 함께 보면 좋은 자료](#15.7-함께-보면-좋은-자료)
# [16장 서버리스 노드 개발](#16장-서버리스-노드-개발)
* [16.1 서버리스 이해하기](#16.1-서버리스-이해하기)
* [16.2 AWS S3 사용하기](#16.2-AWS-S3-사용하기)
* [16.3 AWS 람다 사용하기](#16.3-AWS-람다-사용하기)
* [16.4 구글 클라우드 스토리지 사용하기](#16.4-구글-클라우드-스토리지-사용하기)
* [16.5 구글 클라우드 펑션스 사용하기](#16.5-구글-클라우드-펑션스-사용하기)
* [16.6 함께 보면 좋은 자료](#16.6-함께-보면-좋은-자료)
# [찾아보기](#찾아보기)
zzzz

zzz
# 1장 노드 시작하기
## 1.1 핵심 개념 이해하기
### 1.1.1 서버
### 1.1.2 자바스크립트 런타임
### 1.1.3 이벤트 기반
### 1.1.4 논 블로킹 I/O
### 1.1.5 싱글 스레드
## 1.2 서버로서의 노드
## 1.3 서버 외의 노드
## 1.4 개발 환경 설정하기
### 1.4.1 노드 설치하기
### 1.4.2 npm 버전 업데이트하기
### 1.4.3 비주얼 스튜디오 코드 설치하기
## 1.5 함께 보면 좋은 자료
# 2장 알아두어야 할 자바스크립트
## 2.1 ES2015+
### 2.1.1 const, let
### 2.1.2 템플릿 문자열
### 2.1.3 객체 리터럴
### 2.1.4 화살표 함수
### 2.1.5 구조분해 할당
### 2.1.6 클래스
### 2.1.7 프로미스
### 2.1.8 async/await
## 2.2 프런트엔드 자바스크립트
### 2.2.1 AJAX
### 2.2.2 FormData
### 2.2.3 encodeURIComponent, decodeURIComponent
### 2.2.4 데이터 속성과 dataset
## 2.3 함께 보면 좋은 자료
# 3장 노드 기능 알아보기
## 3.1 REPL 사용하기
## 3.2 JS 파일 실행하기
## 3.3 모듈로 만들기
## 3.4 노드 내장 객체 알아보기
### 3.4.1 global
### 3.4.2 console
### 3.4.3 타이머
### 3.4.4 filename, dirname
### 3.4.5 module, exports, require
### 3.4.6 process
## 3.5 노드 내장 모듈 사용하기
### 3.5.1 os
### 3.5.2 path
### 3.5.3 url
### 3.5.4 querystring
### 3.5.5 crypto
### 3.5.6 util
### 3.5.7 workerthreads
### 3.5.8 childprocess
### 3.5.9 기타 모듈들
## 3.6 파일 시스템 접근하기
### 3.6.1 동기 메서드와 비동기 메서드
### 3.6.2 버퍼와 스트림 이해하기
### 3.6.3 기타 fs 메서드 알아보기
### 3.6.4 스레드풀 알아보기
## 3.7 이벤트 이해하기
## 3.8 예외 처리하기
### 3.8.1 자주 발생하는 에러들
## 3.9 함께 보면 좋은 자료
# 4장 http 모듈로 서버 만들기
## 4.1 요청과 응답 이해하기
## 4.2 REST와 라우팅 사용하기
## 4.3 쿠키와 세션 이해하기
## 4.4 https와 http2
## 4.5 cluster
## 4.6 함께 보면 좋은 자료
# 5장 패키지 매니저
## 5.1 npm 알아보기
## 5.2 package.json으로 패키지 관리하기
## 5.3 패키지 버전 이해하기
## 5.4 기타 npm 명령어
## 5.5 패키지 배포하기
## 5.6 함께 보면 좋은 자료
# 6장 익스프레스 웹 서버 만들기
## 6.1 익스프레스 프로젝트 시작하기
## 6.2 자주 사용하는 미들웨어
### 6.2.1 morgan
### 6.2.2 static
### 6.2.3 body-parser
### 6.2.4 cookie-parser
### 6.2.5 express-session
### 6.2.6 미들웨어의 특성 활용하기
### 6.2.7 multer
## 6.3 Router 객체로 라우팅 분리하기
## 6.4 req, res 객체 살펴보기
## 6.5 템플릿 엔진 사용하기
### 6.5.1 퍼그(제이드)
### 6.5.2 넌적스
### 6.5.3 에러 처리 미들웨어
## 6.6 함께 보면 좋은 자료
# 7장 MySQL
## 7.1 데이터베이스란?
## 7.2 MySQL 설치하기
### 7.2.1 윈도
### 7.2.2 맥
### 7.2.3 리눅스(우분투)
## 7.3 워크벤치 설치하기
### 7.3.1 윈도
### 7.3.2 맥
### 7.3.3 리눅스(우분투)
### 7.3.4 커넥션 생성하기
## 7.4 데이터베이스 및 테이블 생성하기
### 7.4.1 데이터베이스 생성하기
### 7.4.2 테이블 생성하기
## 7.5 CRUD 작업하기
### 7.5.1 Create(생성)
### 7.5.2 Read(조회)
### 7.5.3 Update(수정)
### 7.5.4 Delete(삭제)
## 7.6 시퀄라이즈 사용하기
### 7.6.1 MySQL 연결하기
### 7.6.2 모델 정의하기
### 7.6.3 관계 정의하기
### 7.6.4 쿼리 알아보기
### 7.6.5 쿼리 수행하기
## 7.7 함께 보면 좋은 자료
# 8장 몽고디비
## 8.1 NoSQL vs. SQL
## 8.2 몽고디비 설치하기
### 8.2.1 윈도
### 8.2.2 맥
### 8.2.3 리눅스(우분투)
## 8.3 컴퍼스 설치하기
### 8.3.1 윈도
### 8.3.2 맥
### 8.3.3 리눅스(우분투)
### 8.3.4 커넥션 생성하기
## 8.4 데이터베이스 및 컬렉션 생성하기
## 8.5 CRUD 작업하기
### 8.5.1 Create(생성)
### 8.5.2 Read(조회)
### 8.5.3 Update(수정)
### 8.5.4 Delete(삭제)
## 8.6 몽구스 사용하기
### 8.6.1 몽고디비 연결하기
### 8.6.2 스키마 정의하기
### 8.6.3 쿼리 수행하기
## 8.7 함께 보면 좋은 자료
# 9장 익스프레스로 SNS 서비스 만들기
## 9.1 프로젝트 구조 갖추기
## 9.2 데이터베이스 세팅하기
## 9.3 Passport 모듈로 로그인 구현하기
### 9.3.1 로컬 로그인 구현하기
### 9.3.2 카카오 로그인 구현하기
## 9.4 multer 패키지로 이미지 업로드 구현하기
## 9.5 프로젝트 마무리하기
### 9.5.1 스스로 해보기
### 9.5.2 핵심 정리
## 9.6 함께 보면 좋은 자료
# 10장 웹 API 서버 만들기
## 10.1 API 서버 이해하기
## 10.2 프로젝트 구조 갖추기
## 10.3 JWT 토큰으로 인증하기
## 10.4 다른 서비스에서 호출하기
## 10.5 SNS API 서버 만들기
## 10.6 사용량 제한 구현하기
## 10.7 CORS 이해하기
## 10.8 프로젝트 마무리하기
### 10.8.1 스스로 해보기
### 10.8.2 핵심 정리
### 10.8.3 함께 보면 좋은 자료
# 11장 노드 서비스 테스트하기
## 11.1 테스트 준비하기
## 11.2 유닛 테스트
## 11.3 테스트 커버리지
## 11.4 통합 테스트
## 11.5 부하 테스트
## 11.6 프로젝트 마무리하기
### 11.6.1 스스로 해보기
### 11.6.2 핵심 정리
# 12장 웹 소켓으로 실시간 데이터 전송하기
## 12.1 웹 소켓 이해하기
## 12.2 ws 모듈로 웹 소켓 사용하기
## 12.3 Socket.IO 사용하기
## 12.4 실시간 GIF 채팅방 만들기
## 12.5 미들웨어와 소켓 연결하기
## 12.6 채팅 구현하기
## 12.7 프로젝트 마무리하기
### 12.7.1 스스로 해보기
### 12.7.2 핵심 정리
### 12.7.3 함께 보면 좋은 자료
# 13장 실시간 경매 시스템 만들기
## 13.1 프로젝트 구조 갖추기
## 13.2 서버센트 이벤트 사용하기
## 13.3 스케줄링 구현하기
## 13.4 프로젝트 마무리하기
### 13.4.1 스스로 해보기
### 13.4.2 핵심 정리
### 13.4.3 함께 보면 좋은 자료
# 14장 CLI 프로그램 만들기
## 14.1 간단한 콘솔 명령어 만들기
## 14.2 commander, inquirer 사용하기
## 14.3 프로젝트 마무리하기
### 14.3.1 스스로 해보기
### 14.3.2 핵심 정리
### 14.3.3 함께 보면 좋은 자료
# 15장 AWS와 GCP로 배포하기
## 15.1 서비스 운영을 위한 패키지
### 15.1.1 morgan과 express-session
### 15.1.2 시퀄라이즈
### 15.1.3 cross-env
### 15.1.4 sanitize-html, csurf
### 15.1.5 pm2
### 15.1.6 winston
### 15.1.7 helmet, hpp
### 15.1.8 connect-redis
### 15.1.9 nvm, n
## 15.2 깃과 깃허브 사용하기
### 15.2.1 깃 설치하기
### 15.2.2 깃허브 사용하기
## 15.3 AWS 시작하기
## 15.4 AWS에 배포하기
## 15.5 GCP 시작하기
## 15.6 GCP에 배포하기
## 15.7 함께 보면 좋은 자료
# 16장 서버리스 노드 개발
## 16.1 서버리스 이해하기
## 16.2 AWS S3 사용하기
## 16.3 AWS 람다 사용하기
## 16.4 구글 클라우드 스토리지 사용하기
## 16.5 구글 클라우드 펑션스 사용하기
## 16.6 함께 보면 좋은 자료
# 찾아보기