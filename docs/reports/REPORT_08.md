# REPORT_08

## Original Project Report

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Source Chat | 뉴스 자동 분류_08 |
| Document Type | Original Project Report |
| Status | Immutable Document (Do Not Edit) |
| Version | 1.0 |
| Generated | 2026-07-05 |

---

## Purpose

본 문서는 Daily Insight News 프로젝트의 Original Project Report입니다.

본 문서는 프로젝트의 역사(History)를 보존하기 위한 원본 기록(Evidence)입니다.

본 문서는 MASTER.md 및 프로젝트 공식 문서를 작성하기 위한 근거(Evidence) 문서입니다.

본 문서는 작성 이후 수정하지 않습니다.

---

## Original Project Report

Original Project Report

Daily Insight News 개발 기록

채팅명 : 뉴스 자동 분류_08

---

# 1. 프로젝트 개요

## 이번 채팅의 개발 목적

이번 채팅의 핵심 목적은 Daily Insight News 프로젝트를 단순히 기능을 추가하는 수준이 아니라,

Project Documentation System(PDS)을 기반으로 운영되는 프로젝트 형태로 정리하면서,

동시에 Archive 시스템의 구조를 안정화하는 것이었다.

채팅 초반에는

Google Play Console의 비공개 테스트가 종료되었음을 확인하였고,

프로덕션 출시 여부를 먼저 검토하였다.

검토 결과

현재 서비스 품질을 고려하면

즉시 프로덕션 출시보다

Archive 안정화

↓

로딩 속도 개선

↓

AAB 재생성

↓

Play Console 검토 요청

순으로 진행하는 것이 더 적절하다고 판단하였다.

이후 개발 방향은 크게 두 갈래로 나뉘었다.

첫 번째는

Project Documentation System(PDS)의 운영 원칙을 실제 프로젝트에 적용하는 작업이었다.

MASTER

TECH_DEBT

ARCHIVE_PLAN

등의 역할을 재검토하면서

현재 상태(Current State)

기술 부채

프로젝트 History

앞으로의 작업

등을 서로 겹치지 않도록 정리하였다.

두 번째는

Archive 시스템 자체를 장기 운영 가능한 구조로 개선하는 것이었다.

이번 채팅에서 Archive는

단순히 하루 뉴스를 저장하는 기능이 아니라

장기적인 뉴스 History를 보존하는 시스템이라는 방향이 더욱 명확하게 확정되었다.

또한

Home 화면과 Archive 화면이 서로 다른 기준으로 뉴스를 가져오고 있다는 문제를 발견하였으며,

이를 해결하기 위해

뉴스 수집 로직 자체를 하나로 통합하기로 결정하였다.

부동산 카테고리 역시

검색어를 계속 추가하는 방식에서

관련도(Relevance Score) 기반으로 발전시키는 방향으로 변경하였다.

즉,

이번 채팅은

기존 기능을 조금 수정한 개발이 아니라,

Archive 구조

뉴스 수집 구조

문서 운영 구조

프로젝트 운영 원칙

을 모두 재정리한 중요한 전환점이었다.

---

## 당시 프로젝트 상태

이번 채팅 시작 당시 프로젝트는 다음 상태였다.

이미 구현 완료

- Home 화면
- 실시간 뉴스
- 카테고리별 뉴스
- Archive 화면
- Android 앱
- GitHub Actions 자동 저장
- GitHub 기반 자동 배포
- Vercel 운영
- Project Documentation System 초안

그러나 다음 문제가 남아 있었다.

높음

- GitHub Actions 오류 이후 일부 날짜 Archive 미생성
- Home과 Archive의 뉴스 수집 기준이 서로 다름
- Archive 기사 수 편차가 매우 큼
- 부동산 기사 품질이 일정하지 않음
- 모바일 로딩 속도

중간

- 과거 Archive 구축
- BigKinds 연동
- Archive JSON 구조 정리

낮음

- Android AAB 재생성
- Play Console 업데이트

또한

Play Console 비공개 테스트는 완료되었지만

서비스 품질을 고려하여

