# NEXT_TASK

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | NEXT_TASK.md |
| Type | Living Document |
| Purpose | Project Roadmap and Next Development Tasks |
| Version | 1.3 |
| Status | Active |
| Last Updated | 2026-07-15 |

---

# Purpose

NEXT_TASK.md는 Daily Insight News 프로젝트의 앞으로 진행할 개발 계획과 우선순위를 관리하는 공식 문서입니다.

현재 진행 중인 작업(Active), 향후 개발 예정 작업(Planned), 장기적으로 검토할 작업(Deferred)을 구분하여 관리합니다.

완료된 작업은 REPORT와 CHANGELOG를 근거로 관리하며, NEXT_TASK에는 앞으로 진행할 내용을 중심으로 기록합니다.

---

# Recently Completed

최근 완료된 주요 작업입니다.

- Project Documentation System(PDS) v1.0 구축
- README(Home) 기반 프로젝트 초기화 체계 구축
- Project Documentation Cycle(PDC) 구축
- START_CHAT / END_SESSION Workflow 구축
- START_CHAT_PROMPT / END_SESSION_PROMPT 구축
- 공식 프로젝트 문서 체계 구축
- Home / Archive 뉴스 수집 로직 통합
- Archive 카테고리별 최대 100개 저장 정책 적용
- Archive 저장 시간을 한국시간 23:59 기준으로 변경
- GitHub Actions Archive 자동 저장 복구
- normalize-archives.ts 기반 Archive 정규화 기능 구현
- 부동산 관련도(Relevance Score) 기반 정렬 1차 적용
- Android App Bundle 생성 및 Google Play Console 비공개 테스트 업로드 완료
- Google Play Console 비공개 테스트 검토 제출 완료
- REPORT_TEMPLATE v1.1 보완
- Project Documentation System(PDS) 운영 절차 개선
- Android 배포 절차 문서화
- 메인 페이지 최초 로딩 속도 대폭 개선
- 썸네일 순차 로딩 구조 적용
- 기사 0건 표시 문제 해결
- 썸네일 표시 문제 해결
- save API 제거 및 아카이브 저장 구조 정리
- Android 앱 아이콘 및 Adaptive Icon 적용
- Google Play Store Feature Graphic 전면 교체
- Google Play Store 스크린샷 최신화
- Google Play Store 앱 설명 전면 개편
- 원클릭 헤드라인 공유 기능을 서비스 핵심 기능으로 정리
- Google Play Version 1.0.5(AAB) 제출

---

# Active Tasks

현재 우선적으로 진행하는 작업입니다.

## Documentation


---

## Service

- 1990년대부터의 과거 뉴스 아카이브 구축 설계
- 카테고리별 뉴스 품질 개선
- 속보 및 단독 기사 노출 품질 개선
- 서비스 안정성 향상
- 사용자 경험(UX) 개선
- Google Play 비공개 테스트 진행 및 운영
- Google Play 프로덕션 출시 준비

---

## Performance

- 현재 개선된 초기 로딩 성능 유지
- 대용량 과거 뉴스 데이터에서도 빠른 로딩 유지
- 뉴스 처리 성능 개선
- 캐시 전략 개선

---

# Planned Tasks

향후 개발 예정인 기능입니다.

## News

- AI 3줄 뉴스 요약
- AI 핵심 뉴스
- AI 브리핑
- 뉴스 검색 기능
- 인기 뉴스 기능
- 기사 추천 기능
- 카테고리 품질 향상
- BigKinds 및 외부 뉴스 데이터를 활용한 1990년대부터의 뉴스 아카이브 구축
- 날짜별·카테고리별 최대 100개 기사 구축

---

## UI / UX

- 뉴스 썸네일 개선
- 사용자 인터페이스 개선
- 모바일 사용성 향상

---

## Platform

- Android 앱 고도화
- 사용자 확보 이후 애드센스 적용
- 사용자 편의 기능 확대
- Google Play 프로덕션 출시

---

## Infrastructure

- 자동화 기능 확대
- 서비스 운영 고도화
- 문서 관리 자동화 검토

---

# Deferred Tasks

좋은 아이디어이지만 현재는 보류된 작업입니다.

## Documentation Improvements

