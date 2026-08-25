# END_SESSION_PROMPT

## Daily Insight News Project

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | END_SESSION_PROMPT.md |
| Type | Official Prompt |
| Purpose | Project Closing and Documentation Management |
| Version | 2.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

본 Prompt는 Daily Insight News 프로젝트의 개발 세션을 종료하기 위한 공식 종료 절차(Project Closing Procedure)를 수행합니다.

단순히 이번 채팅을 요약하는 것이 아니라,

Project Documentation System(PDS)에 따라 프로젝트 문서를 최신 상태로 유지하고,

다음 개발 세션에서도 동일한 상태로 이어갈 수 있도록 하는 것을 목표로 합니다.

REPORT는 단순 요약이 아니라 해당 개발 세션의 History(Evidence)를 보존하는 Original Project Report로 작성합니다.

---

# When to Use

다음 경우 반드시 사용합니다.

- 개발 채팅 종료 직전
- 새로운 채팅으로 이어가기 직전
- REPORT를 생성하기 직전
- 공식 문서를 업데이트하기 직전

---

# Required Input

END_SESSION_PROMPT를 실행하기 전에 사용자는 다음 자료를 제공합니다.

1. REPORT_TEMPLATE.md
2. 현재 개발 채팅의 전체 내용을 처음부터 끝까지 복사한 파일

REPORT_TEMPLATE.md는 REPORT의 공식 작성 형식과 작성 원칙을 판단하기 위한 기준으로 사용합니다.

현재 개발 채팅 전체 복사본은 이번 세션에서 실제로 진행된 개발 내용과 History(Evidence)를 확인하기 위한 최우선 자료로 사용합니다.

현재 대화의 일부 내용이나 GPT의 기억만을 기준으로 REPORT를 작성하지 않습니다.

두 자료가 모두 제공되었다면 REPORT 작성 방식이나 형식을 사용자에게 다시 질문하지 않고 아래 절차를 즉시 수행합니다.

자료가 누락된 경우에만 필요한 자료의 제공을 요청합니다.

---

# Official Prompt

이번 개발 채팅을 Project Documentation System(PDS) 기준으로 종료해주세요.

사용자가 제공한

- REPORT_TEMPLATE.md
- 현재 개발 채팅 전체 복사본

을 기준으로 아래 절차를 순서대로 수행합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 1
Session Review
━━━━━━━━━━━━━━━━━━━━━━

현재 개발 채팅 전체 복사본을 처음부터 끝까지 검토합니다.

다음 항목을 확인합니다.

1. 이번 채팅에서 완료된 기능

2. 해결된 문제

3. 아직 해결되지 않은 문제

4. 새롭게 발생한 기술 부채

5. 주요 의사결정과 그 이유

6. 변경된 프로젝트 운영 원칙

7. 성능, 배포, Archive, Android, 외부 서비스 등 프로젝트 상태에 영향을 준 변경

8. 변경된 우선순위

9. 다음 채팅에서 가장 먼저 해야 하는 작업

중요한 개발 과정과 시행착오 역시 향후 프로젝트 History로서 의미가 있다면 Evidence로 보존합니다.

실제 채팅에서 확인되지 않은 내용은 추측하여 추가하지 않습니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 2
Documentation Review
━━━━━━━━━━━━━━━━━━━━━━

아래 공식 문서 중 업데이트가 필요한 문서를 판단합니다.

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

업데이트가 필요한 이유도 함께 확인합니다.

단, 이 단계에서는 공식 문서를 임의로 수정하지 않습니다.

공식 문서는 REPORT 확정 이후 사용자가 해당 문서 전체 내용을 제공한 후 함께 검토하여 수정합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 3
REPORT Generation
━━━━━━━━━━━━━━━━━━━━━━

개발 세션 종료 시 해당 세션의 REPORT를 생성합니다.

REPORT_TEMPLATE.md의 형식과 작성 원칙을 기준으로

REPORT_xx.md 전체 완성본을 작성합니다.

부분 수정이나 간단한 세션 요약이 아니라

최종 저장 가능한 Original Project Report를 생성합니다.

REPORT에는 기본적으로 아래 내용을 포함합니다.

