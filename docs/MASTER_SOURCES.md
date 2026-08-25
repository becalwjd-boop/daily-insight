# MASTER_SOURCES

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | MASTER_SOURCES.md |
| Type | Evidence Index |
| Purpose | MASTER Current State Evidence Mapping |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-08-25 |

---

# Purpose

MASTER_SOURCES.md는 Daily Insight News 프로젝트의 `MASTER.md`에 기록된 주요 Current State와 Original Project Report(REPORT)의 Evidence 연결 관계를 관리하는 공식 Evidence Index입니다.

`MASTER.md`는 프로젝트의 현재 상태(Current State)를 관리합니다.

REPORT는 각 개발 세션의 개발 History와 Evidence를 보존합니다.

MASTER_SOURCES.md는 두 문서 사이의 연결 관계를 관리하여,

MASTER의 주요 Current State가 어떤 REPORT Evidence를 기반으로 유지되고 있는지 추적할 수 있도록 합니다.

이 문서는 MASTER.md의 내용을 복제하거나 REPORT의 상세 History를 다시 기록하기 위한 문서가 아닙니다.

---

# Evidence Architecture

프로젝트의 Evidence 관계는 다음 원칙을 따릅니다.

```text
Development Session

↓

Original Project Report

↓

Evidence

↓

MASTER_SOURCES

↓

MASTER Current State
```

REPORT는 과거 개발 세션 당시의 History와 Evidence를 변경하지 않고 보존합니다.

MASTER는 여러 REPORT의 Evidence를 종합하여 현재 유효한 상태만 관리합니다.

MASTER_SOURCES는 MASTER의 주요 Current State와 이를 뒷받침하는 REPORT 사이의 연결 관계만 관리합니다.

새로운 REPORT가 생성될수록 Evidence는 계속 추가될 수 있으며,

특정 REPORT 번호 범위를 MASTER_SOURCES의 고정된 전체 Evidence 범위로 정의하지 않습니다.

---

# MASTER Evidence Mapping

## Chapter 1. Project

### 1. Purpose / Project Identity

| Current State | Evidence |
|---------------|----------|
| Naver OpenAPI를 이용한 최신 뉴스 자동 수집 구조 | REPORT_01.md |
| GitHub Actions 기반 자동 저장 구조 | REPORT_01.md, REPORT_08.md |
| GitHub Push와 Vercel을 이용한 자동 배포 구조 | REPORT_01.md |
| 웹 서비스와 Android 앱을 함께 운영하는 구조 | REPORT_04.md, REPORT_09.md, REPORT_11.md |
| AI 기반 뉴스 큐레이션 플랫폼으로 발전시키는 방향 | REPORT_10.md |
| 원클릭 헤드라인 공유를 핵심 서비스 기능으로 운영 | REPORT_06.md, REPORT_10.md |

---

### 2. Project Goals

| Current State / Direction | Evidence |
|---------------------------|----------|
| 새로운 기능보다 현재 서비스 안정성과 품질을 우선 | REPORT_08.md, REPORT_10.md, REPORT_11.md |
| 접속 및 새로고침 시 최신 뉴스가 즉시 반영되지 않는 문제를 최우선으로 해결 | REPORT_11.md |
| 경제·금융·기업·부동산·사회·국제·연예·스포츠 8개 카테고리 품질 개선 | REPORT_10.md, REPORT_11.md |
| 기사 수보다 기사 품질과 관련성을 우선 | REPORT_10.md |
| AI 3줄 뉴스 요약 → AI 핵심 뉴스 → AI 브리핑 방향 | REPORT_10.md |
| BigKinds 등 외부 데이터를 활용한 1990년대부터의 뉴스 Archive 구축 | REPORT_06.md, REPORT_08.md, REPORT_10.md |
| 대규모 과거 Archive 구축 시 현재 수준의 빠른 초기 로딩 성능 유지 | REPORT_10.md |
| Daily Insight News 자체 콘텐츠 가치 강화 후 AdSense 재검토 | REPORT_11.md |

---

# Chapter 2. Service

### 3. Current Project Status

