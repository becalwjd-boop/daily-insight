# START_CHAT_PROMPT

아래 절차에 따라 Daily Insight News 프로젝트를 초기화하고 개발을 시작하세요.

이 Prompt는 새로운 GPT 개발 채팅에서 프로젝트의 현재 상태와 운영 기준을 정확하게 초기화하기 위한 실행 Prompt입니다.

일부 문서, 이전 대화 기억 또는 요약된 Context만으로 프로젝트 상태를 추측하지 마세요.

현재 `docs/` 내부의 공식 문서와 필요한 REPORT Evidence를 기준으로 프로젝트를 이해하세요.

━━━━━━━━━━━━━━━━━━━━━━

1. 프로젝트 초기화(Project Initialization)

━━━━━━━━━━━━━━━━━━━━━━

먼저 `docs/README.md`를 확인하세요.

`README.md`는 Daily Insight News Project Documentation System의 Entry Point입니다.

README의 현재 GPT Initialization 기준에 따라 프로젝트의 주요 공식 문서를 확인하세요.

프로젝트 초기화 단계에서는 현재 작업과 직접 관련된 문서만 임의로 선택하여 읽고 바로 개발을 시작하지 마세요.

먼저 프로젝트의 Current State, Documentation Structure, Development Rules, Current Roadmap 및 주요 운영 정책을 이해한 후 현재 작업으로 이동하세요.

━━━━━━━━━━━━━━━━━━━━━━

2. 핵심 문서 확인(Core Documentation Review)

━━━━━━━━━━━━━━━━━━━━━━

다음 문서를 기준으로 현재 프로젝트를 초기화하세요.

1. `docs/README.md`
2. `docs/MASTER.md`
3. `docs/MASTER_SOURCES.md`
4. `docs/PROJECT_STRUCTURE.md`
5. `docs/standards/DOCUMENT_RULES.md`
6. `docs/standards/PROJECT_RULES.md`
7. `docs/CHANGELOG.md`
8. `docs/NEXT_TASK.md`
9. `docs/TECH_DEBT.md`
10. `docs/PERFORMANCE.md`
11. `docs/ARCHIVE_PLAN.md`
12. `docs/DEPLOY.md`
13. `docs/TROUBLESHOOTING.md`

필요한 Workflow와 Prompt도 현재 작업에 따라 확인하세요.

프로젝트의 현재 상태는 `MASTER.md`와 각 역할별 공식 문서를 우선 기준으로 판단하세요.

과거 REPORT의 상태를 현재 프로젝트 상태로 간주하지 마세요.

━━━━━━━━━━━━━━━━━━━━━━

3. 문서 역할 구분(Document Responsibility)

━━━━━━━━━━━━━━━━━━━━━━

프로젝트 문서의 역할을 다음과 같이 구분하세요.

- REPORT → Development History / Evidence
- MASTER → Current State
- CHANGELOG → Change History
- NEXT_TASK → Future Roadmap / Development Priority
- TECH_DEBT → Current Technical Debt / Technical Risk
- PROJECT_STRUCTURE → Project Architecture / Documentation Structure
- PERFORMANCE → Performance Strategy
- ARCHIVE_PLAN → Archive Policy
- DEPLOY → Deployment / Production Policy
- TROUBLESHOOTING → Troubleshooting Strategy

각 문서는 자신의 역할에 해당하는 정보만 관리합니다.

REPORT의 상세 History를 Living Document에 불필요하게 반복하지 마세요.

History, Current State, Change History, Future Roadmap 및 Technical Debt를 서로 혼동하지 마세요.

━━━━━━━━━━━━━━━━━━━━━━

4. REPORT Evidence 확인(Report Evidence Review)

━━━━━━━━━━━━━━━━━━━━━━

`MASTER_SOURCES.md`를 통해 MASTER의 주요 Current State와 REPORT Evidence의 연결 관계를 확인하세요.

현재 작업을 이해하기 위해 과거 개발 과정, 시행착오, 중요한 Decision 또는 Decision Reason이 필요한 경우 관련 `REPORT_XX.md`를 확인하세요.

REPORT는 프로젝트의 개발 History와 Evidence입니다.

REPORT를 프로젝트의 현재 상태를 단독으로 판단하기 위한 문서로 사용하지 마세요.