정식 출시보다 프로젝트 안정성을 우선하기로 결정하였다.

---

## 프로젝트 방향

이번 채팅을 통해 프로젝트 방향은 다음과 같이 확정되었다.

기능 추가보다

프로젝트 안정성과 장기 운영을 우선한다.

Archive는

프로젝트의 핵심 기능 중 하나로 간주한다.

뉴스 수집 로직은

Home과 Archive가 동일한 기준을 사용한다.

Archive는

장기적으로

1990년대부터 현재까지

모든 날짜를 제공하는 것을 목표로 한다.

그러나

현재 단계에서는

Naver API 기반 Archive를 유지하고,

향후 BigKinds 기반으로 과거 데이터를 구축하기로 결정하였다.

또한

Project Documentation System 역시

이번 채팅을 계기로

실제 운영 단계로 전환되었다.

---

# 2. 새롭게 구현된 기능

## 새로 구현된 기능

### 1.

Home 화면과 Archive가

동일한 뉴스 수집 로직을 사용하도록 구조를 통합하였다.

기존에는

Home

Archive

가 서로 다른 검색 구조를 사용하고 있었으나,

이번 채팅에서

lib/news.ts를 중심으로

동일한 로직을 사용하도록 변경하였다.

---

### 2.

Archive 저장 정책을 변경하였다.

기존에는

카테고리별 기사 개수 제한이 없었다.

이번 채팅에서는

카테고리별 최대 100개 기사만 저장하도록 정책을 변경하였다.

이를 통해

Archive 용량 증가를 방지하고,

향후 장기 Archive 구축에도 동일한 정책을 적용하기로 결정하였다.

---

### 3.

Archive 저장 시간을 변경하였다.

기존에는

한국시간 오전에 Archive가 저장되면서

당일 늦게 발생한 기사가 Archive에 포함되지 않는 문제가 있었다.

이번 채팅에서는

Archive 저장 기준을

한국시간 23:59 기준으로 변경하기로 결정하였다.

이를 통해

하루 동안 발생한 뉴스를 최대한 모두 포함하는 방향으로 개선하였다.

---

### 4.

normalize-archives.ts를 이용하여

기존 Archive JSON을

새로운 정책에 맞게 정리하는 기능을 구현하였다.

기존 Archive를

새로운 저장 정책으로

한 번에 재정렬할 수 있는 구조가 마련되었다.

---

### 5.

부동산 검색 구조를 개선하였다.

기존에는

검색어를 계속 추가하여 기사 수를 확보하는 방식이었다.

이번 채팅에서는

관련도(Relevance Score)

기반으로

기사를 정렬하는 구조를 도입하였다.

---

### 6.

부동산 관련도 계산에

긍정 키워드

부정 키워드

가중치

개념을 적용하였다.

검색어를 무한히 늘리는 방식보다

품질을 유지하면서 기사 수를 확보하는 방향으로 변경하였다.

---

### 7.

GitHub Actions 저장 구조를 수정하였다.

TypeScript 기반 저장 스크립트와

Workflow를 재점검하면서

자동 저장 구조를 다시 안정화하였다.

---

### 8.

Archive 정규화 이후

Vercel 배포를 완료하였다.

실제 운영 환경에서도

Archive 정책이 정상적으로 적용되는 것을 확인하였다.

---

## 새로 추가한 시스템

- Home / Archive 뉴스 수집 통합 구조
- Archive 정규화 시스템
- Archive 최대 100개 저장 정책
- 부동산 관련도 점수 시스템
- Archive 장기 운영 정책
- Project Documentation System 운영 절차 고도화

---

## 새로 추가한 개발 원칙

이번 채팅에서는

다음 원칙이 새롭게 확정되었다.

Home과 Archive는

동일한 뉴스를 기준으로 제공한다.

검색어를 계속 늘리는 방식보다

관련도 점수를 우선한다.

Archive는

당일 하루의 History를 보존하는 시스템으로 운영한다.

Archive 장기 구축은

BigKinds를 이용한다.

프로젝트의 현재 상태는

MASTER,

