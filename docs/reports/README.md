# Daily Insight News
## REPORT Management Guide

Project : Daily Insight News

Document : REPORT Management Guide

Purpose : 프로젝트 REPORT(원본 분석 자료)의 작성 및 관리 기준을 정의하는 문서

Primary Audience :

- 새로운 개발자
- 새로운 AI
- 프로젝트 관리자

Status : Living Document

Version : 1.1

Last Update : 2026-08-17

Owner : Daily Insight News Project

---

# 문서의 목적

이 문서는 Daily Insight News 프로젝트의 REPORT 관리 기준을 정의하는 공식 관리 문서입니다.

REPORT는 프로젝트의 Current State를 관리하는 Living Document가 아니라,

공식 문서를 작성하고 검토하기 위한 개발 History와 Evidence를 보존하는 Immutable Original Project Report입니다.

REPORT는 각 개발 세션에서 실제로 확인된 개발 과정, 문제 해결 과정, 시행착오, Decision 및 Decision Reason을 가능한 한 보존합니다.

REPORT의 구체적인 작성 형식과 작성 기준은 `REPORT_TEMPLATE.md`를 따릅니다.

---

# REPORT란?

REPORT는 각 개발 채팅이 종료된 시점까지 실제로 확인된 프로젝트 개발 History와 Evidence를 기록한 문서입니다.

예를 들어

REPORT_01.md

↓

뉴스 자동 분류_01 개발 세션의 History / Evidence

REPORT_02.md

↓

뉴스 자동 분류_02 개발 세션의 History / Evidence

...

이와 같이 각 개발 세션별로 새로운 REPORT를 생성합니다.

REPORT는 단순한 세션 요약문이 아닙니다.

해당 개발 세션에서 실제로 확인된 구현 내용, 변경 사항, 문제 해결 과정, 시행착오, 미해결 문제, 기술적 의사결정 및 운영 방식 변경 등을 보존합니다.

사용자가 최종 확정한 REPORT는 Immutable Original Project Report로 관리합니다.

---

# REPORT를 만드는 이유

프로젝트가 장기간 운영될수록

구현된 기능

해결된 문제

미해결 문제

시행착오

설계 변경

Decision 및 Decision Reason

운영 방식 변경

우선순위 변경

등이 여러 개발 세션에 분산될 수 있습니다.

REPORT는 각 개발 세션의 History와 Evidence를 보존하여,

향후 당시의 개발 과정과 의사결정 근거를 다시 확인할 수 있도록 합니다.

또한 REPORT는 Project Documentation Cycle(PDC)에서 MASTER.md를 비롯한 공식 문서를 검토하고 최신 상태로 유지하기 위한 Evidence로 사용합니다.

---

## REPORT 작성 원칙

1. REPORT는 해당 개발 세션 종료 시점까지 실제로 확인된 내용만 기록합니다.

2. 실제 개발 채팅에서 확인되지 않은 내용을 추측하여 기록하지 않습니다.

3. 이후 개발 세션에서 발생한 내용을 이전 REPORT에 반영하지 않습니다.

4. REPORT 작성 시 `REPORT_TEMPLATE.md`와 사용자가 제공한 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용합니다.

5. `REPORT_TEMPLATE.md`는 REPORT의 작성 방법과 형식을 정의하고, 현재 개발 채팅 전체 복사본은 해당 세션의 History와 Evidence를 확인하기 위한 자료로 사용합니다.

6. 기존 최근 REPORT를 확인하여 기존 Original Project Report의 문체와 큰 구조를 유지합니다.

7. REPORT는 단순 요약보다 프로젝트 History와 Evidence 보존을 우선합니다.

8. 중요한 구현 내용, 문제 해결 과정, 시행착오, Decision 및 Decision Reason을 가능한 한 보존합니다.

9. 확인된 사실과 추정 내용을 구분하며, 원인이 확정되지 않은 문제의 추정 원인을 확정된 Root Cause처럼 기록하지 않습니다.

10. REPORT는 작성 및 검토 과정에서 필요한 보완을 진행할 수 있습니다.

11. 사용자가 최종 확정한 이후에는 Immutable Original Project Report로 보존하며 수정하지 않습니다.

12. REPORT의 Header, Footer 및 세부 작성 기준은 `REPORT_TEMPLATE.md`의 현재 표준을 따릅니다.

---

# REPORT 수정 원칙

REPORT는 작성 직후 즉시 Immutable 상태가 되는 것이 아닙니다.

작성 및 검토 과정에서는 누락된 Evidence, 잘못된 표현 또는 구조상 필요한 내용을 보완할 수 있습니다.

사용자가 REPORT의 최종 내용을 확인하고 확정한 이후에는 Immutable Original Project Report로 보존합니다.

확정된 REPORT는 이후 개발 세션의 상태 변화에 맞추어 수정하지 않습니다.

이후 프로젝트 상태가 변경된 경우에는 새로운 REPORT와 관련 공식 문서를 통해 현재 상태를 관리합니다.

확정된 REPORT에서 과거 당시의 내용과 현재 상태가 다르더라도,

현재 상태에 맞추기 위해 과거 REPORT를 수정하지 않습니다.

---

# REPORT와 공식 문서의 관계

REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.

공식 문서는 각자의 역할에 따라 현재 프로젝트 상태, 변경 이력, 향후 계획 및 운영 정책을 관리합니다.

기본 관계는 다음과 같습니다.

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

REPORT 확정 이후 Project Documentation Cycle(PDC)을 수행하여 공식 문서 전체를 검토합니다.

모든 공식 문서를 매 REPORT마다 반드시 수정하는 것은 아닙니다.

REPORT의 Evidence가 해당 공식 문서의 역할에 실제 영향을 주는 경우에만 수정합니다.

