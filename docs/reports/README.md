# Daily Insight News
## REPORT Management Guide

Project : Daily Insight News

Document : REPORT Management Guide

Purpose : 프로젝트 REPORT(원본 분석 자료)의 작성 및 관리 기준을 정의하는 문서

Primary Audience :

- 새로운 개발자
- 새로운 AI
- 프로젝트 관리자

Status : Living Document

Version : 1.0

Last Update : 2026-07-03

Owner : Daily Insight News Project

---

# 문서의 목적

이 문서는 Daily Insight News 프로젝트의 REPORT 관리 기준을 정의하는 공식 문서입니다.

REPORT는 프로젝트의 공식 문서가 아니라,

공식 문서를 작성하기 위한 **원본 분석 자료(Original Analysis)** 입니다.

REPORT는 프로젝트의 개발 과정을 그대로 보존하기 위한 기록입니다.

---

# REPORT란?

REPORT는

각 개발 채팅이 종료된 시점의 프로젝트 상태를 기록한 문서입니다.

예를 들어

REPORT_01.md

↓

뉴스 자동 분류_01 종료 시점

REPORT_02.md

↓

뉴스 자동 분류_02 종료 시점

...

이와 같이

각 채팅이 종료된 당시 상태를 그대로 기록합니다.

---

# REPORT를 만드는 이유

프로젝트가 커질수록

이미 해결된 문제

미해결 문제

설계 변경

우선순위 변경

등이 여러 채팅에 흩어질 수 있습니다.

REPORT는

각 시점의 프로젝트 상태를 그대로 남겨

공식 문서를 보다 정확하게 작성하기 위해 사용합니다.

---

## REPORT 작성 원칙

1. REPORT는 채팅 종료 당시 상태만 기록한다.

2. REPORT 본문(Original Project Report)은 수정하지 않는다.

3. REPORT는 작성 이후 수정하지 않는다.

4. Header와 Footer만 프로젝트 표준 형식을 사용한다.

5. REPORT는 프로젝트 역사(History)를 보존하기 위한 원본 기록(Evidence)이다.

6. MASTER.md 등 공식 문서는 REPORT를 근거로 작성한다.

---

# REPORT 수정 원칙

REPORT는

작성이 완료되면 수정하지 않습니다.

REPORT는 프로젝트의 원본 기록입니다.

잘못된 내용이 발견되더라도

REPORT를 수정하지 않습니다.

대신

공식 문서에서

최종 상태를 관리합니다.

---

# REPORT와 공식 문서의 관계

REPORT

↓

MASTER

↓

PROJECT_STRUCTURE

↓

CHANGELOG

↓

기타 공식 문서

REPORT는

공식 문서를 업데이트하기 위한 근거 자료입니다.

---

# REPORT 작성 순서

채팅 종료

↓

프로젝트 분석 프롬프트 실행

↓

REPORT 작성

↓

공식 문서 업데이트

↓

CHANGELOG 업데이트

↓

NEXT_TASK 업데이트

↓

TECH_DEBT 확인

---

# REPORT 파일명 규칙

REPORT_01.md

REPORT_02.md

REPORT_03.md

...

채팅 번호와 동일하게 관리합니다.

---

# REPORT에 반드시 포함할 내용

- 새롭게 구현된 기능

- 변경된 기능

- 해결된 문제

- 아직 해결되지 않은 문제

- 기술 부채

- 개발 원칙 변경

- 프로젝트 방향 변경

- 성능 관련 내용

- Android 관련 내용

- Archive 관련 내용

- docs 반영 대상

- 채팅 종료 시 프로젝트 상태

---

# REPORT 활용 방법

REPORT는

직접 개발 기준으로 사용하지 않습니다.

항상

README

↓

MASTER

↓

NEXT_TASK

↓

PROJECT_STRUCTURE

↓

필요한 공식 문서

↓

REPORT

순서로 참고합니다.

REPORT는

공식 문서의 근거를 확인할 때만 사용합니다.

---

# 프로젝트 운영 원칙

REPORT는 프로젝트의 역사를 기록합니다.

공식 문서는 현재를 기록합니다.

두 문서는 서로 역할이 다릅니다.

---

# 변경 이력

## Version 1.0

- REPORT 관리 체계 최초 구축
- REPORT 작성 원칙 정의
- REPORT와 공식 문서 관계 정의