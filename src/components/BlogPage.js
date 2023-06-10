import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import axios from "axios";

export const BlogPage = () => {
  const [allBlogs, setAlBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  });

  const getBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setAlBlogs(res.data);
  };

  return (
    <div>
      {allBlogs.map((item) => (
        <BlogCard item={item} />
      ))}
    </div>
  );
};
