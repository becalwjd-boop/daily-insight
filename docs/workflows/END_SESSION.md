# END_SESSION

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | END_SESSION.md |
| Type | Workflow |
| Purpose | Project Closing Workflow |
| Version | 2.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

---

# Purpose

END_SESSION.md는 Daily Insight News 프로젝트의 개발 세션을 종료하기 위한 공식 종료 절차(Standard Operating Procedure)를 정의합니다.

모든 개발 세션은 종료 전에 프로젝트 상태와 문서를 점검하여 다음 개발자가 동일한 상태에서 작업을 이어갈 수 있도록 합니다.

---

# Session Closing Objectives

세션 종료는 다음 목표를 가집니다.

## Preserve Project State

현재 프로젝트 상태를 정확하게 보존합니다.

---

## Preserve Documentation

공식 문서를 최신 상태로 유지합니다.

---

## Ensure Continuity

다음 개발 세션에서도 동일한 흐름으로 개발을 이어갈 수 있도록 합니다.

---

## Prevent Information Loss

중요한 개발 내용이 누락되지 않도록 합니다.

---

# Session Closing Procedure

세션 종료는 아래 순서를 따릅니다.

### Step 1

이번 세션에서 변경된 내용을 확인합니다.

---

### Step 2

필요한 공식 문서를 업데이트합니다.

예시

- 현재 상태 변경 → MASTER.md
- 변경 이력 → CHANGELOG.md
- 향후 작업 → NEXT_TASK.md
- 기술 부채 → TECH_DEBT.md
- 성능 정책 → PERFORMANCE.md
- 운영 정책 → ARCHIVE_PLAN.md, DEPLOY.md 등

---

### Step 3

새로운 REPORT 작성이 필요한지 확인합니다.

프로젝트 History를 남겨야 하는 경우 REPORT를 작성합니다.

---

### Step 4

문서 간 일관성을 확인합니다.

- 문서 역할 충돌 여부
- 중복 내용 여부
- 참조 문서 업데이트 여부

---

### Step 5

docs 폴더를 최신 상태로 유지합니다.

필요한 경우 docs.zip을 다시 생성합니다.

---

### Step 6

다음 개발 세션을 위해 프로젝트를 종료합니다.

---

# Documentation Update Policy

세션 종료 전 아래 사항을 확인합니다.

| Situation | Update Document |
|-----------|-----------------|
| 현재 상태 변경 | MASTER.md |
| 기능 변경 | CHANGELOG.md |
| 향후 작업 추가 | NEXT_TASK.md |
| 기술 부채 발견 | TECH_DEBT.md |
| 운영 정책 변경 | 관련 공식 문서 |
| 프로젝트 History 보존 | REPORT.md |

---

# Project Closing Checklist

세션 종료 전 아래 항목을 확인합니다.

- 프로젝트 상태 반영 완료
- 공식 문서 업데이트 완료
- CHANGELOG 작성 완료
- NEXT_TASK 확인 완료
- REPORT 작성 여부 확인
- 문서 간 일관성 확인
- docs 폴더 최신 상태 확인
- docs.zip 업데이트 여부 확인

---

# Documentation Cycle

프로젝트는 아래 순환 구조를 따릅니다.

```
START_CHAT

↓

README

↓

Development

↓

Documentation Update

↓

END_SESSION

↓

docs.zip Update

↓

Next START_CHAT
```

---

# Responsibilities

### Developer

- 공식 문서 업데이트
- docs 폴더 최신화
- docs.zip 업데이트
- 세션 종료 확인

---

### GPT

- 필요한 문서 업데이트 안내
- 문서 누락 여부 확인
- 프로젝트 상태 점검
- 다음 세션 준비 지원

---

# Related Documents

- README.md
- START_CHAT.md
- END_SESSION_PROMPT.md
- DOCUMENT_WORKFLOW.md
- CHANGELOG.md
- REPORT_WORKFLOW.md

---

# Notes

END_SESSION은 프로젝트 종료 절차를 관리합니다.

모든 개발 세션은 공식 문서를 최신 상태로 유지한 후 종료합니다.

다음 개발 세션은 README.md를 시작점으로 다시 프로젝트를 초기화합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : END_SESSION.md

Type : Workflow

Version : 2.0