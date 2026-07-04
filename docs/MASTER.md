# MASTER

## Daily Insight News

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Document | MASTER.md |
| Type | Living Document |
| Purpose | Current Project Documentation |
| Version | 1.0 |
| Status | Active |
| Last Updated | 2026-07-04 |

---

# MASTER.md

> **MASTER.md는 Daily Insight News 프로젝트의 현재 상태(Current State)를 정의하는 최상위 공식 문서입니다.**

MASTER.md는 프로젝트의 현재 기능, 서비스 구조, 기술 구성, 개발 방향을 관리하는 공식 문서입니다.

프로젝트의 개발 이력(History)은 REPORT에서 관리하며, MASTER는 항상 최신(Current State)만 유지합니다.

MASTER는 프로젝트를 처음 접하는 개발자와 AI가 프로젝트를 빠르게 이해할 수 있도록 작성합니다.

---

# Table of Contents

## Chapter 1. Project
프로젝트의 정체성과 목표를 정의합니다.

1. Purpose  
   프로젝트가 존재하는 이유

2. Project Identity  
   프로젝트는 무엇인가

3. Project Goals  
   프로젝트가 앞으로 나아갈 방향

---

## Chapter 2. Service
현재 서비스와 사용자 기능을 설명합니다.

4. Service Overview  
   서비스는 무엇을 제공하는가

5. Current Project Status  
   현재 프로젝트는 어떤 상태인가

6. Core Features  
   현재 사용자에게 제공하는 기능

---

## Chapter 3. Technology
프로젝트를 구성하는 기술과 개발 방식을 설명합니다.

7. Technology Stack  
   현재 사용 중인 기술

8. System Architecture  
   시스템은 어떻게 구성되어 있는가

9. Development Workflow  
   프로젝트는 어떻게 개발되는가

---

## Chapter 4. Documentation
프로젝트 문서 체계와 관리 원칙을 설명합니다.

10. Current Development Direction  
    현재 어떤 방향으로 개발하고 있는가

11. Related Documents  
    함께 관리하는 공식 문서

12. Evidence  
    MASTER를 작성한 근거 문서

13. Document Version History  
    MASTER 문서 변경 이력

---

# Chapter 1. Project

프로젝트의 정체성과 장기적인 목표를 정의합니다.

---

# 1. Purpose

### 프로젝트가 존재하는 이유

Daily Insight News는 경제, 금융, 기업, 부동산, 사회, 국제 등 다양한 분야의 최신 뉴스를 자동으로 수집하고 분류하여 사용자에게 빠르고 편리하게 제공하기 위해 개발되었습니다.

기존 뉴스 서비스는 원하는 분야의 뉴스를 직접 찾아야 하거나 여러 사이트를 이동해야 하는 불편함이 있었습니다.

본 프로젝트는 이러한 과정을 자동화하여 사용자가 최신 뉴스를 한곳에서 확인할 수 있도록 하는 것을 목표로 합니다.

또한 날짜별 뉴스 아카이브를 제공하여 과거 뉴스도 쉽게 확인할 수 있는 환경을 제공합니다.

---

# 2. Project Identity

### 프로젝트는 무엇인가

Daily Insight News는 뉴스 자동 수집 및 자동 분류를 기반으로 하는 뉴스 플랫폼입니다.

서비스는 네이버 뉴스 OpenAPI를 이용하여 최신 뉴스를 자동으로 수집하고, 카테고리별로 분류하여 사용자에게 제공합니다.

GitHub Actions를 이용한 자동 저장과 Vercel 자동 배포를 통해 지속적으로 운영되는 서비스를 목표로 합니다.

---

### 프로젝트 특징

- 최신 뉴스 자동 수집
- 카테고리별 자동 분류
- 날짜별 뉴스 아카이브 제공
- GitHub Actions 기반 자동 저장
- Vercel 기반 자동 배포
- 웹 서비스 중심 운영
- Android 앱 확장 진행

---

# 3. Project Goals

### 프로젝트가 앞으로 나아갈 방향

Daily Insight News는 단순한 뉴스 목록 서비스가 아니라 지속적으로 발전하는 뉴스 플랫폼을 목표로 합니다.

---

## Short-term Goals

현재 진행 중인 목표

- 뉴스 품질 향상
- 카테고리 분류 정확도 개선
- 서비스 안정성 강화
- 사용자 경험(UX) 개선
- Android 앱 완성도 향상

