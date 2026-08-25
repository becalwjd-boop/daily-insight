# DOCUMENT_WORKFLOW

## Document Maintenance Workflow

| Item | Value |
|------|------|
| Document | DOCUMENT_WORKFLOW.md |
| Type | Workflow |
| Purpose | Official Document Maintenance Workflow |
| Version | 1.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

프로젝트의 공식 문서를 Project Documentation System(PDS)과 Project Documentation Cycle(PDC)에 따라 일관되게 검토하고 최신 상태로 유지하기 위한 표준 절차(Standard Operating Procedure)를 정의합니다.

Original Project Report(REPORT)는 프로젝트의 개발 History와 Evidence를 보존합니다.

REPORT 확정 이후 공식 문서 전체를 검토하고,

해당 개발 세션의 변경 사항이 각 문서의 역할에 실제 영향을 주는 경우에만 REPORT를 Evidence로 수정합니다.

모든 공식 문서를 매 개발 세션마다 반드시 수정하는 것은 아닙니다.

각 공식 문서는 자신의 역할에 맞는 정보만 관리하며,

문서 간 역할 중복과 불필요한 History 반복을 최소화합니다.

---

# Workflow

공식 문서는 아래 절차에 따라 관리합니다.

```
Development Session End

↓

REPORT_TEMPLATE.md + Current Chat Full Copy Review

↓

Original Project Report 작성

↓

REPORT Review / User Confirmation

↓

REPORT Finalization

↓

Official Documents Full Review

↓

Identify Affected Documents

↓

Update Only Required Documents

↓

Verify Document Consistency

↓

Git Status Check

↓

Required Commit / Push

↓

Next Session Preparation
```

REPORT가 사용자에 의해 최종 확정되기 전에는 공식 문서 업데이트를 시작하지 않습니다.

REPORT 확정 이후 Project Documentation Cycle(PDC)을 수행합니다.

---

# Update Order

PDC에서는 아래 공식 문서를 전체 검토합니다.

검토 자체는 모든 문서에 대해 수행하지만,

실제 수정은 해당 개발 세션의 변경 사항이 문서의 역할에 영향을 주는 경우에만 진행합니다.

### Step 1

MASTER.md

프로젝트의 현재 상태(Current State)에 변경이 있는지 확인합니다.

---

### Step 2

CHANGELOG.md

이번 개발 세션에서 완료된 변경 사항(Change History)이 있는지 확인합니다.

---

### Step 3

NEXT_TASK.md

완료된 작업, 현재 우선순위, 신규 계획 또는 Deferred 작업에 변경이 있는지 확인합니다.

---

### Step 4

PROJECT_STRUCTURE.md

프로젝트 구조, 디렉터리 구조, 공식 문서 구조 또는 Documentation Architecture에 변경이 있는지 확인합니다.

---

### Step 5

PERFORMANCE.md

성능 전략, 최적화 원칙, 관리 대상, Data Freshness, Cache 또는 장기 성능 운영 기준에 변경이 있는지 확인합니다.

---

### Step 6

ARCHIVE_PLAN.md

Archive 운영 정책, Data Lifecycle, 저장 구조, 무결성·복구 정책 또는 장기 Archive 전략에 변경이 있는지 확인합니다.

---

### Step 7

DEPLOY.md

배포 정책, 배포 구조, 자동화, Web / Android 운영 절차, 공식 도메인·DNS 또는 Production 외부 서비스 정책에 변경이 있는지 확인합니다.

---

### Step 8

TROUBLESHOOTING.md

문제 해결 운영 절차, Incident 관리 방식, 문제 분류 또는 반복적으로 사용할 수 있는 진단 절차에 변경이 있는지 확인합니다.

---

### Step 9

TECH_DEBT.md

새로운 기술적 위험, 미해결 기술 부채, 해결된 기술 부채 또는 우선순위 변화가 있는지 확인합니다.

---

### Step 10

Documentation System Documents

필요한 경우 아래 문서도 전체 내용을 검토합니다.

- README.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- REPORT_TEMPLATE.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md
- START_CHAT.md
- END_SESSION.md
- START_CHAT_PROMPT.md
- END_SESSION_PROMPT.md
- REPORT_PROMPT.md
- MASTER_PROMPT.md
- CHANGELOG_PROMPT.md

Documentation System 자체의 운영 방식이나 규칙에 변경이 있는 경우에만 수정합니다.

---

# Update Principles

공식 문서를 수정할 때는 다음 원칙을 적용합니다.

1. REPORT를 핵심 Evidence로 사용합니다.

2. 실제 개발 채팅 또는 REPORT에서 확인되지 않은 내용을 추측하여 추가하지 않습니다.

3. 공식 문서 전체를 검토한 후 해당 문서의 역할에 실제 영향을 주는 경우에만 수정합니다.

4. REPORT의 상세 History를 Living Document에 불필요하게 반복하지 않습니다.

5. 각 문서는 Single Responsibility를 유지합니다.

6. History, Current State, Change History, Future Roadmap, Technical Debt 및 운영 정책을 구분하여 관리합니다.