개발 History는 REPORT,

기술 부채는 TECH_DEBT,

앞으로의 작업은 NEXT_TASK에서 관리한다.

---

# 3. 기존 기능 변경

## 변경 1

기존

Home과 Archive가

서로 다른 뉴스 수집 구조 사용.

↓

변경

동일한 뉴스 수집 함수 사용.

↓

변경 이유

같은 카테고리인데

Home과 Archive 기사 품질이 달랐다.

↓

최종 결정

뉴스 수집 기준을 하나로 통합.

---

## 변경 2

기존

Archive는

카테고리별 기사 개수 제한 없음.

↓

변경

카테고리별 최대 100개.

↓

변경 이유

장기 Archive 운영 시

데이터가 지나치게 증가할 수 있다.

↓

최종 결정

100개 제한 유지.

---

## 변경 3

기존

Archive 저장 시간이

하루를 모두 반영하지 못하였다.

↓

변경

한국시간 23:59 저장.

↓

변경 이유

당일 늦게 올라온 기사를

Archive에 포함하기 위해.

↓

최종 결정

23:59 기준 유지.

---

## 변경 4

기존

부동산 기사 확보를 위해

검색어를 계속 늘렸다.

↓

변경

관련도 점수 기반 정렬.

↓

변경 이유

검색어 증가만으로는

품질을 유지할 수 없었다.

↓

최종 결정

검색어는 최소한으로 유지하고

관련도 점수로 품질을 관리한다.

---

# 4. 해결된 문제

## 문제

Home과 Archive 기사 품질이 서로 다름.

원인

서로 다른 수집 로직 사용.

해결 방법

뉴스 수집 로직 통합.

최종 상태

해결.

---

## 문제

Archive 기사 수가 카테고리마다 크게 차이남.

원인

저장 정책 부재.

해결 방법

카테고리별 최대 100개 저장.

최종 상태

개선 완료.

---

## 문제

GitHub Actions 이후 Archive 저장 불안정.

원인

Workflow 및 저장 구조 변경 과정의 오류.

해결 방법

Workflow 수정 및 저장 구조 재정비.

최종 상태

정상 저장 확인.

---

## 문제

부동산 기사 수 부족.

원인

검색어만으로 기사 확보.

해결 방법

검색어 보강 후

관련도 점수 도입.

최종 상태

기존 대비 크게 개선되었으며

추가 튜닝 예정.

---

# 5. 아직 해결되지 않은 문제

이번 채팅에서는 Archive 시스템과 프로젝트 문서 체계를 크게 개선하였지만,

여전히 해결되지 않은 과제들도 명확하게 확인되었다.

이번 REPORT에서는 실제 채팅 종료 시점 기준으로 미해결 상태였던 내용만 기록한다.

이미 다음 채팅에서 해결될 예정이거나 해결 가능성이 높더라도,

이번 REPORT에서는 당시 상태 그대로 기록한다.

---

## 5-1. 모바일 로딩 속도

현재 프로젝트에서 가장 우선순위가 높은 미해결 과제이다.

사용자 입장에서는 기능보다도

서비스가 빠르게 열리는 것이 가장 중요하다고 판단하였다.

기존 REPORT에서도

모바일 환경에서 약 50초 수준의 초기 로딩 문제가 보고되었으며,

이번 채팅에서도

다음 개발 목표를

로딩 속도 개선으로 확정하였다.

현재까지는

Archive 구조 개선,

뉴스 수집 구조 통합,

GitHub Actions 안정화 등을 우선 진행하였으며,

로딩 개선은 아직 시작하지 않았다.

따라서 다음 개발 세션의 최우선 작업으로 결정하였다.

---

## 5-2. 부동산 관련도 추가 개선

이번 채팅에서는

부동산 카테고리의 기사 수 부족 문제를 해결하기 위해

검색어를 계속 늘리는 방식 대신

관련도(Relevance Score) 기반 정렬을 도입하였다.

초기에는

부동산 기사 수가

약 20~30개 수준에 머무르는 경우가 많았다.

검색어를 일부 보강한 이후

