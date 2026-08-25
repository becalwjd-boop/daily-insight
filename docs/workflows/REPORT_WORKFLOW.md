# REPORT_WORKFLOW

## Original Project Report Workflow

| Item | Value |
|------|------|
| Document | REPORT_WORKFLOW.md |
| Type | Workflow |
| Purpose | Original Project Report Generation Workflow |
| Version | 1.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

Original Project Report(REPORT)를 생성, 검토, 확정 및 보존하는 표준 절차(Standard Operating Procedure)를 정의합니다.

REPORT는 프로젝트의 개발 History와 Evidence를 보존하기 위한 문서입니다.

REPORT 작성 시 `REPORT_TEMPLATE.md`와 사용자가 제공한 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용합니다.

REPORT는 작성 및 검토 과정에서 필요한 보완을 진행할 수 있으며,

사용자가 최종 확정한 이후에는 Immutable Original Project Report로 보존하고 수정하지 않습니다.

REPORT 확정 이후에는 Project Documentation Cycle(PDC)을 수행하여 공식 문서 전체를 검토합니다.

---

# Workflow

REPORT 생성 및 확정은 아래 절차를 따릅니다.

```
Development Session Finished

↓

Prepare REPORT_TEMPLATE.md

↓

Prepare Current Development Chat Full Copy

↓

Review REPORT_TEMPLATE + Current Chat Full Copy

↓

Review Recent REPORT Structure / Writing Style

↓

Collect Session History / Evidence

↓

Generate Original Project Report

↓

Self-Review Report Contents

↓

Supplement Missing Evidence if Required

↓

User Review / Confirmation

↓

Finalize REPORT

↓

Save docs/reports/REPORT_XX.md

↓

Preserve as Immutable Original Project Report

↓

Start Project Documentation Cycle (PDC)
```

REPORT 작성 과정에서는 필요한 보완을 진행할 수 있습니다.

사용자가 최종 확정한 이후에는 해당 REPORT를 수정하지 않습니다.

REPORT 확정 이후에는 `DOCUMENT_WORKFLOW.md`에 따라 Project Documentation Cycle(PDC)을 수행합니다.

---

# Generation Rules

REPORT 생성 시 다음 원칙을 반드시 적용합니다.

1. 해당 개발 세션 종료 시점까지 실제로 확인된 내용만 기록합니다.

2. 이후 개발 세션에서 발생한 내용은 포함하지 않습니다.

3. 실제 개발 채팅에서 확인되지 않은 내용을 추측하여 기록하지 않습니다.

4. `REPORT_TEMPLATE.md`와 사용자가 제공한 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용합니다.

5. `REPORT_TEMPLATE.md`는 REPORT의 작성 방법과 형식을 정의하고, 현재 개발 채팅 전체 복사본은 해당 세션의 History와 Evidence를 확인하기 위한 자료로 사용합니다.

6. GPT의 일부 기억이나 요약된 Context만을 기준으로 현재 개발 세션의 REPORT를 작성하지 않습니다.

7. 기존 최근 REPORT를 확인하여 기존 Original Project Report의 문체와 큰 구조를 유지합니다.

8. REPORT는 단순 요약보다 프로젝트 History와 Evidence 보존을 우선합니다.

9. 중요한 구현 내용, 구조 변경, 문제 해결 과정, 시행착오, Decision 및 Decision Reason을 가능한 한 보존합니다.

10. 해결된 문제와 미해결 문제를 명확하게 구분합니다.

11. 원인이 확정되지 않은 문제는 추정 원인을 확정된 Root Cause처럼 기록하지 않습니다.

12. 다른 개발 세션의 내용을 현재 개발 세션에서 수행한 작업처럼 기록하지 않습니다.

13. REPORT는 작성 및 검토 과정에서 누락된 Evidence나 필요한 표현을 보완할 수 있습니다.

14. 사용자가 최종 확정한 이후에는 Immutable Original Project Report로 보존하며 수정하지 않습니다.

15. Header, Footer, Fact Check 및 세부 작성 기준은 `REPORT_TEMPLATE.md`의 현재 표준을 따릅니다.

16. 응답 길이 제한으로 REPORT를 여러 Part로 작성하는 경우에도 내용을 임의로 축약하거나 생략하지 않습니다.

---

# Verification Checklist

REPORT 최종 확정 전 아래 항목을 확인합니다.