- 프로젝트 개요
- 새롭게 구현된 기능
- 해결된 문제
- 미해결 과제
- 새롭게 발생하거나 확인된 기술 부채
- 주요 의사결정
- 다음 개발 단계
- Evidence
- 프로젝트 운영 원칙 변경

REPORT 작성 시 다음 원칙을 반드시 지킵니다.

- 실제 채팅에서 확인된 내용만 기록합니다.
- 추측하지 않습니다.
- 다른 개발 세션의 내용을 현재 세션의 작업처럼 기록하지 않습니다.
- 단순 요약문으로 과도하게 축약하지 않습니다.
- 중요한 개발 과정과 시행착오를 누락하지 않습니다.
- 해결된 문제와 미해결 문제를 명확히 구분합니다.
- 중요한 기술적 의사결정과 그 이유를 기록합니다.
- 프로젝트 History로서 가치가 있는 Evidence를 충분히 보존합니다.
- 기존 Original Project Report의 기본 양식과 문서 성격을 유지합니다.
- 기존 REPORT에서 사용하던 큰 구조를 임의로 다른 형식으로 변경하지 않습니다.
- 필요한 경우 해당 개발 세션의 특성에 맞는 항목이나 내용을 추가할 수 있습니다.
- 추가 항목은 기존 REPORT의 구조와 성격을 훼손하지 않는 범위에서 사용합니다.

REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본이 제공되었다면

REPORT 작성 방식이나 양식에 대해 사용자와 다시 논의하지 않고 즉시 REPORT 작성을 시작합니다.

REPORT가 길어지는 경우 여러 Part로 나누어 작성할 수 있습니다.

이 경우 모든 Part를 순서대로 이어 붙였을 때 하나의 완전한 REPORT_xx.md가 되어야 하며,

내용을 줄이기 위한 목적으로 중요한 Evidence를 삭제하지 않습니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 4
REPORT Review
━━━━━━━━━━━━━━━━━━━━━━

REPORT 작성 후 다음 사항을 자체 검토합니다.

- 현재 개발 채팅의 주요 개발 내용이 누락되지 않았는지
- 실제로 발생하지 않은 내용을 추가하지 않았는지
- 해결된 문제와 미해결 문제가 정확히 구분되었는지
- 중요한 Decision과 Decision Reason이 보존되었는지
- 성능, Archive, Android, 배포, 운영 등 중요한 상태 변경이 기록되었는지
- 다음 세션에서 반드시 알아야 할 내용이 기록되었는지
- 기존 REPORT의 기본 양식과 문서 성격을 유지했는지
- REPORT_TEMPLATE.md의 작성 원칙을 준수했는지

필요한 경우 내용을 보완한 후 최종 REPORT를 제시합니다.

REPORT가 사용자에 의해 확정되면 Immutable Original Project Report로 보존하며 이후 수정하지 않습니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 5
Documentation Update Plan
━━━━━━━━━━━━━━━━━━━━━━

확정된 REPORT를 근거(Evidence)로

아래 문서를 어떻게 수정해야 하는지 판단합니다.

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

각 공식 문서의 역할을 구분합니다.

REPORT = History / Evidence

MASTER = Current State

CHANGELOG = Change History

NEXT_TASK = Future Roadmap

TECH_DEBT = 현재 남아 있는 기술 부채

PERFORMANCE = Performance Strategy / 성능 운영 기준

ARCHIVE_PLAN = Archive 운영 정책

DEPLOY = 배포 절차와 배포 기준

TROUBLESHOOTING = 재발 가능한 문제와 해결 방법

과거 History를 MASTER에 불필요하게 중복 기록하지 않습니다.

공식 문서는 GPT가 임의로 수정하지 않습니다.

사용자가 문서 전체 내용을 제공한 후 REPORT를 Evidence로 함께 검토하여 수정합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 6
Project Closing Checklist
━━━━━━━━━━━━━━━━━━━━━━

세션 종료 전 아래 항목을 확인합니다.

□ REPORT 작성 완료

□ REPORT 검토 및 확정 완료

□ 필요한 공식 문서 업데이트 완료

□ REPORT와 공식 문서 간 일관성 확인

□ 공식 문서 간 상충되는 내용이 없는지 확인

