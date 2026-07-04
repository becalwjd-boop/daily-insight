# PROJECT_STRUCTURE

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | PROJECT_STRUCTURE.md |
| Type | Living Document |
| Purpose | Project Architecture and Directory Structure |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

---

# Purpose

PROJECT_STRUCTURE.md는 Daily Insight News 프로젝트의 전체 구조와 각 디렉터리 및 공식 문서의 역할을 설명하는 문서입니다.

이 문서는 새로운 개발자와 GPT가 프로젝트 구조를 빠르게 이해할 수 있도록 작성되었습니다.

---

# Project Overview

프로젝트는 크게 아래 영역으로 구성됩니다.

```
Application

↓

Data

↓

Documentation

↓

Automation

↓

Deployment
```

각 영역은 서로 독립적인 역할을 가지며, 역할이 중복되지 않도록 설계합니다.

---

# Directory Structure

## app/

서비스의 실제 기능과 사용자 인터페이스를 구현하는 영역입니다.

포함 내용

- 페이지(Page)
- 컴포넌트(Component)
- API Route
- Layout
- Loading UI

---

## data/

뉴스 데이터와 Archive 데이터를 관리하는 영역입니다.

포함 내용

- Archive JSON
- 기타 데이터 파일

---

## docs/

프로젝트 운영에 필요한 공식 문서를 관리하는 영역입니다.

세부 구조

- reports/
- standards/
- prompts/
- workflows/

공식 문서는 docs 아래에서만 관리합니다.

---

## lib/

프로젝트에서 공통으로 사용하는 코드와 유틸리티를 관리합니다.

---

## scripts/

자동 실행 스크립트를 관리합니다.

예)

- save-today.ts
- cleanup-archives.js

---

## public/

정적 파일(Static Assets)을 관리합니다.

예)

- 이미지
- 아이콘
- Manifest 관련 리소스

---

# Documentation Structure

docs는 아래 구조를 사용합니다.

## reports/

Original Project Report를 저장합니다.

History(Evidence)를 관리합니다.

---

## standards/

문서 작성 규칙과 프로젝트 운영 규칙을 관리합니다.

---

## prompts/

GPT와 협업하기 위한 Prompt를 관리합니다.

---

## workflows/

프로젝트 운영 절차(Standard Operating Procedure)를 관리합니다.

---

## Official Documents

| Document | Role |
|----------|------|
| MASTER.md | 프로젝트의 현재 상태(Current State)를 관리 |
| CHANGELOG.md | 변경 사항(Change History)을 관리 |
| NEXT_TASK.md | 앞으로의 개발 계획(Roadmap)을 관리 |
| TECH_DEBT.md | 기술 부채(Technical Debt)를 관리 |
| PERFORMANCE.md | 성능 관련 내용을 관리 |
| DEPLOY.md | 배포 절차 및 운영 환경을 관리 |
| ARCHIVE_PLAN.md | Archive 운영 계획을 관리 |
| TROUBLESHOOTING.md | 문제 해결 사례를 관리 |

---

# Documentation Architecture

공식 문서는 아래 관계를 따릅니다.

```
REPORT

↓

MASTER

↓

CHANGELOG
NEXT_TASK
TECH_DEBT
PROJECT_STRUCTURE
PERFORMANCE
DEPLOY
ARCHIVE_PLAN
TROUBLESHOOTING
```

REPORT는 프로젝트의 History를 관리합니다.

MASTER는 Current State를 관리합니다.

각 공식 문서는 자신의 역할만 담당합니다.

---

# Design Principles

프로젝트 구조는 다음 원칙을 따릅니다.

1. 역할이 중복되지 않도록 설계합니다.
2. 공식 문서는 docs에서만 관리합니다.
3. History와 Current State를 분리합니다.
4. 기능과 문서를 분리합니다.
5. 장기 유지보수를 고려하여 구조를 설계합니다.

---

# Update Rules

PROJECT_STRUCTURE는 다음 경우에만 수정합니다.

- 새로운 디렉터리 추가
- 프로젝트 구조 변경
- 공식 문서 구조 변경
- 운영 체계 변경

단순 기능 추가만으로는 수정하지 않습니다.

---

# Related Documents

- MASTER.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- DOCUMENT_WORKFLOW.md

---

# Notes

- PROJECT_STRUCTURE는 프로젝트의 구조를 설명합니다.
- 구현 세부 내용은 MASTER에서 관리합니다.
- History는 REPORT에서 관리합니다.
- 프로젝트 구조는 가능한 안정적으로 유지합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : PROJECT_STRUCTURE.md

Type : Living Document

Version : 1.0