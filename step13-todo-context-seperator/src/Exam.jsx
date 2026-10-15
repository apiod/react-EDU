import Header from "./components/Header";
import ExamEditor from "./examComponents/ExamEditor";
import ExamList from "./examComponents/ExamList";
import { Provider } from "react-redux";
import store from "./redux/store";
function Exam() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ExamEditor />
        <ExamList />
      </div>
    </Provider>
  );
}

export default Exam;
