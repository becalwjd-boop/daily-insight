# END_SESSION

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | END_SESSION.md |
| Type | Workflow |
| Purpose | Project Closing Workflow |
| Version | 2.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

END_SESSION.md는 Daily Insight News 프로젝트의 개발 세션을 종료하기 위한 공식 종료 절차(Standard Operating Procedure)를 정의합니다.

개발 세션에서 확인된 History와 Evidence를 Original Project Report로 보존하고,

REPORT 확정 이후 Project Documentation Cycle(PDC)을 수행하여 공식 문서를 현재 프로젝트 상태와 일치하도록 유지하는 것을 목표로 합니다.

모든 개발 세션은 종료 전에 개발 결과, REPORT, 공식 문서 및 Git 상태를 확인하여 다음 개발 세션에서도 동일한 프로젝트 상태와 운영 기준을 이어갈 수 있도록 합니다.

---

# Session Closing Objectives

세션 종료는 다음 목표를 가집니다.

## Preserve Development History

현재 개발 세션에서 실제로 확인된 개발 과정, 문제 해결 과정, 시행착오, Decision 및 Decision Reason을 REPORT에 보존합니다.

---

## Preserve Project State

현재 프로젝트 상태를 공식 문서에 정확하게 반영합니다.

---

## Preserve Documentation

Project Documentation Cycle(PDC)을 통해 공식 문서 전체를 검토하고 실제 영향을 받은 문서만 최신 상태로 유지합니다.

---

## Ensure Continuity

다음 개발 세션에서도 현재 프로젝트 상태와 개발 흐름을 정확하게 이어갈 수 있도록 합니다.

---

## Prevent Information Loss

현재 개발 세션의 중요한 History와 Evidence가 누락되지 않도록 합니다.

---

# Session Closing Procedure

세션 종료는 아래 순서를 따릅니다.

### Step 1

현재 개발 세션의 작업 상태를 확인합니다.

확인 대상에는 다음 내용이 포함될 수 있습니다.

- 구현된 기능
- 변경된 기능 또는 구조
- 해결된 문제
- 미해결 문제
- 새롭게 확인된 기술적 위험
- 성능 관련 변경
- Archive 관련 변경
- Android / Google Play 관련 변경
- 배포 및 외부 서비스 관련 변경
- 중요한 시행착오
- Decision 및 Decision Reason
- 다음 개발 단계

---

### Step 2

REPORT 작성 자료를 준비합니다.

REPORT 작성의 핵심 기준 자료는 다음과 같습니다.

- `REPORT_TEMPLATE.md`
- 현재 개발 채팅 전체 복사본

`REPORT_TEMPLATE.md`는 REPORT의 작성 방법과 형식을 정의합니다.

현재 개발 채팅 전체 복사본은 해당 개발 세션의 History와 Evidence를 확인하기 위한 핵심 자료입니다.

필요한 경우 기존 최근 REPORT를 확인하여 기존 Original Project Report의 문체와 큰 구조를 유지합니다.

---

### Step 3

현재 개발 세션의 Original Project Report를 작성합니다.

실제 개발 채팅에서 확인된 내용만 기록합니다.

GPT의 일부 기억이나 요약된 Context만을 기준으로 REPORT를 작성하지 않습니다.

다른 개발 세션의 내용을 현재 세션에서 수행한 작업처럼 추가하지 않습니다.

중요한 구현 내용, 문제 해결 과정, 시행착오, Decision 및 Decision Reason을 가능한 한 보존합니다.

구체적인 작성 기준은 `REPORT_TEMPLATE.md`와 `REPORT_WORKFLOW.md`를 따릅니다.

---

### Step 4

작성된 REPORT를 검토합니다.

다음 사항을 확인합니다.

- 중요한 Evidence가 누락되지 않았는가
- 실제 개발 채팅과 내용이 일치하는가
- 추측이 포함되지 않았는가
- 해결된 문제와 미해결 문제가 구분되어 있는가
- 원인이 확정되지 않은 문제를 확정된 Root Cause처럼 기록하지 않았는가
- 다른 개발 세션의 내용이 현재 세션 작업으로 포함되지 않았는가
- 기존 Original Project Report의 문체와 큰 구조를 유지했는가
- Header / Footer / Fact Check가 REPORT_TEMPLATE 기준과 일치하는가

필요한 경우 사용자 확인 전까지 REPORT를 보완할 수 있습니다.

---

### Step 5

