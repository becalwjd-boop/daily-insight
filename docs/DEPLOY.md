# DEPLOY

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | DEPLOY.md |
| Type | Living Document |
| Purpose | Deployment Strategy and Operation Policy |
| Version | 1.3 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

DEPLOY.md는 Daily Insight News 프로젝트의 배포 전략과 운영 정책을 정의하는 공식 문서입니다.

이 문서는 특정 배포 명령어를 설명하는 문서가 아니라,

서비스를 안정적으로 운영하기 위한 Deployment Policy를 관리합니다.

---

# Deployment Objectives

배포는 다음 목표를 가집니다.

## Stable Release

안정적인 서비스를 제공합니다.

사용자 경험과 초기 로딩 성능을 유지하는 배포를 목표로 합니다.

---

## Safe Deployment

배포 과정에서 서비스 중단을 최소화합니다.

---

## Reproducible Process

누가 배포하더라도 동일한 절차를 따를 수 있도록 합니다.

---

## Long-term Operation

장기적으로 유지 가능한 배포 구조를 유지합니다.

Web, Android, 공식 도메인 및 외부 운영 서비스가 서로 영향을 최소화하면서 안정적으로 운영될 수 있는 구조를 유지합니다.

---

# Deployment Principles

배포는 아래 원칙을 따릅니다.

1. Production은 항상 안정성을 우선합니다.

2. 새로운 기능보다 사용자 경험과 초기 로딩 성능을 우선합니다.

3. 테스트되지 않은 변경은 배포하지 않습니다.

4. 작은 단위로 배포합니다.

5. 문제가 발생하면 빠르게 Rollback 합니다.

6. 배포 과정은 가능한 자동화를 우선합니다.

7. Web과 Android 배포를 구분하여 관리하고 각 플랫폼의 변경 범위에 맞게 배포합니다.

8. 공식 도메인, DNS, 환경 변수 및 외부 서비스 연결 설정은 Production 운영에 영향을 줄 수 있으므로 신중하게 변경합니다.

9. 배포에 필요하지 않은 임시 파일과 작업용 파일은 Production 및 Git 관리 대상에서 제외합니다.

10. 배포 전후 실제 Production 환경에서 핵심 기능을 확인합니다.

---

# Deployment Lifecycle

## Web Deployment

Development

↓

Local Test

↓

Build Verification

↓

Git Commit

↓

Git Push

↓

GitHub

↓

Vercel Automatic Deployment

↓

Production Verification

↓

dailyinsightnews.kr


## Android Deployment

Production Web Verification

↓

Android 변경 필요 여부 확인

↓

Capacitor Sync

↓

Android Studio

↓

Version Code / Version Name 확인

↓

Generate App Bundle (.aab)

↓

Google Play Console

↓

Testing / Review (필요한 경우)

↓

Production Release

↓

Google Play Store Verification

---

# Deployment Targets

## Web

- Vercel
- Official Domain: `dailyinsightnews.kr`

---

# Domain and External Service Policy

## Official Domain

Production Web의 공식 도메인은 `dailyinsightnews.kr`을 기준으로 운영합니다.

도메인과 DNS 설정 변경은 Production 접근성에 직접 영향을 줄 수 있으므로 필요한 경우에만 변경합니다.

---

## DNS

DNS는 도메인 관리 서비스와 Vercel Production 연결 상태를 기준으로 관리합니다.

DNS 변경 후에는 공식 도메인의 실제 Production 접근 여부를 확인합니다.

---

## Google AdSense

Google AdSense 관련 코드 및 공개 파일은 Production 환경에서 정상 접근 가능한 상태를 유지합니다.

AdSense의 사이트 승인 여부와 콘텐츠 정책 대응은 Deployment 성공 여부와 구분하여 관리합니다.

---

## Google Analytics

Google Analytics 운영 코드가 필요한 경우 Production 배포 과정에서 정상 유지되는지 확인합니다.

---

## Source

- GitHub Repository

---

## External Services

- Google AdSense
- Google Analytics
- Google Play Console

---

## Domain / DNS

- Official Domain: `dailyinsightnews.kr`
- DNS Management: Gabia
- Hosting / Production Deployment: Vercel

---

## Mobile

- Android (Capacitor)
- Android Studio
- Google Play Console

---

# Pre-deployment Checklist

배포 전 변경 범위에 따라 아래 항목을 확인합니다.

## Common

- 기능 정상 동작
- 빌드 성공
- 환경 변수 확인
- 주요 화면 확인
- Archive 운영 영향 확인
- 변경된 공식 문서 확인
- 배포에 불필요한 임시 파일 포함 여부 확인
- Git 상태 확인
- 필요한 변경사항 Commit 완료
- GitHub Push 완료

---

## Web

- Vercel 배포 상태 확인
- 공식 도메인 `dailyinsightnews.kr` 정상 접속 확인
- 주요 Production 화면 확인
- 뉴스 데이터 정상 표시 확인
- 필요한 공개 파일 정상 접근 확인

---

## Android

- Production Web 정상 동작 확인
- Capacitor Sync 완료 여부 확인
- Android Version Code 증가 여부 확인
- Android Version Name 확인
- App Bundle(.aab) 정상 생성 확인
- 앱 아이콘 확인
- Google Play Console 등록 정보 확인
- 필요한 경우 스크린샷 확인
- 필요한 경우 Feature Graphic 확인
- 필요한 경우 간단한 설명 확인
- 필요한 경우 자세한 설명 확인