약 50개 수준까지 증가하였다.

이후 관련도 기반 정렬을 적용하면서

최종적으로는

100개까지 확보할 수 있었다.

그러나

100개의 기사 중

후반부에는

부동산과 직접 관련성이 낮은 기사도 일부 포함되어 있는 것이 확인되었다.

따라서

관련도 점수의

긍정 키워드,

부정 키워드,

가중치,

정렬 기준은

다음 개발 단계에서 추가 조정하기로 결정하였다.

---

## 5-3. 과거 Archive 구축

현재 운영 중인 Archive는

서비스 운영 이후 생성된 데이터만 저장하고 있다.

장기적으로는

1990년대 이후의 뉴스까지 모두 Archive에 포함하는 것을 목표로 한다.

이번 채팅에서는

과거 데이터를 Naver API로 복구하는 것은 적절하지 않다고 판단하였다.

대신

향후 BigKinds 등을 활용하여

과거 데이터를 구축하기로 방향을 확정하였다.

또한

과거 Archive 역시

현재와 동일한 구조를 사용하되,

카테고리별 최대 100개,

중복 제거,

동일한 UI,

동일한 썸네일 정책을 적용하기로 결정하였다.

---

## 5-4. 누락된 Archive 날짜

이번 채팅에서는

다음 날짜의 Archive가 존재하지 않는 것을 확인하였다.

- 2026-06-30
- 2026-07-01
- 2026-07-03

원인을 조사한 결과

GitHub Actions 오류가 발생했던 시점과 겹치는 것으로 확인되었다.

현재는

자동 저장 구조가 복구되었으므로

향후 BigKinds 기반 Archive 구축 단계에서

누락된 날짜 역시 함께 복구하기로 결정하였다.

---

## 5-5. Archive 자동 재생성 기능

이번 채팅에서는

normalize-archives.ts를 구현하여

기존 JSON을 새로운 정책으로 정리할 수 있게 되었다.

그러나

없는 날짜의 Archive를 자동 생성하는 기능은 아직 존재하지 않는다.

따라서

향후에는

특정 날짜를 지정하면

Archive를 다시 생성할 수 있는

Backfill 기능이 필요하다는 점을 확인하였다.

---

# 6. 개발 과정에서 발생한 시행착오

이번 채팅에서는

기능을 구현하는 것보다

기존 구조를 유지하면서 안정적으로 개선하는 데 많은 시간을 사용하였다.

특히

Home 화면과 Archive 화면은

겉으로 보기에는 비슷하지만,

실제로는

서로 다른 뉴스 수집 구조를 사용하고 있다는 사실을 개발 과정에서 확인하였다.

처음에는

Archive 저장 개수만 수정하면 해결될 것으로 예상하였다.

그러나

카테고리별 기사 수,

검색 결과,

필터,

부동산 품질 등이 서로 다르게 동작하는 것을 확인하였다.

이에 따라

단순히 Archive만 수정하는 것이 아니라,

뉴스를 가져오는 구조 자체를 하나로 통합하기로 방향을 변경하였다.

---

부동산 카테고리 역시

처음에는

검색어를 계속 추가하는 방식으로 해결하려고 하였다.

검색어를 추가하면

기사 수는 증가하였지만,

관련 없는 기사도 함께 증가하는 문제가 발생하였다.

이에 따라

검색어를 무한히 늘리는 방식은 장기적으로 적절하지 않다고 판단하였다.

결국

검색어는 필요한 수준까지만 유지하고,

관련도 점수를 계산하여

품질을 높이는 방향으로 전환하였다.

이 결정은

향후 다른 카테고리에도 동일한 방식으로 확장할 수 있는 구조가 되었다.

---

Archive 저장 정책 역시

처음에는

기사 개수 제한을 두지 않는 방향이었다.

그러나

장기적으로

1990년대부터 현재까지의 데이터를 모두 저장하게 되면

데이터 양이 지나치게 증가할 것으로 판단하였다.

이에 따라

현재 운영 중인 Archive와

향후 구축될 과거 Archive 모두

