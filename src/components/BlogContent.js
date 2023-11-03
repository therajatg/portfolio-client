import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { useAuth } from "../context/authContext";
import axios from "../axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const BlogContent = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [newComment, setNewComment] = useState("");
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    getSingleBlog();
    getAllRelatedComments();
  }, []);

  console.log("auth", auth);

  const getSingleBlog = async () => {
    const res = await axios.get(`/api/blogs/${id}`);
    setContent(res.data.content);
  };

  const getAllRelatedComments = async () => {
    const res = await axios.get(`/api/comments/${id}`);
    setComments(res.data);
  };

  const commentSubmitHandler = async () => {
    if (newComment.trim() !== "") {
      const res = await axiosPrivate.post(`/api/comments/${id}`, {
        newComment,
      });
    }
  };

  return (
    <div>
      <h4>{content}</h4>
      {auth ? (
        <div>
          <Input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Enter your comment"
          />
          <Button onClick={commentSubmitHandler}>Submit</Button>
        </div>
      ) : (
        <Button className="bg-success" onClick={() => navigate("/login")}>
          Login To Comment
        </Button>
      )}

      {comments.map((comment) => (
        <li>
          {comment?.content} {comment?.name}
        </li>
      ))}
    </div>
  );
};
