# START_CHAT

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | START_CHAT.md |
| Type | Workflow |
| Purpose | Project Initialization Workflow |
| Version | 2.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

START_CHAT.md는 새로운 GPT 개발 채팅에서 Daily Insight News 프로젝트를 시작하기 위한 공식 초기화 절차(Standard Operating Procedure)를 정의합니다.

새로운 개발 세션에서는 프로젝트의 현재 상태, 문서 구조, 운영 원칙 및 현재 작업에 필요한 Evidence를 확인한 후 개발을 시작합니다.

프로젝트를 새로 시작하는 개발자와 GPT는 일부 문서나 이전 대화 기억만을 기준으로 프로젝트 상태를 추측하지 않고,

현재 `docs/` 내부의 공식 문서와 필요한 REPORT Evidence를 기준으로 프로젝트를 초기화합니다.

---

# Recommended Start Method

새로운 GPT 개발 채팅에서는 현재 프로젝트 문서를 준비한 후 `START_CHAT_PROMPT.md`를 사용하여 프로젝트를 초기화합니다.

기본 흐름은 다음과 같습니다.

```
Project Documentation 준비

↓

New Development Chat

↓

START_CHAT_PROMPT 사용

↓

README.md 확인

↓

MASTER.md 확인

↓

주요 공식 문서 확인

↓

Current Task 확인

↓

필요한 REPORT Evidence 확인

↓

Project Initialization

↓

Development Start
```

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리합니다.

`docs/` 내부의 원본 공식 문서는 Git 관리 대상으로 유지합니다.

`docs.zip`은 프로젝트 공식 문서 또는 공식 Git 관리 파일로 사용하지 않습니다.

필요한 경우 새로운 GPT에게 프로젝트 문서를 전달하거나 검토하기 위한 임시 파일로 생성할 수 있습니다.

`docs.zip`을 사용하는 경우에도 ZIP 파일 자체를 프로젝트의 Source of Truth로 간주하지 않습니다.

---

# GPT Initialization Procedure

새로운 GPT는 아래 절차를 따릅니다.

### Step 1

`README.md`를 Entry Point로 확인하여 프로젝트 문서 구조와 현재 Documentation System을 이해합니다.

---

### Step 2

`MASTER.md`를 확인하여 현재 프로젝트의 Current State를 파악합니다.

과거 REPORT의 상태를 현재 프로젝트 상태로 간주하지 않습니다.

---

### Step 3

`MASTER_SOURCES.md`를 확인하여 MASTER의 주요 Current State와 REPORT Evidence의 연결 관계를 확인합니다.

필요한 경우 관련 REPORT를 추가로 확인합니다.

---

### Step 4

프로젝트 구조와 기본 운영 규칙을 확인합니다.

기본 확인 대상은 다음과 같습니다.

- `PROJECT_STRUCTURE.md`
- `DOCUMENT_RULES.md`
- `PROJECT_RULES.md`

---

### Step 5

현재 프로젝트의 변경 이력, 향후 작업 및 기술적 위험을 확인합니다.

기본 확인 대상은 다음과 같습니다.

- `CHANGELOG.md`
- `NEXT_TASK.md`
- `TECH_DEBT.md`

---

### Step 6

현재 운영 정책과 관련된 공식 문서를 확인합니다.

기본 확인 대상은 다음과 같습니다.

- `PERFORMANCE.md`
- `ARCHIVE_PLAN.md`
- `DEPLOY.md`
- `TROUBLESHOOTING.md`

---

### Step 7

현재 개발 세션의 작업과 관련된 Workflow와 Prompt를 확인합니다.

필요한 경우 다음 문서를 확인합니다.

- `DOCUMENT_WORKFLOW.md`
- `REPORT_WORKFLOW.md`
- `START_CHAT.md`
- `END_SESSION.md`
- `START_CHAT_PROMPT.md`
- `END_SESSION_PROMPT.md`
- 기타 관련 Prompt

---

### Step 8

현재 작업에 과거 개발 과정이나 Decision의 근거가 필요한 경우 관련 REPORT Evidence를 확인합니다.

REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.

REPORT를 현재 프로젝트 상태를 단독으로 판단하기 위한 문서로 사용하지 않습니다.

현재 상태는 `MASTER.md`와 각 역할별 공식 문서를 우선합니다.

---

### Step 9

현재 작업의 범위와 관련 파일을 확인합니다.

핵심 파일 또는 기존 서비스 전체에 영향을 줄 수 있는 코드를 수정해야 하는 경우에는 수정 전에 현재 전체 코드를 확인합니다.

필요한 Evidence가 부족한 경우 추측으로 프로젝트 상태나 코드를 판단하지 않습니다.

---

### Step 10

프로젝트 초기화가 완료되면 개발을 시작합니다.

개발은 `PROJECT_RULES.md`의 현재 개발 원칙을 따릅니다.

---

# Documentation Initialization Principle

프로젝트 문서는 `README.md`를 Entry Point로 사용합니다.

새로운 GPT는 README의 현재 GPT Initialization 기준에 따라 프로젝트의 주요 공식 문서를 확인합니다.

초기화 과정에서는 다음 정보를 서로 구분합니다.

- REPORT → Development History / Evidence
- MASTER → Current State
- CHANGELOG → Change History
- NEXT_TASK → Future Roadmap
- TECH_DEBT → Current Technical Debt
- 기타 공식 문서 → 각 역할별 현재 운영 정책 및 구조

일부 문서만 확인한 상태에서 프로젝트의 현재 상태나 과거 개발 History를 추측하지 않습니다.

GPT의 이전 대화 기억이나 요약된 Context는 프로젝트 공식 문서와 REPORT Evidence를 대체하지 않습니다.

현재 작업에 필요한 과거 개발 과정이나 Decision Reason이 공식 문서만으로 확인되지 않는 경우 관련 REPORT를 확인합니다.

---

# Current Task Initialization

전체 프로젝트 초기화 이후에는 현재 개발 세션에서 수행할 작업의 범위를 확인합니다.

현재 작업과 직접 관련된 문서, 코드 및 Evidence를 우선적으로 검토합니다.

예시

- 현재 프로젝트 상태 → `MASTER.md`
- 완료된 변경 사항 → `CHANGELOG.md`
- 앞으로 진행할 작업 → `NEXT_TASK.md`
- 현재 기술적 위험 → `TECH_DEBT.md`
- 프로젝트 구조 → `PROJECT_STRUCTURE.md`
- 성능 및 Data Freshness → `PERFORMANCE.md`
- Archive 운영 → `ARCHIVE_PLAN.md`
- 배포 및 Production → `DEPLOY.md`
- 반복 가능한 문제 해결 절차 → `TROUBLESHOOTING.md`
- 과거 개발 과정 / Decision Reason → 관련 `REPORT_XX.md`

현재 작업과 관련된 핵심 코드가 있는 경우 해당 파일의 현재 전체 내용을 확인한 후 수정합니다.

---

# Development Cycle

프로젝트는 아래 순환 구조를 따릅니다.

```
START_CHAT

↓

Project Initialization

↓

Current State / Related Documents Review

↓

Current Task / Evidence Review

↓

Development

↓

Local / Build / Production Verification

↓

END_SESSION

↓

Original Project Report

↓

REPORT Review / User Confirmation

↓

REPORT Finalization

↓

Project Documentation Cycle (PDC)

↓

Official Documents Review / Required Updates

↓

Git Status / Commit / Push

↓

Next START_CHAT
```

이 순환 구조를 통해 프로젝트의 개발 History와 Current State를 분리하여 관리하고,

각 개발 세션의 Evidence와 공식 문서를 지속적으로 연결합니다.

---

# Responsibilities

### Developer

- 현재 프로젝트 문서 준비
- 필요한 프로젝트 파일 및 코드 제공
- 현재 개발 작업과 요구사항 확인
- 필요한 경우 REPORT Evidence 제공
- 개발 결과 및 실제 Production 상태 확인
- 중요한 Decision 최종 확인