다른 개발 세션의 내용을 현재 세션에서 수행한 작업처럼 취급하지 마세요.

공식 문서 또는 REPORT에서 확인되지 않은 내용을 추측하여 프로젝트 상태로 확정하지 마세요.

━━━━━━━━━━━━━━━━━━━━━━

5. 현재 작업 초기화(Current Task Initialization)

━━━━━━━━━━━━━━━━━━━━━━

전체 프로젝트 초기화가 완료된 후 현재 개발 세션에서 수행할 작업의 범위를 확인하세요.

현재 작업과 직접 관련된 공식 문서, 코드 및 Evidence를 우선적으로 추가 검토하세요.

예시:

- 현재 프로젝트 상태 → `MASTER.md`
- 완료된 변경 사항 → `CHANGELOG.md`
- 앞으로 진행할 작업 → `NEXT_TASK.md`
- 현재 기술적 위험 → `TECH_DEBT.md`
- 프로젝트 구조 → `PROJECT_STRUCTURE.md`
- 성능 / Data Freshness → `PERFORMANCE.md`
- Archive 운영 → `ARCHIVE_PLAN.md`
- 배포 / Production → `DEPLOY.md`
- 반복 가능한 문제 해결 절차 → `TROUBLESHOOTING.md`
- 과거 개발 과정 / Decision Reason → 관련 `REPORT_XX.md`

현재 작업에 필요한 Evidence가 부족한 경우 추측으로 판단하지 마세요.

━━━━━━━━━━━━━━━━━━━━━━

6. 개발 원칙(Development Principles)

━━━━━━━━━━━━━━━━━━━━━━

개발은 `PROJECT_RULES.md`의 현재 기준을 따르세요.

특히 다음 원칙을 준수하세요.

- 현재 Production 서비스의 안정성을 우선합니다.
- 한 번에 큰 변경을 하지 않습니다.
- 가능한 작은 단위로 수정하고 단계적으로 검증합니다.
- 기존 기능을 임의로 제거하지 않습니다.
- 핵심 파일을 수정하기 전에는 현재 전체 코드를 확인합니다.
- 사용자가 전체 파일을 제공한 경우 일부 코드만 기준으로 판단하지 않습니다.
- Home과 Archive가 공유하는 뉴스 수집·분류·품질 로직의 영향 범위를 확인합니다.
- 실제 확인된 사실과 추정 내용을 구분합니다.
- 원인이 확정되지 않은 문제를 확정된 Root Cause처럼 취급하지 않습니다.
- Local 환경의 정상 동작만으로 Production 정상 동작을 확정하지 않습니다.
- 변경 범위에 따라 Build, Web, Android, Archive 및 외부 서비스의 영향을 확인합니다.
- 기존 서비스 안정성과 Data Freshness를 함께 고려합니다.

━━━━━━━━━━━━━━━━━━━━━━

7. 코드 수정 원칙(Code Modification)

━━━━━━━━━━━━━━━━━━━━━━

현재 작업과 관련된 핵심 파일 또는 기존 서비스 전체에 영향을 줄 수 있는 파일을 수정해야 하는 경우,

수정 전에 해당 파일의 현재 전체 내용을 확인하세요.

특히 다음 영역은 신중하게 검토하세요.

- `lib/news.ts`
- `app/page.tsx`
- Archive 관련 코드
- Cache / Data Refresh 관련 코드
- GitHub Actions
- Vercel / Deployment 설정
- Android / Capacitor 관련 설정

기존 코드를 임의로 전면 재작성하지 마세요.

변경이 필요한 범위와 기존 기능에 대한 영향을 먼저 확인한 후 필요한 부분만 수정하세요.

━━━━━━━━━━━━━━━━━━━━━━

8. 개발 진행 및 검증(Development and Verification)

━━━━━━━━━━━━━━━━━━━━━━

개발은 가능한 작은 단위로 진행하세요.

기본 흐름은 다음과 같습니다.

변경 범위 확인

↓

관련 코드 전체 검토

↓

작은 단위 코드 수정

↓

Local Test

↓

Build Verification

↓

Git Status 확인

↓

필요한 경우 Commit / Push

↓

GitHub / GitHub Actions 확인

↓

Vercel Production 확인

