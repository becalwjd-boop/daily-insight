# REPORT_03

## Original Project Report

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Source Chat | 뉴스 자동 분류_03 |
| Document Type | Original Project Report |
| Status | Immutable Document (Do Not Edit) |
| Version | 1.0 |
| Generated | 2026-07-03 |

---

## Purpose

본 문서는 Daily Insight News 프로젝트의 Original Project Report입니다.

본 문서는 프로젝트의 역사(History)를 보존하기 위한 원본 기록(Evidence)입니다.

본 문서는 MASTER.md 및 프로젝트 공식 문서를 작성하기 위한 근거(Evidence) 문서입니다.

본 문서는 작성 이후 수정하지 않습니다.

---

## Original Project Report

Original Project Report
Daily Insight News 프로젝트 개발 기록 (Immutable Evidence)

주의

본 문서는 이번 채팅이 종료된 시점만 기록한 Original Project Report입니다.

이후 채팅에서 변경·수정·해결된 내용은 반영하지 않았습니다.

1. 프로젝트 개요
이번 채팅의 개발 목적

이번 개발의 목적은 다음과 같았다.

한국 시간 기준 날짜 처리 문제 해결
실시간 뉴스 자동 새로고침 기능 추가
속보 영역 최신화 개선
아카이브 UI 개선
아카이브 저장 구조 개선
날짜별 기사 저장 방식 개선
Git 충돌 해결 및 정상 배포
당시 프로젝트 상태

당시 프로젝트는

메인 뉴스 화면
카테고리별 뉴스
속보 영역
자동 저장
Archive 기능

등은 이미 구현되어 있었다.

그러나

한국 시간 문제가 존재했고
속보 검색 결과가 오래된 기사 위주였으며
자동 새로고침이 없었고
Archive는 날짜별 기사만 저장하지 못하는 구조였다.
프로젝트 방향

이번 채팅에서는

"실시간 뉴스 서비스"

성격을 강화하는 방향으로 개발이 진행되었다.

또한

Archive를

"해당 날짜의 기사만 저장하는 히스토리"

로 발전시키는 방향이 결정되었다.

2. 새롭게 구현된 기능
새로 구현된 기능
한국 시간 기준 날짜 계산 함수 추가
getKoreaTodayString()
Intl.DateTimeFormat
Asia/Seoul 적용
5분 자동 새로고침 기능

AutoRefresh 컴포넌트 추가

5분마다

window.location.reload()

실행하도록 구현.

속보 검색어 변경

기존

속보 긴급

↓

속보

으로 변경.

아카이브 저장 개선

save-today.js 수정

오늘 기사만 저장
display=100
URL 중복 제거
기사 개수 제한 제거
중복 제거 시스템

Map을 이용한

URL 기반 중복 제거 로직 추가.

Archive 날짜 필터

기사 저장 시

기사 날짜와 저장 날짜를 비교하여

오늘 기사만 저장하도록 수정.

새로 추가한 UI

Archive 상세 페이지

기존

카테고리명이 위에 나열된 리스트

↓

카테고리별 카드 UI

새로 추가한 UX

Archive를

메인 화면과 비슷한

카테고리별 레이아웃으로 개선.

새로 추가한 시스템
Auto Refresh
한국 시간 계산 함수
날짜 필터
URL 중복 제거
기사 개수 제한 제거
3. 기존 기능 변경
① 날짜 계산
기존

new Date()

기준

↓

변경

Asia/Seoul 기준 날짜 계산

↓

변경 이유

Vercel UTC 기준으로

하루 전 날짜 기사가 노출됨.

↓

최종 결정

한국 시간 기준으로 날짜 계산.

② 속보 검색
기존
속보 긴급

↓

변경
속보

↓

변경 이유

최신 속보가 잘 검색되지 않음.

↓

최종 결정

속보 단일 검색어 사용.

③ 자동 새로고침
기존

없음

↓

변경

5분마다 자동 새로고침

↓

