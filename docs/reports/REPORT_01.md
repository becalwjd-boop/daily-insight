# REPORT_01

## Original Project Report

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Source Chat | 뉴스 자동 분류_01 |
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
Daily Insight News
채팅: 뉴스 자동 분류_01
문서 성격: Immutable Original Project Report (History Preservation)

문서 목적

본 문서는 "뉴스 자동 분류_01" 채팅 종료 당시의 프로젝트 상태를 보존하기 위한 Original Project Report이다.

이후 채팅에서 변경되거나 개선된 내용은 절대 반영하지 않는다.

MASTER.md 및 프로젝트 공식 문서의 근거(Evidence) 문서로 사용한다.

1. 프로젝트 개요
이번 채팅의 개발 목적

이번 채팅의 주요 목적은 Daily Insight News 프로젝트를 실제 운영 가능한 서비스 형태로 전환하는 것이었다.

주요 목표는 다음과 같았다.

GitHub Actions를 이용한 자동 뉴스 저장
GitHub와 Vercel을 연동한 자동 배포
localhost 환경에 의존하던 구조를 실제 서버 환경에서도 동작하도록 수정
공개 URL을 통한 외부 서비스 제공
당시 프로젝트 상태

채팅 시작 당시 프로젝트는 다음과 같은 상태였다.

GitHub Actions 실행 실패
GitHub Actions 권한 오류(403)
localhost API 호출 구조 사용
Vercel 배포 실패
공개 URL에서 페이지 정상 동작 불가
경제 및 부동산 카테고리 기사 수가 0으로 표시되는 문제 존재
프로젝트 방향

이번 채팅에서 프로젝트 방향은 다음과 같이 정리되었다.

GitHub 중심 개발
GitHub Actions 기반 자동 저장
Vercel 기반 자동 배포
누구나 접속 가능한 웹서비스 제공
운영 환경(Localhost 제외) 중심 개발
2. 새롭게 구현된 기능
새로 구현된 기능
GitHub Actions 자동 저장 기능 구축
GitHub Secrets 적용
Vercel Environment Variables 적용
GitHub Push → Vercel 자동 배포 구조 구축
Vercel 공개 서비스 구축
localhost 제거 후 직접 네이버 OpenAPI 호출 구조 구현
새로 추가된 UI
Vercel 공개 사이트
공개 URL 제공
모바일 브라우저에서도 접속 가능한 웹 페이지
새로 추가된 UX
코드 수정 후 Git Push만으로 자동 배포
누구나 URL을 통해 서비스 이용 가능
새로 추가된 시스템
GitHub Actions 자동 실행 시스템
GitHub Secrets 관리
Vercel Deployment
GitHub Repository와 Vercel 자동 연동
3. 기존 기능 변경
변경 사항 1
기존

app/page.tsx

↓

fetch("http://localhost:3000/api/news")

↓

변경

app/page.tsx

↓

네이버 OpenAPI 직접 호출

↓

변경 이유

Vercel 운영 환경에서는 localhost가 존재하지 않아 배포 후 API 호출이 실패했기 때문이다.

↓

최종 결정

page.tsx에서 직접 네이버 OpenAPI를 호출하는 구조로 변경하였다.

변경 사항 2
기존

경제 검색어

경제 물가 수출

↓

변경
경제 OR 물가 OR 수출

↓

변경 이유

검색 결과가 부족하여 기사 수가 0으로 표시되는 문제가 발생했기 때문이다.

↓

최종 결정

OR 기반 검색어로 변경하였다.

변경 사항 3
기존

부동산 검색어

서울 아파트 전세 매매 재건축

↓

변경
아파트 OR 부동산 OR 재건축

↓

변경 이유

검색 결과 부족으로 기사가 표시되지 않는 문제가 발생하였다.

↓

최종 결정

OR 검색 방식으로 변경하였다.

4. 해결된 문제
문제 1
문제

GitHub Actions 실행 실패

원인

Workflow Permissions가 Read Only로 설정되어 있었다.

해결 방법

Repository Settings → Actions → General → Workflow Permissions를 Read and Write로 변경하였다.

최종 상태

GitHub Actions가 정상 실행되었다.

문제 2
문제

403 Permission denied

원인

github-actions bot이 저장소에 Push 권한이 없었다.

