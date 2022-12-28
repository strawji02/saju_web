### Overview

Next.js, MAntine UI 프레임워크를 이용한 웹 어플리케이션입니다. 사용자의 일주와
그에 맞는 일주 해석을 보여줍니다.

아직 개발 단계에 있습니다.

### LIVE LINK : [https://www.saju60.com/](https://www.saju60.com/)

## Program service config

### 🖥️ 프론트엔드

- 프레임워크 - `Next.js`
  - UI 라이브러리 - `Mantine`
  - server state 관리 - `react-query`
  - global state 관리 - `zustand`
- 배포
  - 이용중인 서비스 - `Vercel`
  - 도메인 - `AWS Route53` 에서 구매 - saju60.com(개발용 임시도메인)
  - 저장소 - github 개인 repository

## 💾 백엔드

<aside>
💡 PM에게 생년월일을 input시 사주를 보여주는 php 소스코드를 제공받아서 사용했습니다.
</aside>

- 사용 언어 - `APM (Apache + PHP + Maria DB)`
  - PHP 7.2.34
  - Maria DB 10.2

<aside>
📌 제공 소스가 원래는 php를 이용한 프론트엔드 올인원이어서 apm 구성을 한 뒤 php에서 json 형식으로 출력해주고 그걸 백엔드처럼 사용하고 있습니다.
</aside>

> 프론트엔드 request에서 query string으로 유저 정보를 보내주면 사주 계산 후 결과
> 를 json으로 보내줍니다

- 배포
  - AWS EC2 Amazone Linux 2
  - https ssl 인증서를 위해 Amazone CloudeFront 이용
  - vercel 웹 배포를 위해 https 필요
  > Front ←→ Route53 [`server.saju60.com`](http://server.saju60.com/) ←→
  > CloudeFront (ssl) `[bak.saju60.com](http://bak.saju60.com)` ←→ EC2