카테고리별 최대 100개 저장이라는 정책을 확정하였다.

---

# 7. 기술적 의사결정

이번 채팅에서는

다음과 같은 중요한 기술적 의사결정을 내렸다.

---

## Home과 Archive는 동일한 로직을 사용한다.

뉴스 수집 로직을 두 군데에서 관리하면

품질 차이가 계속 발생할 수 있으므로,

하나의 공통 구조를 사용하는 방향으로 결정하였다.

---

## 검색어보다 관련도를 우선한다.

검색어를 계속 늘리는 방식은

품질을 보장하기 어렵다.

따라서

관련도 점수를 이용하여

동일한 검색 결과 안에서도

품질이 높은 기사를 먼저 선택하는 구조를 사용하기로 결정하였다.

---

## Archive 저장은 하루가 끝난 후 수행한다.

Archive는

당일 뉴스를 보존하는 것이 목적이다.

따라서

오전이 아니라

한국시간 23:59 기준 저장이 적절하다고 판단하였다.

---

## Archive는 장기 History이다.

Archive는

단순한 캐시 데이터가 아니라,

프로젝트의 뉴스 History를 보존하는 시스템으로 정의하였다.

따라서

JSON 구조,

저장 정책,

카테고리 구조는

장기적으로도 동일하게 유지하기로 결정하였다.

---

# 8. 프로젝트 운영 원칙 변경

이번 채팅에서는

Project Documentation System(PDS)의 운영 방식도 일부 정리하였다.

특히

공식 문서의 역할을 다시 검토하면서

다음 원칙을 확정하였다.

MASTER는

현재 상태(Current State)를 기록한다.

TECH_DEBT는

현재 남아 있는 기술 부채만 관리한다.

다만

해결된 기술 부채 역시

Resolved Technical Debt 섹션에 남겨

향후 동일한 문제를 반복하지 않도록 한다.

REPORT는

프로젝트 History를 보존하는 Immutable Document이다.

CHANGELOG는

REPORT를 근거(Evidence)로 작성한다.

즉,

REPORT를 먼저 작성한 후

CHANGELOG,

MASTER,

NEXT_TASK를 수정하는 것이

올바른 Project Documentation Cycle이라는 점을 다시 확인하였다.

---

# 9. 성능 관련 내용

이번 채팅에서는

성능 자체를 직접 개선하지는 않았다.

그러나

향후 성능 개선을 위해 필요한 기반 작업을 대부분 완료하였다.

대표적으로

뉴스 수집 로직을 하나로 통합함으로써

동일한 로직을 대상으로

캐싱,

API 호출 최적화,

병렬 처리,

중복 제거,

이미지 처리 등을

한 번에 개선할 수 있는 구조가 마련되었다.

또한

Archive 저장 정책을

100개 제한으로 변경하면서

향후 Archive 조회 성능에도 긍정적인 영향을 줄 것으로 예상하였다.

다음 개발 세션에서는

모바일 초기 로딩 속도를 중심으로

성능 최적화를 진행하기로 결정하였다.

---

# 10. Android 및 배포 관련 내용

이번 채팅에서는 Android 기능 자체를 수정하지는 않았다.

그러나

Google Play Console과 관련된 중요한 운영 결정이 이루어졌다.

---

## 비공개 테스트 종료

채팅 초반

Google Play Console의 비공개 테스트가 정상적으로 종료된 것을 확인하였다.

비공개 테스트 종료 후

프로덕션 출시가 가능한 상태가 되었으며,

Google Play Console에서

프로덕션 신청 절차를 진행하였다.

---

## 프로덕션 신청

프로덕션 신청 과정에서는

- 앱 설명
- 개인정보 관련 항목
- 정책 확인
- 출시 정보

등을 순서대로 검토하였다.

모든 항목을 작성한 이후

Google Play Console의 검토 요청까지 완료하였다.

---

## 정식 출시 보류

그러나

프로젝트의 현재 상태를 종합적으로 검토한 결과

즉시 정식 출시하는 것보다

서비스 완성도를 높이는 것이 우선이라는 판단을 내렸다.

