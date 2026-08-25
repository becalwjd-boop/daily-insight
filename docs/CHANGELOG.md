# CHANGELOG

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | CHANGELOG.md |
| Type | Living Document |
| Purpose | Project Change History |
| Version | 1.2 |
| Status | Active |
| Last Updated | 2026-08-17 |

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

## 2026-07-05

### Evidence

- REPORT_08.md

### Added

- Home과 Archive가 동일한 뉴스 수집 로직을 사용하도록 구조를 통합
- normalize-archives.ts를 추가하여 기존 Archive JSON을 새로운 정책으로 정규화할 수 있는 기능 구현
- 부동산 카테고리에 관련도(Relevance Score) 기반 정렬 로직 추가
- Archive 카테고리별 최대 100개 저장 정책 적용

### Changed

- Archive 자동 저장 시간을 한국시간 23:59 기준으로 변경
- Home과 Archive가 동일한 검색어, 필터, 중복 제거 로직을 사용하도록 구조 변경
- 부동산 검색 구조를 검색어 확장 중심에서 관련도 기반 구조로 개선
- Archive 저장 구조를 장기 운영 정책에 맞게 개선

### Fixed

- Home과 Archive의 뉴스 수집 기준이 서로 달랐던 문제 해결
- Archive에서 카테고리별 기사 수가 과도하게 증가하던 문제 해결
- GitHub Actions Archive 자동 저장 구조 안정화
- Archive JSON 구조를 새로운 정책에 맞게 정규화
- 부동산 카테고리 기사 부족 문제를 관련도 기반 구조로 개선

### Removed

-

---

## 2026-07-07

### Evidence

- REPORT_09.md

### Added

- Android App Bundle 생성 및 Google Play Console 비공개 테스트 운영 절차 공식 문서화
- REPORT_TEMPLATE v1.1 작성 기준 추가
- REPORT 작성 철학(Writing Philosophy) 추가
- REPORT 작성 절차(Standard Workflow) 추가
- Original Project Report 작성 기준 추가
- 긴 REPORT 작성 시 Part 단위 작성 원칙 추가

### Changed

- Project Documentation Cycle(PDC) 운영 절차를 최신 운영 방식으로 개선
- REPORT 기반 공식 문서 업데이트 절차를 명확하게 정의
- MASTER.md의 Android 배포 절차를 최신 방식으로 수정
- MASTER.md의 Development Workflow를 Android 배포 절차를 포함하도록 개선
- REPORT_TEMPLATE를 실제 운영 경험을 반영하도록 보완
- END_SESSION_PROMPT의 Management Principles를 최신 운영 방식으로 개선
- 공식 문서는 사용자가 전체 문서를 제공한 후 함께 검토하여 수정하는 운영 원칙을 적용

### Fixed

- REPORT 작성 기준이 부족하여 발생하던 문서 품질 편차 문제 해결
- REPORT와 MASTER 간 운영 원칙 불일치 문제 해결
- Android 배포 절차가 문서화되지 않았던 문제 해결
- REPORT 작성 시 기존 양식과 문체가 일관되지 않던 문제 해결
- REPORT 생성 절차가 실제 운영 방식과 일부 달랐던 문제 해결

### Removed

-

---

## 2026-07-15

### Evidence

- REPORT_10.md

### Added

- Android 앱 신규 아이콘 및 Adaptive Icon 적용
- Google Play Store Feature Graphic 신규 제작
- Google Play Store 스크린샷 전면 최신화
- Google Play Store 간단한 설명 및 자세한 설명 전면 개편
- 원클릭 헤드라인 공유 기능을 스토어 핵심 기능으로 추가
- Google Play Console Version 1.0.5(AAB) 제출

### Changed

- 최초 로딩 구조를 텍스트 우선, 썸네일 순차 로딩 방식으로 개선
- Google Play Store 브랜딩을 현재 서비스 수준에 맞게 전면 개선
- 서비스 운영 방향을 기능 구현 중심에서 품질 및 운영 중심으로 변경
- 향후 개발 우선순위를 1990년대 과거 뉴스 아카이브 구축, 뉴스 품질 개선, AI 기능 중심으로 재정리

### Fixed

- 모바일 최초 로딩 속도 대폭 개선
- 기사 0건 표시 문제 해결
- 썸네일 표시 문제 해결
- save API 제거를 통한 아카이브 저장 구조 충돌 문제 해결
- Google Play Store 리소스를 최신 서비스 기준으로 정비

### Removed

- app/api/save-today 기반 수동 저장 API

---

## 2026-08-17

### Evidence

- REPORT_11.md

### Added

- Daily Insight News 공식 도메인 `dailyinsightnews.kr` 도입
- Vercel Custom Domain 및 가비아 DNS 연결
- Google AdSense 사이트 연결 및 소유권 확인 설정
- `public/ads.txt` 추가 및 공식 도메인 배포
- Google Play Store 프로덕션 출시
- Google Analytics / Google AdSense 기반 서비스 운영 환경 구성

### Changed

- 공식 웹 서비스 주소를 Vercel 기본 도메인에서 `dailyinsightnews.kr` 중심으로 변경
- Android 앱 운영 단계를 비공개 테스트에서 Google Play Store 프로덕션 운영으로 전환
- 실시간 뉴스의 속보·단독·특종 표시가 기본 최신순 정렬을 훼손하지 않도록 정렬 방식 개선
- 기사 이미지 로딩 및 fallback 표시 구조 개선
- `docs/` 원본 공식 문서는 Git으로 관리하고 `docs.zip`은 공식 Git 관리 대상에서 제외하도록 문서 관리 원칙 변경
- 배포에 필요하지 않은 Google Play Console 작업용 이미지 등 임시 파일을 Git 관리 대상에서 제외
- Project Documentation Cycle(PDC)의 END_SESSION 절차를 `REPORT_TEMPLATE.md`와 현재 개발 채팅 전체 복사본을 함께 사용하는 방식으로 개선
- REPORT 작성 자료가 준비된 경우 작성 형식에 대한 추가 논의 없이 기존 Original Project Report 형식으로 즉시 작성하도록 운영 원칙 개선

### Fixed

- Google AdSense 사이트 소유권 확인이 정상적으로 이루어지지 않던 문제 해결
- 공식 도메인에서 `/ads.txt`가 404로 표시되던 문제 해결
- Google AdSense Ads.txt 상태가 `찾을 수 없음`으로 표시되던 문제 해결 및 `승인됨` 상태 확인
- Git Author Identity 미설정으로 커밋할 수 없던 문제 해결
- 원격 저장소 변경사항으로 인해 발생한 Git `fetch first` Push 문제 해결
- Git에서 한글 파일 경로가 escape sequence로 표시되던 문제 해결
- `docs.zip` 및 임시 작업 파일이 반복적으로 Git 변경사항에 표시되던 관리 문제 해결
- 실시간 뉴스에서 중요 기사 우선 배치로 인해 최신순 정렬이 깨지던 문제 해결

### Removed

- `docs.zip`의 공식 Git 추적 및 관리
- 배포에 필요하지 않은 Google Play Console 작업용 임시 이미지의 Git 관리

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
6. REPORT 작성이 완료된 이후에만 CHANGELOG를 수정합니다.

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

Version : 1.2