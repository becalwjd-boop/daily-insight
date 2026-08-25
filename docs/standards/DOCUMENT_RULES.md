# DOCUMENT_RULES

## Daily Insight News Project

Version : 1.1

Status : Official Standard

Last Updated : 2026-08-17

---

# 목적 (Purpose)

본 문서는 Daily Insight News 프로젝트에서 사용하는 모든 공식 문서의 역할과 관리 원칙을 정의합니다.

모든 프로젝트 문서는 본 문서를 기준으로 작성하고 관리합니다.

문서의 역할이 서로 겹치지 않도록 하는 것을 목표로 합니다.

---

# 프로젝트 문서 구성

프로젝트 문서는 크게 다음 네 가지로 구분합니다.

① Standards (표준)

↓

프로젝트 운영 규칙 및 문서 작성 표준

예)

REPORT_TEMPLATE.md

DOCUMENT_RULES.md

PROJECT_RULES.md

---

② Prompts (프롬프트)

↓

AI와 협업하기 위한 공식 프롬프트

예)

REPORT_PROMPT.md

MASTER_PROMPT.md

CHANGELOG_PROMPT.md

START_CHAT_PROMPT.md

END_SESSION_PROMPT.md

---

③ Reports (프로젝트 역사)

↓

Original Project Report

Evidence

Immutable Document

예)

REPORT_01.md

REPORT_02.md

REPORT_03.md

...

---

④ Official Documents (공식 문서)

↓

현재 프로젝트 상태를 관리하는 문서

예)

MASTER.md

CHANGELOG.md

NEXT_TASK.md

PROJECT_STRUCTURE.md

PERFORMANCE.md

ARCHIVE_PLAN.md

DEPLOY.md

TROUBLESHOOTING.md

TECH_DEBT.md

---

# 각 문서의 역할

## REPORT

역할

프로젝트의 개발 History와 Evidence를 기록합니다.

특징

해당 개발 세션에서 실제로 확인된 개발 과정과 상태를 기록합니다.

중요한 시행착오, 문제 해결 과정, Decision 및 Decision Reason을 보존합니다.

사용자 확정 이후 수정하지 않는 Immutable Original Project Report입니다.

공식 문서를 업데이트하기 위한 근거(Evidence)입니다.

새로운 개발 세션이 종료될 때마다 새로운 REPORT를 생성합니다.

---

## MASTER

역할

현재 프로젝트 전체 상태를 관리합니다.

특징

항상 최신 상태를 유지합니다.

프로젝트의 대표 Current State 문서입니다.

과거 개발 History를 불필요하게 누적하지 않습니다.

REPORT의 Evidence를 기반으로 현재 유효한 상태만 관리합니다.

---

## CHANGELOG

역할

프로젝트 변경 이력을 기록합니다.

특징

기능 추가

기능 변경

버그 수정

제거된 기능

등 실제 완료된 변경 사항을 시간순으로 기록합니다.

상세 개발 과정과 Evidence는 REPORT에서 관리합니다.

---

## NEXT_TASK

역할

앞으로 해야 할 작업을 관리합니다.

특징

Active / Planned / Deferred 작업을 구분합니다.

완료된 작업은 현재 작업 목록에서 제거합니다.

항상 최신 우선순위를 유지합니다.

실제 운영 서비스에서 확인된 핵심 장애 및 품질 문제는 신규 기능보다 높은 우선순위로 관리할 수 있습니다.

단순 아이디어와 미구현 기능은 TECH_DEBT가 아니라 NEXT_TASK에서 관리합니다.

---

## PROJECT_STRUCTURE

역할

프로젝트 구조를 설명합니다.

특징

디렉터리 구조

주요 영역의 역할

공식 문서 구조

Documentation Architecture

프로젝트 운영 체계

등을 관리합니다.

---

## PERFORMANCE

역할

프로젝트의 성능 전략과 최적화 운영 기준을 관리합니다.

예)

초기 로딩

Data Freshness

Cache

Rendering

API

Thumbnail

Archive Performance

장기 Scalability

개별 성능 개선 이력은 CHANGELOG와 REPORT에서 관리합니다.