사용자가 REPORT를 최종 확인하고 확정합니다.

확정된 REPORT는

`docs/reports/REPORT_XX.md`

위치에 저장합니다.

사용자 최종 확정 이후 REPORT는 Immutable Original Project Report로 보존하며 수정하지 않습니다.

---

### Step 6

REPORT 확정 이후 Project Documentation Cycle(PDC)을 수행합니다.

공식 문서 전체를 한 번씩 검토합니다.

기본 검토 대상은 다음과 같습니다.

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

Documentation System 자체에 변경이 있는 경우 관련 Standards, Workflows, Prompts 및 README도 함께 검토합니다.

모든 공식 문서를 반드시 수정하는 것은 아닙니다.

REPORT의 Evidence가 해당 문서의 역할에 실제 영향을 주는 경우에만 수정합니다.

구체적인 공식 문서 관리 절차는 `DOCUMENT_WORKFLOW.md`를 따릅니다.

---

### Step 7

공식 문서 간 일관성을 확인합니다.

다음 사항을 확인합니다.

- MASTER가 현재 프로젝트 상태와 일치하는가
- CHANGELOG에는 완료된 변경 사항만 기록되어 있는가
- NEXT_TASK가 현재 Future Roadmap과 우선순위를 반영하는가
- TECH_DEBT에는 현재 남아 있는 기술적 부담과 위험이 관리되고 있는가
- 역할별 공식 문서가 실제 운영 정책과 일치하는가
- REPORT와 공식 문서의 내용이 충돌하지 않는가
- History와 Current State가 혼합되지 않았는가
- 동일한 정보가 여러 문서에 불필요하게 중복되지 않았는가
- Version과 Last Updated가 실제 변경 상태와 일치하는가

---

### Step 8

Git 상태를 확인합니다.

`docs/` 내부의 원본 공식 문서와 확정된 REPORT가 의도한 변경 상태인지 확인합니다.

Commit 전에는 `git status`를 확인하여 의도하지 않은 파일이 포함되지 않았는지 확인합니다.

`docs.zip`과 전달·검토·작업용 임시 파일은 공식 Git 관리 파일로 사용하지 않습니다.

---

### Step 9

필요한 Commit / Push를 완료합니다.

문서 변경사항이 Git에 정상적으로 반영되었는지 확인합니다.

필요한 경우 GitHub 상태도 확인합니다.

---

### Step 10

다음 개발 세션을 준비하고 현재 세션을 종료합니다.

다음 개발 세션에서는 `START_CHAT.md`와 `START_CHAT_PROMPT.md`의 현재 기준에 따라 프로젝트를 다시 초기화합니다.

---

# Documentation Update Policy

REPORT 확정 이후 PDC에서 각 문서의 역할에 따라 업데이트 필요 여부를 판단합니다.

| Situation | Review / Update Document |
|-----------|--------------------------|
| 현재 프로젝트 상태 변경 | MASTER.md |
| 완료된 기능·구조·운영 변경 | CHANGELOG.md |
| 향후 작업 또는 우선순위 변경 | NEXT_TASK.md |
| 프로젝트 구조 또는 Documentation Architecture 변경 | PROJECT_STRUCTURE.md |
| 성능 전략 또는 운영 기준 변경 | PERFORMANCE.md |
| Archive 운영 정책 변경 | ARCHIVE_PLAN.md |
| 배포 및 Production 운영 정책 변경 | DEPLOY.md |
| 반복 가능한 문제 해결 절차 변경 | TROUBLESHOOTING.md |
| 현재 기술적 부담 또는 위험 변경 | TECH_DEBT.md |
| Documentation System 변경 | 관련 README / Standards / Workflows / Prompts |
| 개발 History / Evidence 보존 | REPORT_XX.md |

모든 항목이 매 개발 세션마다 발생하는 것은 아닙니다.

실제 변경이 확인된 문서만 수정합니다.

---

# Project Closing Checklist

세션 종료 전 아래 항목을 확인합니다.

- 현재 개발 세션의 작업 상태를 확인했는가
- `REPORT_TEMPLATE.md`를 확인했는가
- 현재 개발 채팅 전체 복사본을 준비하고 검토했는가
- Original Project Report를 작성했는가
- REPORT의 중요한 Evidence 누락 여부를 확인했는가
- 사용자가 REPORT를 최종 확인하고 확정했는가
- 확정된 REPORT를 `docs/reports/`에 저장했는가
- 공식 문서 전체를 PDC 기준으로 검토했는가
- 실제 영향을 받은 공식 문서만 수정했는가
- 공식 문서 간 일관성을 확인했는가
- Version과 Last Updated를 확인했는가
- `docs/` 내부의 원본 문서가 최신 상태인가
- Git 상태를 확인했는가
- 필요한 Commit / Push를 완료했는가
- 다음 START_CHAT을 진행할 수 있는 상태인가

