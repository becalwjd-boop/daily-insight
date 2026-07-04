# ARCHIVE_PLAN

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | ARCHIVE_PLAN.md |
| Type | Living Document |
| Purpose | Archive Strategy, Data Lifecycle and Preservation Policy |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-04 |

---

# Purpose

ARCHIVE_PLAN.md는 Daily Insight News 프로젝트의 Archive 운영 정책과 뉴스 데이터의 장기 보존 전략(Data Preservation Strategy)을 정의하는 공식 문서입니다.

Archive는 단순한 JSON 저장 기능이 아니라,

프로젝트의 뉴스 History를 보존하는 Evidence Repository이며,

장기적인 데이터 관리(Data Lifecycle)를 담당하는 핵심 시스템입니다.

---

# Archive Objectives

Archive 시스템은 다음 목표를 가집니다.

## 1. History Preservation

뉴스 데이터를 날짜별로 안전하게 보존합니다.

---

## 2. Evidence Repository

수집된 뉴스 데이터를 장기적으로 보관하여
서비스의 근거(Evidence)를 유지합니다.

---

## 3. Stable User Access

사용자가 언제든 과거 뉴스를 안정적으로 조회할 수 있도록 유지합니다.

---

## 4. Long-term Data Management

프로젝트가 장기간 운영되더라도
Archive 구조를 변경하지 않고 유지할 수 있도록 설계합니다.

---

# Archive Principles

Archive는 아래 원칙을 따릅니다.

1. 날짜(Date) 기준으로 저장합니다.

2. Archive는 생성 이후 수정하지 않습니다.

3. 동일 날짜에는 하나의 Archive만 유지합니다.

4. 중복 데이터를 최소화합니다.

5. 장기 운영을 고려하여 구조 변경을 최소화합니다.

6. Archive는 프로젝트의 뉴스 History입니다.

7. 과거 뉴스 Archive는 중복 제거 후 카테고리별 최대 100개까지 저장합니다.

8. 자동 저장 실패로 누락된 Archive는 복구 정책에 따라 재생성할 수 있습니다.

---

# Data Lifecycle

Archive 데이터는 아래 과정을 거쳐 생성됩니다.

```
News Collection

↓

News Processing

↓

Archive Generation

↓

GitHub Actions

↓

Repository Storage

↓

Vercel Deployment

↓

User Access
```

모든 Archive는 동일한 Lifecycle을 따릅니다.

---

# Data Integrity

Archive의 무결성(Data Integrity)은 아래 원칙으로 유지합니다.

## Immutable Archive

Archive는 생성 이후 수정하지 않습니다.

필요한 경우 새로운 Archive를 생성합니다.

---

## One Archive per Date

동일 날짜에는 하나의 Archive만 존재합니다.

---

## Consistent Structure

모든 Archive는 동일한 JSON 구조를 유지합니다.

---

## Reliable History

저장된 Archive는 장기적으로도 동일한 데이터를 제공합니다.

---

# Archive Structure

Archive는 아래 구조를 사용합니다.

```
data/

archives/

YYYY-MM-DD.json
```

날짜별 JSON 구조를 기본으로 유지하며,

장기적으로도 구조 변경을 최소화합니다.

---

# Archive Management

Archive 운영은 다음 원칙을 따릅니다.

## Storage

- 날짜별 JSON 저장
- Git 기반 버전 관리
- Repository 기반 보관

---

## Consistency

- 저장 이후 수정하지 않습니다.
- 동일 날짜 Archive는 하나만 유지합니다.
- 구조 일관성을 유지합니다.

---

## Availability

- 언제든 조회 가능해야 합니다.
- 안정적인 접근성을 유지합니다.
- 장기 운영을 우선합니다.

---

# Long-term Strategy

향후 Archive 시스템에서 검토할 사항입니다.

## Archive Expansion

- 장기 Archive 확대
- BigKinds 등 외부 플랫폼을 활용한 과거 뉴스 확보
- 1990년대 이후 과거 뉴스 Archive 구축
- 과거 기사 저장 시 카테고리별 최대 100개 저장
- 동일 기사 중복 제거 후 저장
- 자동 저장 실패로 누락된 날짜 Archive 재생성 지원

---

## Search

- Archive 검색 기능
- 날짜 검색
- 키워드 검색

---

## Performance

- Archive 조회 속도 개선
- 캐시 전략 적용

---

## Automation

- Archive 자동 관리
- 데이터 검증 자동화

---

# Relationship

Archive 관련 문서 관계

```
News Collection

↓

ARCHIVE_PLAN

↓

MASTER

↓

PERFORMANCE

↓

DEPLOY
```

ARCHIVE_PLAN은

뉴스 데이터 보존 정책을 정의합니다.

MASTER는 현재 Archive 운영 상태를 관리합니다.

PERFORMANCE는 Archive 성능 전략을 관리합니다.

DEPLOY는 Archive 배포 및 운영 절차를 관리합니다.

---

# Update Rules

ARCHIVE_PLAN은 아래 경우에만 수정합니다.

- Archive 운영 정책 변경

- Data Lifecycle 변경

- 저장 구조 변경

- 장기 운영 전략 변경

- Archive 관리 정책 변경

단순히 Archive 데이터가 증가하는 경우에는 수정하지 않습니다.

---

# Related Documents

- MASTER.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- DEPLOY.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md

---

# Notes

Archive는 프로젝트의 뉴스 History를 관리합니다.

REPORT는 프로젝트 개발 History를 관리합니다.

두 문서는 모두 History를 관리하지만,

역할은 서로 다릅니다.

Archive는 뉴스 데이터를,

REPORT는 개발 과정을 보존합니다.

Archive는 장기적으로 안정성과 무결성을 가장 중요하게 유지합니다.

현재 운영 중인 Archive는 GitHub Actions를 통해 자동 생성됩니다.

자동 저장 실패 등으로 누락된 Archive는 프로젝트의 복구 정책에 따라 재생성할 수 있습니다.

과거 기사 Archive는 현재 운영 중인 일일 Archive와 동일한 구조를 유지하되, 데이터 용량을 고려하여 카테고리별 최대 100개 기사까지 저장하는 정책을 사용합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : ARCHIVE_PLAN.md

Type : Living Document

Version : 1.0