---

# Production Verification

배포 완료 후 실제 Production 환경을 확인합니다.

## Web

- `dailyinsightnews.kr` 정상 접속
- 주요 페이지 정상 표시
- 최신 뉴스 데이터 정상 표시
- 새로고침 및 주요 사용자 기능 정상 동작
- 필요한 공개 파일 정상 접근
- Production 오류 여부 확인

## Android

- Google Play Store 배포 상태 확인
- 설치 또는 업데이트 가능 여부 확인
- 주요 화면 정상 표시
- Web 기반 서비스 연결 정상 여부 확인
- 주요 사용자 기능 정상 동작 확인

---

# Rollback Policy

배포 후 문제가 발생하면 아래 원칙을 따릅니다.

- 최근 안정 버전으로 복구합니다.
- 원인을 확인한 후 다시 배포합니다.
- CHANGELOG에 기록이 필요한 변경 사항을 반영합니다.
- Web 문제는 최근 안정적인 Git/Vercel 배포 상태를 기준으로 복구합니다.
- Google Play Console 제출 또는 출시 후 문제가 발견된 경우 필요한 수정 후 새로운 Version Code로 다시 배포합니다.
- 도메인, DNS 또는 외부 서비스 설정 변경으로 문제가 발생한 경우 마지막 정상 설정을 기준으로 복구합니다.

---

# Automation

현재 사용 중인 자동화

- GitHub Actions
- GitHub Push 기반 자동 배포
- Vercel 자동 Production 배포

향후 검토

- 배포 자동화 확대
- 테스트 자동화
- Release 자동화
- Google Play 배포 운영 자동화 검토
- Production 배포 후 핵심 기능 검증 자동화 검토

---

# Relationship

DEPLOY는 배포 정책(Deployment Policy)을 정의하는 공식 문서입니다.

현재 서비스 상태는 MASTER.md에서 관리합니다.

배포 이력은 CHANGELOG.md에서 관리합니다.

프로젝트 변경의 근거(Evidence)는 Original Project Report(REPORT)에서 관리합니다.

배포 과정에서 반복적으로 발생할 수 있는 문제와 해결 방법은 TROUBLESHOOTING.md에서 관리합니다.

배포 관련 미해결 기술 부채는 TECH_DEBT.md에서 관리합니다.

---

# Update Rules

DEPLOY는 아래 경우에만 수정합니다.

- 배포 정책 변경
- 배포 구조 변경
- 자동화 변경
- 운영 절차 변경
- Google Play 운영 정책 변경
- 공식 도메인 또는 DNS 운영 정책 변경
- Production 외부 서비스 연결 정책 변경

단순 기능 추가만으로는 수정하지 않습니다.

DEPLOY는 PDC 과정에서 전체 내용을 검토하되, 배포 정책·배포 구조·자동화·운영 절차·플랫폼 배포 정책·도메인 또는 외부 서비스 운영 정책에 실제 변경이 확인된 경우에만 REPORT를 근거(Evidence)로 수정합니다.

---

# Related Documents

- MASTER.md
- PROJECT_STRUCTURE.md
- CHANGELOG.md
- ARCHIVE_PLAN.md
- PERFORMANCE.md
- NEXT_TASK.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

---

# Notes

DEPLOY는 배포 전략과 Production 운영 정책을 관리합니다.

실제 코드 변경은 GitHub에서 관리합니다.

완료된 서비스 변경은 CHANGELOG에서 관리합니다.

배포 과정과 의사결정의 Evidence는 REPORT에서 관리합니다.

배포는 항상 Production 안정성을 우선합니다.

Web과 Android는 서로 다른 Deployment Lifecycle을 사용하며 변경 범위에 따라 필요한 배포만 수행합니다.

Web Production은 Vercel과 공식 도메인 `dailyinsightnews.kr`을 기준으로 운영합니다.

Android 앱은 Google Play Store Production 운영 단계이며, 앱 업데이트가 필요한 경우 Version Code를 증가시켜 새로운 App Bundle을 배포합니다.

Google Play Store 등록 정보(아이콘, 스크린샷, Feature Graphic, 앱 설명)는 서비스 변경 또는 스토어 정보 변경이 필요한 경우 함께 관리합니다.

공식 도메인 및 DNS 변경은 Production 접근성에 직접 영향을 줄 수 있으므로 신중하게 관리합니다.

Google AdSense의 기술적 연결과 ads.txt 운영 환경은 Production에 구성되어 있으며, 사이트 광고 승인 상태와 콘텐츠 정책 대응은 별도의 서비스 운영 과제로 관리합니다.

배포에 필요하지 않은 `docs.zip`, Google Play Console 작업용 이미지 등 임시 파일은 공식 Git 관리 대상으로 사용하지 않습니다.

`docs/` 내부의 원본 공식 문서는 Git 관리 대상으로 유지합니다.

배포 후에는 실제 Production 환경에서 핵심 기능과 접근 상태를 확인합니다.

배포 정책 또는 운영 절차가 변경된 경우에는 REPORT를 근거(Evidence)로 DEPLOY를 검토하고 최신 상태를 유지합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : DEPLOY.md

Type : Living Document

Version : 1.3