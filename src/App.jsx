import "./App.css";
import AboutUS from "./pages/aboutUS/AboutUS";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/articlepage/ArticlePage";
import CreatArticle from "./pages/creatArticle/creatarticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/creat-article" element={<CreatArticle />} />
      </Routes>
    </>
  );
}

export default App;