특히

다음 문제가 남아 있었다.

- 모바일 초기 로딩 속도
- Archive 구조 개선
- Home / Archive 뉴스 품질 통일

따라서

프로젝트 방향을

정식 출시

↓

서비스 품질 개선

↓

AAB 재생성

↓

Play Console 업데이트

순으로 변경하였다.

---

## 다음 Android 개발 방향

다음 Android 관련 개발은

Archive 구조 안정화 이후 진행하기로 결정하였다.

예정 작업은 다음과 같다.

- 최신 코드 기준 AAB 생성
- Play Console 업로드
- Google 검토 요청
- 정식 출시 준비

---

# 11. GitHub 및 배포 과정

이번 채팅에서는

GitHub Actions와 Vercel 배포를 여러 차례 수행하였다.

---

## GitHub Actions

초기에는

Archive 자동 생성이 중단되어 있는 상태였다.

원인을 조사한 결과

Workflow 수정 과정에서

Git Push 충돌과

저장 구조 변경이 함께 발생한 것으로 확인되었다.

Workflow를 수정한 이후

다시 정상적으로

Archive 생성이 이루어지는 것을 확인하였다.

---

## save-news.yml 수정

Workflow는

TypeScript 기반 저장 스크립트에 맞추어 수정하였다.

또한

Git Push 전에

최신 Repository 상태를 반영하도록 구조를 변경하였다.

이후

Archive 자동 생성이 정상적으로 동작하였다.

---

## save-today.ts 수정

Archive 저장 구조 역시

새로운 정책에 맞추어 수정하였다.

변경 사항은 다음과 같다.

- Home과 동일한 뉴스 수집 구조 사용
- 카테고리별 최대 100개 저장
- 중복 제거
- 기존 Archive 병합
- 정렬 유지

---

## normalize-archives.ts

새로운 정책을

기존 Archive에도 적용하기 위해

정규화 스크립트를 추가하였다.

이 스크립트를 이용하여

기존 JSON 역시

동일한 정책으로 재정렬하였다.

---

## Git Commit

이번 채팅에서는

여러 차례

Git Commit과

Git Push를 수행하였다.

최종적으로

Repository와

Vercel이 동일한 상태임을 확인하였다.

---

## Vercel

배포 이후

초기에는

Build Error가 발생하였다.

원인을 확인하면서

lib/news.ts와

save-today.ts의 연결 구조를 수정하였다.

이후

다시 배포를 수행하였고,

최종적으로

Ready 상태를 확인하였다.

---

# 12. 문서 운영 관련 변경

이번 채팅에서는

Project Documentation System 운영 방식도 실제 프로젝트 운영에 맞게 일부 수정하였다.

---

## REPORT 우선 작성 원칙

이번 채팅에서

CHANGELOG를 먼저 수정하려고 하였으나,

문서 간 관계를 다시 검토하였다.

그 결과

REPORT가

Evidence 역할을 수행하므로

먼저 작성되어야 한다는 점을 다시 확인하였다.

최종적으로

다음 순서를 공식 운영 방식으로 사용하기로 결정하였다.

Development

↓

REPORT

↓

CHANGELOG

↓

MASTER

↓

NEXT_TASK

↓

docs.zip

↓

START_CHAT

---

## MASTER

MASTER는

항상 현재 상태(Current State)만 기록한다.

과거 문제,

개발 과정,

시행착오는

절대 MASTER에 기록하지 않는다.

---

## REPORT

REPORT는

프로젝트 History를 보존하는

Immutable Document이다.

이번 채팅에서도

현재 상태가 아니라

당시 채팅 종료 시점만 기록하기로 결정하였다.

---

## TECH_DEBT

처음에는

해결된 기술 부채를 삭제하는 방향도 검토하였다.

그러나

동일한 문제가 다시 발생하는 것을 방지하기 위해

Resolved Technical Debt를

보존하기로 결정하였다.

이를 통해

새로운 GPT와

새로운 개발자 역시

왜 해당 문제가 해결되었는지 이해할 수 있도록 하였다.

