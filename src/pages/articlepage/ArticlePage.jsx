import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";

import styled from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticlePage() {
  const Params = useParams();
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${Params.id}`)
      .then((result) => {
        setArticle(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar title="سالار" />
      <div className={styled.articleWrapper}>
        <div className="container">
          <h1>{articles.title}</h1>
          <div className={styled.title}>
            <span>تاریخ : {articles.date}</span>
            <span>نویسنده : {articles.athor}</span>
            <span>مدت زمان خواندن: {articles.readTime}دقیقه</span>
          </div>

          <img src={articles.imageUrl} alt="Code" />
          <p>{articles.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ArticlePage;
