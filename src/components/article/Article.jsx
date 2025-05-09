import React from "react";
import styled from "./Article.module.css";
import imga from "../../assets/image/1234.jpeg";

function Article() {
  return (
    <div className={styled.articleWrapper}>
      <img src={imga} />
      <div className={styled.txt}>
        <p>متغییر ها در جوا اسکریپت</p>
        <span>خواندن 10 دقیقه ای</span>
      </div>
    </div>
  );
}

export default Article;