변경 이유

실시간 뉴스 서비스 성격 강화.

↓

최종 결정

5분 주기 채택.

30초는 서버/API 부담을 고려하여 보류.

④ Archive 저장
기존

최근 기사 포함

↓

변경

해당 날짜 기사만 저장

↓

변경 이유

6월10일 Archive에

6월2일 기사까지 포함됨.

↓

최종 결정

기사 날짜 필터 적용.

⑤ Archive 기사 수
기존

30개 제한

↓

변경

제한 제거

↓

변경 이유

Archive는 히스토리이므로

모든 기사를 저장해야 함.

↓

최종 결정

중복 제거 후

전체 저장.

4. 해결된 문제
문제

운영 사이트가 하루 전 기사만 표시.

원인

UTC 기준 날짜 계산.

해결 방법

Asia/Seoul 기준 함수 추가.

최종 상태

해결.

문제

속보 기사 최신화 안됨.

원인

검색어 문제.

해결 방법

속보 검색어 변경.

최종 상태

최신 기사 표시 확인.

문제

5분 자동 새로고침 없음.

원인

기능 미구현.

해결 방법

AutoRefresh 컴포넌트 구현.

최종 상태

적용 완료.

문제

Git Push 실패.

원인

Remote와 Rebase 충돌.

해결 방법

Rebase 진행

checkout ours

continue

push

최종 상태

Push 성공.

5. 아직 해결되지 않은 문제
높음
Archive 기존 데이터

기존

2026-06-09

2026-06-10

데이터는

새 저장 규칙이 적용되지 않음.

save-today.js 수정 후

실제 Archive JSON 재생성 필요.

중간

Archive 저장 데이터가

운영 사이트에 아직 반영되지 않음.

save-today.js 실행 후

재배포 필요.

낮음

카테고리별 기사 수 불균형.

기업 뉴스가 과도하게 많음.

6. 기술 부채 (Technical Debt)
높음

Archive JSON은

생성 시점 데이터이므로

저장 규칙 변경 시

재생성이 필요함.

중간

카테고리 검색어 튜닝.

중간

속보 검색 방식.

현재는

검색어 기반.

낮음

기사 HTML 엔티티 처리.

7. 프로젝트 방향에 영향을 준 결정
API

속보 검색어 변경.

Deployment

GitHub Push

↓

Vercel 자동 배포 유지.

Data

Archive는

해당 날짜 기사만 저장.

UI

Archive를

카테고리별 카드 UI로 변경.

Archive

기사 개수 제한 제거.

중복 제거.

개발 방식

메인 화면과 Archive의 역할을 분리.

8. Decision Reason

이번 채팅에서

다음 원칙이 결정되었다.

메인 화면은

최신 뉴스 제공이 목적.

Archive는

기록 보존이 목적.

따라서

Archive는

기사 제한 없이

해당 날짜 기사만 저장하도록 방향이 변경되었다.

또한

자동 새로고침은

30초보다

5분 주기가

API 사용량과 서버 부담 측면에서 적절하다고 판단하였다.

9. 성능 관련 내용

논의된 내용

30초 자동 새로고침
5분 자동 새로고침

비교.

최종적으로

5분 주기를 채택.

이유

API 사용량과

불필요한 요청 감소.

10. Android 관련 내용

적용되지 않음.

11. Archive 관련 내용

이번 채팅에서 가장 많은 변경이 이루어진 영역.

구현

카테고리 카드 UI
날짜 필터
중복 제거
기사 제한 제거

문제

기존 JSON은

새 규칙이 적용되지 않음.

향후 계획

save-today.js 실행 후

새 Archive 생성.

12. 개발 원칙

이번 채팅에서 새롭게 결정된 원칙