□ 프로젝트 Git 상태 확인

□ 필요한 변경사항 Commit / Push 완료

□ 다음 채팅 준비 완료

docs.zip은 프로젝트 공식 Git 관리 파일로 사용하지 않습니다.

docs/ 내부의 원본 공식 문서를 기준으로 프로젝트 문서를 관리합니다.

필요한 경우에만 문서 전달 또는 검토 목적으로 docs.zip을 임시 생성할 수 있으며,

GitHub에 저장하거나 프로젝트 공식 문서로 관리하지 않습니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 7
Next Session Preparation
━━━━━━━━━━━━━━━━━━━━━━

다음 채팅에서 수행할 작업을 우선순위대로 정리합니다.

다음 개발 세션에서 현재 프로젝트 상태를 정확하게 이어갈 수 있는지 확인합니다.

가능한 경우 새로운 GPT 채팅에서 사용할 START_CHAT 준비 상태도 함께 확인합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 8
Project Closing
━━━━━━━━━━━━━━━━━━━━━━

아래 형식으로 종료합니다.

Project Closing : Completed

Project Documentation System : Updated

Next Session : Ready

PDC Status : Completed

---

# Workflow

Development

↓

END_SESSION_PROMPT

↓

REPORT_TEMPLATE.md + Current Chat Full Copy

↓

Session Review

↓

REPORT

↓

REPORT Review / User Confirmation

↓

REPORT Finalization

↓

Project Documentation Cycle (PDC)

↓

Official Documents Full Review

↓

Update Only Required Documents

↓

Document Consistency Check

↓

Git Status / Required Commit / Push

↓

Next START_CHAT

---

# Management Principles

Project Documentation System을 기준으로 종료합니다.

REPORT는 프로젝트의 History(Evidence)입니다.

MASTER는 Current State입니다.

CHANGELOG는 Change History입니다.

NEXT_TASK는 Future Roadmap입니다.

공식 문서는 항상 동일한 품질을 유지합니다.

공식 문서는 확정된 REPORT를 근거(Evidence)로 수정합니다.

공식 문서는 GPT가 임의로 수정하지 않습니다.

사용자가 문서 전체 내용을 제공한 후 함께 검토하여 수정합니다.

REPORT 작성 시에는 REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 필수 기준 자료로 사용합니다.

REPORT는 기존 Original Project Report의 기본 양식과 문서 성격을 유지합니다.

필요한 경우 항목을 추가할 수 있으나 기존 REPORT 구조에서 벗어난 별도의 문서 형식으로 임의 변경하지 않습니다.

REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본이 제공된 경우 작성 방식에 대한 추가 논의 없이 REPORT 생성을 시작합니다.

docs/ 내부의 원본 공식 문서는 Git을 통해 관리합니다.

docs.zip은 공식 Git 관리 대상이 아니며 필요한 경우에만 임시 전달 파일로 생성합니다.

---

# Version History

## Version 2.1 (2026-08-17)

- END_SESSION 필수 입력 자료 정의
- REPORT_TEMPLATE.md 필수 제공 규칙 추가
- 현재 개발 채팅 전체 복사본 필수 제공 규칙 추가
- GPT 기억이나 일부 대화만을 기준으로 REPORT를 작성하지 않도록 규칙 추가
- 입력 자료가 준비되면 추가 형식 논의 없이 REPORT를 즉시 생성하도록 규칙 추가
- 기존 Original Project Report 양식 유지 규칙 강화
- 세션 특성에 따른 REPORT 항목 추가 허용 범위 명시
- REPORT 자체 검토 단계 추가
- REPORT 확정 이후 공식 문서를 업데이트하도록 절차 명확화
- docs.zip을 공식 Git 관리 대상에서 제외
- docs/ 원본 공식 문서를 Git 관리 기준으로 변경
- Git Commit / Push 확인을 Project Closing Checklist에 추가
- PDC Workflow 최신화

## Version 2.0 (2026-07-04)

- Project Closing Procedure로 재설계
- REPORT 자동 생성 절차 추가
- REPORT_TEMPLATE 기반 생성
- Documentation Update Plan 추가
- Project Closing Checklist 추가
- Next Session Preparation 추가
- PDC 종료 절차 통합