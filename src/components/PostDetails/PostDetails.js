import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postid } = useParams();
  return (
    <div>
      <h1>this is post: {postid}</h1>
    </div>
  );
};

export default PostDetails;
