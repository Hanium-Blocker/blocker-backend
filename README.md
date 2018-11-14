# blocker-backend

## 2018 한이음 ICT멘토링 프로젝트 Blocker : 블록체인을 이용한 선거관리 시스템

## About
- 개요
  - 블록체인을 이용한 선거관리 시스템
- 배경
  - 최근 블록체인을 활용한 서비스에 대해 다양한 분야에서 관심이 부각되고 있음 
  - 특히 공공분야에서 대국민 서비스에 적용하여 국민 편의 증진 및 공공효율화에 기여할 수 있는 item에 대해서 관심이 많아지고 있음
- 주요내용
  - 이더리움 기반 플랫폼을 구성하고 투표권자에게 Token을 발행
  - 인증된 투표권자는 블록체인 플랫폼 상에서 투표를 진행함
  - 후보자 정보를 확인할 수 있고 및 투표결과도 실시간으로 공개
- 주요 적용 기술
  - Front-End(Android)
    - RxJava 라이브러리를 활용한 MVVM패턴을 적용하여 앱 구축.
    - Fragment를 활용한 TabView 형식으로 화면구성.
    - Retrofit을 이용하여 서버와 통신 연동. 
  - Back-End(Node.js)
    - 사용자의 pw를 저장할 때 pdkdf2를 사용하여 자동으로 랜덤한 salt 값을 생성하고 salt 값과 pw값을 이용하여 hash 값을 만들어 저장하여 보안을 강화 하였다. 
    - 여러명의 사용자가 같은 pw를 사용하더라도 랜덤한 salt 값을 생성하기 때문에 다이제스트 값이 달라질 수 밖에 없다.
    - 정보의 자원을 uri에 표현하고 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)으로 표현하여 RESTful하게 API를 설계했다.
    - Amazon의 EC2에 서버를 올려 배포하였고 이미지는 Amazon의 S3에 관계형 데이터베이스는 Amazon의 RDS에 mariaDB로 구축하였다.
  - 이더리움 플랫폼
    - Visual Code 툴로 Truffle 프레임워크에서 스마트 계약(Solidity)을 작성.
    - Geth 와 가나쉬를 이용하여 테스트.                                                                               
  - 모바일 Dapp
    - 모바일 어플리케이션(Android) 을 통한 화면 구성.
    - 이더리움 스마트 계약을 호출.
    - 기간
  - 2018.04.24 ~ 2018.11.30
- 참고 링크
  - [blocker API Document](https://github.com/Hanium-Blocker/blocker-backend/wiki/Blocker-API-Document)
  - [blocker Database Structure](https://github.com/Hanium-Blocker/blocker-backend/wiki/Blocker-Database-Structure)
  - [blocker-android](https://github.com/Hanium-Blocker/blocker_android)
  - [blocker-eth](https://github.com/Hanium-Blocker/blocker_eth)

## Preview
| ![1](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/1.png) | ![2](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/2.png) | ![2-1](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/2-1.png) | ![2-2](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/2-2.png) | ![3](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/3.png) |
|:---:|:---:|:---:|:---:|:---:|
| ![4](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/4.png) | ![5](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/5.png) | ![6](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/6.png) | ![7](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/7.png) | ![8](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8.png) |
| ![8-1](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8-1.png) | ![8-2](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8-2.png) | ![8-3](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8-3.png) | ![8-4](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8-4.png) | ![8-5](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/8-5.png) |
| ![9](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/9.png) | ![10](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/10.png) | ![11](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/11.png) | ![12](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/12.png) | ![13](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/13.png) |
| ![14](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/14.png) | ![15](https://github.com/Hanium-Blocker/blocker_android/tree/dev/readmeImage/15.png) ||||

## Preview_ video
[![IMAGE ALT TEXT](http://img.youtube.com/vi/KF16BYdMv58/0.jpg)](http://www.youtube.com/watch?v=KF16BYdMv58 )

### 팀원 소개
- Mentor: 홍민표
- Mentee : 김주현, 조현우, 최준영
![image](https://user-images.githubusercontent.com/36880294/48470679-6a5a1780-e835-11e8-856c-2b8a3dc7cd81.png)