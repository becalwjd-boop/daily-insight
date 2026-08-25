# REPORT_TEMPLATE

## Daily Insight News Project

Version : 1.2

Status : Official Standard

Last Updated : 2026-08-17

---

# 목적 (Purpose)

REPORT_TEMPLATE는 Daily Insight News 프로젝트에서 사용하는
Original Project Report의 공식 작성 양식을 정의하는 문서입니다.

모든 REPORT는 본 문서를 기준으로 작성합니다.

REPORT는 프로젝트의 역사(History)를 보존하기 위한 원본 기록(Evidence)이며,

MASTER.md를 비롯한 프로젝트 공식 문서를 작성하기 위한 근거 자료입니다.

---

# REPORT 작성 철학 (Writing Philosophy)

REPORT는 프로젝트의 History(Evidence)를 최대한 보존하기 위한 문서입니다.

REPORT는 개발 채팅을 단순히 요약하는 문서가 아닙니다.

프로젝트 운영에 영향을 줄 수 있는 Evidence를 가능한 한 모두 기록하는 것을 우선합니다.

REPORT는 길어져도 됩니다.

중복 제거보다 Evidence 보존을 우선합니다.

향후 프로젝트 운영에 영향을 줄 수 있는 내용은 가능한 한 모두 기록합니다.

기존 Original Project Report에서 사용해 온 문체와 큰 구조를 유지합니다.

세션 특성에 따라 필요한 항목을 추가할 수 있지만,

기존 REPORT와 전혀 다른 성격의 작업 로그, 단순 요약문 또는 새로운 문서 형식으로 임의 변경하지 않습니다.

REPORT의 세부 항목 수보다 프로젝트 History와 Evidence를 충분히 보존하는 것을 우선합니다.

---

# REPORT의 역할

REPORT는

프로젝트의 현재 상태를 기록하는 문서가 아닙니다.

REPORT는

각 개발 채팅이 종료된 당시의 프로젝트 상태를 그대로 보존하는
Immutable Original Project Report입니다.

---

# REPORT 작성 원칙

모든 REPORT는 아래 원칙을 따릅니다.

1.

채팅 종료 당시 상태만 기록합니다.

2.

이후 채팅에서 변경된 내용은 반영하지 않습니다.

3.

추측하지 않습니다.

4.

실제 채팅에서 확인된 내용만 기록합니다.

5.

이미 해결된 내용이라도

당시 해결되지 않았다면

미해결 상태 그대로 기록합니다.

6.

Original Project Report 본문은 생성 당시 내용을 그대로 보존합니다.

7.

REPORT는 작성 및 검토 과정에서 필요한 보완을 진행할 수 있습니다.

사용자가 최종 확정한 이후에는 Immutable Original Project Report로 보존하며 수정하지 않습니다.

8.

응답 길이 제한이 있는 경우 REPORT를 여러 Part로 나누어 작성할 수 있습니다.

각 Part를 이어 붙이면 하나의 REPORT가 되어야 합니다.

9.

REPORT를 여러 Part로 작성하는 과정에서도 내용을 요약하거나 생략하지 않습니다.

10.

REPORT 작성 시 사용자가 제공한 현재 개발 채팅 전체 복사본을 핵심 Evidence로 사용합니다.

GPT의 일부 대화 기억이나 요약된 이전 Context만으로 현재 세션의 REPORT를 작성하지 않습니다.

11.

REPORT_TEMPLATE.md는 REPORT를 어떻게 작성할지 결정하는 기준이며,

현재 개발 채팅 전체 복사본은 REPORT에 무엇을 기록해야 하는지 확인하는 Evidence입니다.

12.

현재 개발 채팅 전체 복사본에서 실제로 확인되지 않은 내용을 다른 REPORT나 현재 프로젝트 상태를 근거로 현재 세션의 작업처럼 추가하지 않습니다.

13.

REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본이 제공된 경우

기존 REPORT의 작성 방식이나 양식에 대해 사용자와 다시 논의하지 않고 REPORT 작성을 시작합니다.

---

# REPORT 문서 구조

모든 REPORT는 아래 순서를 따릅니다.

① Header

↓

② Purpose

↓

③ Original Project Report

↓

④ Related Documents

↓

⑤ Fact Check

↓

⑥ Footer

---

# REPORT 작성 절차

REPORT 작성 시 아래 절차를 권장합니다.

① REPORT_TEMPLATE.md 확인

↓

② 현재 개발 채팅 전체 복사본 확인

↓

③ 기존 최근 REPORT 확인

↓

④ 기존 Original Project Report의 문체와 큰 구조 확인

↓

⑤ 현재 개발 채팅 전체 복사본 처음부터 끝까지 검토

↓

