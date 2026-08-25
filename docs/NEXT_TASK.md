# NEXT_TASK

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | NEXT_TASK.md |
| Type | Living Document |
| Purpose | Project Roadmap and Next Development Tasks |
| Version | 1.4 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

NEXT_TASK.md는 Daily Insight News 프로젝트의 앞으로 진행할 개발 계획과 우선순위를 관리하는 공식 문서입니다.

현재 진행 중인 작업(Active), 향후 개발 예정 작업(Planned), 장기적으로 검토할 작업(Deferred)을 구분하여 관리합니다.

완료된 작업은 REPORT와 CHANGELOG를 근거로 관리하며, NEXT_TASK에는 앞으로 진행할 내용을 중심으로 기록합니다.

---

# Recently Completed

최근 완료된 주요 작업입니다.

- 메인 페이지 최초 로딩 속도 대폭 개선
- 텍스트 우선 렌더링 및 썸네일 순차 로딩 구조 적용
- 기사 0건 표시 문제 해결
- 썸네일 표시 및 fallback 구조 개선
- 실시간 뉴스의 속보·단독·특종 표시와 최신순 정렬 구조 개선
- Android 앱 아이콘 및 Adaptive Icon 적용
- Google Play Store Feature Graphic 및 스크린샷 최신화
- Google Play Store 앱 설명 전면 개편
- Google Play 비공개 테스트 완료
- Google Play Production Access 승인
- Google Play Store 프로덕션 출시
- 공식 도메인 `dailyinsightnews.kr` 도입
- Vercel Custom Domain 및 가비아 DNS 연결
- Google AdSense 사이트 연결 및 소유권 확인
- `public/ads.txt` 배포 및 Ads.txt 승인 완료
- Git / GitHub 배포 환경 문제 정리
- `docs.zip` 및 임시 작업 파일의 Git 관리 정책 정리
- END_SESSION / REPORT 작성 운영 절차 개선

---

# Active Tasks

현재 우선적으로 진행하는 작업입니다.

## Documentation

- REPORT_11을 Evidence로 필요한 공식 문서 최신화
- REPORT_11 기반 PDC 종료 절차 완료
- END_SESSION_PROMPT.md Version 2.1 반영
- Google Play / AdSense / Git 운영 경험을 관련 공식 문서에 반영

---

## Service

- 접속 시 최신 뉴스가 즉시 표시되지 않는 문제 원인 분석 및 해결
- 새로고침을 반복해야 최신 뉴스가 반영되는 문제 해결
- 웹과 Android 앱의 뉴스 갱신 동작 점검
- 경제·금융·기업·부동산·사회·국제·연예·스포츠 8개 카테고리 전체 뉴스 품질 점검
- 부동산 카테고리 오분류 기사 우선 개선
- `전세버스 → 전세`와 같은 단순 문자열 기반 오분류 방지
- 검색 키워드, positive keyword, negative keyword 및 category filter 재검토
- Home과 Archive에 동일한 뉴스 품질 개선 로직 적용
- 서비스 운영 안정성 유지

---

## Performance

- 뉴스 데이터 freshness 지연 원인 분석
- Naver OpenAPI → News Processing → Next.js Cache → Vercel → Client Rendering 데이터 흐름 점검
- Pull-to-Refresh 및 일반 새로고침의 데이터 갱신 구조 점검
- 캐시 전략 점검 및 개선
- 현재 개선된 초기 로딩 성능 유지
- 뉴스 품질 개선 이후에도 현재 로딩 성능 유지

---

# Planned Tasks

향후 개발 예정인 기능입니다.

## News

- Daily Insight News 자체 요약·분석 콘텐츠 강화
- AI 3줄 뉴스 요약
- AI 핵심 뉴스
- AI 브리핑
- 뉴스 검색 기능
- 인기 뉴스 기능
- 기사 추천 기능
- BigKinds 및 외부 뉴스 데이터를 활용한 1990년대부터의 뉴스 아카이브 구축
- 과거 뉴스 날짜별·카테고리별 Archive 구축

---

## UI / UX

- 뉴스 썸네일 추가 개선
- 사용자 인터페이스 개선
- 모바일 사용성 향상
- 뉴스 탐색 편의 기능 확대

