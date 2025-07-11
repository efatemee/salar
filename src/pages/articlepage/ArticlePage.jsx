import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";

import styled from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/spinner";

function ArticlePage() {
  const Params = useParams();
  const [articles, setArticle] = useState([]);
  const [isloading, setIsloading] = useState(false);
  
  useEffect(() => {
    setIsloading(true);
    axios
      .get(`http://localhost:3000/articles/${Params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="سالار" />
      {isloading ? (
        <Spinner />
      ) : (
        <div className={styled.articleWrapper}>
          <div className="container">
            <h1>{articles.title}</h1>
            <div className={styled.title}>
              <span>تاریخ : {articles.date}</span>
              <span>نویسنده : {articles.athor}</span>
              <span>مدت زمان خواندن: {articles.readTime}دقیقه</span>
            </div>

            <img src={articles.imageUrl} />
            <p>{articles.content}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
export default ArticlePage;
