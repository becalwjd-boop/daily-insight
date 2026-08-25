# README

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | README.md |
| Type | Entry Point |
| Purpose | Project Documentation Home |
| Version | 1.1 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Welcome

README.md는 Daily Insight News 프로젝트 문서 시스템의 시작점(Entry Point)입니다.

새로운 개발자와 새로운 GPT는 반드시 이 문서부터 확인한 후 프로젝트를 진행합니다.

이 문서는 프로젝트 문서의 구조, 역할, 확인 순서 및 운영 방식을 안내합니다.

---

# Purpose

README.md의 목적은 다음과 같습니다.

- 프로젝트 문서 시스템을 소개합니다.
- 문서를 어떤 순서로 확인해야 하는지 안내합니다.
- 각 문서의 역할을 설명합니다.
- 개발 시작 전과 종료 후의 절차를 안내합니다.
- 프로젝트 운영 표준을 연결합니다.

---

# Documentation Structure

프로젝트 문서는 `docs/` 아래에서 다음 구조로 관리합니다.

```
docs/

├─ reports/
├─ standards/
├─ prompts/
├─ workflows/
│
├─ MASTER.md
├─ MASTER_SOURCES.md
├─ CHANGELOG.md
├─ NEXT_TASK.md
├─ PROJECT_STRUCTURE.md
├─ PERFORMANCE.md
├─ ARCHIVE_PLAN.md
├─ DEPLOY.md
├─ TROUBLESHOOTING.md
├─ TECH_DEBT.md
└─ README.md
```

`reports/`, `standards/`, `prompts/`, `workflows/`는 각각 고유한 역할을 담당합니다.

`docs/` 루트의 공식 문서는 프로젝트의 Current State, Change History, Future Roadmap 및 각 운영 영역의 정책을 관리합니다.

각 문서는 역할이 중복되지 않도록 관리합니다.

---

# Official Documents

프로젝트의 핵심 공식 문서입니다.

| Document | Role |
|----------|------|
| MASTER.md | 프로젝트의 현재 상태(Current State)를 정의 |
| MASTER_SOURCES.md | REPORT와 MASTER의 Evidence 연결 관계 관리 |
| CHANGELOG.md | 프로젝트 변경 이력(Change History) 관리 |
| NEXT_TASK.md | 앞으로 진행할 개발 계획(Roadmap) 관리 |
| TECH_DEBT.md | 기술 부채(Technical Debt) 관리 |
| PROJECT_STRUCTURE.md | 프로젝트 구조와 아키텍처 관리 |
| PERFORMANCE.md | 성능 전략과 최적화 정책 관리 |
| ARCHIVE_PLAN.md | Archive 운영 정책과 데이터 보존 전략 관리 |
| DEPLOY.md | 배포 전략과 운영 정책 관리 |
| TROUBLESHOOTING.md | 문제 해결 절차와 운영 지식 관리 |

---

# Folder Guide

## reports/

Original Project Report를 관리합니다.

프로젝트의 개발 History와 Evidence를 보존합니다.

REPORT는 사용자 최종 확정 이후 Immutable Original Project Report로 관리합니다.

새로운 개발 세션은 기존 REPORT를 수정하지 않고 새로운 REPORT를 생성하여 기록합니다.

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

# GPT Initialization

새로운 GPT는 프로젝트 개발을 시작하기 전에 현재 프로젝트 상태와 운영 규칙을 확인합니다.

기본 확인 순서는 다음과 같습니다.

1. README.md
2. MASTER.md
3. MASTER_SOURCES.md
4. PROJECT_STRUCTURE.md
5. DOCUMENT_RULES.md
6. PROJECT_RULES.md
7. CHANGELOG.md
8. NEXT_TASK.md
9. TECH_DEBT.md
10. PERFORMANCE.md
11. ARCHIVE_PLAN.md
12. DEPLOY.md
13. TROUBLESHOOTING.md
14. workflows/
15. prompts/
16. reports/ (필요한 Evidence 확인 시)

새로운 개발 채팅에서는 START_CHAT Workflow와 START_CHAT_PROMPT의 현재 기준을 함께 따릅니다.

초기화 이후 실제 개발 단계에서는 현재 작업과 직접 관련된 문서와 필요한 REPORT Evidence를 우선적으로 확인합니다.

일부 문서만 확인한 상태에서 프로젝트의 현재 상태나 과거 개발 History를 추측하지 않습니다.

---

# Development Workflow

프로젝트의 기본 운영 흐름은 다음과 같습니다.

```
START_CHAT

↓

Project Initialization

↓

Current State / Related Documents Review

↓

Development

↓

Local / Build / Production Verification

↓

END_SESSION

↓

Original Project Report

↓

REPORT Confirmation

↓

Project Documentation Cycle (PDC)

↓

Official Documents Review

↓

Required Document Updates

↓

Git Commit / Push

↓

Next START_CHAT
```

REPORT는 프로젝트의 개발 History와 Evidence를 관리합니다.

PDC에서는 공식 문서 전체를 검토하되, 해당 개발 세션의 변경 사항이 실제로 영향을 주는 문서만 수정합니다.

---

# Project Operation

새로운 기능을 개발하거나 프로젝트를 수정하는 경우 아래 원칙을 따릅니다.

