# axios

비동기 작업을 위한 axios사용

```bash
npm i axios
```

# json-server

1. 설치

```bash
npm install -D json-server
```

devDependency로 설치하는게 일반적이다.

2. 가짜 db파일 만들기

프로젝트 루트에 `db.json`생성

```json
{
  "posts": [
    { "id": 1, "title": "Hello React" },
    { "id": 2, "title": "Axios Test" }
  ]
}
```

3.  json-server 실행설정

`package.json`에 scripts부분에 아래를 추가한다.

```json
"scripts": {
  "dev":"vite",
  "server":"json-server --watch db.json --port 4000"
}
```

```bash
npm run dev
npm run server
```

두 개를 실행해야한다.

3. 0. CORS 문제 해결 (선택)

보통 json-server는 기본적으로 CORS 허용이라 문제 없음 👍

하지만 필요하면:

```bash
json-server --watch db.json --port 4000 --cors
```

3. 1. 두 개를 동시에 실행하기

```bash
npm install -D concurrently
```

`package.json`

```json
"scripts": {
  "dev":"vite",
  "server":"json-server --watch db.json --port 4000",
  "start": "concurrently \"npm run dev\" \"npm run server\""
}
```

```bash
npm run start
```

로 프로젝트, json-server를 동시에 실행 할 수 있다.
