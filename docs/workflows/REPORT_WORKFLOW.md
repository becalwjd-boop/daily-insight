# REPORT_WORKFLOW

## Original Project Report Workflow

| Item | Value |
|------|------|
| Document | REPORT_WORKFLOW.md |
| Type | Workflow |
| Purpose | Original Project Report Generation Workflow |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

---

# Purpose

Original Project Report(REPORT)를 생성하고 저장하는 표준 절차(Standard Operating Procedure)를 정의합니다.

REPORT는 프로젝트의 역사(History)를 보존하기 위한 Evidence 문서이며, 생성 이후 수정하지 않습니다.

---

# Workflow

REPORT 생성은 아래 절차를 따릅니다.

```
Development Session Finished

↓

Run END_SESSION_PROMPT

↓

Generate Original Project Report

↓

Verify Report Contents

↓

Save REPORT

↓

End REPORT Workflow
```

---

# Generation Rules

REPORT 생성 시 다음 원칙을 반드시 적용합니다.

1. 채팅 종료 당시의 상태만 기록합니다.

2. 이후 채팅에서 변경된 내용은 포함하지 않습니다.

3. 추측하지 않습니다.

4. 실제 채팅에서 확인된 사실(Fact)만 기록합니다.

5. 해결되지 않은 문제는 해결된 것처럼 작성하지 않습니다.

6. REPORT는 Immutable Document입니다.

7. REPORT 본문은 생성 이후 수정하지 않습니다.

---

# Verification Checklist

REPORT 저장 전 확인합니다.

- 채팅 종료 시점만 기록했는가
- 이후 내용이 포함되지 않았는가
- 추측이 없는가
- REPORT_TEMPLATE 형식을 사용했는가
- 파일명이 올바른가

---

# File Location

REPORT는 아래 위치에 저장합니다.

```
docs/reports/
```

---

# Related Documents

- REPORT_TEMPLATE.md
- REPORT_PROMPT.md
- END_SESSION_PROMPT.md
- END_SESSION.md

---

# Notes

REPORT는 프로젝트의 History를 관리합니다.

MASTER는 REPORT를 근거(Evidence)로 작성합니다.

REPORT는 작성 이후 수정하지 않습니다.

---

END OF DOCUMENT

Document : REPORT_WORKFLOW.md

Type : Workflow

Version : 1.0