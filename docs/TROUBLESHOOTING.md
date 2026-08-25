# TROUBLESHOOTING

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | TROUBLESHOOTING.md |
| Type | Living Document |
| Purpose | Troubleshooting Strategy and Incident Management |
| Version | 1.3 |
| Status | Active |
| Last Updated | 2026-08-17 |

---

# Purpose

TROUBLESHOOTING.md는 Daily Insight News 프로젝트에서 발생하는 문제(Incident)를 일관된 방식으로 분석하고 해결하기 위한 공식 운영 문서입니다.

이 문서는 개별 오류를 단순히 기록하는 문서가 아니라,

동일한 문제가 다시 발생하더라도 빠르게 원인을 파악하고 해결할 수 있도록 운영 원칙을 정의합니다.

---

# Troubleshooting Objectives

문제 해결은 다음 목표를 가집니다.

## Fast Recovery

문제가 발생하면 가능한 한 빠르게 서비스를 정상 상태로 복구합니다.

---

## Root Cause Analysis

증상이 아니라 근본 원인(Root Cause)을 분석합니다.

---

## Knowledge Accumulation

해결 경험을 프로젝트의 운영 지식(Knowledge)으로 축적합니다.

---

## Prevent Recurrence

동일한 문제가 반복되지 않도록 개선합니다.

문제 해결 과정에서 확인된 운영 원칙은 공식 문서에 반영하여 재발을 예방합니다.

---

# Troubleshooting Principles

문제 해결은 아래 원칙을 따릅니다.

1. 증상보다 원인을 우선 분석합니다.

2. 임시 조치보다 근본 해결을 우선합니다.

3. 해결 과정을 REPORT에 Evidence로 기록합니다.

4. 해결 후 재발 방지 방법과 운영 원칙을 공식 문서에 반영합니다.

5. 동일한 문제는 동일한 절차로 해결합니다.

6. 사용자 경험과 초기 로딩 성능을 저하시킬 수 있는 해결 방법은 지양합니다.

7. 원인이 확정되지 않은 문제는 추정 원인을 확정 사실처럼 기록하지 않습니다.

8. Local, GitHub, Vercel, Production Web, Android 등 문제 발생 계층을 구분하여 확인합니다.

9. 외부 서비스의 상태와 프로젝트 자체의 기술적 정상 여부를 구분하여 판단합니다.

10. 해결 후 실제 Production 환경에서 정상 동작 여부를 검증합니다.

11. 임시 파일이나 로컬 작업 파일로 인해 Git 문제가 발생하지 않도록 Git 관리 대상과 비관리 대상을 구분합니다.

---

# Incident Lifecycle

모든 문제는 아래 절차를 따릅니다.

```
Issue Detected

↓

Problem Reproduction

↓

Affected Layer Identification

↓

Problem Analysis

↓

Root Cause / Hypothesis

↓

Solution

↓

Verification

↓

Production Verification

↓

Documentation

↓

Knowledge Sharing
```

---

# Problem Classification

문제는 아래 기준으로 분류합니다.

## Application

- UI
- Component
- Rendering
- Navigation

---

## Data

- News
- Archive
- JSON
- API Response
- Data Freshness
- News Classification / Relevance

---

## Performance

- Loading
- Cache
- Rendering
- API Speed
- Data Refresh

---

## Deployment

- Git / GitHub
- GitHub Actions
- Vercel
- Domain / DNS
- Android
- Google Play Console

---

## External Services

- Google AdSense
- Google Analytics
- External API

---

## Environment

- VS Code
- Node.js
- npm
- Environment Variables

---

## Repository / File Management

- Git Tracking
- .gitignore
- Temporary Files
- Large Files
- Documentation Files

---

# Troubleshooting Workflow

문제가 발생하면 아래 순서를 따릅니다.

1. 문제 현상을 정확하게 확인합니다.

2. 가능한 경우 동일한 문제를 재현합니다.

3. 문제가 발생하는 범위를 확인합니다.

   - Local
   - Git / GitHub
   - Vercel
   - Production Web
   - Android
   - External Service

4. 관련 로그, 화면, Git 상태, Production 상태 등 Evidence를 확인합니다.

5. 확인된 사실과 추정 원인을 구분합니다.

6. 가능한 Root Cause 또는 Hypothesis를 좁힙니다.

7. 서비스 영향이 가장 적은 해결 방법부터 적용합니다.

8. 동일 조건에서 문제가 해결되었는지 확인합니다.

9. 실제 Production 환경에서 정상 동작 여부를 확인합니다.

10. 재발 가능성과 운영 정책 변경 필요 여부를 판단합니다.

11. REPORT에 중요한 해결 과정과 Evidence를 기록합니다.

12. PDC(Project Documentation Cycle)를 수행합니다.

13. MASTER 업데이트 여부를 확인합니다.

14. CHANGELOG 업데이트 여부를 확인합니다.

15. NEXT_TASK 및 TECH_DEBT 업데이트 여부를 확인합니다.

16. 필요한 기타 공식 문서 업데이트 여부를 확인합니다.

---

# Common Diagnostic Checks

문제 유형에 따라 아래 항목을 우선 확인합니다.

## Git / GitHub