7. 원인이 확정되지 않은 문제는 추정 원인을 확정된 사실처럼 기록하지 않습니다.

8. 변경되지 않은 내용은 불필요하게 수정하지 않습니다.

9. 공식 문서는 사용자가 해당 문서 전체 내용을 제공한 후 REPORT와 현재 프로젝트 상태를 기준으로 함께 검토하여 수정합니다.

10. 문서 수정 시에는 전체 문서를 임의로 재작성하지 않고, 필요한 변경 위치와 변경 내용을 명확하게 구분하여 수정합니다.

11. Markdown 표, 코드, 목록 등은 사용자가 그대로 복사·붙여넣기 할 수 있는 완성된 형태로 수정합니다.

12. 문서 간 내용이 상충하지 않도록 전체 일관성을 확인합니다.

---

# Verification Checklist

문서 수정 후 아래 항목을 확인합니다.

- REPORT가 사용자에 의해 최종 확정되었는가
- 공식 문서 전체를 한 번씩 검토했는가
- MASTER가 현재 프로젝트 상태와 일치하는가
- CHANGELOG에 완료된 변경 사항만 기록되어 있는가
- NEXT_TASK가 현재 개발 우선순위와 일치하는가
- PROJECT_STRUCTURE가 실제 프로젝트 및 문서 구조와 일치하는가
- PERFORMANCE의 성능 전략과 현재 운영 기준이 일치하는가
- ARCHIVE_PLAN의 Archive 운영 정책이 실제 운영 방식과 일치하는가
- DEPLOY의 배포 및 Production 운영 정책이 실제 운영 방식과 일치하는가
- TROUBLESHOOTING의 진단 절차와 문제 해결 원칙이 현재 운영 방식과 일치하는가
- TECH_DEBT에 현재 남아 있는 기술적 위험만 기록되어 있는가
- Documentation System 관련 문서 간 운영 원칙이 서로 일치하는가
- REPORT와 공식 문서 간 내용이 충돌하지 않는가
- 공식 문서 간 동일한 정보가 불필요하게 중복되지 않는가
- 문서 Version과 Last Updated가 실제 변경 상태와 일치하는가
- Git 상태를 확인했는가
- 필요한 문서 변경사항의 Commit / Push가 완료되었는가

---

# Related Documents

- README.md
- MASTER.md
- MASTER_SOURCES.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- REPORT_TEMPLATE.md
- REPORT_WORKFLOW.md
- END_SESSION.md
- START_CHAT.md
- END_SESSION_PROMPT.md
- START_CHAT_PROMPT.md

---

# Notes

- REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.
- REPORT는 사용자 최종 확정 이후 Immutable Original Project Report로 보존합니다.
- MASTER는 현재 프로젝트 상태(Current State)를 관리합니다.
- CHANGELOG는 완료된 Change History를 관리합니다.
- NEXT_TASK는 Future Roadmap과 개발 우선순위를 관리합니다.
- TECH_DEBT는 현재 남아 있는 기술적 부담과 위험을 관리합니다.
- 기타 공식 문서는 각자의 역할에 해당하는 현재 운영 정책과 구조를 관리합니다.
- PDC에서는 공식 문서 전체를 검토하되 모든 문서를 반드시 수정하지 않습니다.
- 공식 문서는 사용자가 전체 내용을 제공한 후 함께 검토하여 수정합니다.
- `docs/` 내부의 원본 공식 문서는 Git 관리 대상으로 유지합니다.
- `docs.zip`은 공식 프로젝트 문서 또는 공식 Git 관리 파일로 사용하지 않으며 필요한 경우 전달·검토용 임시 파일로만 사용합니다.
- 문서 변경 후에는 Git 상태와 필요한 Commit / Push 완료 여부를 확인합니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- 공식 문서 Maintenance Workflow 최초 정의
- 공식 문서 Update Order 정의
- REPORT 기반 문서 업데이트 원칙 정의
- Verification Checklist 정의

## Version 1.1 (2026-08-17)

- Project Documentation System(PDS) 현재 운영 방식 반영
- REPORT 최종 확정 이후 PDC를 수행하는 절차 반영
- PDC에서 공식 문서 전체를 검토하는 원칙 추가
- 실제 영향을 받은 공식 문서만 수정하는 원칙 명확화
- 각 공식 문서의 역할별 검토 기준 최신화
- Documentation System 문서까지 PDC 전체 검토 범위에 포함
- 사용자가 전체 문서를 제공한 후 함께 검토하는 원칙 반영
- 문서 수정 시 필요한 위치와 내용만 명확하게 변경하는 원칙 추가
- 복사·붙여넣기 가능한 완성 형태로 수정 내용을 제공하는 원칙 추가
- 문서 간 History / Current State / Change History / Future Roadmap 역할 분리 강화
- Git 상태 확인 및 필요한 Commit / Push 절차 추가
- `docs/` 원본 문서와 `docs.zip` 임시 파일 관리 원칙 반영

---

END OF DOCUMENT

Document : DOCUMENT_WORKFLOW.md

Type : Workflow

Version : 1.1