↓

공식 도메인 Production 확인

↓

변경 범위에 따른 추가 플랫폼 검증

모든 Web 변경에 Android App Bundle 재배포가 필요한 것은 아닙니다.

Android 변경이 필요한 경우에만 현재 `DEPLOY.md`의 Android 배포 절차를 따르세요.

━━━━━━━━━━━━━━━━━━━━━━

9. 세션 종료(Session Closing)

━━━━━━━━━━━━━━━━━━━━━━

개발 세션 종료 시 `docs/workflows/END_SESSION.md`와 현재 `END_SESSION_PROMPT.md` 기준을 따르세요.

세션 종료 과정에서 공식 문서를 먼저 임의로 업데이트하지 마세요.

기본 종료 흐름은 다음과 같습니다.

Development Session End

↓

REPORT_TEMPLATE.md 준비

↓

현재 개발 채팅 전체 복사본 준비

↓

Original Project Report 작성

↓

REPORT 자체 검토

↓

사용자 확인 및 최종 확정

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

Git Status 확인

↓

필요한 Commit / Push

REPORT는 사용자가 최종 확정한 이후 수정하지 않습니다.

━━━━━━━━━━━━━━━━━━━━━━

10. Documentation 운영 원칙

━━━━━━━━━━━━━━━━━━━━━━

프로젝트 공식 문서의 원본은 `docs/` 내부에서 관리합니다.

`docs/` 내부의 원본 공식 문서는 Git 관리 대상으로 유지합니다.

`docs.zip`은 프로젝트 공식 문서 또는 공식 Git 관리 파일이 아닙니다.

필요한 경우 새로운 GPT에게 문서를 전달하거나 검토하기 위한 임시 파일로만 사용할 수 있습니다.

`docs.zip`을 프로젝트의 Source of Truth로 간주하지 마세요.

Project Documentation Cycle(PDC)에서는 공식 문서 전체를 검토합니다.

단, 모든 공식 문서를 반드시 수정하지는 않습니다.

REPORT Evidence가 각 문서의 역할에 실제 영향을 주는 경우에만 해당 문서를 수정합니다.

━━━━━━━━━━━━━━━━━━━━━━

11. AI 협업 원칙(AI Collaboration)

━━━━━━━━━━━━━━━━━━━━━━

이 프로젝트에서는 기존 프로젝트 구조와 Evidence를 먼저 이해한 후 개발하세요.

GPT의 이전 대화 기억이나 요약된 Context를 공식 문서와 REPORT Evidence보다 우선하지 마세요.

사용자가 전체 코드 또는 전체 공식 문서를 제공한 경우 전체 내용을 검토하세요.

추측으로 코드를 수정하거나 공식 문서에 새로운 사실을 추가하지 마세요.

기존 코드 또는 공식 문서를 임의로 전면 재작성하지 마세요.

문서 수정이 필요한 경우 문서 전체를 검토한 후 수정이 필요한 위치와 내용을 명확하게 구분하여 안내하세요.

사용자가 바로 적용할 수 있도록 Markdown 표, 코드, 목록 및 수정 문구는 그대로 복사·붙여넣기 가능한 완성된 형태로 제공하세요.

━━━━━━━━━━━━━━━━━━━━━━

12. 초기화 완료 보고(Initialization Report)

━━━━━━━━━━━━━━━━━━━━━━

프로젝트 초기화가 완료되면 장황한 문서 요약을 반복하지 말고 아래 내용을 간단하고 명확하게 보고하세요.

- 확인한 핵심 문서
- 현재 프로젝트 상태
- 현재 주요 우선순위
- 현재 남아 있는 주요 기술적 위험
- 현재 작업을 시작하기 위한 준비 상태
- 추가 Evidence 또는 코드가 필요한지 여부

초기화 과정에서 문서 간 충돌이나 불확실한 정보가 발견된 경우 함께 알려주세요.

현재 작업이 이미 사용자에 의해 지정되어 있다면 다시 "진행할 작업을 알려주세요"라고 묻지 말고 해당 작업을 이어서 진행하세요.

현재 작업이 지정되지 않은 경우에만 아래 문장으로 마무리하세요.

"프로젝트 초기화가 완료되었습니다. 진행할 작업을 알려주세요."