- `git status`를 통해 변경 파일 확인
- 의도하지 않은 파일이 Tracking 대상에 포함되었는지 확인
- 대용량 또는 임시 파일 포함 여부 확인
- `.gitignore` 적용 여부 확인
- Commit 대상과 Push 대상 확인
- Push 이후 GitHub Repository 반영 여부 확인

---

## Vercel / Production Web

- GitHub에 최신 Commit이 반영되었는지 확인
- Vercel Production Deployment 상태 확인
- 공식 도메인에서 실제 배포 결과 확인
- Local 결과와 Production 결과를 구분하여 확인
- 필요한 공개 파일이 Production에서 접근 가능한지 확인

---

## Domain / DNS

- 공식 도메인 접근 여부 확인
- DNS 설정 변경 여부 확인
- Vercel Domain 연결 상태 확인
- DNS 변경 후 실제 Production 접근 상태 확인

---

## Android

- Production Web 정상 여부 확인
- Capacitor Sync 여부 확인
- Android Version Code / Version Name 확인
- App Bundle 생성 상태 확인
- Google Play Console 처리 상태 확인
- 실제 설치 또는 업데이트 후 동작 확인

---

## External Services

- 프로젝트 코드 또는 공개 파일의 기술적 연결 상태 확인
- Production에서 외부 서비스가 요구하는 리소스 접근 여부 확인
- 외부 서비스의 검토·승인 상태와 프로젝트 자체의 기술적 정상 여부를 구분
- 외부 서비스가 제공하는 구체적인 오류 또는 정책 사유 확인

---

# Documentation Policy

문제 해결 이후 문서를 아래 기준으로 업데이트합니다.

| Situation | Update Document |
|-----------|-----------------|
| 프로젝트 History / Evidence | Original Project Report(REPORT) |
| 현재 상태 변경 | MASTER.md |
| 완료된 변경 사항 | CHANGELOG.md |
| 향후 작업 필요 | NEXT_TASK.md |
| 미해결 기술 부채 | TECH_DEBT.md |
| 성능 전략 변경 | PERFORMANCE.md |
| 배포 정책 변경 | DEPLOY.md |
| Archive 정책 변경 | ARCHIVE_PLAN.md |
| 문제 해결 운영 절차 변경 | TROUBLESHOOTING.md |


---

# Relationship

TROUBLESHOOTING은 문제 해결 절차를 정의하는 공식 문서입니다.

문제 해결의 근거(Evidence)는 REPORT에서 관리합니다.

현재 서비스 상태는 MASTER.md에서 관리합니다.

변경 사항은 CHANGELOG.md에서 관리합니다.

향후 작업은 NEXT_TASK.md에서 관리합니다.

미해결 상태로 남아 있는 재발 가능 문제와 기술적 위험은 TECH_DEBT.md에서 관리합니다.

---

# Update Rules

TROUBLESHOOTING은 아래 경우에만 수정합니다.

- 새로운 운영 절차 추가
- 문제 분류 변경
- Incident 관리 방식 변경
- 운영 정책 변경
- 반복적으로 사용할 수 있는 진단 절차 변경

단순 오류 해결 사례는 REPORT 또는 CHANGELOG에서 관리합니다.

TROUBLESHOOTING은 PDC 과정에서 전체 내용을 검토하되, 문제 해결 운영 절차·문제 분류·Incident 관리 방식·진단 절차 또는 운영 정책에 실제 변경이 확인된 경우에만 REPORT를 근거(Evidence)로 수정합니다.

---

# Related Documents

- MASTER.md
- CHANGELOG.md
- NEXT_TASK.md
- TECH_DEBT.md
- PERFORMANCE.md
- DEPLOY.md
- DOCUMENT_WORKFLOW.md
- REPORT_WORKFLOW.md
- REPORT_TEMPLATE.md

---

# Notes

TROUBLESHOOTING은 운영 절차를 관리합니다.

개별 오류는 REPORT에서 근거(Evidence)를 보존합니다.

현재 서비스 상태는 MASTER.md에서 관리합니다.

문제 해결은 프로젝트 운영 지식으로 축적합니다.

동일한 문제가 다시 발생할 경우에는 REPORT의 Evidence와 TROUBLESHOOTING의 운영 절차를 함께 참고하는 것을 원칙으로 합니다.

문제 해결 과정에서 운영 정책이나 개발 원칙이 변경된 경우에는 PDC를 수행하여 관련 공식 문서를 함께 최신 상태로 유지합니다.

원인이 확정되지 않은 문제는 추정 원인을 확정된 Root Cause로 기록하지 않습니다.

Local 환경에서 정상이라고 해서 Production 환경도 정상이라고 판단하지 않으며, 중요한 문제 해결 후에는 실제 Production 환경을 별도로 확인합니다.

외부 서비스의 검토·승인 결과와 프로젝트 자체의 기술적 정상 여부를 구분하여 판단합니다.

Git 문제 발생 시 코드 자체뿐 아니라 의도하지 않은 임시 파일, 대용량 파일 및 Git Tracking 상태를 함께 확인합니다.

반복적으로 발생할 가능성이 있는 문제는 개별 Incident 내용을 그대로 누적하기보다 재사용 가능한 진단 절차와 운영 원칙으로 일반화하여 관리합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : TROUBLESHOOTING.md

Type : Living Document

Version : 1.3