---

## ARCHIVE_PLAN

Archive 운영 정책도

이번 채팅을 통해

더욱 구체적으로 정리되었다.

특히

- 23:59 저장
- 최대 100개 저장
- BigKinds 기반 장기 Archive
- 누락 Archive 복구

등이

공식 정책으로 정리되었다.

---

# 13. 이번 채팅에서 확인된 중요한 의사결정

이번 채팅에서는

여러 중요한 의사결정이 이루어졌다.

---

첫 번째

Home과 Archive는

절대 서로 다른 기준으로 뉴스를 수집하지 않는다.

항상

동일한 뉴스 수집 함수를 사용한다.

---

두 번째

검색어는

계속 늘리는 방식보다

관련도 기반 정렬을 우선한다.

---

세 번째

Archive는

단순 저장 기능이 아니라

프로젝트의 장기 History이다.

---

네 번째

누락된 Archive는

Naver API가 아니라

BigKinds 기반으로 복구한다.

---

다섯 번째

서비스 품질이

Play Store 출시보다 우선이다.

---

여섯 번째

모바일 로딩 속도 개선을

프로젝트 최우선 과제로 확정하였다.

---

# 14. 채팅 종료 시 프로젝트 상태

이번 채팅 종료 시점에서

프로젝트는 다음 상태였다.

---

완료

- Project Documentation System 운영 시작
- Home / Archive 뉴스 수집 통합
- Archive 저장 정책 개선
- Archive 최대 100개 저장
- Archive 저장 시간 변경
- normalize-archives.ts 구현
- GitHub Actions 정상화
- Archive 자동 생성 복구
- Vercel 배포 완료
- 부동산 관련도 점수 도입

---

부분 완료

- 부동산 품질 개선

기존보다 크게 향상되었지만

추가 튜닝 예정.

---

미완료

- 모바일 로딩 속도 개선
- BigKinds 기반 Archive 구축
- 과거 Archive 복구
- AAB 재생성
- Play Console 최신 버전 배포

---

이번 채팅 종료 시점 기준으로

서비스는 정상적으로 운영 가능한 상태이며,

다음 개발은

로딩 속도 개선부터 진행하기로 확정하였다.

---

# 15. Related Documents

이번 개발 내용은 아래 공식 문서의 근거(Evidence)가 된다.

## Current State

- MASTER.md

이번 채팅에서 변경된 현재 프로젝트 상태는 MASTER.md에서 관리한다.

주요 반영 대상은 다음과 같다.

- Home / Archive 뉴스 수집 구조 통합
- Archive 저장 정책 변경
- Archive 저장 시간 변경
- 부동산 관련도 기반 정렬
- Archive 최대 100개 저장 정책
- Project Documentation System 운영 방식

---

## Change History

- CHANGELOG.md

이번 채팅에서 완료된 변경 사항은 CHANGELOG.md에 기록한다.

주요 변경 사항

- Home / Archive 로직 통합
- normalize-archives.ts 추가
- Archive 정책 변경
- GitHub Actions 복구
- 부동산 관련도 점수 도입
- Archive 저장 구조 개선

---

## Future Roadmap

- NEXT_TASK.md

다음 개발 우선순위를 다음과 같이 확정하였다.

1.

모바일 로딩 속도 개선

2.

BigKinds 기반 Archive 구축

3.

부동산 관련도 추가 개선

4.

최신 AAB 생성

5.

Play Console 업데이트

---

## Technical Debt

- TECH_DEBT.md

이번 채팅 종료 시점 기준으로

남아 있는 기술 부채는 다음과 같다.

- 모바일 로딩 속도
- BigKinds 기반 Archive 구축
- 부동산 관련도 추가 튜닝
- Archive 자동 재생성 기능

또한

Resolved Technical Debt에는

이번 채팅에서 해결된 기술 부채를 계속 보존하기로 결정하였다.

---

## Archive Policy

- ARCHIVE_PLAN.md

이번 채팅에서

Archive 운영 정책이 더욱 구체화되었다.

새롭게 확정된 정책은 다음과 같다.