---

## Mid-term Goals

다음 단계 목표

- AI 기반 뉴스 요약
- 뉴스 추천 기능
- 검색 기능 고도화
- 광고 시스템 적용
- 사용자 편의 기능 확대

---

## Long-term Goals

장기 목표

- 종합 뉴스 플랫폼 구축
- 웹과 모바일 통합 서비스 운영
- 안정적인 자동화 운영 체계 구축
- 지속 가능한 서비스 운영 및 고도화

---

### Chapter 1 Summary

Chapter 1은 Daily Insight News 프로젝트의 존재 이유와 프로젝트의 정체성, 그리고 앞으로 나아갈 방향을 정의합니다.

이 내용은 프로젝트의 현재 기능을 설명하는 것이 아니라 프로젝트 전체의 방향성과 목적을 설명합니다.





# Chapter 2. Service

현재 서비스와 사용자에게 제공되는 기능을 설명합니다.

---

# 4. Service Overview

### 서비스는 무엇을 제공하는가

Daily Insight News는 다양한 분야의 최신 뉴스를 자동으로 수집하고 분류하여 사용자에게 제공하는 웹 기반 뉴스 서비스입니다.

사용자는 별도의 검색 없이 경제, 금융, 기업, 부동산, 사회, 국제 등 관심 분야의 최신 뉴스를 한곳에서 확인할 수 있습니다.

또한 날짜별 뉴스 아카이브를 제공하여 과거에 수집된 기사도 쉽게 조회할 수 있습니다.

서비스는 GitHub Actions를 이용한 자동 저장과 Vercel 자동 배포를 기반으로 지속적으로 운영됩니다.

---

### 주요 서비스

- 실시간 뉴스 제공
- 카테고리별 뉴스 분류
- 날짜별 뉴스 아카이브
- 기사 원문 이동
- 자동 뉴스 저장
- 자동 서비스 배포

---

# 5. Current Project Status

### 현재 프로젝트는 어떤 상태인가

Daily Insight News는 현재 운영 가능한 서비스 형태로 개발이 진행되고 있습니다.

기본적인 뉴스 수집, 자동 저장, 카테고리 분류, 아카이브 기능이 구축되어 있으며, 지속적인 품질 개선과 성능 최적화를 진행하고 있습니다.

현재 GitHub Actions 기반 아카이브 자동 저장은 오류로 인해 정상 동작하지 않는 상태입니다. 2026-07-03 이후 일부 날짜의 아카이브가 자동 생성되지 않았으며, 자동 저장 복구가 현재 최우선 운영 과제입니다.

Android 앱 개발도 함께 진행되고 있으며, 웹과 모바일 환경 모두에서 동일한 서비스를 제공하는 것을 목표로 합니다.

---

### 현재 구현된 서비스

- 뉴스 자동 수집
- 카테고리별 뉴스 제공
- 자동 뉴스 저장
- 날짜별 Archive
- 자동 배포
- 모바일 웹 지원
- Android 앱 지원

---

### 현재 운영 방식

뉴스는 자동으로 수집 및 저장되며, GitHub Actions와 Vercel을 이용하여 서비스가 운영됩니다.

프로젝트는 GitHub Repository를 중심으로 관리되며, 변경 사항은 자동으로 배포됩니다.

---

# 6. Core Features

### 현재 사용자에게 제공하는 기능

Daily Insight News는 현재 다음 기능을 제공합니다.

---

## News

- 최신 뉴스 자동 제공
- 카테고리별 뉴스 제공
- 기사 원문 바로가기
- 부동산 카테고리 키워드는 여러 차례 개선을 거쳐 현재 안정적으로 동작함
- 썸네일은 기존 캐시를 재사용하고 새 기사만 추가 처리하는 방식으로 안정화됨

---

## Archive

- 날짜별 뉴스 조회
- 과거 뉴스 확인
- 날짜 검색, 연도 선택, 월 선택 기능 제공
- 현재 아카이브 화면의 검색 및 필터 기능은 정상 동작함
- GitHub Actions 오류로 인해 2026-07-03 이후 일부 자동 저장 데이터가 누락된 상태임

---

## Automation

- 자동 뉴스 저장
- 자동 배포

---

## User Experience