현재 남아 있는 성능 관련 기술 부채는 TECH_DEBT에서 관리합니다.

---

## ARCHIVE_PLAN

역할

뉴스 Archive 운영 정책, Data Lifecycle 및 장기 데이터 보존 전략을 관리합니다.

Archive 저장 정책, 데이터 무결성, 복구 정책 및 장기 Archive 운영 기준을 관리합니다.

---

## DEPLOY

역할

Deployment Strategy와 Production 운영 정책을 관리합니다.

예)

Git / GitHub

GitHub Actions

Vercel

공식 도메인 / DNS

Android

Google Play Console

Production 외부 서비스 연결

---

## TROUBLESHOOTING

역할

프로젝트의 문제 해결 전략, Incident Management 및 반복적으로 사용할 수 있는 진단 절차를 관리합니다.

개별 오류를 단순히 누적하는 문서가 아니라 동일하거나 유사한 문제가 다시 발생했을 때 활용할 수 있는 재사용 가능한 문제 해결 원칙과 진단 절차를 관리합니다.

개별 Incident의 상세 Evidence는 REPORT에서 관리합니다.

---

## TECH_DEBT

역할

현재 프로젝트에 남아 있는 기술적 부담, 위험 및 유지보수 문제를 관리합니다.

단순 미구현 기능이나 개발 아이디어는 기술 부채로 관리하지 않고 NEXT_TASK에서 관리합니다.

해결된 중요한 기술 부채는 필요한 경우 Resolved Technical Debt로 보존할 수 있습니다.

---

# 문서 수정 원칙

## REPORT

사용자 확정 이후 수정하지 않습니다.

새로운 개발 세션은 새로운 REPORT로 기록합니다.

---

## MASTER

계속 수정합니다.

항상 최신 상태를 유지합니다.

---

## CHANGELOG

새로운 변경 사항을 계속 추가합니다.

기존 기록은 삭제하지 않습니다.

---

## NEXT_TASK

완료 여부에 따라 계속 수정합니다.

---

## PROJECT_STRUCTURE

구조가 변경될 때만 수정합니다.

---

## PERFORMANCE

성능 전략, 최적화 원칙, 관리 대상, 측정 지표 또는 장기 성능 운영 전략이 변경될 때 수정합니다.

---

## ARCHIVE_PLAN

Archive 운영 정책, Data Lifecycle, 저장 구조, 무결성·복구 정책 또는 장기 운영 전략이 변경될 때 수정합니다.

---

## DEPLOY

배포 정책, 배포 구조, 자동화, 플랫폼 운영 절차, 공식 도메인·DNS 또는 Production 외부 서비스 운영 정책이 변경될 때 수정합니다.

---

## TROUBLESHOOTING

문제 해결 운영 절차, 문제 분류, Incident 관리 방식 또는 반복적으로 사용할 수 있는 진단 절차가 변경될 때 수정합니다.

개별 오류 해결 사례만으로 문서를 불필요하게 확장하지 않습니다.

---

## TECH_DEBT

신규 기술 부채 발생, 기존 기술 부채 해결, 우선순위 변화 또는 현재 기술적 위험 상태가 변경될 때 수정합니다.

---

# Evidence and Document Responsibility

프로젝트 문서는 단순한 신뢰도 순위가 아니라 각 문서의 역할과 Evidence 관계를 기준으로 관리합니다.

REPORT는 개발 History와 Evidence의 기준입니다.

MASTER는 현재 프로젝트 상태(Current State)의 기준입니다.

CHANGELOG는 완료된 Change History를 관리합니다.

NEXT_TASK는 Future Roadmap과 개발 우선순위를 관리합니다.

TECH_DEBT, PROJECT_STRUCTURE, PERFORMANCE, ARCHIVE_PLAN, DEPLOY, TROUBLESHOOTING은 각각 자신의 역할에 해당하는 정보를 관리합니다.

문서 간 내용이 상충할 경우 REPORT의 Evidence와 현재 프로젝트 상태를 함께 검토하여 각 문서의 역할에 맞게 정리합니다.

---

# 프로젝트 운영 원칙

