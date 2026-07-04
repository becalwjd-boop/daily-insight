# DOCUMENT_WORKFLOW

## Document Maintenance Workflow

| Item | Value |
|------|------|
| Document | DOCUMENT_WORKFLOW.md |
| Type | Workflow |
| Purpose | Official Document Maintenance Workflow |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

---

# Purpose

프로젝트의 공식 문서를 항상 최신(Current State) 상태로 유지하기 위한 표준 절차(Standard Operating Procedure)를 정의합니다.

Original Project Report(REPORT)는 프로젝트의 History를 보존하며,

MASTER 및 공식 문서는 REPORT를 근거(Evidence)로 최신 상태(Current State)를 유지합니다.

---

# Workflow

공식 문서는 아래 절차에 따라 관리합니다.

```
Original Project Report

↓

Analyze Changes

↓

Identify Affected Documents

↓

Update Official Documents

↓

Verify Consistency

↓

Save Documents
```

---

# Update Order

공식 문서는 아래 순서로 검토 및 수정합니다.

### Step 1

MASTER.md

프로젝트의 현재 상태(Current State)를 반영합니다.

---

### Step 2

CHANGELOG.md

이번 개발 세션에서 변경된 내용을 기록합니다.

---

### Step 3

NEXT_TASK.md

완료된 작업과 앞으로 진행할 작업을 갱신합니다.

---

### Step 4

TECH_DEBT.md

새로운 기술 부채 또는 해결된 기술 부채를 반영합니다.

---

### Step 5

PROJECT_STRUCTURE.md

프로젝트 구조가 변경된 경우 업데이트합니다.

---

### Step 6

기타 공식 문서

필요한 경우 아래 문서를 업데이트합니다.

- DEPLOY.md
- PERFORMANCE.md
- TROUBLESHOOTING.md
- ARCHIVE_PLAN.md

---

# Update Principles

공식 문서를 수정할 때는 다음 원칙을 적용합니다.

1. REPORT를 근거(Evidence)로 사용합니다.

2. 추측하지 않습니다.

3. 현재 상태(Current State)만 작성합니다.

4. 문서 간 역할을 중복하지 않습니다.

5. 변경되지 않은 내용은 수정하지 않습니다.

6. 프로젝트 전체의 일관성을 유지합니다.

---

# Verification Checklist

문서 수정 후 아래 항목을 확인합니다.

- MASTER가 최신 상태인가
- CHANGELOG가 업데이트되었는가
- NEXT_TASK가 최신 상태인가
- TECH_DEBT가 최신 상태인가
- PROJECT_STRUCTURE가 최신 상태인가
- 문서 간 내용이 서로 충돌하지 않는가

---

# Related Documents

- MASTER.md
- MASTER_SOURCES.md
- CHANGELOG.md
- NEXT_TASK.md
- TECH_DEBT.md
- PROJECT_STRUCTURE.md
- REPORT_WORKFLOW.md

---

# Notes

- REPORT는 수정하지 않습니다.
- MASTER는 항상 현재 상태(Current State)를 유지합니다.
- CHANGELOG는 변경 사항만 관리합니다.
- NEXT_TASK는 앞으로의 계획만 관리합니다.
- 공식 문서는 REPORT를 근거(Evidence)로 관리합니다.

---

END OF DOCUMENT

Document : DOCUMENT_WORKFLOW.md

Type : Workflow

Version : 1.0