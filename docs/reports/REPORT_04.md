# REPORT_04

## Original Project Report

| Item | Value |
|------|------|
| Project | Daily Insight News |
| Source Chat | 뉴스 자동 분류_04 |
| Document Type | Original Project Report |
| Status | Immutable Document (Do Not Edit) |
| Version | 1.0 |
| Generated | 2026-07-03 |

---

## Purpose

본 문서는 Daily Insight News 프로젝트의 Original Project Report입니다.

본 문서는 프로젝트의 역사(History)를 보존하기 위한 원본 기록(Evidence)입니다.

본 문서는 MASTER.md 및 프로젝트 공식 문서를 작성하기 위한 근거(Evidence) 문서입니다.

본 문서는 작성 이후 수정하지 않습니다.

---

## Original Project Report

Original Project Report
Daily Insight News 개발 기록 (뉴스 자동 분류_04)

주의

본 문서는 이번 채팅 종료 시점의 프로젝트 상태만 기록한 Original Project Report입니다.

이후 채팅에서 변경되거나 해결된 내용은 반영하지 않았습니다.

추측 없이 실제 채팅에서 확인된 내용만 기록했습니다.

1. 프로젝트 개요
이번 채팅의 개발 목적

이번 채팅의 핵심 목적은 Android 앱의 뒤로가기(Back Button) 동작을 정상화하고, 수정 내용을 GitHub 및 Google Play Console의 비공개 테스트 버전에 반영하는 것이었다.

추가적으로

Android Studio를 이용한 실제 단말 테스트
GitHub 반영
Signed App Bundle(AAB) 재생성
Google Play Console 비공개 테스트 업데이트

까지 진행하였다.

당시 프로젝트 상태

당시 프로젝트는

Next.js 웹 서비스
Capacitor Android 앱
Google Play Console 비공개 테스트

까지 구축되어 있었으며,

앱의 가장 큰 문제는

Android 뒤로가기 UX가 일반 Android 앱처럼 동작하지 않는 것이었다.

프로젝트 방향

프로젝트는

웹 서비스가 아니라

네이티브 앱 수준의 UX 제공을 목표로 방향이 결정되었다.

2. 새롭게 구현된 기능
새로 구현한 기능
Android 네이티브 Back Button 제어

MainActivity.java에서

Android Back Dispatcher를 직접 구현하였다.

경로(Path) 기반 뒤로가기 처리

웹뷰의

window.location.pathname

을 읽어서

경로별 동작을 분기하도록 구현하였다.

홈 화면 종료 처리

뉴스 홈(/)

에서는

moveTaskToBack(true)

를 호출하여

Android 기본 종료 방식과 동일하게 동작하도록 구현하였다.

Archive 상세 페이지 전용 처리

/archive/[date]

에서

뒤로가기를 누르면

/archive

목록으로 이동하도록 구현하였다.

Contact / Privacy 페이지 처리

/contact

/privacy

에서는

홈 화면으로 이동하도록 구현하였다.

일반 페이지 처리

그 외 페이지에서는

window.history.back()

을 사용하도록 구현하였다.

새로 추가한 UI

없음.

새로 추가한 UX

Android 앱의 뒤로가기 UX가 Android 기본 앱과 동일하게 동작하도록 개선하였다.

새로 추가한 시스템

Android Native Back Dispatcher 시스템을 추가하였다.

3. 기존 기능 변경
① AndroidBackButton.tsx 사용

↓

Android Native(MainActivity.java) 처리

↓

React에서 뒤로가기를 처리할 경우 홈 종료가 정상적으로 동작하지 않았다.

↓

최종적으로 Native 방식으로 결정.

② 홈 화면 Back

↓

앱 종료(moveTaskToBack)

↓

Android 기본 UX 유지

↓

Native 종료 방식 사용.

③ Archive 상세 Back

↓

브라우저 history

↓

Archive 목록 이동

↓

사용자 경험 개선.

④ Contact / Privacy

↓

브라우저 history

↓

홈 화면 이동

↓

메인 서비스로 자연스럽게 복귀하도록 변경.

4. 해결된 문제
문제

홈 화면에서 Back을 눌러도 앱이 종료되지 않았다.

원인

React에서 뒤로가기 이벤트를 처리하고 있었다.

해결 방법

MainActivity.java에서

moveTaskToBack(true)

호출.

최종 상태

정상 종료.

문제

Archive 상세에서 Back 시 원하는 화면으로 이동하지 않았다.

원인

History Stack만 사용하였다.

해결 방법

Path 확인 후

/archive

로 직접 이동.

최종 상태

정상.

문제

Contact/Privacy에서 Back 시 UX가 부자연스러웠다.

원인

브라우저 history 사용.

해결 방법

홈 화면으로 직접 이동.

최종 상태

정상.

문제

Capacitor 패키지 오류

원인

@capacitor/app 미설치.

해결 방법

npm install @capacitor/app

실행.

최종 상태

해결.

문제

npm build 오류

원인

Capacitor 모듈 미설치.

해결 방법

패키지 설치 후 Build 재실행.

최종 상태

정상 Build 성공.

문제

Git Push 실패

원인

원격 저장소가 최신 상태였다.

해결 방법

git pull --rebase origin main

후

git push origin main

실행.

최종 상태

Push 성공.

문제

Git Rebase 종료 오류

원인

.git/rebase-merge 잔여 파일.

해결 방법

수동 삭제 후 진행.

최종 상태

Rebase 종료.

5. 아직 해결되지 않은 문제
높음

없음.

중간

Google Play Console 비공개 테스트 검토 대기.

낮음