REPORT의 상세 개발 History를 Living Document에 불필요하게 반복하지 않습니다.

---

# REPORT 작성 순서

개발 세션 종료

↓

REPORT_TEMPLATE.md 준비

↓

현재 개발 채팅 전체 복사본 준비

↓

REPORT_TEMPLATE과 현재 개발 채팅 전체 복사본 검토

↓

기존 최근 REPORT의 문체와 큰 구조 확인

↓

현재 개발 세션의 History / Evidence 수집

↓

REPORT 작성

↓

REPORT 자체 검토 및 필요한 보완

↓

사용자 확인

↓

REPORT 최종 확정

↓

docs/reports/REPORT_XX.md 저장

↓

Immutable Original Project Report로 보존

↓

Project Documentation Cycle(PDC)

↓

공식 문서 전체 검토

↓

실제 영향을 받은 공식 문서만 수정

↓

문서 간 일관성 확인

↓

Git 상태 확인 및 필요한 Commit / Push

---

# REPORT 파일명 규칙

REPORT는 아래 형식을 사용합니다.

REPORT_01.md

REPORT_02.md

REPORT_03.md

...

각 개발 세션에 대응하는 순번으로 관리합니다.

새로운 개발 세션은 기존 REPORT를 수정하지 않고 새로운 REPORT 파일을 생성하여 기록합니다.

REPORT 번호와 Source Chat의 관계는 각 REPORT Header에서 확인할 수 있도록 유지합니다.

---

# REPORT에 포함할 수 있는 주요 내용

REPORT는 해당 개발 세션에서 실제로 발생한 중요한 History와 Evidence를 가능한 한 보존합니다.

주요 기록 대상은 다음과 같습니다.

- 프로젝트 개요
- 새롭게 구현된 기능
- 기존 기능 또는 구조 변경
- 해결된 문제
- 미해결 문제
- 새롭게 확인된 기술적 위험 또는 기술 부채
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

모든 REPORT가 위 항목을 동일하게 포함해야 하는 것은 아닙니다.

세션 특성에 따라 필요한 항목을 추가하거나 해당되지 않는 항목을 생략할 수 있습니다.

구체적인 REPORT 본문 작성 기준은 `REPORT_TEMPLATE.md`를 따릅니다.

---

# REPORT 활용 방법

REPORT는 프로젝트의 현재 상태를 단독으로 판단하기 위한 문서로 사용하지 않습니다.

현재 프로젝트 상태는 MASTER.md와 각 역할별 공식 문서를 우선 확인합니다.

REPORT는 다음과 같은 경우 Evidence로 활용합니다.

- 특정 기능이 언제 또는 어떤 과정으로 구현되었는지 확인할 때
- 과거 문제 해결 과정과 시행착오를 확인할 때
- 중요한 기술적 Decision과 Decision Reason을 확인할 때
- 공식 문서의 현재 내용에 대한 근거를 확인할 때
- Project Documentation Cycle(PDC)에서 공식 문서를 검토할 때
- 과거 개발 세션 당시의 상태를 확인할 때

현재 상태와 과거 REPORT의 내용이 다른 경우,

REPORT를 현재 상태에 맞게 수정하지 않고 현재 공식 문서와 새로운 REPORT를 통해 변경된 상태를 관리합니다.

---

# 프로젝트 운영 원칙

REPORT는 프로젝트의 개발 History와 Evidence를 기록합니다.

MASTER는 프로젝트의 Current State를 관리합니다.

CHANGELOG는 완료된 Change History를 관리합니다.

NEXT_TASK는 Future Roadmap과 개발 우선순위를 관리합니다.

TECH_DEBT는 현재 남아 있는 기술적 부담과 위험을 관리합니다.

기타 공식 문서는 각자의 역할에 해당하는 현재 운영 정책과 구조를 관리합니다.

REPORT와 Living Document는 서로 역할이 다르며 동일한 정보를 불필요하게 중복 관리하지 않습니다.

REPORT 확정 이후에는 Project Documentation Cycle(PDC)을 통해 공식 문서 전체를 검토하고 실제 영향을 받은 문서만 수정합니다.

---

# Related Documents

- README.md
- REPORT_TEMPLATE.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- REPORT_WORKFLOW.md
- END_SESSION.md
- MASTER.md
- MASTER_SOURCES.md

---

# 변경 이력

## Version 1.0 (2026-07-03)

- REPORT 관리 체계 최초 구축
- REPORT 작성 원칙 정의
- REPORT와 공식 문서 관계 정의

## Version 1.1 (2026-08-17)

- REPORT를 개발 History와 Evidence를 보존하는 Immutable Original Project Report로 명확화
- REPORT 작성 시 `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 핵심 기준 자료로 사용하는 원칙 반영
- 기존 최근 REPORT의 문체와 큰 구조 확인 절차 반영
- REPORT 작성 및 검토 과정과 사용자 최종 확정 이후 Immutable 보존 시점 구분
- 중요한 시행착오, Decision 및 Decision Reason 보존 원칙 강화
- 확인된 사실과 추정 Root Cause를 구분하는 원칙 반영
- REPORT와 공식 문서의 역할 관계를 현재 Project Documentation System(PDS)에 맞게 수정
- REPORT 확정 이후 Project Documentation Cycle(PDC) 수행 절차 반영
- 공식 문서 전체 검토 후 실제 영향을 받은 문서만 수정하는 원칙 반영
- REPORT 활용 방법 및 파일 관리 원칙 최신화
- REPORT_TEMPLATE.md와의 역할 중복을 줄이고 REPORT 관리 문서의 책임 범위 명확화

---

END OF DOCUMENT

Project : Daily Insight News

Document : REPORT Management Guide

Type : Living Document

Version : 1.1