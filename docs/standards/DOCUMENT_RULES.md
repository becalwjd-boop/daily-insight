# DOCUMENT_RULES

## Daily Insight News Project

Version : 1.0

Status : Official Standard

Last Updated : 2026-07-03

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

프로젝트 운영 규칙

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

프로젝트의 역사(History)를 기록합니다.

특징

채팅 종료 당시 상태만 기록합니다.

수정하지 않습니다.

공식 문서를 작성하기 위한 근거(Evidence)입니다.

---

## MASTER

역할

현재 프로젝트 전체 상태를 관리합니다.

특징

항상 최신 상태를 유지합니다.

프로젝트의 대표 문서입니다.

---

## CHANGELOG

역할

프로젝트 변경 이력을 기록합니다.

특징

기능 추가

기능 변경

버그 수정

등을 시간순으로 기록합니다.

---

## NEXT_TASK

역할

앞으로 해야 할 작업을 관리합니다.

특징

완료된 작업은 제거하거나 완료 처리합니다.

항상 최신 우선순위를 유지합니다.

---

## PROJECT_STRUCTURE

역할

프로젝트 구조를 설명합니다.

특징

폴더 구조

파일 역할

데이터 흐름

등을 관리합니다.

---

## PERFORMANCE

역할

성능 개선 기록을 관리합니다.

예)

속도 개선

캐시

렌더링

이미지 최적화

---

## ARCHIVE_PLAN

역할

뉴스 아카이브 구조와 장기 계획을 관리합니다.

---

## DEPLOY

역할

배포 절차를 관리합니다.

예)

GitHub

GitHub Actions

Vercel

Play Console

---

## TROUBLESHOOTING

역할

문제 해결 방법을 기록합니다.

재발 방지를 위한 문서입니다.

---

## TECH_DEBT

역할

기술 부채를 관리합니다.

즉시 해결하지 못한 문제를 기록합니다.

---

# 문서 수정 원칙

## REPORT

수정하지 않습니다.

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

성능 관련 변경 시 수정합니다.

---

## ARCHIVE_PLAN

아카이브 구조 변경 시 수정합니다.

---

## DEPLOY

배포 절차가 변경될 때 수정합니다.

---

## TROUBLESHOOTING

새로운 문제 해결 방법이 생기면 추가합니다.

---

## TECH_DEBT

기술 부채 발생 및 해결 시 수정합니다.

---

# 문서 우선순위

프로젝트의 문서는 다음 순서로 신뢰합니다.

REPORT

↓

MASTER

↓

CHANGELOG

↓

NEXT_TASK

↓

PROJECT_STRUCTURE

↓

PERFORMANCE

↓

ARCHIVE_PLAN

↓

DEPLOY

↓

TROUBLESHOOTING

↓

TECH_DEBT

---

# 프로젝트 운영 원칙

REPORT는 프로젝트의 역사입니다.

MASTER는 프로젝트의 현재 상태입니다.

두 문서는 서로 역할이 다릅니다.

REPORT는 수정하지 않습니다.

현재 상태는 반드시 MASTER에서 관리합니다.

---

## Core Document Sections

공식 문서는 가능한 한 아래 구조를 기본으로 작성합니다.

1. Header
2. Purpose
3. Main Contents
4. Relationship (필요한 경우)
5. Update Rules
6. Related Documents
7. Notes
8. END OF DOCUMENT

모든 공식 문서가 동일한 구조를 가질 필요는 없습니다.

다만 새로운 개발자와 새로운 GPT가 문서를 쉽게 이해할 수 있도록 가능한 한 일관된 구조를 유지합니다.

Relationship은 다른 공식 문서와의 관계를 설명할 필요가 있는 경우에만 사용합니다.

---

## Documentation Principles

- 프로젝트 안의 모든 공식 문서는 새로운 개발자와 새로운 GPT가 별도의 설명 없이도 이해할 수 있도록 작성합니다.
- 문서는 가능한 한 자기 설명(Self-Explaining) 구조를 유지합니다.
- 같은 종류의 정보는 같은 형식으로 작성하여 일관성을 유지합니다.
- 하나의 문서는 하나의 역할(Single Responsibility)만 담당하도록 작성합니다.

---

## Official Document Standard

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