해결 방법

Workflow Permission 변경 후 Actions를 다시 실행하였다.

최종 상태

자동 Commit이 정상 수행되었다.

문제 3
문제

Vercel 배포 시

connect ECONNREFUSED 127.0.0.1:3000

오류 발생

원인

배포 환경에서 localhost API를 호출하고 있었다.

해결 방법

localhost fetch를 제거하고 네이버 OpenAPI를 직접 호출하도록 변경하였다.

최종 상태

Vercel에서 정상 동작하였다.

문제 4
문제

경제 카테고리 기사 수가 0으로 표시되었다.

원인

검색어가 지나치게 제한적이었다.

해결 방법

OR 검색어를 적용하였다.

최종 상태

기사가 정상 표시되었다.

문제 5
문제

부동산 카테고리 기사 수가 0으로 표시되었다.

원인

검색어 범위가 좁았다.

해결 방법

OR 검색어를 적용하였다.

최종 상태

기사가 정상 표시되었다.

문제 6
문제

Git Push 실패

non-fast-forward
원인

원격 저장소와 로컬 저장소의 Commit 차이

해결 방법
git pull origin main --rebase
git push origin main

실행

최종 상태

Push 성공

5. 아직 해결되지 않은 문제
높음
모바일 실제 기기에서 레이아웃 검증 필요
Archive 페이지가 배포 환경에서도 정상 동작하는지 확인 필요
Archive 상세 페이지 검증 필요
중간
GitHub Actions가 다음날 자동 실행되는지 실제 운영 확인 필요
Archive 저장 후 자동 반영 여부 확인 필요
낮음
없음
6. 기술 부채 (Technical Debt)
높음
API 호출 구조 최적화
기사 중복 제거 강화
카테고리 검색어 추가 최적화
중간
뉴스 검색 기능
뉴스 썸네일 표시
AI 요약 기능
인기 기사 기능
Google Analytics
PWA 적용
SEO 설정
낮음
오류 화면 개선
7. 프로젝트 방향에 영향을 준 결정
Deployment

GitHub Push 후 자동으로 Vercel이 재배포되는 구조를 채택하였다.

이로 인해 배포 방식이 자동화되었다.

API

localhost API 호출을 제거하였다.

운영 환경에서도 동일하게 동작하는 구조를 선택하였다.

GitHub

GitHub Actions를 이용한 자동 저장 방식을 채택하였다.

사용자 수동 저장 방식은 사용하지 않기로 결정하였다.

Environment

환경변수는

Local
GitHub Secrets
Vercel Environment Variables

각각 독립적으로 관리하기로 하였다.

개발 원칙

운영 환경에서도 동작하는 구조를 우선하는 방향으로 결정하였다.

8. Decision Reason

이번 채팅에서 이루어진 주요 의사결정과 이유는 다음과 같다.

localhost 기반 API 호출은 배포 환경에서 사용할 수 없으므로 제거하였다.
GitHub Actions를 이용하면 자동 저장이 가능하므로 수동 저장 방식을 사용하지 않았다.
GitHub Secrets를 사용하여 API Key를 Repository에 저장하지 않도록 결정하였다.
Vercel Environment Variables를 사용하여 운영 환경에서도 동일한 환경변수를 사용할 수 있도록 하였다.
Git Push 기반 자동 Deploy를 채택하여 운영 편의성을 높였다.
검색어를 OR 방식으로 변경하여 기사 수 부족 문제를 해결하였다.
9. 성능 관련 내용

이번 채팅에서 성능과 관련하여 실제 논의된 내용은 다음과 같다.

localhost API 호출 구조가 운영 환경에서 병목 및 오류를 발생시키는 원인이 되었다.
직접 네이버 OpenAPI를 호출하는 방식으로 변경하였다.

그 외 성능 최적화에 대한 구체적인 구현은 이루어지지 않았다.

10. Android 관련 내용

적용되지 않음

11. Archive 관련 내용

이번 채팅에서는 Archive 자동 저장 구조가 포함되었다.

GitHub Actions를 이용하여 날짜별 JSON 저장
data/archives/YYYY-MM-DD.json 구조 사용
자동 저장 구조 구축
Archive 페이지 존재
Archive 상세 페이지 존재