---

# Documentation Cycle

프로젝트는 아래 순환 구조를 따릅니다.

```
START_CHAT

↓

Project Initialization

↓

Development

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

Official Documents Full Review

↓

Required Document Updates

↓

Consistency Verification

↓

Git Status / Commit / Push

↓

Next START_CHAT
```

---

# Responsibilities

### Developer

- 실제 개발 결과 확인
- REPORT 검토 및 최종 확정
- 공식 문서 변경 내용 확인
- Local / Build / Production 상태 확인
- Git 상태 확인
- 필요한 Commit / Push 확인
- 다음 개발 세션 준비

---

### GPT

- `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 기준으로 REPORT 작성 지원
- 실제 Evidence와 추정 내용 구분
- 중요한 History, 시행착오, Decision 및 Decision Reason 누락 여부 확인
- REPORT 확정 이후 공식 문서 전체 검토 지원
- 실제 영향을 받은 문서의 수정 필요 여부 판단
- 문서 수정 위치와 수정 내용을 복사·붙여넣기 가능한 형태로 안내
- 공식 문서 간 일관성 및 역할 중복 확인
- Git 상태 및 다음 세션 준비 항목 확인 지원

---

# Related Documents

- README.md
- START_CHAT.md
- START_CHAT_PROMPT.md
- END_SESSION_PROMPT.md
- REPORT_TEMPLATE.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
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

---

# Notes

END_SESSION.md는 개발 세션 종료와 다음 개발 세션으로의 연결 절차를 관리합니다.

REPORT는 개발 History와 Evidence를 보존합니다.

REPORT는 사용자 최종 확정 이후 Immutable Original Project Report로 관리합니다.

REPORT 확정 이전에는 필요한 검토와 보완을 진행할 수 있습니다.

REPORT 확정 이후 Project Documentation Cycle(PDC)을 수행합니다.

PDC에서는 공식 문서 전체를 검토하되 실제 영향을 받은 문서만 수정합니다.

공식 문서의 원본은 `docs/` 내부에서 관리하고 Git 관리 대상으로 유지합니다.

`docs.zip`은 공식 프로젝트 문서 또는 공식 Git 관리 파일로 사용하지 않습니다.

필요한 경우 문서 전달 또는 검토를 위한 임시 파일로만 사용할 수 있습니다.

세션 종료 전 필요한 문서 변경사항의 Git Commit / Push 완료 여부를 확인합니다.

다음 개발 세션은 `START_CHAT.md`와 `START_CHAT_PROMPT.md`를 기준으로 프로젝트를 초기화합니다.

---

# 변경 이력

## Version 2.0 (2026-07-03)

- Project Closing Workflow 정의
- Session Closing Objectives 정의
- Documentation Update Policy 정의
- Project Closing Checklist 정의
- Documentation Cycle 정의

## Version 2.1 (2026-08-17)

- 현재 Project Documentation System(PDS) 및 Project Documentation Cycle(PDC) 운영 방식 반영
- 공식 문서 선행 업데이트 방식에서 REPORT 확정 후 PDC 수행 방식으로 종료 순서 수정
- 개발 세션별 Original Project Report 작성 및 확정 절차 반영
- `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 REPORT 작성 핵심 기준 자료로 반영
- REPORT 작성·검토 단계와 사용자 최종 확정 이후 Immutable 보존 시점 구분
- REPORT 검토 및 Evidence 누락 확인 절차 추가
- 공식 문서 전체 검토 후 실제 영향을 받은 문서만 수정하는 원칙 반영
- Documentation System 문서 검토 범위 반영
- 문서 간 일관성 및 역할 분리 검증 절차 강화
- `docs/` 원본 문서와 `docs.zip` 임시 파일 관리 원칙 반영
- Git Status / Commit / Push 확인 절차 추가
- 다음 START_CHAT으로 연결되는 세션 종료 절차 최신화

---

END OF DOCUMENT

Project : Daily Insight News

Document : END_SESSION.md

Type : Workflow

Version : 2.1