| Current State | Evidence |
|---------------|----------|
| 실제 운영 가능한 웹 서비스 구축 | REPORT_01.md |
| Google Play Android 앱 운영 | REPORT_04.md, REPORT_09.md, REPORT_10.md |
| Google Play Production Access 및 프로덕션 운영 단계 진입 | REPORT_11.md |
| 공식 웹 도메인 `dailyinsightnews.kr` 도입 및 운영 | REPORT_11.md |
| Vercel Custom Domain과 Gabia DNS 연결 | REPORT_11.md |
| Google AdSense 기술적 연결 및 사이트 소유권 확인 완료 | REPORT_11.md |
| `public/ads.txt` 배포 및 Ads.txt 승인 완료 | REPORT_11.md |
| AdSense 사이트 심사에서 `가치가 별로 없는 콘텐츠` 상태 확인 | REPORT_11.md |
| 현재 최우선 과제는 뉴스 최신성 및 데이터 갱신 문제 | REPORT_11.md |
| 두 번째 핵심 과제는 8개 카테고리 전체 뉴스 품질 개선 | REPORT_11.md |

---

### 4. Core News Features

| Current State | Evidence |
|---------------|----------|
| 카테고리별 뉴스 서비스 운영 | REPORT_01.md, REPORT_02.md |
| 8개 카테고리 기준 뉴스 운영 | REPORT_10.md, REPORT_11.md |
| 기사 날짜 및 번호 분리 UI | REPORT_02.md |
| 실시간 뉴스 제공 | REPORT_03.md |
| 속보·단독·특종 표시 및 최신순 정렬 유지 | REPORT_11.md |
| 전체 및 카테고리별 헤드라인 복사 기능 | REPORT_06.md |
| 원클릭 헤드라인 공유를 핵심 차별화 기능으로 운영 | REPORT_10.md |
| Home과 Archive가 동일한 뉴스 수집·품질 기준 사용 | REPORT_08.md, REPORT_10.md, REPORT_11.md |
| 부동산 관련도(Relevance Score) 기반 정렬 구조 | REPORT_08.md |
| Positive / Negative Keyword 및 관련도 기반 품질 개선 방향 | REPORT_08.md, REPORT_11.md |
| 단순 문자열 기반 카테고리 오분류 문제 확인 | REPORT_11.md |

---

### 5. Archive

| Current State | Evidence |
|---------------|----------|
| 날짜별 Archive 구조 운영 | REPORT_01.md, REPORT_03.md |
| Archive를 뉴스 History 보존 시스템으로 운영 | REPORT_08.md |
| Home과 Archive의 뉴스 수집 로직 통합 | REPORT_08.md |
| 카테고리별 최대 100개 저장 정책 | REPORT_08.md, REPORT_10.md |
| 한국시간 23:59 기준 Archive 저장 정책 | REPORT_08.md, REPORT_10.md |
| 중복 제거 기반 Archive 저장 | REPORT_03.md, REPORT_08.md |
| 기존 Archive 정규화를 위한 `normalize-archives.ts` 구현 | REPORT_08.md |
| 자동 저장 실패 또는 누락 Archive 복구 필요성 및 정책 | REPORT_08.md, REPORT_10.md |
| BigKinds 등 외부 데이터를 이용한 장기 과거 Archive 구축 방향 | REPORT_06.md, REPORT_08.md, REPORT_10.md |

---

### 6. User Experience / Rendering

| Current State | Evidence |
|---------------|----------|
| Home 화면을 주요 UI 기준으로 사용 | REPORT_05.md |
| 썸네일 Placeholder 및 레이아웃 고정 구조 | REPORT_05.md |
| 텍스트 우선 렌더링 | REPORT_10.md |
| 썸네일 순차 로딩 | REPORT_10.md |
| 최초 로딩 속도 대폭 개선 | REPORT_09.md, REPORT_10.md |
| 기사 0건 표시 문제 해결 | REPORT_10.md |
| 실제 기사 이미지와 fallback UI 처리 개선 | REPORT_11.md |
| 모바일 사용성을 실제 기기 기준으로 검증 | REPORT_02.md, REPORT_09.md, REPORT_10.md |

---

# Chapter 3. Technology

### 7. Web / Application Technology

| Current Technology / Structure | Evidence |
|--------------------------------|----------|
| Next.js 기반 Application 및 Route 구조 | REPORT_01.md, REPORT_10.md |
| React 기반 Web UI 및 Android WebView 구조 | REPORT_04.md, REPORT_05.md |
| TypeScript 기반 뉴스·Archive 처리 | REPORT_06.md, REPORT_08.md |
| Tailwind 기반 반응형 UI | REPORT_05.md |
| Node / TypeScript 기반 Archive 저장 Script | REPORT_06.md, REPORT_08.md |
| Naver OpenAPI 기반 뉴스 수집 | REPORT_01.md |

---

### 8. Deployment / Repository

