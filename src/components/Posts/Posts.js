import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post);
  return (
    <div>
      <h1>Welcome to posts section</h1>
      <p>Total post : {post.length}</p>
      {
          post.map(p => <Link className=" mx-1 bg-slate-700 text-white rounded"
          key={p.id}
          to={`/posts/${p.id}`}
          >{p.name}</Link>)
      }
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