자동 저장이 실제 운영 환경에서 정상적으로 이루어지는지는 이후 확인이 필요한 상태였다.

12. 개발 원칙

이번 채팅에서 새롭게 결정된 개발 원칙

localhost 전용 구조를 운영 코드에서 사용하지 않는다.
환경변수는 GitHub에 Commit하지 않는다.
GitHub Secrets와 Vercel Environment Variables를 각각 관리한다.
Git Push 기반 자동 배포를 사용한다.
뉴스 저장은 GitHub Actions 자동 실행으로 운영한다.
13. docs 반영 대상
문서	반영 이유
MASTER.md	운영 구조 및 배포 방식 변경
PROJECT_STRUCTURE.md	GitHub Actions, Vercel, 환경변수 구조 추가
CHANGELOG.md	localhost 제거, 배포 성공, 검색어 변경 기록
NEXT_TASK.md	모바일 확인, Archive 검증 등 후속 작업
PERFORMANCE.md	localhost API 제거 관련 기록
ARCHIVE_PLAN.md	자동 저장 구조 기록
DEPLOY.md	GitHub + Vercel 배포 절차 기록
TROUBLESHOOTING.md	403 오류, localhost 오류, Git Push 오류 해결 방법
TECH_DEBT.md	남아있는 개선 과제 기록
14. 채팅 종료 시 프로젝트 상태
UI

메인 화면과 카테고리 화면이 공개 URL에서 정상적으로 표시되는 상태

기능

GitHub Actions 자동 저장 구조 구축 완료

GitHub Push 기반 자동 배포 구축 완료

카테고리 뉴스 표시 정상 동작

성능

localhost 의존 제거 완료

Archive

자동 저장 구조 구축

배포 환경에서 추가 확인 필요

Android

적용되지 않음

남아있는 작업
모바일 검증
Archive 페이지 검증
Archive 상세 페이지 검증
자동 저장 실제 운영 확인
15. Related Documents

이번 Report를 기반으로 작성해야 하는 공식 문서

MASTER.md
CHANGELOG.md
PROJECT_STRUCTURE.md
NEXT_TASK.md
DEPLOY.md
TROUBLESHOOTING.md
ARCHIVE_PLAN.md
PERFORMANCE.md
TECH_DEBT.md
16. Fact Check
본 REPORT는 실제 채팅 내용을 기반으로 작성되었습니다.
추측은 포함하지 않았습니다.
이후 채팅 내용은 반영하지 않았습니다.
이 문서는 Original Project Report입니다.
17. 최종 프로젝트 관점 정리

이번 채팅은 Daily Insight News 프로젝트에서 개발 환경 중심 프로젝트를 실제 운영 가능한 서비스로 전환한 시점이라는 의미를 가진다.

프로젝트 역사(History)에 영구적으로 남겨야 하는 핵심 내용은 다음과 같다.

GitHub Actions 자동 저장 구조를 구축하였다.
GitHub Actions 권한 문제(403, Workflow Permission)를 해결하였다.
GitHub Secrets와 Vercel Environment Variables를 각각 설정하였다.
localhost 기반 API 호출을 제거하고 네이버 OpenAPI 직접 호출 방식으로 변경하였다.
GitHub Push → Vercel 자동 배포 구조를 구축하였다.
Vercel 공개 URL을 확보하여 외부 서비스가 가능해졌다.
경제 및 부동산 카테고리의 기사 표시 문제를 검색어 개선으로 해결하였다.
Git Push 충돌(non-fast-forward)을 git pull --rebase 후 Push하는 운영 절차를 확립하였다.
채팅 종료 시점에는 메인 페이지와 카테고리 페이지가 공개 URL에서 정상적으로 표시되었으며, GitHub Actions와 Vercel 배포도 성공적으로 동작하는 상태였다.
Archive 및 모바일 환경은 구조는 갖추었으나, 실제 운영 환경 검증은 이후 과제로 남아 있었다.

본 문서는 "뉴스 자동 분류_01" 채팅 종료 시점의 변경 불가능한(Immutable) Original Project Report이며, 이후 프로젝트 발전 과정과는 독립적으로 프로젝트 역사 보존을 위한 근거 문서로 사용한다.

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

Document : REPORT_01

Status : Immutable Original Project Report

Version : 1.0