메인 화면와 Archive의 목적을 분리한다.
Archive는 해당 날짜 기사만 저장한다.
Archive는 기사 개수 제한을 두지 않는다.
URL 기준으로 중복 제거한다.
운영 기준 날짜는 Asia/Seoul을 사용한다.
실시간 갱신은 5분 주기를 사용한다.
13. docs 반영 대상
MASTER.md
CHANGELOG.md
ARCHIVE_PLAN.md
PERFORMANCE.md
NEXT_TASK.md
DEPLOY.md
TROUBLESHOOTING.md
TECH_DEBT.md
14. 채팅 종료 시 프로젝트 상태
UI

메인 화면

카테고리별 뉴스

속보

Archive 카드 UI

구현 완료.

기능

자동 새로고침 구현.

속보 검색 개선.

한국 시간 처리 구현.

Archive 저장 방식 개선 완료.

성능

5분 자동 새로고침 적용.

Archive

코드는 개선되었으나

기존 JSON은 아직 새 방식으로 재생성되지 않은 상태.

운영 사이트에는

기존 데이터가 남아있음.

Android

변경 없음.

남아있는 작업
save-today.js 실행
새 Archive JSON 생성
Git Commit
Git Push
운영 사이트 반영 확인
15. Related Documents
MASTER.md
CHANGELOG.md
NEXT_TASK.md
ARCHIVE_PLAN.md
PERFORMANCE.md
DEPLOY.md
TROUBLESHOOTING.md
TECH_DEBT.md
16. Fact Check
본 REPORT는 실제 채팅 내용을 기반으로 작성되었습니다.
추측은 포함하지 않았습니다.
이후 채팅 내용은 반영하지 않았습니다.
이 문서는 Original Project Report입니다.
17. 최종 프로젝트 관점 정리

이번 채팅은 Daily Insight News 프로젝트에서 실시간 뉴스 서비스와 아카이브 시스템을 분리하는 방향이 명확하게 결정된 전환점이었다.

특히 다음 사항은 프로젝트 역사에서 중요한 의미를 가진다.

한국 시간(Asia/Seoul)을 기준으로 날짜를 처리하도록 변경하여 운영 환경과의 시간 차이 문제를 해결하였다.
메인 화면에는 최신 뉴스를 제공하고, 아카이브에는 해당 날짜의 기사를 기록으로 보존한다는 역할 분리가 명확히 정의되었다.
아카이브 저장 로직이 날짜 필터, URL 기준 중복 제거, 기사 개수 제한 제거를 포함하는 방향으로 재설계되었다.
자동 새로고침 기능을 도입하면서 30초와 5분 주기를 비교 검토하였고, API 사용량과 운영 안정성을 고려해 5분 주기를 채택하였다.
Git rebase 충돌을 해결하고 정상적으로 GitHub 및 Vercel 배포를 완료하였다.
채팅 종료 시점 기준으로는 아카이브 저장 로직의 코드는 개선되었으나, 기존 아카이브 JSON 파일은 아직 새 로직으로 재생성되지 않아 운영 사이트에는 이전 데이터가 남아 있는 상태였다. 이는 이후 작업이 필요한 미해결 상태로 남아 있었다.

---

## Related Documents

본 REPORT를 기반으로 작성되는 프로젝트 공식 문서

- MASTER.md
- PROJECT_STRUCTURE.md
- CHANGELOG.md
- NEXT_TASK.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

---

## Fact Check

- 본 REPORT는 실제 채팅 내용을 기반으로 작성되었습니다.
- 추측은 포함하지 않았습니다.
- 이후 채팅에서 변경되거나 해결된 내용은 반영하지 않았습니다.
- 본 문서는 Original Project Report입니다.
- 본 문서는 프로젝트 공식 문서가 아니라 프로젝트 공식 문서를 작성하기 위한 근거(Evidence) 문서입니다.
- 본 문서는 프로젝트 역사(History)를 보존하기 위한 Immutable Document입니다.
- Original Project Report 본문은 생성 당시 내용을 그대로 보존합니다.

---

END OF REPORT

Project : Daily Insight News

Document : REPORT_03

Status : Immutable Original Project Report

Version : 1.0