- 모바일 환경 지원
- 직관적인 뉴스 탐색
- 카테고리 중심 탐색

---

## Platform

- 웹 서비스
- Android 앱

---

### Chapter 2 Summary

Chapter 2는 현재 사용자에게 제공되는 서비스와 기능을 설명합니다.

이 Chapter는 서비스의 현재 상태(Current State)를 관리하며, 새로운 기능이 추가되거나 변경될 경우 본 내용을 최신 상태로 유지합니다.





# Chapter 3. Technology

프로젝트를 구성하는 기술과 개발 방식을 설명합니다.

---

# 7. Technology Stack

### 현재 사용 중인 기술

Daily Insight News는 최신 웹 기술을 기반으로 개발 및 운영되고 있습니다.

프로젝트는 유지보수성과 자동화를 고려하여 기술을 선정하였습니다.

---

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

---

## Backend

- Next.js Route Handlers
- Node.js Runtime

---

## News API

- Naver OpenAPI

---

## Deployment

- Vercel

---

## Repository

- Git
- GitHub

---

## Automation

- GitHub Actions

---

## Mobile

- Android
- Capacitor

---

# 8. System Architecture

### 시스템은 어떻게 구성되어 있는가

Daily Insight News는 자동화 중심의 구조로 구성되어 있습니다.

사용자가 서비스를 이용하는 동안 뉴스 수집, 저장 및 배포는 자동으로 이루어집니다.

---

### System Flow

```
Naver OpenAPI
        │
        ▼
Next.js Application
        │
        ▼
News Processing
        │
        ├──────────────┐
        ▼              ▼
Current News      Archive Data
        │              │
        └──────┬───────┘
               ▼
        GitHub Repository
               │
        GitHub Actions
               │
               ▼
            Vercel
               │
               ▼
          User Service
```

---

### Data Storage

프로젝트에서 관리하는 주요 데이터는 다음과 같습니다.

- 현재 뉴스
- 날짜별 Archive
- 프로젝트 문서
- 개발 스크립트

---

# 9. Development Workflow

### 프로젝트는 어떻게 개발되는가

Daily Insight News는 GitHub를 중심으로 개발됩니다.

모든 변경 사항은 Git으로 관리하며, GitHub Repository를 통해 버전 관리가 이루어집니다.

테스트가 완료된 변경 사항은 Vercel을 통해 자동 배포됩니다.

---

### Development Process

```
Development

↓

Local Test

↓

Git Commit

↓

Git Push

↓

GitHub

↓

GitHub Actions

↓

Vercel Deployment

↓

Production
```

---

### Development Principles

프로젝트는 다음 원칙을 기반으로 개발됩니다.

- 안정성을 우선합니다.
- Project Documentation System(PDS)을 기반으로 프로젝트를 운영합니다.
- 현재 상태(Current State)를 유지합니다.
- 공식 문서를 함께 관리합니다.
- 프로젝트 구조의 일관성을 유지합니다.

---

### Documentation Principles

프로젝트의 모든 공식 문서는 역할을 명확하게 구분하여 관리합니다.

| Document | Role |
|----------|------|
| README | 프로젝트 소개 |
| MASTER | 현재 프로젝트 상태 |
| REPORT | 프로젝트 역사 |
| CHANGELOG | 변경 이력 |
| NEXT_TASK | 다음 개발 계획 |
| TECH_DEBT | 기술 부채 |
| PROJECT_STRUCTURE | 프로젝트 구조 |
| DEPLOY | 배포 방법 |
| PERFORMANCE | 성능 관리 |
| TROUBLESHOOTING | 문제 해결 |

---

### Chapter 3 Summary

Chapter 3은 현재 프로젝트를 구성하는 기술과 시스템 구조, 그리고 개발 방식을 설명합니다.

이 Chapter는 프로젝트의 구현 기술(Current Technology)을 관리하며, 새로운 기술이 실제 운영 환경에 적용될 경우 최신 상태로 유지합니다.





# Chapter 4. Documentation

프로젝트 문서 체계와 운영 원칙을 설명합니다.

---

# 10. Current Development Direction

### 현재 어떤 방향으로 개발하고 있는가

Daily Insight News는 기능을 빠르게 추가하는 것보다 안정성과 유지보수성을 우선하는 방향으로 개발합니다.