| Current Technology / Structure | Evidence |
|--------------------------------|----------|
| Git / GitHub 기반 Source Management | REPORT_01.md |
| GitHub Actions 기반 자동화 | REPORT_01.md, REPORT_08.md |
| Vercel Production Deployment | REPORT_01.md, REPORT_08.md |
| 공식 Custom Domain `dailyinsightnews.kr` | REPORT_11.md |
| Gabia DNS와 Vercel 연결 | REPORT_11.md |
| 강제 Push보다 Pull / Rebase / Stash 등 Git History 보존 방식 우선 | REPORT_01.md, REPORT_11.md |
| `docs/` 원본 문서는 Git 관리 대상 | REPORT_11.md |
| `docs.zip` 및 배포에 필요하지 않은 임시 작업 파일은 공식 Git 관리 대상에서 제외 | REPORT_11.md |

---

### 9. Android / Google Play

| Current Technology / Structure | Evidence |
|--------------------------------|----------|
| Capacitor 기반 Android 앱 | REPORT_04.md |
| Android Studio를 통한 Release Build | REPORT_04.md, REPORT_09.md |
| Android Native `MainActivity` 기반 Back Button 처리 | REPORT_04.md |
| Version Code / Version Name 증가 후 새로운 AAB 배포 | REPORT_04.md, REPORT_09.md, REPORT_10.md |
| Google Play Closed Testing 운영 | REPORT_04.md, REPORT_09.md, REPORT_10.md |
| Google Play Production Access 및 Production 운영 | REPORT_11.md |
| Android와 Web의 서비스 상태를 가능한 동일하게 유지 | REPORT_11.md |
| Android는 Play Store 앱, iOS는 공식 웹 기반 Web App 방식 지원 | REPORT_11.md |

---

### 10. Analytics / Monetization

| Current Technology / Structure | Evidence |
|--------------------------------|----------|
| Google Analytics 운영 | REPORT_10.md, REPORT_11.md |
| Google AdSense Script 및 Metadata 적용 | REPORT_11.md |
| Google AdSense 사이트 소유권 확인 | REPORT_11.md |
| `public/ads.txt`를 통한 Ads.txt 운영 | REPORT_11.md |
| Ads.txt 승인 완료 | REPORT_11.md |
| Google CMP 관련 운영 검토 | REPORT_11.md |
| AdSense 승인 자체보다 서비스 콘텐츠 가치 개선 우선 | REPORT_11.md |

---

### 11. Performance Strategy

| Current State / Principle | Evidence |
|---------------------------|----------|
| 모바일 초기 로딩 속도가 핵심 성능 문제로 확인됨 | REPORT_06.md |
| Batch Parallel 방식으로 뉴스 수집 성능과 안정성 개선 | REPORT_09.md |
| 전체 Promise 병렬 방식보다 안정적인 Batch Parallel 방식 채택 | REPORT_09.md |
| 텍스트 우선 + 썸네일 순차 로딩으로 최초 로딩 성능 추가 개선 | REPORT_10.md |
| 성능을 위해 뉴스 또는 썸네일 품질을 희생하지 않는 원칙 | REPORT_09.md, REPORT_10.md |
| 대규모 과거 Archive에서도 현재 초기 로딩 성능 유지 | REPORT_10.md |
| 초기 로딩 속도뿐 아니라 뉴스 Data Freshness를 성능 문제로 관리할 필요 확인 | REPORT_11.md |

---

# Chapter 4. Documentation

### 12. Project Documentation System

| Current State / Principle | Evidence |
|---------------------------|----------|
| Project Documentation System(PDS) 구축 | REPORT_07.md |
| README를 Documentation Entry Point로 사용 | REPORT_07.md |
| Project Documentation Cycle(PDC) 운영 체계 구축 | REPORT_07.md, REPORT_08.md |
| REPORT는 Project History / Evidence를 관리 | REPORT_07.md, REPORT_08.md, REPORT_09.md |
| MASTER는 Current State만 관리 | REPORT_08.md, REPORT_09.md |
| CHANGELOG는 완료된 Change History 관리 | REPORT_08.md |
| NEXT_TASK는 Future Roadmap 관리 | REPORT_08.md |
| TECH_DEBT는 현재 남아 있는 기술적 위험과 부채 관리 | REPORT_08.md |
| REPORT를 먼저 확정한 후 공식 문서를 업데이트 | REPORT_08.md, REPORT_09.md, REPORT_11.md |
| 공식 문서는 사용자가 전체 내용을 제공한 후 함께 검토 | REPORT_09.md, REPORT_11.md |
| REPORT 작성 시 REPORT_TEMPLATE과 현재 개발 채팅 전체 복사본을 함께 사용 | REPORT_11.md |
| GPT 기억이나 일부 대화만으로 REPORT를 작성하지 않음 | REPORT_11.md |
| REPORT는 기존 Original Project Report의 문체와 큰 구조를 유지 | REPORT_11.md |
| REPORT 확정 후 PDC를 통해 공식 문서 전체 검토 | REPORT_11.md |
| 실제 영향을 받은 공식 문서만 수정 | REPORT_11.md |
| PDC 종료 전 Git 상태 및 Commit / Push 확인 | REPORT_11.md |

