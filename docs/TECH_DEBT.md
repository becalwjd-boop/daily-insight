# TECH_DEBT

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | TECH_DEBT.md |
| Type | Managed Document |
| Purpose | Technical Debt Management |
| Version | 1.2 |
| Status | Active |
| Last Updated | 2026-07-16 |

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

현재 GitHub Actions 기반 자동 저장 구조는 대부분 안정화되었으나,

일부 날짜의 Archive 누락 및 자동 저장 실패 가능성은

장기 운영 과정에서 지속적으로 관리가 필요한 기술 부채입니다.

**Related Area**

- GitHub Actions
- Archive
- Automation
- Git

**Evidence**

- REPORT_07.md

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

향후 BigKinds 등 외부 뉴스 데이터를 활용하여 1990년대부터 현재까지의 과거 뉴스를 현재 서비스의 8개 카테고리 기준으로 재분류하는 장기 Archive 구조를 구축해야 합니다.

또한 대규모 과거 데이터가 추가되더라도 현재의 빠른 초기 로딩 성능을 유지하는 구조가 필요합니다.

과거 기사 저장 시에는 현재와 동일한 무제한 저장이 아니라, 중복 제거 후 카테고리별 최대 100개까지 저장하는 정책을 적용할 예정입니다.

**Related Area**

- Archive
- Data
- External Source

**Evidence**

- REPORT_06.md
- REPORT_10.md

---

## Category Quality Improvement

**Status**

Open

**Description**

현재 카테고리 품질은 전반적으로 안정화되었으나, 장기적으로 검색어와 관련도 개선 작업은 지속적으로 진행할 예정입니다.

검색어 조정, 필터링, 중복 제거, 카테고리별 관련도 향상 작업이 필요합니다.

속보 및 단독 기사의 노출 품질 개선과 관련도(Relevance) 알고리즘의 지속적인 개선도 포함합니다.

**Related Area**

- News Quality
- Category
- Search Query

**Evidence**

- REPORT_02.md
- REPORT_03.md
- REPORT_06.md
- REPORT_10.md

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

## AI News Summary

**Status**

Open

**Description**

AI 기반 3줄 뉴스 요약, AI 핵심 뉴스 및 AI 브리핑 기능은 아직 구현되지 않았습니다.

AI 기능을 도입하더라도 현재의 빠른 초기 로딩 성능과 사용자 경험을 유지할 수 있는 구조 설계가 필요합니다.

**Related Area**

- AI
- Performance
- News

**Evidence**

- REPORT_10.md

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

Android App Bundle 생성 시 ProGuard/R8 관련 Warning이 일부 발생하고 있습니다.

현재 Closed Testing은 진행되었으며, 정식 프로덕션 출시 전까지 Release 최적화, ProGuard/R8, Gradle Build 설정 등을 추가 검토할 예정입니다.

**Related Area**

- Android
- Release
- Build

**Evidence**

- REPORT_04.md
- REPORT_09.md

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

## Mobile Loading Speed

**Status**

Resolved

**Description**

초기에는 모바일 환경에서 최초 로딩 시간이 매우 길어 사용자 경험에 영향을 주었습니다.

텍스트 우선 렌더링, 썸네일 순차 로딩, 저장 구조 개선 등을 적용하여 모바일 초기 로딩 성능을 크게 개선하였습니다.

현재는 프로젝트의 핵심 성능 원칙으로 초기 로딩 성능을 지속적으로 유지합니다.

**Related Area**

- Performance
- Mobile
- Rendering
- Thumbnail

**Evidence**

- REPORT_06.md
- REPORT_10.md

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
6. REPORT를 근거(Evidence)로 현재 해결 상태를 확인한 후 갱신합니다.

---

# Related Documents

- MASTER.md
- NEXT_TASK.md
- CHANGELOG.md
- PERFORMANCE.md
- PROJECT_STRUCTURE.md
- DOCUMENT_WORKFLOW.md
- REPORT_TEMPLATE.md

---

# Notes

- TECH_DEBT는 기술적 부담을 관리하는 문서입니다.
- 운영 정책 변경은 TECH_DEBT가 아니라 REPORT를 근거로 관련 공식 문서에서 관리합니다.
- NEXT_TASK는 앞으로의 작업 계획을 관리합니다.
- PERFORMANCE는 성능 관련 세부 내용을 관리합니다.
- CHANGELOG는 해결되거나 변경된 이력을 관리합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : TECH_DEBT.md

Type : Managed Document

Version : 1.2