# 🥇 WINNER
![winner-notion](https://github.com/rimmyhub/jobposting-project/assets/131572117/caea054b-b286-4205-8f86-187c16bdf0dd)

📑 브로 슈어 : [브로셔 바로가기](https://outgoing-angora-d26.notion.site/WINNER-3a89e026e7894d5e92f38d2bb3029a6d?pvs=4)

📝 발표 자료 : [winner-최종프로젝트-3조.pdf](https://drive.google.com/file/d/1FiWpgcMJp1pTgmh7b4dBkBWJJAGkDuj4/view?usp=drive_link)

<br>



# ⭐️ Intro
- 주제 : 취업지원 플랫폼 (예: 사람인, 잡코리아, 링크드인)
- 프로젝트 기간 : 2023년 8월 16일(수) ~ 2023년 9월 18일(월)
- 주요 기능
  - WebRTC 영상
  - 구직자/기업 구분 (UserGuard / CompanyGuard)
  - Crawling 실시간 채용공고 및 회사 데이터 제공
  - OpenSearch 검색 및 필터 기능
  - ChatGPT 자기소개서 작성
  - 회사 지원하기
  - Kakao Map API 회사 찾기
  - Nodemailer 회원가입 시 이메일 인증
  - S3 이미지 등록
<br>




# 🎥 주요 기능 영상
[![YouTube 비디오](https://img.youtube.com/vi/sm6CR3QRmXI/0.jpg)](https://www.youtube.com/watch?v=sm6CR3QRmXI)
<br>




# 👷‍♂️ Architecture
![아키텍쳐](https://github.com/rimmyhub/jobposting-project/assets/131572117/b1e61c82-441e-4ed7-8f93-93fccd4b7059)
<br>




# 💥 Troubleshooting
![00](https://github.com/rimmyhub/jobposting-project/assets/131572117/be270009-c4c0-49ec-802e-53c28e0e29e4)
![01](https://github.com/rimmyhub/jobposting-project/assets/131572117/0f33745e-6027-4b2d-b094-01c226a8ea11)
![02](https://github.com/rimmyhub/jobposting-project/assets/131572117/29af96fc-d62f-427d-bb23-65b29722d912)
![03](https://github.com/rimmyhub/jobposting-project/assets/131572117/4d0a94b8-f214-42fa-8254-09073d8054f9)
![04](https://github.com/rimmyhub/jobposting-project/assets/131572117/fa63bc13-abdf-492d-ad40-d52e96155eed)
![05](https://github.com/rimmyhub/jobposting-project/assets/131572117/de12a9b1-9677-4ed0-a6f3-4892c36795a8)
![06](https://github.com/rimmyhub/jobposting-project/assets/131572117/067b3bb4-0fcb-478f-b164-f988ebd6be45)
![07](https://github.com/rimmyhub/jobposting-project/assets/131572117/0ae054d5-0acd-4ca6-a4b4-8aa03068fc28)
![08](https://github.com/rimmyhub/jobposting-project/assets/131572117/6227ddd1-ded0-4194-8c41-47779eb3e89b)
<br>




# 👨‍👩‍👧‍👦 Team
| 이름      | 역할                                                                                      |    Github                                | 블로그                                        |
|:---------|:----------------------------------------------------------------------------------------|:------------------------------------------|:--------------------------------------------|
| 김혜림     | 채용공고/회사 Crawling, 자기소개서 ChatGPT, S3 이미지 등록, 지원하기 기능, CI/CD 배포                  | [Github](https://github.com/rimmyhub)   |[블로그](https://nuri-story.tistory.com/)      |
| 민태영     | Web.RTC 영상, Soket.io 채팅, 로그인/회원가입, AccessToken/refreshToken, userGuard/companyGuard | [Github](https://github.com/taeyoungNew) |[블로그](https://velog.io/@ty_min12)           |
| 권윤영     | 채용공고/회사 Open Search 검색 기능, 직군/지역/경력 필터 기능, Swagger                              | [Github](https://github.com/Yooonzero)   |[블로그](https://playlist808.tistory.com/)     |
| 곽현규     | Nodemailer 이메일 인증 기능, 카카오 지도 API                                                   | [Github](https://github.com/kwakhyunkyu)  |[블로그](https://kwaq.tistory.com/)            |
| 기다연     | 포트폴리오 API                                                                             | [Github](https://github.com/Dayeon-Ki)    |[블로그](https://developbyki.tistory.com/)     |
<br>




# 😺 Git Convention
- 제목은 최대 72글자이하로 작성: ex) feat: Add Key mapping
- 본문은 아래에 작성
- 꼬리말 선택
```
### 제목
# 커밋 타입: 작업내용 (제목과 본문은 한 줄 띄워주세요)


### 본문 - 한 줄에 최대 72 글자까지만 입력하기  
# 무엇을, 왜, 어떻게 했는지


# 꼬리말
# (선택) 이슈번호 작성

#   [커밋 타입]  리스트
#   feat      : 기능 (새로운 기능)
#   fix       : 버그 (버그 수정)
#   design    : CSS 등 사용자 UI 디자인 변경
#   refactor  : 리팩토링
#   style     : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs      : 문서 (문서 추가, 수정, 삭제)
#   test      : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore     : 기타 변경사항 (빌드 스크립트 수정 등)
#   post      : 블로그 포스트 추가 (신규 포스트 작성 및 수정)
#   rename    : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우
#   remove    : 파일을 삭제하는 작업만 수행한 경우
# ------------------
#   [체크리스트]
#     제목 첫 글자는 대문자로 작성했나요?
#     제목은 명령문으로 작성했나요?
#     제목 끝에 마침표(.) 금지
#     제목과 본문을 한 줄 띄워 분리하기
#     본문에 여러줄의 메시지를 작성할 땐 "-"로 구분했나요?
# ------------------
```
<br>




# 🐣 Commit Convention
- Prettier 적용

```
{
  "singleQuote": true, // 작은 따옴표 사용
  "trailingComma": "all", // 마지막 요소 뒤에 쉼표
  "tabWidth": 2, // 들여쓰기 탭 너비 2
  "semi" : true, // 세미콜론(;) 추가
  "arrowParens" : "always", // 화살표 함수 매개변수에 괄호
  "endOfLine" : "auto" // 자동으로 행종룔 문자 선택
}
```