- 한국시간 23:59 저장
- 카테고리별 최대 100개 저장
- 중복 제거
- BigKinds 기반 장기 Archive
- 누락 Archive 복구 정책

---

## Performance

- PERFORMANCE.md

다음 개발 세션에서는

모바일 초기 로딩 속도를 중심으로 성능 개선을 진행한다.

이번 채팅에서는

성능 개선을 위한 기반 작업만 완료하였다.

---

## Troubleshooting

- TROUBLESHOOTING.md

이번 채팅에서 발생했던 문제들은

Troubleshooting 문서에 기록한다.

대표적인 사례

- GitHub Actions 저장 실패
- fetchNaverNews 관련 오류
- realEstateQueries 오류
- Vercel Build Error
- Archive 저장 구조 오류

---

# 16. Evidence

이번 REPORT는

아래 실제 개발 내용을 근거(Evidence)로 작성되었다.

---

## 실제 구현

- Home / Archive 뉴스 수집 구조 통합
- Archive 최대 100개 저장
- normalize-archives.ts 구현
- GitHub Actions 수정
- save-news.yml 수정
- save-today.ts 개선
- 부동산 관련도 점수 적용
- Archive 저장 시간 변경

---

## 실제 확인

- GitHub Actions 정상 동작 확인
- Git Push 정상 완료
- Vercel Ready 확인
- Archive 정상 생성 확인
- 2026-07-05 Archive 생성 확인
- Archive 최대 800개 기사 확인
- 부동산 기사 품질 개선 확인

---

## 실제 논의

이번 채팅에서는

다음 사항에 대해 프로젝트 방향을 최종 확정하였다.

- 기능 추가보다 안정성을 우선한다.
- Home과 Archive는 동일한 기준을 사용한다.
- Archive는 장기 History이다.
- BigKinds를 이용하여 과거 Archive를 구축한다.
- 모바일 로딩 속도를 최우선 과제로 한다.
- Project Documentation System(PDS)을 공식 운영 절차로 사용한다.

---

# 17. Final Project Review

이번 개발은

단순한 기능 추가가 아니라

Daily Insight News 프로젝트의 운영 구조를 다시 정리한 개발이었다.

기존에는

Home과 Archive가

각각 독립적으로 발전하면서

동일한 프로젝트 안에서도

뉴스 품질과 저장 기준이 달라지고 있었다.

이번 채팅에서는

이 문제를 근본적으로 해결하기 위해

뉴스 수집 구조 자체를 하나로 통합하였다.

또한

Archive를

단순한 하루 뉴스 저장 기능이 아니라

프로젝트의 장기 History를 보존하는 시스템으로 다시 정의하였다.

이에 따라

저장 정책,

저장 시간,

최대 기사 수,

장기 운영 방향을 모두 재정비하였다.

부동산 카테고리 역시

검색어를 계속 늘리는 방식에서 벗어나

관련도 기반으로 발전하기 시작하였으며,

향후 다른 카테고리에도 동일한 방식으로 확장할 수 있는 기반을 마련하였다.

Project Documentation System 역시

이번 채팅을 통해 실제 운영 단계에 들어갔다.

REPORT를 Evidence로 사용하여

MASTER,

CHANGELOG,

NEXT_TASK,

TECH_DEBT,

ARCHIVE_PLAN,

PERFORMANCE,

TROUBLESHOOTING을 관리하는 절차가 공식화되었다.

이번 채팅 종료 시점에서

프로젝트는 안정적으로 운영 가능한 상태이며,

다음 개발 세션에서는

모바일 로딩 속도 개선을 최우선으로 진행하기로 결정하였다.

이번 REPORT는

Daily Insight News 프로젝트의 개발 History를 보존하기 위한 Original Project Report이며,

향후 MASTER와 공식 문서를 작성하기 위한 근거(Evidence) 문서로 사용한다.

---

END OF REPORT

Project : Daily Insight News

Document : REPORT_08.md

Type : Original Project Report

Status : Immutable Document

Version : 1.0

Evidence : Official Project History