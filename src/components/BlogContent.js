import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

export const BlogContent = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleBlog();
    getAllRelatedComments();
  });

  const getSingleBlog = async () => {
    const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
    setContent(res.data.content);
  };

  const getAllRelatedComments = async () => {
    const res = await axios.get(`http://localhost:5000/api/comments/${id}`);
    setComments(res.data);
  };

  return (
    <div>
      <h4>{content}</h4>
      <Button className="bg-success" onClick={() => navigate("/login")}>
        Login To Comment
      </Button>
      {comments.map((comment) => (
        <li>{comment?.content}</li>
      ))}
    </div>
  );
};
