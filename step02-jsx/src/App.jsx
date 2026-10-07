import "./App.css";
function App() {
  const message = "Hello World";
  const student = {
    no: 10,
    name: "홍길동",
    addr: "강남",
    age: 20,
  };
  const arr = [1, "A", 3.14, true];
  const cssStyle = {
    backgroundColor: "pink",
    textDecoration: "underline",
    color: "blue",
  };
  let count = 0;
  const counter = (e) => {
    console.log(count++);
    console.log("e :>> ", e);
  };
  return (
    <>
      {/* style ={jsx문법사용 {css문법사용}}  */}
      <h1 style={{ border: "5px solid red", color: "blue" }}>
        JSX 문법 공부하기
      </h1>
      <h3 style={cssStyle}>메시지:{message}</h3>
      {/* 객제는 반드시 점 표기법을 이용해서 출력한다. */}
      <h3>학생정보: {student.no}</h3>

      {/* 표현식에는 무누자열, 숫자, 배열만 출력가능 */}
      <h3>
        {"hi"} / {100} / {true} / {undefined} / {null} / {arr}
      </h3>
      {/* 여기서 class는 className을 이용한다. */}
      <h4 className="test">{student.age > 18 ? "성인" : "미성년자"}</h4>
      {student.age > 18 ? (
        <h4 style={{ color: "blue" }}>성인</h4>
      ) : (
        <h4 style={{ color: "red" }}>미성년자</h4>
      )}
      <a href="">링크1</a>
      <hr />
      {student.age > 18 && <h5>{student.age} 모든서비스 이용가능</h5>}
      <button onClick={counter}>클릭1</button>
      <p>count: {count}</p>
      <button
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        클릭2
      </button>
      <button
        onClick={function (e) {
          e.target.style.color = "blue";
        }}
      >
        클릭3
      </button>
    </>
  );
}

export default App;
