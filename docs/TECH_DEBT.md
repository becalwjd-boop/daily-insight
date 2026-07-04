# TECH_DEBT

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | TECH_DEBT.md |
| Type | Managed Document |
| Purpose | Technical Debt Management |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-04 |

---

# Purpose

TECH_DEBT.md는 Daily Insight News 프로젝트에서 아직 해결하지 못했거나, 향후 개선이 필요한 기술적 과제를 관리하는 공식 문서입니다.

기술 부채는 즉시 해결하지 않더라도 프로젝트 안정성, 성능, 유지보수성에 영향을 줄 수 있는 항목을 의미합니다.

---

# High Priority

## Archive Automation Failure

**Status**

Open

**Description**

GitHub Actions를 이용한 일일 Archive 자동 저장이 정상적으로 동작하지 않고 있습니다.

초기에는 save-today.js 실행 오류가 발생하였으며, TypeScript 전환 이후에는 Git Push 충돌(fetch first) 문제로 인해 자동 저장이 실패하고 있습니다.

이로 인해 2026-07-03 이후 일부 날짜의 Archive가 생성되지 않았으며, 운영 중인 서비스의 데이터가 누락되고 있습니다.

현재 프로젝트에서 가장 우선적으로 해결해야 하는 기술 부채입니다.

**Related Area**

- GitHub Actions
- Archive
- Automation
- Git

**Evidence**

- REPORT_07.md

---

## Mobile Loading Speed

**Status**

Open

**Description**

모바일 환경에서 초기 로딩 속도가 느린 문제가 있습니다.

REPORT_06 기준으로 약 50초 수준의 모바일 로딩 속도 문제가 확인되었으며, 원인 분석은 진행되었지만 근본 해결은 완료되지 않았습니다.

**Related Area**

- Performance
- Mobile
- API
- Thumbnail

**Evidence**

- REPORT_06.md

---

## API Call Optimization

**Status**

Open

**Description**

복수 검색어 기반 뉴스 수집 구조로 인해 API 호출량이 증가할 수 있습니다.

Naver API 429 문제 가능성이 확인되었으며, API 호출 수를 줄이기 위한 구조 개선이 필요합니다.

**Related Area**

- API
- Performance
- News Collection

**Evidence**

- REPORT_06.md

---

# Medium Priority

## Archive Long-term Structure

**Status**

Open

**Description**

현재 날짜별 Archive 저장 구조는 동작하지만, 장기 Archive 구축은 아직 완료되지 않았습니다.

향후 BigKinds 등 외부 플랫폼을 활용하여 과거 뉴스까지 포함하는 장기 Archive 구조를 검토해야 합니다.

과거 기사 저장 시에는 현재와 동일한 무제한 저장이 아니라, 중복 제거 후 카테고리별 최대 100개까지 저장하는 정책을 적용할 예정입니다.

**Related Area**

- Archive
- Data
- External Source

**Evidence**

- REPORT_06.md

---

## Category Quality Improvement

**Status**

Open

**Description**

현재 카테고리 품질은 전반적으로 안정화되었으나, 장기적으로 검색어와 관련도 개선 작업은 지속적으로 진행할 예정입니다.

검색어 조정, 필터링, 중복 제거, 카테고리별 관련도 향상 작업이 필요합니다.

**Related Area**

- News Quality
- Category
- Search Query

**Evidence**

- REPORT_02.md
- REPORT_03.md
- REPORT_06.md

---

## Cache Strategy

**Status**

Open

**Description**

썸네일 캐시 전략은 적용되었으며 안정적으로 운영되고 있습니다.

향후 뉴스 데이터, API 응답, ISR 등에 대한 서버 캐시 전략을 추가로 검토할 예정입니다.

**Related Area**

- Performance
- Cache
- API
- Thumbnail

**Evidence**

- REPORT_06.md

---

# Low Priority

## Code Refactoring

**Status**

Open

**Description**

현재 기능이 정상 동작하는 경우 대규모 리팩토링은 우선하지 않습니다.

다만 장기적으로 코드 중복이나 구조 복잡도가 증가할 경우 작은 단위로 리팩토링을 진행합니다.

**Related Area**

- Maintainability
- Code Quality

**Evidence**

- REPORT_05.md
- REPORT_06.md

---

## Android Release Optimization

**Status**

Open

**Description**

Android Release 최적화 관련 경고가 일부 존재합니다.

기능에는 직접적인 영향이 없지만, 향후 정식 출시 단계에서 Proguard/R8 및 Gradle 관련 최적화를 검토할 수 있습니다.

**Related Area**

- Android
- Release
- Build

**Evidence**

- REPORT_04.md

---

# Deferred Technical Debt

## Document Automation

**Status**

Deferred

**Reason**

현재는 수동 문서 관리 체계가 정리되는 단계입니다.

문서 체계가 안정화된 이후 자동화 여부를 검토합니다.

**Trigger**

- 공식 문서 수 증가
- REPORT 수 증가
- 문서 업데이트 누락 발생
- 반복 작업 증가

---

# Resolved Technical Debt

현재 해결이 완료된 기술 부채는 Resolved Technical Debt 섹션에서 관리합니다.

Resolved 항목은 프로젝트의 중요한 설계 의사결정을 보존하기 위해 유지하며, CHANGELOG와 REPORT는 당시 변경 이력과 개발 과정을 관리합니다.

Open 섹션에는 현재 해결이 필요한 기술 부채만 기록합니다.

---

## Thumbnail Cache Stabilization

**Status**

Resolved

**Description**

초기에는 모든 기사의 썸네일을 새로 다운로드하는 방식이었으나, 기존 썸네일 캐시를 재사용하고 새로운 기사만 추가로 수집하는 구조로 개선하였습니다.

현재 홈 화면과 Archive 화면 모두 안정적으로 운영되고 있습니다.

**Related Area**

- Thumbnail
- Cache
- Performance

**Evidence**

- REPORT_05.md
- REPORT_06.md

---

# Update Rules

TECH_DEBT는 다음 원칙을 따릅니다.

1. 현재 남아 있는 기술 부채만 기록합니다.
2. 해결된 항목은 Resolved 또는 CHANGELOG로 이동합니다.
3. 단순 아이디어는 NEXT_TASK.md에 기록합니다.
4. 기술적 위험이나 유지보수 부담이 있는 항목만 기록합니다.
5. 우선순위는 프로젝트 상황에 따라 조정합니다.

---

# Related Documents

- MASTER.md
- NEXT_TASK.md
- CHANGELOG.md
- PERFORMANCE.md
- PROJECT_STRUCTURE.md
- DOCUMENT_WORKFLOW.md

---

# Notes

- TECH_DEBT는 기술적 부담을 관리하는 문서입니다.
- NEXT_TASK는 앞으로의 작업 계획을 관리합니다.
- PERFORMANCE는 성능 관련 세부 내용을 관리합니다.
- CHANGELOG는 해결되거나 변경된 이력을 관리합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : TECH_DEBT.md

Type : Managed Document

Version : 1.0