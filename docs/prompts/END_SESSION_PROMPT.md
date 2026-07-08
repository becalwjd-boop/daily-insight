# END_SESSION_PROMPT

## Daily Insight News Project

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | END_SESSION_PROMPT.md |
| Type | Official Prompt |
| Purpose | Project Closing and Documentation Management |
| Version | 2.0 |
| Status | Active |
| Last Updated | 2026-07-04 |

---

# Purpose

본 Prompt는 Daily Insight News 프로젝트의 개발 세션을 종료하기 위한 공식 종료 절차(Project Closing Procedure)를 수행합니다.

단순히 이번 채팅을 요약하는 것이 아니라,

Project Documentation System(PDS)에 따라 프로젝트 문서를 최신 상태로 유지하고,

다음 개발 세션에서도 동일한 상태로 이어갈 수 있도록 하는 것을 목표로 합니다.

---

# When to Use

다음 경우 반드시 사용합니다.

- 개발 채팅 종료 직전
- 새로운 채팅으로 이어가기 직전
- docs.zip을 최신화하기 직전
- 공식 문서를 업데이트하기 직전

---

# Official Prompt

이번 개발 채팅을 Project Documentation System(PDS) 기준으로 종료해주세요.

아래 절차를 순서대로 수행합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 1
Session Review
━━━━━━━━━━━━━━━━━━━━━━

다음 항목을 검토합니다.

1. 이번 채팅에서 완료된 기능

2. 해결된 문제

3. 아직 해결되지 않은 문제

4. 새롭게 발생한 기술 부채

5. 변경된 우선순위

6. 다음 채팅에서 가장 먼저 해야 하는 작업

━━━━━━━━━━━━━━━━━━━━━━
STEP 2
Documentation Review
━━━━━━━━━━━━━━━━━━━━━━

아래 공식 문서 중

업데이트가 필요한 문서를 판단합니다.

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

업데이트가 필요한 이유도 함께 설명합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 3
REPORT Generation
━━━━━━━━━━━━━━━━━━━━━━

REPORT 생성이 필요한지 판단합니다.

필요한 경우

REPORT_TEMPLATE.md 형식을 기준으로

REPORT_xx.md 전체 완성본을 작성합니다.

부분 수정이 아니라

최종 저장 가능한 REPORT를 생성합니다.

REPORT에는 반드시 아래 내용을 포함합니다.

- 프로젝트 개요
- 새롭게 구현된 기능
- 해결된 문제
- 미해결 과제
- 다음 개발 단계
- Evidence
- 프로젝트 운영 원칙 변경

━━━━━━━━━━━━━━━━━━━━━━
STEP 4
Documentation Update Plan
━━━━━━━━━━━━━━━━━━━━━━

REPORT를 근거(Evidence)로

아래 문서를 어떻게 수정해야 하는지 안내합니다.

- MASTER.md

- CHANGELOG.md

- NEXT_TASK.md

- 기타 공식 문서

가능한 경우

수정해야 하는 최종 내용도 함께 제공합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 5
Project Closing Checklist
━━━━━━━━━━━━━━━━━━━━━━

세션 종료 전 아래 항목을 확인합니다.

□ REPORT 작성 완료

□ 공식 문서 업데이트 완료

□ 문서 간 일관성 확인

□ docs.zip 최신화

□ 다음 채팅 준비 완료

━━━━━━━━━━━━━━━━━━━━━━
STEP 6
Next Session Preparation
━━━━━━━━━━━━━━━━━━━━━━

다음 채팅에서 수행할 작업을 우선순위대로 정리합니다.

가능한 경우

새로운 GPT 채팅에서 사용할

START_CHAT 준비 상태도 함께 확인합니다.

━━━━━━━━━━━━━━━━━━━━━━
STEP 7
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

REPORT

↓

MASTER

↓

CHANGELOG

↓

NEXT_TASK

↓

docs.zip Update

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

공식 문서는 REPORT를 근거(Evidence)로 수정합니다.

공식 문서는 GPT가 임의로 수정하지 않습니다.

사용자가 문서 전체 내용을 제공한 후 함께 검토하여 수정합니다.

---

# Version History

## Version 2.0 (2026-07-04)

- Project Closing Procedure로 재설계
- REPORT 자동 생성 절차 추가
- REPORT_TEMPLATE 기반 생성
- Documentation Update Plan 추가
- Project Closing Checklist 추가
- Next Session Preparation 추가
- PDC 종료 절차 통합