향후 문서 운영 시스템(Document Operating System)을 고도화하기 위한 개선 과제입니다.

- Documentation Audit 자동화
- PDC 자동화
- GLOSSARY.md 구축
- MASTER_PROMPT.md 작성
- CHANGELOG_PROMPT.md 작성
- CHANGELOG_TEMPLATE.md 구축

---

## Documentation System

### GLOSSARY.md

**Status**

Deferred

**Reason**

현재는 공식 문서 수가 많지 않아
용어 정의의 필요성이 낮습니다.

**Trigger**

아래 조건 중 하나가 충족되면 작성합니다.

- 공식 문서 20개 이상
- 동일 용어가 여러 문서에서 반복
- MASTER가 과도하게 길어짐

---

## Future Improvements

- 프로젝트 운영 자동화 확대
- 문서 관리 시스템 고도화
- GPT 협업 프로세스 지속 개선

---

# Priority

현재 개발 우선순위입니다.

| Priority | Description |
|----------|-------------|
| High | BigKinds 등 외부 뉴스 데이터를 활용한 1990년대 뉴스 아카이브 구축 |
| High | 뉴스 품질 및 관련도 알고리즘 개선 |
| High | 속보 및 단독 기사 노출 품질 개선 |
| High | 현재의 빠른 초기 로딩 성능 유지 |
| Medium | AI 3줄 뉴스 요약 |
| Medium | AI 핵심 뉴스 및 AI 브리핑 |
| Medium | Google Play 프로덕션 출시 |
| Medium | 사용자 확보 이후 애드센스 적용 |
| Low | Documentation System 고도화 |

---

# Update Rules

NEXT_TASK는 다음 원칙을 따릅니다.

1. 완료된 작업은 Active Tasks에서 제거합니다.
2. 완료된 작업은 CHANGELOG와 REPORT를 통해 관리합니다.
3. 새로운 개발 계획은 Planned Tasks에 추가합니다.
4. 당장 진행하지 않는 아이디어는 Deferred Tasks에 기록합니다.
5. 우선순위는 프로젝트 상황에 따라 조정합니다.
6. REPORT를 근거(Evidence)로 완료 여부를 판단하여 갱신합니다.

---

# Related Documents

- MASTER.md
- CHANGELOG.md
- TECH_DEBT.md
- REPORT_WORKFLOW.md
- DOCUMENT_WORKFLOW.md

---

# Notes

- NEXT_TASK는 프로젝트의 미래 계획(Roadmap)을 관리합니다.
- 현재 상태(Current State)는 MASTER에서 관리합니다.
- 변경 이력은 CHANGELOG에서 관리합니다.
- 프로젝트의 History는 REPORT에서 관리합니다.
- 새로운 아이디어는 즉시 구현하지 않고 먼저 NEXT_TASK에 기록하여 검토합니다.
- Project Documentation System(PDS)은 구축 완료되었습니다.
- 현재 프로젝트는 Service Improvement 단계로 진입하였습니다.
- Home과 Archive는 동일한 뉴스 수집 로직을 유지하는 것을 공식 개발 원칙으로 합니다.
- Google Play 배포는 비공개 테스트 → 프로덕션 출시 순서를 공식 운영 절차로 합니다.
- Android 배포 관련 작업은 MASTER.md의 Development Workflow를 기준으로 진행합니다.
- 공식 문서는 REPORT를 근거(Evidence)로 사용하며, 사용자가 전체 문서를 제공한 후 함께 검토하여 수정하는 것을 원칙으로 합니다.
- 과거 뉴스 아카이브 구축은 BigKinds 등 외부 뉴스 데이터를 활용하여 1990년대부터 구축하는 것을 목표로 합니다.
- 과거 뉴스 데이터가 추가되더라도 현재의 빠른 초기 로딩 속도를 유지하는 것을 최우선 개발 원칙으로 합니다.
- 기사 수보다 뉴스 품질을 우선하며, 속보 및 단독 기사의 노출 품질을 지속적으로 개선합니다.
- AI 기능은 AI 3줄 요약 → AI 핵심 뉴스 → AI 브리핑 순으로 단계적으로 확장합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : NEXT_TASK.md

Type : Living Document

Version : 1.3