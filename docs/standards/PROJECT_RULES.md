# PROJECT_RULES

## Daily Insight News Project

Version : 1.1

Status : Official Standard

Last Updated : 2026-08-17

---

## Documentation Self-Explanation Principle

프로젝트의 모든 공식 문서는
새로운 개발자와 새로운 GPT가
별도의 설명 없이도
문서의 역할, 사용 목적, 활용 방법을 스스로 이해할 수 있도록 작성합니다.

---

# 목적 (Purpose)

본 문서는 Daily Insight News 프로젝트의 공식 개발 원칙을 정의합니다.

모든 개발 작업은 본 문서를 기준으로 진행합니다.

프로젝트의 안정성을 유지하면서 기능을 확장하는 것을 목표로 합니다.

---

# 핵심 개발 원칙

## 1. 기존 서비스 안정성 우선

새로운 기능을 추가하거나 기존 기능을 수정할 때에는

현재 배포 중인 서비스가 정상적으로 동작하는 것을 최우선으로 합니다.

새로운 기능보다 기존 기능이 깨지지 않는 것이 더 중요합니다.

Local 환경에서 정상 동작하더라도 실제 Production 환경에서 동일하게 동작하는지 확인합니다.

Web, Android, Archive, 외부 서비스 등 기존 운영 영역에 영향을 줄 수 있는 변경은 영향 범위를 먼저 확인합니다.

---

## 2. 단계별 개발

한 번에 큰 변경을 하지 않습니다.

기능은 가능한 작은 단위로 수정합니다.

각 단계마다 정상 동작을 확인한 후 다음 단계를 진행합니다.

문제 해결 작업에서는 여러 가능성을 한 번에 변경하지 않고 원인을 단계적으로 좁힌 후 필요한 변경만 적용합니다.

---

## 3. 큰 리팩토링 금지

프로젝트 전체 구조를 한 번에 변경하지 않습니다.

리팩토링이 필요한 경우에는

작은 단위로 나누어 진행합니다.

---

## 4. 핵심 파일 수정 원칙

핵심 파일은 수정할 수 있습니다.

단,

프로젝트 전체 동작에 영향을 줄 수 있으므로

수정 전에는 반드시 현재 전체 코드를 확인합니다.

필요한 경우

전체 파일을 다시 검토한 후 수정합니다.

특히 다음과 같은 핵심 파일은 더욱 신중하게 수정합니다.

예)

lib/news.ts

app/page.tsx

Archive 관련 코드

캐시 및 데이터 갱신 관련 코드

GitHub Actions

Vercel 및 배포 설정

Android / Capacitor 관련 설정

---

# 개발 절차

모든 기능 개발은 아래 순서를 따릅니다.

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

Git 상태 확인

↓

Commit

↓

Push

↓

GitHub / GitHub Actions 확인

↓

Vercel Production 배포 확인

↓

공식 도메인 Production 확인

↓

변경 범위에 따른 플랫폼 검증

↓

완료


Android 변경이 필요한 경우에만 Capacitor Sync, Android Studio, App Bundle 및 Google Play 배포 절차를 추가로 수행합니다.

모든 Web 변경에 Android App Bundle 재배포가 필요한 것은 아닙니다.

구체적인 배포 절차는 DEPLOY.md의 현재 운영 정책을 따릅니다.

---

# Git 운영 원칙

main 브랜치는 항상 안정적인 상태를 유지합니다.

필요한 경우

별도 브랜치에서 테스트를 진행한 후

main으로 병합합니다.

Commit 전에는 `git status`를 확인하여 의도한 파일만 변경 대상에 포함되었는지 확인합니다.

`docs/` 내부의 원본 공식 문서는 Git 관리 대상으로 유지합니다.

`docs.zip`, Google Play Console 작업용 이미지 등 전달·검토·작업용 임시 파일은 공식 Git 관리 대상으로 사용하지 않습니다.

PDC 종료 전 필요한 변경사항의 Commit / Push 완료 여부를 확인합니다.

---

# 코드 수정 원칙

기존 기능을 임의로 제거하지 않습니다.

기존 기능을 변경해야 하는 경우에는

영향 범위를 먼저 확인합니다.

필요하면 전체 코드를 검토한 후 수정합니다.

기능 제거 또는 구조 변경이 필요한 경우에는 제거 이유와 영향 범위를 먼저 확인합니다.

Home과 Archive가 공유하는 뉴스 수집·분류·품질 로직은 한쪽만 독립적으로 변경하지 않습니다.

---

# 성능 개선 원칙

기능보다 성능을 위해 기존 기능을 제거하지 않습니다.

성능 개선은

동일한 기능을 유지한 상태에서 진행합니다.

초기 로딩 속도와 사용자 체감 성능을 우선합니다.

단, 빠른 화면 표시를 위해 오래된 뉴스 데이터가 지속적으로 제공되어서는 안 됩니다.

뉴스 서비스의 성능은 초기 로딩 속도뿐 아니라 Data Freshness를 함께 고려합니다.

캐시 전략은 로딩 성능과 최신 뉴스 데이터 반영 사이의 균형을 유지하도록 설계합니다.

대규모 과거 Archive 또는 AI 기능이 추가되더라도 현재의 빠른 초기 로딩 성능을 유지하는 것을 원칙으로 합니다.

---

# UI 수정 원칙

UI가 안정적으로 동작하는 경우

불필요한 디자인 변경은 하지 않습니다.

UI 변경은

사용성이 실제로 개선되는 경우에만 진행합니다.

---

# 문서 관리 원칙

개발 세션 종료 시 Project Documentation Cycle(PDC)을 수행합니다.

REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 기준으로 Original Project Report를 작성하고 확정합니다.

REPORT 확정 이후 공식 문서 전체를 검토합니다.

단, 모든 공식 문서를 반드시 수정하는 것은 아닙니다.

해당 개발 세션의 변경 사항이 각 문서의 역할에 실제 영향을 주는 경우에만 REPORT를 Evidence로 수정합니다.

검토 대상에는 다음 공식 문서가 포함됩니다.

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- PROJECT_STRUCTURE.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

공식 문서는 사용자가 문서 전체 내용을 제공한 후 REPORT와 현재 프로젝트 상태를 기준으로 함께 검토하여 수정합니다.

PDC 종료 전 공식 문서 간 일관성과 Git Commit / Push 상태를 확인합니다.

---

# REPORT 작성 원칙

개발 채팅이 종료되면

REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본을 기준으로

Original Project Report를 생성합니다.

REPORT는 프로젝트의 History와 Evidence를 관리합니다.

실제 개발 채팅에서 확인되지 않은 내용을 추측하여 기록하지 않습니다.

중요한 개발 과정, 시행착오, Decision 및 Decision Reason을 보존합니다.

REPORT는 사용자 확정 이후 Immutable Original Project Report로 보존하며 수정하지 않습니다.

---

# 문제 해결 원칙

문제를 해결하는 과정도 프로젝트의 중요한 Evidence입니다.

증상만을 기준으로 수정하지 않고 가능한 Root Cause를 단계적으로 분석합니다.

확인된 사실과 추정 원인을 구분합니다.

원인이 확정되지 않은 문제는 추정 원인을 확정 사실처럼 기록하지 않습니다.

Local, GitHub, Vercel, Production Web, Android, External Service 등 문제가 발생하는 계층을 구분하여 확인합니다.

중요한 문제 해결 과정과 Evidence는 REPORT에 기록합니다.

완료된 변경 사항은 CHANGELOG에서 관리합니다.

현재 남아 있는 기술적 위험은 TECH_DEBT에서 관리합니다.

반복적으로 사용할 수 있는 문제 해결 절차와 진단 원칙은 TROUBLESHOOTING에서 관리합니다.

중요한 문제 해결 후에는 실제 Production 환경에서 정상 동작 여부를 확인합니다.

---

# AI 협업 원칙

AI는 기존 프로젝트 구조를 우선 이해한 후 개발을 진행합니다.

필요한 경우

전체 코드를 먼저 검토합니다.

추측으로 코드를 수정하지 않습니다.

기존 기능이 깨질 가능성이 있는 경우에는

전체 코드를 요청한 후 수정합니다.

사용자가 전체 파일 또는 전체 공식 문서를 제공한 경우 일부 내용만 기준으로 판단하지 않고 전체 내용을 검토합니다.

기존 코드나 공식 문서를 임의로 전면 재작성하지 않고 필요한 변경 범위와 이유를 먼저 확인합니다.

문서 수정 시에는 전체 문서를 검토한 후 수정이 필요한 위치와 내용을 명확하게 구분하여 안내합니다.

실제 코드, REPORT 또는 사용자가 제공한 Evidence에서 확인되지 않은 내용을 추측하여 프로젝트의 현재 상태로 기록하지 않습니다.

---

# 프로젝트 운영 원칙

프로젝트는

"현재 상태"

와

"프로젝트 역사"

를 분리하여 관리합니다.

현재 상태는

MASTER.md

프로젝트 역사는

REPORT에 기록합니다.

완료된 변경 이력은 CHANGELOG.md에서 관리합니다.

향후 개발 계획과 우선순위는 NEXT_TASK.md에서 관리합니다.

현재 남아 있는 기술적 부담과 위험은 TECH_DEBT.md에서 관리합니다.

각 공식 문서는 자신의 역할만 담당하며 동일한 정보를 불필요하게 중복 관리하지 않습니다.

현재 프로젝트는 실제 Service Operation / Improvement 단계이므로 신규 기능보다 실제 운영 서비스의 안정성, 뉴스 최신성, 뉴스 품질 및 사용자 경험에 영향을 주는 문제를 우선합니다.

---

# 변경 이력

## Version 1.0 (2026-07-03)

- 프로젝트 개발 원칙 최초 정의
- 단계별 개발 절차 정의
- 핵심 파일 수정 원칙 정의
- AI 협업 원칙 정의
- Git 운영 원칙 정의
- 문서 관리 원칙 정의

## Version 1.1 (2026-08-17)

- 실제 Service Operation / Improvement 단계의 개발 원칙 반영
- Production 안정성 및 실제 Production 검증 원칙 강화
- Web과 Android의 변경 범위별 개발·배포 절차 구분
- Git 상태 확인 및 임시 파일 관리 원칙 추가
- Home과 Archive의 공통 뉴스 처리 로직 유지 원칙 추가
- 초기 로딩 성능과 Data Freshness를 함께 고려하는 성능 원칙 추가
- Project Documentation Cycle(PDC) 전체 문서 검토 원칙 반영
- REPORT_TEMPLATE.md와 현재 개발 채팅 전체 복사본 기반 REPORT 작성 원칙 반영
- 문제 해결 시 사실과 추정 원인을 구분하는 원칙 추가
- REPORT, CHANGELOG, TECH_DEBT, TROUBLESHOOTING의 문제 관리 역할 구분
- 전체 코드 및 전체 문서 검토 기반 AI 협업 원칙 강화
- 공식 문서 수정 시 전체 검토 후 필요한 변경 범위만 안내하는 원칙 추가