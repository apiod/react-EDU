# 과일 상점

### 목적

원래 과제가 github.io를 이용해서 dist파일 배포 하는것.  
하지만 포트폴리오를 유지한 체로 과제 파일을 업로드 하고  
a태그를 이용해서 링크를 연결하고 싶었음.

### 문제발생

문제는 github.io는 순수html +js를 이용해서 빌드가 되고  
과일상점 자체는 react를 기반으로 배포되어  
a태그의 herf ={"./dist/index.html"}가 연결이 되지만  
contents가 보이지 않는 현상이 발생

### 문제해결

netlify 를 이용해서 무료 page를 페이지를 배포하는 방안으로 수정  
a태그의 herf를 해당 netlify로 빌드된 페이지로 수정

---

### 사용방법

github에 원하는 원격 저장소를 선택한 다음
base directory를 작성 후

build command 에 npm run build 작성  
Publish directory 에 dist(build하고 생성된 파일)작성

deploy버튼 클릭

<a herf="https://apiod-fruitshop-react.netlify.app/">해당 주소 이동→</a>
