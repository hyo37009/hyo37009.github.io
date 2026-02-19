# 나루 블로그 프로젝트

## 프로젝트 개요

나루(naru.pub)에 올릴 개인 블로그(갠홈)를 만드는 프로젝트다.
나루는 무료 비영리 정적 파일 호스팅 서비스로, HTML/CSS/JS만 올릴 수 있다.
백엔드/DB는 없다.

## 결정된 사항

- **스타일**: 레트로 갠홈 감성 (90~2000년대 개인 홈페이지 느낌)
- **콘텐츠**: 개발 글 + 일상 글 혼합
- **댓글**: 지금은 없음. 나중에 Giscus(GitHub Discussions 기반) 검토 예정
- **호스팅**: GitHub Pages (hyo37009.github.io) — 이전: naru.pub
- **글 작성 방식**: HTML 파일 직접 작성 → GitHub push로 배포
- **관리 페이지**: 없음
- **Git 브랜치**: dev에서 작업 → main 머지로 배포
- **레포**: https://github.com/hyo37009/hyo37009.github.io

## 기술 제약

- 서버 사이드 코드 실행 불가 (PHP, Node.js, Java 등)
- 순수 HTML + CSS + JS만 가능
- DB 없음 → 글 목록 등은 정적으로 관리하거나 JS로 처리
- GitHub Pages는 정적 파일만 서빙 (naru.pub과 동일 제약)

## 사용자 배경

- Java/Spring Boot 개발 가능한 개발자
- Kotlin에 관심 있음 (안드로이드 기초 경험)
- 풀스택 블로그(Spring Boot + React)는 별도로 나중에 할 예정 (C:\Users\hyo37\Desktop\블로그)
- 문서/가이드 저장 위치: C:\Users\hyo37\Documents\docs (옵시디언)

## 폴더 구조 (예상)

```
나루 블로그/
├── index.html          ← 메인 페이지
├── style.css           ← 공통 스타일
├── posts/              ← 글 폴더
│   ├── 글1.html
│   ├── 글2.html
│   └── ...
└── images/             ← 이미지
```

## 관련 문서

풀스택 블로그 설계 문서가 이미 있다. 나루 블로그와는 별개 프로젝트.
- C:\Users\hyo37\Documents\docs\프로젝트\개인 블로그\ (전체 설계, API 스펙 등)

## 참고

- 나루 공식: https://naru.pub/
- 나루 X: https://x.com/naru_pub
- 나루 GitHub: https://github.com/yangnaru/naru-pub