---

### GPT

- `README.md`를 Entry Point로 프로젝트 문서 체계 확인
- `MASTER.md`를 기준으로 Current State 확인
- `MASTER_SOURCES.md`를 통해 필요한 REPORT Evidence 연결 확인
- 현재 작업에 필요한 공식 문서와 Evidence 확인
- 일부 문서나 이전 Context만으로 프로젝트 상태를 추측하지 않음
- 핵심 코드 수정 전 필요한 전체 코드 확인
- `PROJECT_RULES.md`의 개발 원칙에 따라 단계적으로 개발 진행
- 실제 확인된 Evidence와 추정 내용을 구분
- 문서 업데이트가 필요한 경우 현재 PDC 기준에 따라 사용자에게 안내

---

# Related Documents

- README.md
- MASTER.md
- MASTER_SOURCES.md
- PROJECT_STRUCTURE.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- CHANGELOG.md
- NEXT_TASK.md
- TECH_DEBT.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- START_CHAT_PROMPT.md
- END_SESSION.md
- END_SESSION_PROMPT.md
- DOCUMENT_WORKFLOW.md
- REPORT_WORKFLOW.md
- REPORT_TEMPLATE.md

---

# Notes

START_CHAT.md는 새로운 개발 세션의 프로젝트 초기화 절차를 관리합니다.

`README.md`는 Project Documentation System의 Entry Point입니다.

현재 프로젝트 상태는 `MASTER.md`와 각 역할별 공식 문서를 기준으로 확인합니다.

REPORT는 프로젝트의 개발 History와 Evidence를 확인하기 위해 사용합니다.

과거 REPORT의 상태를 현재 프로젝트 상태로 간주하지 않습니다.

필요한 과거 개발 과정이나 Decision Reason은 관련 REPORT Evidence를 통해 확인합니다.

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리하고 Git 관리 대상으로 유지합니다.

`docs.zip`은 공식 프로젝트 문서 또는 공식 Git 관리 파일이 아닙니다.

필요한 경우 새로운 GPT에게 문서를 전달하거나 검토하기 위한 임시 파일로만 사용할 수 있습니다.

프로젝트 초기화 이후에는 현재 작업과 직접 관련된 문서, Evidence 및 코드를 우선적으로 검토합니다.

다음 세션 종료 절차는 `END_SESSION.md`의 현재 기준을 따릅니다.

---

# 변경 이력

## Version 2.0 (2026-07-03)

- Project Initialization Workflow 정의
- Recommended Start Method 정의
- GPT Initialization Procedure 정의
- Documentation Initialization Principle 정의
- Development Cycle 정의

## Version 2.1 (2026-08-17)

- 현재 Project Documentation System(PDS) 및 Project Documentation Cycle(PDC) 운영 방식 반영
- `docs.zip` 중심 초기화 방식에서 `docs/` 원본 문서 중심 초기화 방식으로 수정
- `docs.zip`을 전달·검토용 임시 파일로 한정하는 원칙 반영
- README.md를 Entry Point로 사용하는 초기화 원칙 유지 및 구체화
- MASTER.md 기반 Current State 확인 절차 강화
- MASTER_SOURCES.md를 통한 REPORT Evidence 연결 확인 절차 추가
- History / Current State / Change History / Future Roadmap / Technical Debt 역할 구분 반영
- GPT의 이전 기억이나 일부 Context만으로 프로젝트 상태를 판단하지 않는 원칙 추가
- 현재 작업에 필요한 REPORT Evidence 확인 절차 추가
- 핵심 코드 수정 전 현재 전체 코드 확인 원칙 반영
- Current Task Initialization 절차 추가
- 현재 END_SESSION 및 PDC 운영 방식에 맞게 Development Cycle 최신화
- Developer / GPT Responsibilities 최신화
- Related Documents 및 Notes 현재 문서 체계에 맞게 정리

---

END OF DOCUMENT

Project : Daily Insight News

Document : START_CHAT.md

Type : Workflow

Version : 2.1