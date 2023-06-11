import { Navbar } from "./Navbar";
import { Content } from "./Content";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://192.168.29.12:5000");
    })();
  });
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};