- `REPORT_TEMPLATE.md`의 현재 기준을 사용했는가
- 현재 개발 채팅 전체 복사본을 처음부터 끝까지 검토했는가
- 해당 개발 세션 종료 시점까지의 내용만 기록했는가
- 이후 개발 세션의 내용이 포함되지 않았는가
- 실제 채팅에서 확인되지 않은 추측이 포함되지 않았는가
- 다른 개발 세션의 작업이 현재 세션의 작업처럼 기록되지 않았는가
- 기존 Original Project Report의 문체와 큰 구조를 유지했는가
- 중요한 구현 내용과 구조 변경이 누락되지 않았는가
- 중요한 문제 해결 과정과 시행착오가 누락되지 않았는가
- 중요한 Decision과 Decision Reason이 보존되었는가
- 해결된 문제와 미해결 문제가 구분되어 있는가
- 원인이 확정되지 않은 문제를 확정된 Root Cause처럼 기록하지 않았는가
- Header / Footer / Fact Check가 REPORT_TEMPLATE 기준과 일치하는가
- REPORT 번호와 Source Chat 정보가 올바른가
- 파일명이 올바른가
- 누락된 중요한 Evidence가 없는가
- 사용자 최종 확인을 받았는가

---

# File Location

사용자가 최종 확정한 REPORT는 아래 위치에 저장합니다.

`docs/reports/REPORT_XX.md`

새로운 개발 세션은 기존 REPORT를 수정하지 않고 새로운 REPORT 파일을 생성하여 기록합니다.

REPORT 번호와 Source Chat의 관계는 REPORT Header에서 확인할 수 있도록 유지합니다.

`docs/reports/` 내부의 확정된 REPORT는 프로젝트 History와 Evidence를 보존하는 공식 Git 관리 대상입니다.

---

# Related Documents

- README.md
- REPORT_TEMPLATE.md
- REPORT_PROMPT.md
- END_SESSION_PROMPT.md
- END_SESSION.md
- DOCUMENT_WORKFLOW.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- MASTER.md
- MASTER_SOURCES.md

---

# Notes

- REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.
- REPORT는 프로젝트의 현재 상태를 단독으로 판단하기 위한 Living Document가 아닙니다.
- REPORT 작성 시 `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용합니다.
- REPORT 작성 및 검토 과정에서는 필요한 보완을 진행할 수 있습니다.
- 사용자 최종 확정 이후에는 Immutable Original Project Report로 보존하며 수정하지 않습니다.
- 확정된 과거 REPORT를 현재 프로젝트 상태에 맞추기 위해 수정하지 않습니다.
- 현재 프로젝트 상태는 MASTER.md와 각 역할별 공식 문서에서 관리합니다.
- REPORT 확정 이후에는 Project Documentation Cycle(PDC)을 수행합니다.
- PDC에서는 공식 문서 전체를 검토하되 REPORT의 Evidence가 실제 영향을 주는 문서만 수정합니다.
- REPORT의 상세 History를 Living Document에 불필요하게 반복하지 않습니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- Original Project Report 생성 Workflow 최초 정의
- REPORT Generation Rules 정의
- REPORT Verification Checklist 정의
- REPORT 저장 위치 및 관련 문서 정의

## Version 1.1 (2026-08-17)

- 현재 Project Documentation System(PDS)의 REPORT 운영 방식 반영
- `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용하는 절차 반영
- 기존 최근 REPORT의 문체와 큰 구조 확인 절차 추가
- REPORT 작성 전 Evidence 수집 절차 강화
- REPORT 자체 검토 및 필요한 보완 절차 추가
- 사용자 최종 확정 이전과 이후의 REPORT 수정 가능 상태 구분
- 사용자 최종 확정 이후 Immutable Original Project Report로 보존하는 원칙 명확화
- 중요한 시행착오, Decision 및 Decision Reason 보존 원칙 강화
- 해결된 문제와 미해결 문제 구분 기준 추가
- 추정 Root Cause를 확정 사실로 기록하지 않는 원칙 추가
- 다른 개발 세션의 내용을 현재 세션 작업으로 기록하지 않는 원칙 추가
- REPORT Verification Checklist 확대
- REPORT 확정 이후 Project Documentation Cycle(PDC)으로 연결되는 절차 추가
- `docs/reports/` 확정 REPORT의 Git 관리 원칙 반영

---

END OF DOCUMENT

Document : REPORT_WORKFLOW.md

Type : Workflow

Version : 1.1