---

## Platform

- Android 앱 고도화
- iOS Web App 사용성 개선
- 사용자 편의 기능 확대
- Daily Insight News 자체 콘텐츠 가치 개선 후 Google AdSense 재검토

---

## Infrastructure

- 자동화 기능 확대
- 서비스 운영 고도화
- 문서 관리 자동화 검토
- 대규모 과거 뉴스 데이터 도입을 고려한 데이터 저장·로딩 구조 설계

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
| Critical | 접속 및 새로고침 시 최신 뉴스가 즉시 반영되지 않는 문제 해결 |
| Critical | 뉴스 데이터 갱신 및 캐시 구조 원인 분석 |
| High | 8개 카테고리 전체 뉴스 품질 및 관련도 개선 |
| High | 부동산 등 카테고리 오분류 기사 제거 |
| High | Home과 Archive의 동일한 뉴스 품질 기준 유지 |
| High | 현재의 빠른 초기 로딩 성능 유지 |
| High | Daily Insight News 자체 콘텐츠 가치 강화 |
| Medium | AdSense `가치가 별로 없는 콘텐츠` 개선 후 재검토 |
| Medium | AI 3줄 뉴스 요약 |
| Medium | AI 핵심 뉴스 및 AI 브리핑 |
| Medium | BigKinds 등 외부 데이터를 활용한 1990년대 뉴스 Archive 구축 |
| Low | Documentation System 추가 고도화 |

---

# Update Rules

NEXT_TASK는 다음 원칙을 따릅니다.

1. 완료된 작업은 Active Tasks에서 제거합니다.
2. 완료된 작업은 CHANGELOG와 REPORT를 통해 관리합니다.
3. 새로운 개발 계획은 Planned Tasks에 추가합니다.
4. 당장 진행하지 않는 아이디어는 Deferred Tasks에 기록합니다.
5. 우선순위는 프로젝트 상황에 따라 조정합니다.
6. REPORT를 근거(Evidence)로 완료 여부를 판단하여 갱신합니다.
7. 실제 운영 서비스에서 확인된 핵심 장애 또는 품질 문제는 신규 기능보다 높은 우선순위로 관리합니다.

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
- 현재 프로젝트는 실제 Service Operation / Improvement 단계에 있습니다.
- 새로운 기능보다 실제 운영 서비스에서 발견된 핵심 문제 해결을 우선합니다.
- 현재 최우선 과제는 뉴스 최신성 및 데이터 갱신 문제 해결입니다.
- 두 번째 핵심 과제는 8개 카테고리 전체 뉴스 품질 개선입니다.
- Home과 Archive는 동일한 뉴스 수집 및 품질 기준을 유지합니다.
- 기사 수보다 뉴스 품질과 관련성을 우선합니다.
- 뉴스 품질 개선 과정에서도 현재의 빠른 초기 로딩 성능을 유지합니다.
- 공식 문서는 REPORT를 근거(Evidence)로 사용하며, 사용자가 전체 문서를 제공한 후 함께 검토하여 수정하는 것을 원칙으로 합니다.
- END_SESSION REPORT 작성 시 REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 기준 자료로 사용합니다.
- Google Play Store 프로덕션 출시는 완료되었으며 Android 앱은 운영 및 고도화 단계로 관리합니다.
- Google AdSense 기술적 연결과 ads.txt 승인은 완료되었으며, 서비스 자체 콘텐츠 가치 개선 후 사이트 재검토를 진행합니다.
- AdSense 재검토 자체보다 Daily Insight News의 독자적인 콘텐츠 가치 향상을 우선합니다.
- 과거 뉴스 Archive는 BigKinds 등 외부 뉴스 데이터를 활용하여 1990년대부터 구축하는 것을 장기 목표로 유지합니다.
- 과거 뉴스 데이터가 추가되더라도 현재의 빠른 초기 로딩 속도를 유지합니다.
- AI 기능은 현재 핵심 품질 문제 해결 이후 AI 3줄 요약 → AI 핵심 뉴스 → AI 브리핑 순으로 단계적으로 확장합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : NEXT_TASK.md

Type : Living Document

Version : 1.4