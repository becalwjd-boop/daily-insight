# START_CHAT

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | START_CHAT.md |
| Type | Workflow |
| Purpose | Project Initialization Workflow |
| Version | 2.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

---

# Purpose

START_CHAT.md는 새로운 GPT 채팅에서 Daily Insight News 프로젝트를 시작하기 위한 공식 초기화 절차(Standard Operating Procedure)를 정의합니다.

프로젝트를 새로 시작하는 모든 개발자와 GPT는 반드시 이 절차를 따라 프로젝트를 초기화한 후 개발을 진행합니다.

---

# Recommended Start Method

새로운 GPT 채팅에서는 아래 방법을 권장합니다.

```
Project Folder

↓

docs/

↓

docs.zip 생성

↓

새로운 GPT 채팅

↓

docs.zip 업로드

↓

START_CHAT_PROMPT 입력

↓

README.md 확인

↓

프로젝트 초기화

↓

개발 시작
```

가능한 한 docs 폴더 전체를 ZIP으로 업로드하여 문서 누락을 방지합니다.

---

# GPT Initialization Procedure

새로운 GPT는 아래 절차를 따릅니다.

### Step 1

README.md를 확인하여 프로젝트 문서 구조를 이해합니다.

---

### Step 2

README.md의 GPT Initialization Sequence에 따라 필요한 공식 문서를 확인합니다.

---

### Step 3

현재 작업(Task)에 필요한 문서를 우선적으로 확인합니다.

예시

- 현재 상태 확인 → MASTER.md
- 변경 사항 확인 → CHANGELOG.md
- 앞으로의 작업 확인 → NEXT_TASK.md
- 기술 부채 확인 → TECH_DEBT.md
- 구조 확인 → PROJECT_STRUCTURE.md

---

### Step 4

프로젝트를 초기화한 후 개발을 시작합니다.

---

# Documentation Initialization Principle

프로젝트 문서는 README.md를 Entry Point로 사용합니다.

새로운 GPT는 개별 문서를 임의로 확인하지 않고,

README.md의 안내에 따라 필요한 문서를 순서대로 확인합니다.

---

# Development Cycle

프로젝트는 아래 순환 구조를 따릅니다.

```
START_CHAT

↓

README

↓

Development

↓

CHANGELOG

↓

END_SESSION

↓

docs.zip Update

↓

Next START_CHAT
```

이 순환 구조를 통해 프로젝트의 문서와 개발 상태를 항상 최신으로 유지합니다.

---

# Responsibilities

### Developer

- docs.zip 최신 상태 유지
- 필요한 문서 업데이트
- START_CHAT_PROMPT 사용

---

### GPT

- README부터 확인
- 필요한 문서를 스스로 판단하여 확인
- 프로젝트를 초기화한 후 개발 진행
- 문서 업데이트가 필요한 경우 사용자에게 안내

---

# Related Documents

- README.md
- START_CHAT_PROMPT.md
- END_SESSION.md
- DOCUMENT_WORKFLOW.md
- PROJECT_RULES.md

---

# Notes

START_CHAT는 프로젝트 초기화 절차를 관리합니다.

프로젝트 이해는 README.md를 기준으로 진행합니다.

새로운 GPT는 README.md를 Entry Point로 사용합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : START_CHAT.md

Type : Workflow

Version : 2.0