import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};