---

### 13. Current Development Direction

| Current Direction | Evidence |
|-------------------|----------|
| Service Operation / Improvement 단계로 전환 | REPORT_10.md, REPORT_11.md |
| 새로운 기능보다 운영 안정성 우선 | REPORT_10.md, REPORT_11.md |
| 뉴스 최신성 문제를 현재 최우선 과제로 관리 | REPORT_11.md |
| 8개 카테고리 품질 개선을 두 번째 핵심 과제로 관리 | REPORT_11.md |
| Home과 Archive 품질 기준의 통합 상태 유지 | REPORT_08.md, REPORT_11.md |
| AdSense 재심사보다 자체 콘텐츠 가치 개선 우선 | REPORT_11.md |
| 품질 문제 해결 이후 AI 기능을 단계적으로 확대 | REPORT_10.md, REPORT_11.md |
| 1990년대부터의 장기 Archive는 현재 핵심 품질 문제 해결 이후 추진 | REPORT_10.md, REPORT_11.md |

---

# Historical Evidence Notes

MASTER_SOURCES는 현재 MASTER의 Current State를 추적하기 위한 문서이므로,

과거 REPORT에 존재하지만 이후 정책 변경으로 더 이상 현재 상태가 아닌 내용은 Current State Mapping에서 제외하거나 최신 Evidence와 함께 해석합니다.

대표적인 예시는 다음과 같습니다.

## Automatic Refresh

REPORT_03에서는 실시간 뉴스 성격 강화를 위해 5분 자동 새로고침이 도입되었습니다.

이후 REPORT_10에서 사용자가 뉴스를 읽는 중 화면이 변경되는 문제를 고려하여 자동 새로고침을 제거하는 방향이 확정되었습니다.

따라서 현재 MASTER는 REPORT_10 이후 정책을 기준으로 관리합니다.

---

## Archive Article Limit

REPORT_03에서는 Archive를 History로 보고 기사 개수 제한을 제거하는 방향이 적용되었습니다.

이후 REPORT_08에서 장기 운영과 데이터 증가를 고려하여 카테고리별 최대 100개 저장 정책으로 변경되었습니다.

따라서 현재 MASTER와 ARCHIVE_PLAN은 REPORT_08 이후 정책을 기준으로 관리합니다.

---

## docs.zip

REPORT_07에서는 `docs.zip`을 프로젝트 전달의 공식 방식으로 사용하는 초기 PDS 운영 원칙이 구축되었습니다.

이후 실제 운영 과정에서 REPORT_11을 통해 `docs/` 내부의 원본 공식 문서는 Git으로 관리하고,

`docs.zip`은 필요할 때만 생성하는 전달·검토용 임시 파일로 변경되었습니다.

따라서 현재 Documentation System은 REPORT_11 이후 정책을 기준으로 관리합니다.

---

## Google Play Release Stage

초기 REPORT에서는 Google Play Closed Testing과 Production 준비 단계가 기록되어 있습니다.

REPORT_11에서 Production Access와 실제 프로덕션 운영 단계로 이동한 것이 확인되었습니다.

따라서 현재 MASTER는 Google Play Production 운영 상태를 기준으로 관리합니다.

---

## AdSense Strategy

REPORT_10에서는 사용자 확보 이후 AdSense를 적용하는 방향이 계획되었습니다.

REPORT_11에서는 실제 공식 도메인과 AdSense 기술적 연결, 사이트 소유권 확인 및 Ads.txt 승인이 완료되었으며,

사이트 심사 결과 `가치가 별로 없는 콘텐츠` 상태가 확인되었습니다.

따라서 현재 MASTER는 기술적 연결 완료와 콘텐츠 가치 개선 후 재검토라는 상태를 기준으로 관리합니다.

---

# Management Rules

MASTER_SOURCES는 다음 원칙을 따릅니다.

1. `MASTER.md`는 프로젝트의 Current State를 관리합니다.

2. REPORT는 각 개발 세션의 Development History와 Evidence를 보존합니다.

3. MASTER_SOURCES.md는 MASTER의 주요 Current State와 REPORT 사이의 Evidence Mapping만 관리합니다.

4. REPORT의 상세 개발 History를 MASTER_SOURCES에 불필요하게 복사하지 않습니다.

