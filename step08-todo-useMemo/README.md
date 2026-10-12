# TodoList 최적화

## useMemo, React.memo, useContext를 이용해서 최적화 하기

#### useMemo

컴포넌트 내부에서 연산의 결과를 저장해두고, 의존성이 바뀌지 않으면 이전 결과를 재사용 함.

---

#### React.memo

함수형 컴포넌트를 전체를 감싸서 props가 바뀌지 않으면 다시 렌더링하지 않음.
컴포넌트가 같은 props로 반복 렌더링될 때 불필요한 렌더링을 방지하기 위해 사용

---

#### useContext

컴포넌트 간의 데이터를 전달하는 props는 props Drilling이라고 컴포넌트간에 전달을 해야하는 단점이 있다.  
필요한 곳에서 useContext를 이용해서 그때만 쓸 수 있도록 하는것이 useContext다.