1. README와 MASTER를 기준으로 현재 프로젝트 상태를 확인합니다.
2. 현재 작업과 관련된 공식 문서와 필요한 Evidence를 확인합니다.
3. 변경 범위와 기존 기능에 대한 영향을 확인합니다.
4. 작은 단위로 개발 또는 문제 해결을 진행합니다.
5. Local, Build 및 변경 범위에 필요한 Production 검증을 수행합니다.
6. 개발 세션 종료 시 END_SESSION 절차를 수행합니다.
7. REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 기준으로 Original Project Report를 작성합니다.
8. 사용자 확인 후 REPORT를 확정하고 Immutable Document로 보존합니다.
9. REPORT를 Evidence로 Project Documentation Cycle(PDC)을 수행합니다.
10. 공식 문서 전체를 검토하고 실제 영향을 받은 문서만 수정합니다.
11. 공식 문서 간 일관성을 확인합니다.
12. Git 상태를 확인하고 필요한 Commit / Push를 완료합니다.
13. 다음 START_CHAT을 준비합니다.

---

# Recommended Start Method

새로운 GPT 개발 채팅에서는 현재 START_CHAT Workflow와 START_CHAT_PROMPT를 기준으로 프로젝트를 초기화합니다.

기본 흐름은 다음과 같습니다.

```
프로젝트 문서 준비

↓

START_CHAT_PROMPT 사용

↓

README 확인

↓

MASTER 및 주요 공식 문서 확인

↓

필요한 REPORT Evidence 확인

↓

프로젝트 초기화

↓

개발 시작
```

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리하며 Git 관리 대상으로 유지합니다.

`docs.zip`은 공식 프로젝트 문서 또는 공식 Git 관리 파일로 사용하지 않습니다.

필요한 경우 새로운 GPT에게 문서를 전달하거나 검토하기 위한 임시 파일로만 생성할 수 있습니다.

---

# Documentation Principles

프로젝트의 모든 공식 문서는 다음 원칙을 따릅니다.

- 새로운 개발자와 새로운 GPT가 별도의 설명 없이도 이해할 수 있도록 작성합니다.
- 하나의 문서는 하나의 역할만 담당합니다.
- 가능한 한 동일한 구조를 유지합니다.
- 문서는 장기 유지보수를 고려하여 작성합니다.
- History, Current State, Change History, Future Roadmap 및 운영 정책을 구분하여 관리합니다.
- REPORT의 상세 Evidence를 Living Document에 불필요하게 중복하지 않습니다.
- 실제 개발 채팅 또는 REPORT에서 확인되지 않은 내용을 추측하여 공식 문서에 추가하지 않습니다.
- Project Documentation Cycle(PDC)에서는 공식 문서 전체를 검토하되 실제 영향을 받은 문서만 수정합니다.
- 프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리합니다.

---

# Related Documents

- MASTER.md
- MASTER_SOURCES.md
- PROJECT_STRUCTURE.md
- DOCUMENT_RULES.md
- PROJECT_RULES.md
- REPORT_TEMPLATE.md
- DOCUMENT_WORKFLOW.md
- REPORT_WORKFLOW.md
- START_CHAT.md
- END_SESSION.md
- START_CHAT_PROMPT.md
- END_SESSION_PROMPT.md

---

# Notes

README.md는 프로젝트 문서 시스템의 Home입니다.

새로운 개발자와 새로운 GPT는 반드시 이 문서부터 확인한 후 프로젝트를 진행합니다.

프로젝트 문서 구조가 변경되는 경우 README도 함께 업데이트합니다.

Project Documentation Cycle(PDC)에서는 공식 문서 전체를 검토하되 모든 문서를 반드시 수정하지는 않습니다.

각 공식 문서는 자신의 역할에 실제 영향을 주는 변경이 확인된 경우에만 REPORT를 Evidence로 수정합니다.

REPORT는 사용자 최종 확정 이후 Immutable Original Project Report로 보존합니다.

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리합니다.

`docs.zip`은 공식 Git 관리 파일이 아니며 필요한 경우 문서 전달 또는 검토를 위한 임시 파일로만 사용합니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- 프로젝트 문서 시스템 Entry Point 최초 작성
- Documentation Structure 및 Folder Guide 정의
- GPT Initialization 순서 정의
- 기본 Development Workflow 정의
- Recommended Start Method 정의

## Version 1.1 (2026-08-17)

- 현재 Project Documentation System(PDS) 구조 반영
- MASTER_SOURCES.md 추가 반영
- Project Documentation Cycle(PDC) 운영 흐름 반영
- REPORT 확정 후 공식 문서 전체 검토 및 필요한 문서만 수정하는 원칙 반영
- REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본 기반 REPORT 작성 절차 반영
- GPT Initialization 순서 최신화
- Development Workflow 및 Project Operation 절차 최신화
- Production 검증 및 Git Commit / Push 절차 반영
- `docs/` 원본 공식 문서의 Git 관리 원칙 반영
- `docs.zip`을 전달·검토용 임시 파일로 한정하는 원칙 반영
- Documentation Principles 및 Related Documents 최신화

---

END OF DOCUMENT

Project : Daily Insight News

Document : README.md

Type : Entry Point

Version : 1.1