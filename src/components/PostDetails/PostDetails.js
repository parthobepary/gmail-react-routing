import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postid } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${postid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [postid]);
  const { name, email, phone, website } = user;
  return (
    <div className="bg-orange-300 mt-4 p-6 text-white w-1/2 mx-auto">
      <h1>Nmae: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>phone: {phone}</h1>
      <h1>web: {website}</h1>
    </div>
  );
};

export default PostDetails;
