import React from "react";
import styled from "./Article.module.css";


function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />
      <div className={styled.txt}>
        <p>{props.article.title}</p>
        <span>خواندن {props.article.readTime} دقیقه ای</span>
      </div>
    </div>
  );
}

export default Article;