REPORT는 프로젝트의 역사입니다.

MASTER는 프로젝트의 현재 상태입니다.

두 문서는 서로 역할이 다릅니다.

REPORT는 수정하지 않습니다.

현재 상태는 반드시 MASTER에서 관리합니다.

Project Documentation Cycle(PDC)에서는 공식 문서 전체를 검토합니다.

단, 모든 공식 문서를 반드시 수정하는 것은 아닙니다.

해당 개발 세션의 변경 사항이 각 문서의 역할에 실제 영향을 주는 경우에만 REPORT를 Evidence로 수정합니다.

공식 문서는 사용자가 문서 전체 내용을 제공한 후 REPORT와 현재 프로젝트 상태를 기준으로 함께 검토하여 수정하는 것을 원칙으로 합니다.

---

## Documentation Principles

- 프로젝트 안의 모든 공식 문서는 새로운 개발자와 새로운 GPT가 별도의 설명 없이도 이해할 수 있도록 작성합니다.
- 문서는 가능한 한 자기 설명(Self-Explaining) 구조를 유지합니다.
- 같은 종류의 정보는 같은 형식으로 작성하여 일관성을 유지합니다.
- 하나의 문서는 하나의 역할(Single Responsibility)만 담당하도록 작성합니다.
- History, Current State, Change History, Future Roadmap 및 운영 정책을 서로 구분합니다.
- 상세 Evidence를 Living Document에 불필요하게 반복하지 않습니다.
- 문서의 분량보다 정확성, 역할 분리 및 장기 유지보수성을 우선합니다.
- 실제 개발 채팅 또는 REPORT에서 확인되지 않은 내용을 추측하여 공식 문서에 추가하지 않습니다.
- 원인이 확정되지 않은 문제는 추정 내용을 확정된 사실처럼 기록하지 않습니다.

---

# Documentation File Management

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리합니다.

`docs/` 내부의 원본 공식 문서는 Git 관리 대상입니다.

`docs.zip`은 프로젝트 공식 문서 또는 공식 Git 관리 파일로 사용하지 않습니다.

필요한 경우 문서 전달 또는 검토 목적으로 임시 생성할 수 있습니다.

전달·검토용 임시 파일과 프로젝트의 원본 공식 문서를 명확하게 구분합니다.

---

# Official Document Standard

REPORT_TEMPLATE.md를 제외한 새로운 공식 문서는 가능한 한 아래 구조를 기본으로 작성합니다.

1. Header
2. Purpose
3. Main Contents
4. Relationship (필요한 경우)
5. Update Rules
6. Related Documents
7. Notes
8. END OF DOCUMENT

모든 공식 문서가 반드시 동일한 구조를 가질 필요는 없습니다.

다만 프로젝트 전체의 일관성과 유지보수성을 위해 가능한 한 위 구조를 기본으로 사용합니다.

Relationship은 다른 공식 문서와의 관계를 설명할 필요가 있는 경우에만 사용합니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- 프로젝트 문서 체계 최초 정의
- 문서별 역할 정의
- 문서 수정 원칙 정의
- 프로젝트 문서 우선순위 정의

## Version 1.1 (2026-08-17)

- 현재 Project Documentation System(PDS) 운영 방식 반영
- Project Documentation Cycle(PDC) 전체 문서 검토 원칙 추가
- REPORT / MASTER / CHANGELOG / NEXT_TASK 역할 관계 명확화
- PERFORMANCE 역할을 성능 기록에서 성능 전략 및 운영 기준으로 수정
- TROUBLESHOOTING 역할을 Incident 및 재사용 가능한 진단 절차 중심으로 수정
- TECH_DEBT와 NEXT_TASK의 역할 구분 강화
- ARCHIVE_PLAN 및 DEPLOY 역할 최신화
- 단순 문서 우선순위를 Evidence와 Document Responsibility 구조로 개선
- `docs/` 원본 문서와 `docs.zip` 임시 파일 관리 원칙 추가
- 중복된 공식 문서 구조 정의 정리
- 공식 문서 전체 검토 후 필요한 문서만 수정하는 원칙 명문화