⑥ 구현 내용 / 해결된 문제 / 미해결 문제 / 기술 부채 / Decision / 운영 원칙 / Evidence 수집

↓

⑦ REPORT 작성

↓

⑧ REPORT 자체 검토

↓

⑨ 필요한 내용 보완

↓

⑩ 사용자 확인 및 REPORT 확정

↓

⑪ Immutable Original Project Report로 보존

---

# Header

모든 REPORT는 아래 Header를 사용합니다.

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Source Chat | 뉴스 자동 분류_XX |
| Document Type | Original Project Report |
| Status | Immutable Document (Do Not Edit) |
| Version | 1.0 |
| Generated | YYYY-MM-DD |

---

# Original Project Report

REPORT의 핵심 내용입니다.

생성된 Original Project Report는

절대 수정하지 않습니다.

맞춤법

문장

표현

내용

순서

모두 생성 당시 그대로 유지합니다.

---

# Original Project Report 작성 기준

Original Project Report는

프로젝트 History(Evidence)를 최대한 보존하는 것을 목표로 합니다.

채팅을 단순히 요약하지 않습니다.

가능한 한

- 프로젝트 개요
- 새롭게 구현된 기능
- 기존 기능 또는 구조 변경
- 해결된 문제
- 미해결 문제
- 새롭게 발생하거나 확인된 기술 부채
- 중요한 개발 과정과 시행착오
- 주요 기술적 의사결정
- Decision Reason
- 성능 관련 변경
- Archive 관련 변경
- Android / Google Play 관련 변경
- 배포 및 외부 서비스 관련 변경
- 프로젝트 운영 방식 변경
- 다음 개발 단계
- Evidence

등 해당 세션에서 실제로 발생한 중요한 내용을 기록합니다.

모든 REPORT가 위 항목을 동일한 순서나 동일한 개수로 반드시 사용해야 하는 것은 아닙니다.

세션 특성에 따라 필요한 항목을 추가하거나 해당되지 않는 항목을 생략할 수 있습니다.

단, 기존 Original Project Report의 큰 구조와 문서 성격은 유지합니다.

---

# Related Documents

REPORT를 Evidence로 검토할 수 있는 관련 공식 문서를 기록합니다.

예)

MASTER.md

PROJECT_STRUCTURE.md

CHANGELOG.md

NEXT_TASK.md

PERFORMANCE.md

ARCHIVE_PLAN.md

DEPLOY.md

TROUBLESHOOTING.md

TECH_DEBT.md

---

# Fact Check

모든 REPORT에는 아래 내용을 포함합니다.

- 실제 채팅 내용을 기반으로 작성되었습니다.
- 추측은 포함하지 않았습니다.
- 이후 채팅 내용은 반영하지 않았습니다.
- Original Project Report입니다.
- 프로젝트 공식 문서가 아니라 공식 문서를 작성하기 위한 Evidence 문서입니다.
- 프로젝트 역사(History)를 보존하기 위한 Immutable Document입니다.
- Original Project Report 본문은 생성 당시 내용을 그대로 보존합니다.
- 현재 개발 채팅 전체 복사본을 세션 History 확인의 핵심 Evidence로 사용하였습니다.
- 다른 개발 세션의 내용을 현재 세션의 작업으로 임의 추가하지 않았습니다.

---

# REPORT 작성 시 금지 사항

REPORT 작성 시 아래 사항은 지양합니다.

- 중요한 Evidence를 임의로 생략하는 것

- 채팅에 없던 내용을 추측하여 작성하는 것

- 이후 채팅에서 변경된 내용을 반영하는 것

- 기존 REPORT와 다른 문체를 사용하는 것

- 응답 길이 제한을 이유로 내용을 축약하는 것

- 기존 REPORT와 다른 Header / Footer 형식을 사용하는 것

- 현재 개발 채팅 전체 복사본을 확인하지 않고 GPT 기억이나 일부 대화만을 기준으로 REPORT를 작성하는 것

- 다른 개발 세션의 내용을 현재 개발 세션에서 수행한 작업처럼 기록하는 것

- 기존 REPORT의 큰 구조와 문서 성격을 임의로 변경하는 것

- 중요한 Decision과 Decision Reason을 결과만 남기고 삭제하는 것

- 해결된 문제와 미해결 문제를 구분하지 않는 것

- 원인이 확인되지 않은 문제의 추정 원인을 확정된 Root Cause로 기록하는 것

- REPORT 작성 중 사용자와 불필요하게 형식 논의를 반복하여 기존 확정 양식을 다시 설계하는 것

---

# Footer

모든 REPORT는 아래 Footer를 사용합니다.

END OF REPORT

Project : Daily Insight News

Document : REPORT_XX

