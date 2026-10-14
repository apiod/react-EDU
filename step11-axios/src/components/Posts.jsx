import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const SERVER_API = import.meta.env.VITE_SERVER_API;
  const [posts, setPosts] = useState([]);
  console.log("SERVER_API :>> ", SERVER_API);
  useEffect(() => {
    axios.get(SERVER_API + "/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((data) => (
        <p key={data.id}>
          {data.title} / {data.author}
        </p>
      ))}
    </div>
  );
}

export default Posts;
