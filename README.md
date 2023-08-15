# :notebook_with_decorative_cover: TODOLIST

간단한 할일 웹입니다

> ## 지원자
>
> <br>

**이호인**

<br><br>

> ## 프로젝트의 실행방법

<br>

1.`git clone` <br><br> 2.프로젝트 디렉토리 이동 <br><br> 3.터미널 열기 <br><br>
4.npm install <br><br>
5.npm start <br><br>

> ## 배포 사이트 
### [사이트 바로가기](https://wanted-pre-onboarding-frontend-eight-ebon.vercel.app/)
url - https://wanted-pre-onboarding-frontend-eight-ebon.vercel.app/
<br>

> ## 사용 라이브러리

<br>

- React (Create-reate-app)
- React-router-dom
- typescript
- axios
- fontawesome

<br>

> ## 폴더 구조

- src
  - components
    - auth(유저 관련 페이지)
    - todo(todo페이지)
    - ui(공용)
  - contexts (contextAPI)
  - pages (페이지별 상위 부모컴포넌트)
  - reducer(todoReducer)
  - styles(페이지,컴포넌트 CSS)
  - types(typescript 공용 type)
  - util(api,deobunce등 유틸 함수)

<br>

> ## 브랜치 계획 및 commit 컨벤션

- main : 최종 배포시 (버전나눔)
- dev : 개발 종합 브랜치
- feature/page/ : 각 페이지별 기능개발
- feature/ : contextAPI나 router등 공용으로 사용되는 기능 개발
- test : testingLibrary사용

### commit message

- feat : 기능 개발시
- rename : 파일 이름 변경 혹은 옮길시
- remove : 파일 삭제시
- style : css스타일 변경
- fix : 버그 수정
- refactor : 코드 리팩토링
- comment : 주석 추가 및 변경
- docs : 문서 수정
- build,chore : 빌드,패키지 파일 수정 <- 메세지 잘못사용으로 추후 수정
