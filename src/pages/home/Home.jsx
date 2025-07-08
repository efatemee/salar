import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // setArticles();
    axios
      .get("http://localhost:3000/articles")
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سالار" />

      <div className="container">
        <h2>لیست مقالات</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Link to={`/article/${article.id}`}>
              <Article key={article.id} article={article} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
