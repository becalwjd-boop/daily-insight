# TECH_DEBT

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | TECH_DEBT.md |
| Type | Managed Document |
| Purpose | Technical Debt Management |
| Version | 1.3 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

TECH_DEBT.md는 Daily Insight News 프로젝트에서 아직 해결하지 못했거나, 향후 개선이 필요한 기술적 과제를 관리하는 공식 문서입니다.

기술 부채는 즉시 해결하지 않더라도 프로젝트 안정성, 성능, 유지보수성에 영향을 줄 수 있는 항목을 의미합니다.

---

# High Priority

## News Data Freshness / Refresh Failure

**Status**

Open

**Description**

현재 Production Web 및 Android 앱에서 사용자 접속 시점의 최신 뉴스가 즉시 표시되지 않는 현상이 확인되었습니다.

실제 현재 시간보다 오래된 기사가 표시되며, 일반 새로고침 또는 Pull-to-Refresh를 여러 차례 반복해야 최신 뉴스가 반영되는 경우가 있습니다.

현재 원인은 확정되지 않았습니다.

Naver OpenAPI → News Processing → Next.js Cache → Vercel → Client Rendering으로 이어지는 데이터 흐름과 캐시·갱신 구조를 단계적으로 점검해야 합니다.

초기 로딩 속도를 유지하면서도 최신 뉴스가 적시에 사용자에게 전달되도록 데이터 freshness와 cache strategy를 함께 개선해야 합니다.

**Related Area**

- News
- Data Freshness
- Cache
- API
- Vercel
- Client Rendering
- Android
- Performance

**Evidence**

- REPORT_11.md

## Category Quality / Misclassification

**Status**

Open

**Description**

현재 8개 뉴스 카테고리 전체에 대해 뉴스 품질과 관련도를 다시 점검할 필요가 있습니다.

특히 부동산 카테고리에서 부동산과 직접적인 관련이 없는 기사가 포함되는 오분류 현상이 확인되었습니다.

예를 들어 `전세버스`의 `전세`와 같이 단순 문자열이 부동산 키워드와 일치하거나, 기사 문맥상 부동산과 직접 관련되지 않은 단어가 포함되어 잘못 분류되는 문제가 있습니다.

검색 Query, Positive Keyword, Negative Keyword, Category Filter 및 Relevance 기준을 함께 검토해야 합니다.

품질 개선 로직은 Home과 Archive에 동일하게 적용하여 양쪽의 뉴스 품질 기준이 다시 분리되지 않도록 유지해야 합니다.

**Related Area**

- News Quality
- Category
- Search Query
- Filtering
- Relevance
- Home
- Archive

**Evidence**

- REPORT_02.md
- REPORT_03.md
- REPORT_06.md
- REPORT_10.md
- REPORT_11.md

---

# Medium Priority

## Cache Strategy

**Status**

Open

**Description**

현재 썸네일 캐시는 안정적인 이미지 로딩과 성능 유지에 활용되고 있습니다.

반면 뉴스 데이터와 API 응답의 캐시·갱신 구조는 현재 확인된 Data Freshness 문제와 함께 재검토가 필요합니다.

캐시 전략은 초기 로딩 속도만을 기준으로 최적화하지 않고, 최신 뉴스 데이터가 사용자에게 적시에 전달되는지를 함께 고려해야 합니다.

News Data Freshness 문제의 원인이 캐시라고 현재 단계에서 단정하지 않으며, 원인 분석 결과를 기반으로 필요한 캐시 전략을 결정합니다.

**Related Area**

- Performance
- Cache
- API
- Data Freshness

**Evidence**

- REPORT_06.md
- REPORT_11.md

## Archive Automation Reliability

**Status**

Open

**Description**

현재 GitHub Actions 기반 Archive 자동 저장 구조는 운영되고 있습니다.

다만 장기 운영 과정에서 자동 저장 실패, 누락 또는 비정상 Archive 생성 가능성을 지속적으로 관리할 필요가 있습니다.

Archive 무결성 검증과 누락 감지 및 복구 절차의 추가 고도화를 장기적으로 검토합니다.

**Related Area**

- GitHub Actions
- Archive
- Automation
- Data Integrity

**Evidence**

- REPORT_07.md
- REPORT_11.md

## API Call Optimization

**Status**

Open

**Description**

복수 검색어 기반 뉴스 수집 구조로 인해 API 호출량이 증가할 수 있습니다.

