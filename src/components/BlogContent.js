import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import Cookies from "js-cookie";

export const BlogContent = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleBlog();
    getAllRelatedComments();
  }, []);

  const getSingleBlog = async () => {
    const res = await axios.get(`http://192.168.29.12:5000/api/blogs/${id}`);
    setContent(res.data.content);
  };

  const getAllRelatedComments = async () => {
    const res = await axios.get(`http://192.168.29.12:5000/api/comments/${id}`);
    setComments(res.data);
  };

  return (
    <div>
      <h4>{content}</h4>
      {Cookies.get("jwt") ? (
        ""
      ) : (
        <Button className="bg-success" onClick={() => navigate("/login")}>
          Login To Comment
        </Button>
      )}

      {comments.map((comment) => (
        <li>{comment?.content}</li>
      ))}
    </div>
  );
};
