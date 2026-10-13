# React-router-dom

리액트는 SPA(Single Pages Application)로 동작한다.

### 설치하기

```powershell
npm i react-router-dom
```

### 사용방법

```javascript
// root page
createBrowserRouter([
    {
        path: ,// 경로
        element: ,// 해당경로에 사용할 컴퍼넌트
        erroElement: , // 에러가 날때 사용할 컴퍼넌트
        children:[ // 하위 페이지
            {
                index: true, // 기본페이지
                element: <Home/>
            },
            {
                path: "/user/:id", // params로 넘길 id값
                element: <User/>
            },
            {
                path: "admin", // useSearchParams로 사용할 것
                element: <Admin>
            }

        ] ,
    }
])

//user
 const params = useParams(); //데이터 가져오기
 console.log(params.id); //데이터 사용

// admin
// admin?name=hong&age=30
const [params] = useSearchParams(); //가져오기
{params.get("name")} / {params.get("age")} //사용
```

## <br/>

<br/>

### 페이지 이동

```javascript
const nav = useNavigate(); //navigate생성

//메인주소 이후에 붙을 path경로
nav("path경로");
<Link to="/admin"> ADMIN</Link>;
```

react는 a태그 대신 Link태그를 사용한다.
