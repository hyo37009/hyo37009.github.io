# AGENTS

이 문서는 `CLAUDE.md`의 프로젝트 메모리를 Codex용으로 옮긴 것이다.

## 작업 방식

- 이 프로젝트는 바이브 코딩 프로젝트다.
- 코드 수정을 과감하게 진행해도 된다.
- 사용자 승인을 기다리지 말고 바로 구현한다.
- 작업에 필요한 파일이나 현재 상태는 직접 확인하고 진행한다.

## 프로젝트 개요

- 나루(naru.pub)에 올릴 개인 블로그, 즉 갠홈을 만드는 프로젝트다.
- 현재 배포 방향은 GitHub Pages다.
- 백엔드/DB 없이 HTML/CSS/JS만 사용하는 정적 사이트다.

## 결정된 사항

- 스타일: 레트로 갠홈 감성, 90~2000년대 개인 홈페이지 느낌.
- 콘텐츠: 개발 글과 일상 글 혼합.
- 댓글: 지금은 없음. 나중에 Giscus 검토 가능.
- 호스팅: GitHub Pages(`hyo37009.github.io`).
- 글 작성 방식: HTML 파일 직접 작성 후 GitHub push로 배포.
- 관리 페이지: 없음.
- Git 브랜치: `dev`에서 작업 후 `main` 머지로 배포.
- 레포: `https://github.com/hyo37009/hyo37009.github.io`

## 기술 제약

- 서버 사이드 코드는 실행할 수 없다.
- PHP, Node.js, Java 같은 서버 런타임은 사용하지 않는다.
- 순수 HTML + CSS + JS만 사용한다.
- DB가 없으므로 글 목록 등은 정적으로 관리하거나 JS로 처리한다.
- GitHub Pages는 정적 파일만 서빙한다.

## 사용자 배경

- 사용자는 Java/Spring Boot 개발이 가능하다.
- Kotlin에 관심이 있고 안드로이드 기초 경험이 있다.
- 풀스택 블로그(Spring Boot + React)는 별도 프로젝트로 나중에 진행할 예정이다.
- 관련 위치: `C:\Users\hyo37\Desktop\블로그`
- 문서/가이드 저장 위치: `C:\Users\hyo37\Documents\docs`

## 폴더 구조 예상

```text
나루 블로그/
├── index.html
├── style.css
├── posts/
│   ├── 글1.html
│   ├── 글2.html
│   └── ...
└── images/
```

## 관련 문서

- 풀스택 블로그 설계 문서는 별도 프로젝트다.
- 관련 문서 위치: `C:\Users\hyo37\Documents\docs\프로젝트\개인 블로그\`

## 참고 링크

- 나루 공식: `https://naru.pub/`
- 나루 X: `https://x.com/naru_pub`
- 나루 GitHub: `https://github.com/yangnaru/naru-pub`