5. MASTER.md의 전체 문장을 항목별로 그대로 복제하지 않습니다.

6. 실제 REPORT에서 확인되지 않은 내용을 Evidence로 연결하지 않습니다.

7. 하나의 Current State가 여러 개발 세션에 걸쳐 형성된 경우 여러 REPORT를 Evidence로 연결할 수 있습니다.

8. 초기 구현 REPORT와 이후 정책 변경 REPORT가 모두 존재하는 경우 현재 상태를 가장 직접적으로 설명하는 최신 Evidence를 우선합니다.

9. 과거 REPORT의 내용이 현재 상태와 다르더라도 REPORT 자체를 수정하지 않습니다.

10. 새로운 REPORT가 생성되고 MASTER의 Current State가 변경된 경우 관련 Evidence Mapping을 함께 검토합니다.

11. 새로운 REPORT가 추가되더라도 MASTER_SOURCES에서 Evidence 범위를 특정 REPORT 번호까지로 고정하지 않습니다.

12. MASTER의 모든 문장을 기계적으로 REPORT에 연결하기보다 프로젝트 이해와 Current State 검증에 필요한 주요 상태를 중심으로 관리합니다.

13. MASTER와 REPORT의 내용이 상충하는 경우 현재 프로젝트 상태와 이후 REPORT Evidence를 함께 검토하여 MASTER를 최신 상태로 유지합니다.

14. MASTER_SOURCES는 Current State의 근거를 추적하기 위한 Evidence Index이며 별도의 Project History 문서로 사용하지 않습니다.

---

# Update Rules

MASTER_SOURCES.md는 다음 경우에 검토합니다.

- 새로운 REPORT가 확정된 경우
- MASTER.md의 Current State가 변경된 경우
- 기존 Current State의 Evidence가 변경되거나 추가된 경우
- MASTER의 주요 상태와 REPORT Evidence 사이의 연결을 다시 확인할 필요가 있는 경우
- Project Documentation System의 Evidence 관리 방식이 변경된 경우

Project Documentation Cycle(PDC)에서는 MASTER.md와 함께 MASTER_SOURCES.md도 검토합니다.

단,

새로운 REPORT가 생성되었다는 이유만으로 모든 기존 Evidence Mapping을 다시 작성하지 않습니다.

MASTER Current State에 실제 변화가 있거나 새로운 Evidence 연결이 필요한 경우에만 해당 Mapping을 수정합니다.

---

# Related Documents

- README.md
- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- REPORT_TEMPLATE.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md
- START_CHAT.md
- END_SESSION.md
- START_CHAT_PROMPT.md
- END_SESSION_PROMPT.md
- reports/

---

# Notes

- MASTER_SOURCES.md는 MASTER.md와 REPORT 사이의 Evidence Index입니다.
- 현재 프로젝트 상태를 직접 정의하는 문서는 MASTER.md입니다.
- 과거 개발 History와 당시 상태를 확인할 때는 해당 REPORT를 확인합니다.
- 동일한 기능 또는 정책이 여러 차례 변경된 경우 가장 최근의 유효한 Evidence를 기준으로 현재 상태를 판단합니다.
- 초기 REPORT는 현재 상태와 다를 수 있으므로 단독으로 Current State를 판단하는 기준으로 사용하지 않습니다.
- REPORT 번호는 프로젝트가 계속 진행됨에 따라 증가하므로 특정 REPORT 번호 범위를 Evidence의 고정 범위로 정의하지 않습니다.
- Project Documentation Cycle(PDC)에서는 MASTER와 MASTER_SOURCES의 Evidence 관계가 현재 상태와 일치하는지 함께 확인합니다.

---

# 변경 이력

## Version 1.0 (2026-08-25)

- MASTER와 Original Project Report 사이의 Evidence Mapping 체계 최초 구축
- MASTER Chapter 기준 Evidence Mapping 작성
- Project / Service / Technology / Documentation 영역별 주요 Current State Evidence 연결
- 현재 상태와 과거 REPORT 정책이 다른 경우 최신 Evidence를 우선하는 원칙 정의
- 자동 새로고침, Archive 저장 개수, docs.zip, Google Play, AdSense 등 주요 정책 변경의 Historical Evidence Notes 작성
- 새로운 REPORT 추가 시 특정 REPORT 번호 범위를 고정하지 않는 운영 원칙 정의
- PDC에서 MASTER와 함께 MASTER_SOURCES를 검토하는 운영 원칙 추가

---

END OF DOCUMENT

Project : Daily Insight News

Document : MASTER_SOURCES.md

Type : Evidence Index

Version : 1.0