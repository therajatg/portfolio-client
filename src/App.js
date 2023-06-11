import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { BlogPage } from "./components/BlogPage";
import { BlogContent } from "./components/BlogContent";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogContent />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
