import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import styled from "./creatarticle.module.css";
import { useState } from "react";
function CreatArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    readTime: "",
  });
  const changeart = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(article);

  return (
    <div>
      <Navbar title="سالار" />
      <div className="container">
        <div className={styled.newarticle}>
          <h2>مقاله جدید</h2>
          <div className={styled.changeart}>
            <label>عنوان</label>
            <input name="title" onChange={changeart} type="text" />
          </div>
          <div className={styled.changeart}>
            <label>تاریخ</label>
            <input name="date" onChange={changeart} type="text" />
          </div>
          <div className={styled.changeart}>
            <label>نویسنده</label>
            <input name="author" onChange={changeart} type="text" />
          </div>
          <div className={styled.changeart}>
            <label>مدت زمان خواندن</label>
            <input name="readTime" onChange={changeart} type="text" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CreatArticle;