새로운 기능은 충분한 검토를 거친 후 적용하며, 프로젝트 문서와 실제 구현이 항상 일치하도록 관리합니다.

또한 자동화와 문서화를 통해 누구나 프로젝트를 이해하고 이어서 개발할 수 있는 환경을 목표로 합니다.

---

### Current Development Principles

- 안정성을 우선합니다.
- 현재 상태(Current State)를 유지합니다.
- 자동화를 적극 활용합니다.
- 문서와 실제 프로젝트를 함께 관리합니다.
- 유지보수성을 고려하여 개발합니다.
- 프로젝트 전체의 일관성을 유지합니다.
- MASTER의 Current State는 REPORT(Evidence)를 기반으로 유지합니다.

---

### Project Documentation System

Project Documentation System(PDS) v1.0을 구축하였습니다.

README.md를 프로젝트 문서 시스템의 Home(Entry Point)로 사용하며,

공식 문서, Workflow, Prompt, Standards를 기반으로 프로젝트를 운영합니다.

새로운 GPT와 새로운 개발자는 docs.zip과 START_CHAT_PROMPT를 이용하여 프로젝트를 초기화합니다.

Project Documentation Cycle(PDC)을 공식 운영 절차로 사용합니다.

Project Documentation Cycle(PDC)은 REPORT → MASTER → CHANGELOG → NEXT_TASK 순서로 프로젝트를 관리합니다.

---

# 11. Related Official Documents

### 함께 관리하는 공식 문서

Daily Insight News는 각 문서가 명확한 역할을 가지도록 관리합니다.

| Document | Description |
|----------|-------------|
| README.md | 프로젝트 소개 및 시작 가이드 |
| MASTER.md | 프로젝트의 현재 상태(Current State) |
| CHANGELOG.md | 프로젝트 변경 이력 |
| NEXT_TASK.md | 다음 개발 계획 |
| PROJECT_STRUCTURE.md | 프로젝트 구조 |
| DEPLOY.md | 배포 방법 |
| PERFORMANCE.md | 성능 관리 |
| TROUBLESHOOTING.md | 문제 해결 |
| TECH_DEBT.md | 기술 부채 |
| ARCHIVE_PLAN.md | Archive 운영 정책 |

---

### Original Reports

프로젝트의 개발 과정과 당시 상태는 Original Project Report에서 관리합니다.

Original Project Report는 프로젝트의 History를 보존하기 위한 Evidence 문서이며 수정하지 않습니다.

---

# 12. Evidence

### MASTER를 작성한 근거 문서

MASTER.md는 Original Project Report를 근거(Evidence)로 작성합니다.

현재 프로젝트의 상태(Current State)는 REPORT를 종합하여 관리합니다.

---

### Evidence Location

```
docs/reports/
```

---

### Source Management

REPORT와 MASTER의 연결 관계는 다음 문서에서 관리합니다.

```
docs/MASTER_SOURCES.md
```

---

# 13. Document Version History

### MASTER 문서 변경 이력

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-07-03 | Initial Version |

---

### Document Management Principles

MASTER는 프로젝트의 현재 상태(Current State)를 관리합니다.

REPORT는 프로젝트의 역사(History)를 관리합니다.

CHANGELOG는 프로젝트의 변경 사항을 관리합니다.

NEXT_TASK는 앞으로의 개발 계획을 관리합니다.

각 문서는 서로의 역할을 중복하지 않도록 관리합니다.

---

### Chapter 4 Summary

Chapter 4는 Daily Insight News 프로젝트의 문서 체계와 운영 원칙을 설명합니다.

프로젝트의 History는 REPORT에서 관리하며, MASTER는 항상 현재 상태(Current State)를 유지합니다.

프로젝트의 모든 공식 문서는 역할을 명확하게 구분하여 관리합니다.

---

# MASTER Summary

MASTER.md는 Daily Insight News 프로젝트의 현재 상태(Current State)를 정의하는 최상위 공식 문서입니다.

프로젝트의 기능, 서비스, 기술 구성, 개발 방향은 MASTER에서 관리합니다.

프로젝트의 개발 이력은 Original Project Report에서 관리합니다.

MASTER는 프로젝트가 발전함에 따라 지속적으로 최신 상태를 유지합니다.

---

END OF DOCUMENT

Project : Daily Insight News

Document : MASTER.md

Type : Living Document

Version : 1.0

Status : Active