Status : Immutable Original Project Report

Version : 1.0

---

# REPORT 생성 절차

① 개발 채팅 종료

↓

② REPORT_TEMPLATE.md 준비

↓

③ 현재 개발 채팅 전체 복사본 준비

↓

④ REPORT_TEMPLATE과 채팅 전체 복사본 검토

↓

⑤ 기존 최근 REPORT의 문체와 큰 구조 확인

↓

⑥ REPORT 작성

↓

⑦ REPORT 자체 검토 및 필요한 보완

↓

⑧ 사용자 확인 및 REPORT 확정

↓

⑨ docs/reports/REPORT_XX.md 저장

↓

⑩ Immutable Original Project Report로 보존

↓

⑪ REPORT를 Evidence로 공식 문서 전체 검토

↓

⑫ 실제 영향을 받은 공식 문서만 업데이트

↓

⑬ 문서 간 일관성 확인

↓

⑭ Git 상태 확인 및 필요한 Commit / Push

↓

⑮ 다음 START_CHAT 준비

---

# REPORT와 공식 문서의 관계

REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.

REPORT 확정 이후 Project Documentation Cycle(PDC)을 통해 공식 문서 전체를 검토합니다.

기본 역할은 다음과 같습니다.

REPORT

↓

Evidence

↓

MASTER.md
Current State

CHANGELOG.md
Change History

NEXT_TASK.md
Future Roadmap

PROJECT_STRUCTURE.md
Project Architecture / Documentation Structure

PERFORMANCE.md
Performance Strategy

ARCHIVE_PLAN.md
Archive Policy

DEPLOY.md
Deployment Policy

TROUBLESHOOTING.md
Troubleshooting Strategy

TECH_DEBT.md
Current Technical Debt

모든 공식 문서를 매 REPORT마다 반드시 수정하는 것은 아닙니다.

REPORT의 내용이 해당 공식 문서의 역할에 실제 영향을 주는 경우에만 수정합니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- REPORT 표준 양식 최초 확정
- Header / Footer 표준 정의
- Original Project Report 보존 원칙 확정
- REPORT 생성 절차 정의
- REPORT와 공식 문서의 관계 정의

## Version 1.1 (2026-07-06)

REPORT_09 작성 과정에서 REPORT_TEMPLATE의 보완 필요 사항을 확인하였습니다.

기존 REPORT_TEMPLATE는 Header, Footer, Fact Check 등 기본 구조는 잘 정의되어 있었지만,

Original Project Report 본문 작성 기준과 긴 REPORT 작성 원칙이 부족하였습니다.

이를 개선하기 위하여 다음 내용을 추가하였습니다.

- REPORT 작성 철학
- REPORT 작성 절차
- Original Project Report 작성 기준
- 긴 REPORT 작성 원칙
- REPORT 작성 시 지양 사항

본 변경은 REPORT_09 작성 과정에서 발견된 문제를 기반으로 Project Documentation System을 개선하기 위해 반영되었습니다.

## Version 1.2 (2026-08-17)

REPORT_11 작성 과정에서 REPORT 생성에 필요한 입력자료와 기존 Original Project Report 양식 유지 원칙을 더욱 명확하게 정의할 필요성을 확인하였습니다.

이를 반영하여 다음 내용을 보완하였습니다.

- REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 REPORT 작성 필수 기준 자료로 정의
- REPORT_TEMPLATE은 작성 방법, 채팅 전체 복사본은 세션 History Evidence라는 역할 구분 명시
- GPT의 일부 기억이나 일부 대화만을 기준으로 REPORT를 작성하지 않는 원칙 추가
- 기존 최근 REPORT의 문체와 큰 구조를 함께 확인하는 절차 강화
- 기존 Original Project Report의 기본 문서 성격과 큰 구조 유지 원칙 강화
- 세션 특성에 따른 본문 항목 추가 및 생략 허용 범위 명확화
- 중요한 시행착오, Decision 및 Decision Reason 보존 기준 강화
- 해결된 문제와 미해결 문제의 명확한 구분 원칙 추가
- 원인이 확정되지 않은 문제를 추정 Root Cause로 기록하지 않는 원칙 추가
- REPORT 작성 후 자체 검토 및 사용자 확정 절차 명확화
- 사용자 확정 이후 Immutable Original Project Report로 보존하는 시점 명확화
- REPORT 확정 후 공식 문서 전체를 검토하고 실제 영향을 받은 문서만 수정하는 PDC 원칙 반영
- Git 상태 확인 및 필요한 Commit / Push 절차 반영
- 입력 자료가 준비된 경우 추가적인 형식 논의 없이 기존 양식으로 REPORT 작성을 시작하는 원칙 추가