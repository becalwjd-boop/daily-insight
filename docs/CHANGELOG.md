# CHANGELOG

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | CHANGELOG.md |
| Type | Living Document |
| Purpose | Project Change History |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-04 |

---

# Purpose

CHANGELOG.md는 Daily Insight News 프로젝트에서 변경된 내용을 기록하는 공식 문서입니다.

프로젝트의 현재 상태(Current State)는 MASTER.md에서 관리하며,

개발 당시의 상세 내용은 Original Project Report(REPORT)에서 관리합니다.

CHANGELOG는 변경 사항(Change)만 기록합니다.

---

# Change Log

---

## 2026-06-05

### Evidence

- REPORT_01.md

### Added

- GitHub Actions 기반 자동 뉴스 저장 기능 구축
- GitHub Secrets 적용
- Vercel Environment Variables 적용
- GitHub Push 기반 자동 배포 구조 구축
- Archive 자동 저장 구조 구축

### Changed

- localhost 기반 API 호출 제거
- Naver OpenAPI 직접 호출 구조 적용
- 경제 및 부동산 검색어를 OR 기반으로 개선

### Fixed

- GitHub Actions 권한(403) 문제 해결
- Git Push non-fast-forward 문제 해결
- Vercel localhost 연결 오류 해결
- 경제 및 부동산 카테고리 기사 0건 문제 해결

---

## 2026-07-04

### Evidence

- REPORT_07.md

---

### Added

- Project Documentation System(PDS) 구축
- Project Documentation System v1.0 Release
- README.md를 Project Documentation Home(Entry Point)로 지정
- docs.zip 기반 프로젝트 초기화 방식 구축
- START_CHAT.md 구축
- END_SESSION.md 구축
- START_CHAT_PROMPT.md 구축
- END_SESSION_PROMPT.md 구축
- REPORT_WORKFLOW.md 구축
- DOCUMENT_WORKFLOW.md 구축

---

### Changed

- MASTER.md 구조 개선
- README 기반 프로젝트 초기화 절차 적용
- Project Documentation Cycle(PDC) 운영 절차 공식화
- 프로젝트 문서 운영 체계 개선

---

### Fixed

- 프로젝트 문서 역할 중복 문제 해결
- 프로젝트 초기화 절차 표준화
- 프로젝트 종료 절차 표준화
- 문서 기반 프로젝트 인수인계 체계 구축

---

### Removed

-

---

## Future Entries

새로운 개발 세션이 종료되면 아래 형식으로 추가합니다.

```md
## YYYY-MM-DD

### Evidence

- REPORT_XX.md

### Added

-

### Changed

-

### Fixed

-

### Removed

-
```

---

# Update Rules

CHANGELOG는 다음 원칙을 따릅니다.

1. REPORT를 근거(Evidence)로 작성합니다.
2. 변경 사항만 기록합니다.
3. 현재 상태는 MASTER에서 관리합니다.
4. 상세 구현 과정은 REPORT에서 관리합니다.
5. 완료되지 않은 작업은 기록하지 않습니다.

---

# Related Documents

- MASTER.md
- MASTER_SOURCES.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md

---

END OF DOCUMENT

Document : CHANGELOG.md

Type : Living Document

Version : 1.0