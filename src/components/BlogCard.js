import { useNavigate } from "react-router-dom";
import { Button, Card, CardText, CardTitle } from "reactstrap";

export const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      body
      className="my-2"
      style={{
        width: "18rem",
      }}
    >
      <CardTitle tag="h5">{item?.title}</CardTitle>
      <CardText>{item.content.slice(0, 100)}</CardText>
      <Button color="primary" onClick={() => navigate(`/blogs/${item.id}`)}>
        Visit Blog
      </Button>
    </Card>
  );
};
