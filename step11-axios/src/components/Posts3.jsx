import { useEffect, useState } from "react";
// import { getPosts, addPost } from "./api/postApi";
import axiosInstance from "../api/axiosInstance";

function Post3() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    //eslint-disable-next-line
    selectAll();
  }, []);

  //추가
  const insert = async () => {
    if (!title || !author) return;
    setTitle("");
    setAuthor("");
    const re = await axiosInstance.post("/posts", { title, author });
    console.log(re);
    selectAll();
  };

  //불러오기
  const selectAll = async () => {
    const res = await axiosInstance.get("/posts");
    setPosts(res.data);
  };

  const deletePosts = async ({ key }) => {
    // console.log(e.target.parentElement.key);
    console.log(key);
    const key1 = 1;
    const re = await axiosInstance.delete(`/posts/${key1}`);
    console.log(re);
    selectAll();
  };
  const updatePosts = async () => {
    const key1 = 1;
    const re = await axiosInstance.put(`/posts/${key1}`);
    console.log(re);
    selectAll();
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>게시글</h2>

      <input
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="작성자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={insert}>추가</button>

      <ul>
        {posts.map((p) => {
          console.log(p);
          return (
            <li key={p.id}>
              {p.id} - {p.title} - {p.author}
              <button onClick={deletePosts} key={p.id}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Post3;