R8(Proguard) 최적화 권장 경고.

기능에는 영향 없음.

6. 기술 부채 (Technical Debt)
높음

없음.

중간

Android Release 최적화(Proguard) 미적용.

낮음

Android Studio에서 Gradle Upgrade 권장 알림.

7. 프로젝트 방향에 영향을 준 결정
Android

React 방식이 아닌

Native 방식으로 Back 처리.

UX

Android 기본 UX를 그대로 따르기로 결정.

Deployment

GitHub Push 이후

Google Play Console 비공개 테스트 업데이트 절차를 표준으로 사용.

Release

버전 변경 후

새로운 AAB 생성 방식으로 결정.

8. Decision Reason

Native Android 앱에서는

사용자가 기대하는 Back UX가 매우 중요하였다.

React만으로는 Android 기본 동작을 완전히 재현하지 못하였기 때문에

Native MainActivity에서 처리하도록 결정하였다.

9. 성능 관련 내용

직접적인 성능 개선은 없었다.

다만

React 이벤트 대신 Native 이벤트를 사용하도록 변경하였다.

10. Android 관련 내용

이번 채팅의 핵심 개발 내용.

포함 내용

Android Studio 테스트
실제 단말 테스트
USB 디버깅
MainActivity.java 수정
Capacitor App Plugin 설치
npm build 확인
Git Push
Android App Bundle 생성
versionCode 증가
versionName 변경
Signed App Bundle 생성
Google Play Console 비공개 테스트 업데이트
버전 변경

기존

1.0.1

↓

변경

1.0.2

versionCode

2

↓

3

11. Archive 관련 내용

Archive 기능 자체는 수정되지 않았다.

다만

Archive 상세 페이지 Back 동작이 수정되었다.

12. 개발 원칙

이번 채팅에서 새롭게 결정된 원칙

Android UX는 Native 기준으로 구현한다.
React보다 Native가 안정적이면 Native를 우선 사용한다.
Google Play 배포 전

실제 단말 테스트를 반드시 수행한다.

GitHub Push 후

Google Play Console 업데이트를 수행한다.

13. docs 반영 대상

이번 REPORT를 기반으로 아래 문서 업데이트 필요.

MASTER.md
CHANGELOG.md
DEPLOY.md
TROUBLESHOOTING.md
PROJECT_STRUCTURE.md
NEXT_TASK.md
14. 채팅 종료 시 프로젝트 상태
UI

변경 없음.

기능

Android Back UX 정상.

Android

MainActivity 기반 Back 처리 적용.

새 AAB 생성 완료.

Google Play Console 비공개 테스트 새 버전 업로드 준비 완료.

성능

변경 없음.

Archive

Back UX 개선.

남아있는 작업

Google Play Console에서

비공개 테스트 버전 저장 및 검토 제출.

승인 후 테스터 업데이트 진행.

15. Related Documents
MASTER.md
CHANGELOG.md
DEPLOY.md
TROUBLESHOOTING.md
NEXT_TASK.md
PROJECT_STRUCTURE.md
16. Fact Check
본 REPORT는 실제 채팅 내용을 기반으로 작성되었습니다.
추측은 포함하지 않았습니다.
이후 채팅 내용은 반영하지 않았습니다.
이 문서는 Original Project Report입니다.
17. 최종 프로젝트 관점 정리

이번 채팅은 Daily Insight News 프로젝트가 웹 기반 서비스를 넘어 Android 앱으로서의 완성도를 높이는 중요한 전환점이었다.

가장 중요한 성과는 Android 뒤로가기 동작을 React(Web) 레이어가 아닌 Android Native(MainActivity.java)에서 직접 처리하도록 아키텍처를 변경한 것이다. 이를 통해 홈 화면 종료, 아카이브 상세→목록 이동, Contact/Privacy→홈 이동 등 Android 사용자가 기대하는 기본 UX를 구현하였다.

또한 개발 프로세스 측면에서도 GitHub 반영 → 버전(versionCode/versionName) 증가 → Signed App Bundle 생성 → Google Play Console 비공개 테스트 업데이트라는 배포 절차를 실제로 수행하며 Android 릴리스 워크플로우를 정립하였다.

프로젝트 역사 관점에서 이번 채팅은 단순한 버그 수정이 아니라 웹 앱을 Android 네이티브 앱 수준의 사용자 경험으로 전환하고, 향후 Google Play 정식 출시를 위한 릴리스 체계를 확립한 개발 기록으로 보존되어야 한다.

---

## Related Documents

본 REPORT를 기반으로 작성되는 프로젝트 공식 문서

- MASTER.md
- PROJECT_STRUCTURE.md
- CHANGELOG.md
- NEXT_TASK.md
- PERFORMANCE.md
- ARCHIVE_PLAN.md
- DEPLOY.md
- TROUBLESHOOTING.md
- TECH_DEBT.md

---

## Fact Check

- 본 REPORT는 실제 채팅 내용을 기반으로 작성되었습니다.
- 추측은 포함하지 않았습니다.
- 이후 채팅에서 변경되거나 해결된 내용은 반영하지 않았습니다.
- 본 문서는 Original Project Report입니다.
- 본 문서는 프로젝트 공식 문서가 아니라 프로젝트 공식 문서를 작성하기 위한 근거(Evidence) 문서입니다.
- 본 문서는 프로젝트 역사(History)를 보존하기 위한 Immutable Document입니다.
- Original Project Report 본문은 생성 당시 내용을 그대로 보존합니다.

---

END OF REPORT

Project : Daily Insight News

Document : REPORT_04

Status : Immutable Original Project Report

Version : 1.0