뉴스 품질 개선 과정에서 검색 Query가 증가할 경우 API 호출량과 Rate Limit 위험도 함께 증가할 수 있으므로, 품질을 유지하면서 불필요한 API 호출을 줄이는 구조를 지속적으로 검토해야 합니다.

**Related Area**

- API
- Performance
- News Collection
- Rate Limit

**Evidence**

- REPORT_06.md
- REPORT_11.md

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

Android App Bundle 생성 과정에서 ProGuard/R8 관련 Warning이 일부 확인된 이력이 있습니다.

현재 Google Play Store Production 출시는 완료되었으며 Android 앱은 정상 운영 단계에 있습니다.

현재 서비스 운영에 직접적인 장애를 발생시키고 있지는 않지만, 향후 Android 앱 고도화 및 Release Build 안정성 향상을 위해 ProGuard/R8 및 Gradle Build 설정을 필요에 따라 추가 검토합니다.

**Related Area**

- Android
- Release
- Build
- Maintainability

**Evidence**

- REPORT_04.md
- REPORT_09.md
- REPORT_11.md

---

# Deferred Technical Debt

## Document Automation

**Status**

Deferred

**Reason**

현재 Project Documentation System(PDS)은 수동 검토 기반으로 안정적으로 운영되고 있습니다.

자동화로 인해 문서 품질이나 Evidence 검토 과정이 약화되지 않도록 현재는 수동 PDC 운영을 유지하며, 반복 작업 부담이 증가할 경우 자동화를 검토합니다.

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

현재 썸네일 캐시 구조는 Home과 Archive에서 안정적으로 운영되고 있습니다.

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

TECH_DEBT는 PDC 과정에서 전체 내용을 검토하며, REPORT를 근거(Evidence)로 신규 기술 부채, 해결 상태, 우선순위 및 현재 기술적 위험을 최신 상태로 유지합니다.

1. 현재 남아 있는 기술 부채만 기록합니다.
2. 해결된 항목은 Resolved 또는 CHANGELOG로 이동합니다.
3. 단순 아이디어는 NEXT_TASK.md에 기록합니다.
4. 기술적 위험이나 유지보수 부담이 있는 항목만 기록합니다.
5. 우선순위는 프로젝트 상황에 따라 조정합니다.
6. REPORT를 근거(Evidence)로 현재 해결 상태를 확인한 후 갱신합니다.
7. 미구현 기능이나 단순 개발 아이디어는 기술 부채로 기록하지 않고 NEXT_TASK에서 관리합니다.
8. 원인이 확정되지 않은 문제는 추정 원인을 기술 부채의 확정된 원인으로 기록하지 않습니다.
9. 해결된 Incident 자체를 기술 부채로 누적하지 않고, 현재 남아 있는 기술적 위험과 부담만 관리합니다.

---

# Related Documents

- MASTER.md
- NEXT_TASK.md
- CHANGELOG.md
- PERFORMANCE.md
- PROJECT_STRUCTURE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- DOCUMENT_WORKFLOW.md
- REPORT_TEMPLATE.md

---

# Notes

- TECH_DEBT는 기술적 부담을 관리하는 문서입니다.
- 운영 정책 변경은 TECH_DEBT가 아니라 REPORT를 근거로 관련 공식 문서에서 관리합니다.
- NEXT_TASK는 앞으로의 작업 계획을 관리합니다.
- PERFORMANCE는 성능 관련 세부 내용을 관리합니다.
- CHANGELOG는 해결되거나 변경된 이력을 관리합니다.
- TECH_DEBT는 현재 존재하는 기술적 부담, 위험 또는 유지보수 문제를 관리하며 단순 미구현 기능은 관리하지 않습니다.
- 원인이 확정되지 않은 문제는 증상과 확인된 사실을 기록하고 추정 원인을 확정 사실처럼 기록하지 않습니다.
- 실제 운영 서비스에서 사용자 경험에 직접 영향을 주는 기술 부채는 신규 기능보다 높은 우선순위로 관리합니다.
- 현재 가장 높은 우선순위의 기술 부채는 뉴스 데이터 최신성 및 갱신 문제와 카테고리 뉴스 품질 문제입니다.
- Home과 Archive의 뉴스 품질 로직이 다시 분리되지 않도록 공통 처리 구조를 유지합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : TECH_DEBT.md

Type : Managed Document

Version : 1.3