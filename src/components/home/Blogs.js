import React from "react";
import Posts from "../posts/Posts";
const Blogs = () => {
  return (
    <div style={{ backgroundColor: "#e5e5dc" }}>
      <h1 style={{ color: "black", fontFamily: "Times New Roman" }}>
        Recent Blogs
      </h1>
      <Posts />
    </div>
  );
};

export default Blogs;
