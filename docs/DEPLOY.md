# DEPLOY

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | DEPLOY.md |
| Type | Living Document |
| Purpose | Deployment Strategy and Operation Policy |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-03 |

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

---

## Safe Deployment

배포 과정에서 서비스 중단을 최소화합니다.

---

## Reproducible Process

누가 배포하더라도 동일한 절차를 따를 수 있도록 합니다.

---

## Long-term Operation

장기적으로 유지 가능한 배포 구조를 유지합니다.

---

# Deployment Principles

배포는 아래 원칙을 따릅니다.

1. Production은 항상 안정성을 우선합니다.

2. 테스트되지 않은 변경은 배포하지 않습니다.

3. 작은 단위로 배포합니다.

4. 문제가 발생하면 빠르게 Rollback 합니다.

5. 배포 과정은 가능한 자동화를 우선합니다.

---

# Deployment Lifecycle

```
Development

↓

Local Test

↓

GitHub

↓

GitHub Actions

↓

Vercel Deployment

↓

Production

↓

Android Release (Optional)
```

---

# Deployment Targets

## Web

- Vercel

---

## Source

- GitHub Repository

---

## Mobile

- Android (Capacitor)

---

# Pre-deployment Checklist

배포 전 반드시 확인합니다.

- 기능 정상 동작

- 빌드 성공

- 환경 변수 확인

- 주요 화면 확인

- Archive 정상 생성 여부 확인

- 변경 문서 확인

---

# Rollback Policy

배포 후 문제가 발생하면 아래 원칙을 따릅니다.

- 최근 안정 버전으로 복구합니다.

- 원인을 확인한 후 다시 배포합니다.

- CHANGELOG에 필요한 내용을 기록합니다.

---

# Automation

현재 사용 중인 자동화

- GitHub Actions

향후 검토

- 배포 자동화 확대
- 테스트 자동화
- Release 자동화

---

# Relationship

```
Development

↓

DEPLOY

↓

MASTER

↓

CHANGELOG
```

DEPLOY는

서비스 운영 절차를 정의합니다.

MASTER는

현재 운영 상태를 관리합니다.

CHANGELOG는

배포 결과를 기록합니다.

---

# Update Rules

DEPLOY는 아래 경우에만 수정합니다.

- 배포 정책 변경

- 배포 구조 변경

- 자동화 변경

- 운영 절차 변경

단순 기능 추가만으로는 수정하지 않습니다.

---

# Related Documents

- MASTER.md
- PROJECT_STRUCTURE.md
- CHANGELOG.md
- ARCHIVE_PLAN.md
- PERFORMANCE.md

---

# Notes

DEPLOY는 운영 정책을 관리합니다.

실제 코드 변경은 GitHub에서 관리합니다.

서비스 변경은 CHANGELOG에서 관리합니다.

배포는 항상 안정성을 우선합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : DEPLOY.md

Type : Living Document

Version : 1.0