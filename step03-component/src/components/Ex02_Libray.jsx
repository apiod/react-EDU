import Book from "./Ex02_Book";
import border from "../../../../step02_CSS/img/border.png";

export default function Libray() {
  let author = { name: "OH", age: 12, addr: "부산" };
  return (
    <>
      <Book
        name="Spring"
        page="300"
        author={{ name: "king", age: 20, addr: "서울" }}
      />
      <Book name={"JPA"} page={150} author={author} />
      <Book name={"HTML"} page={250} />
    </>
  );
}
