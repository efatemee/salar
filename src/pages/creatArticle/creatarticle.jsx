import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import styled from "./creatarticle.module.css";
import { useState } from "react";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
function CreatArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    readTime: "",
    massage: "",
  });
  const changeart = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const changearea = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      massage: e.target.value,
    }));
  };
  console.log(article);

  return (
    <div>
      <Navbar title="سالار" />
      <div className="container">
        <div className={styled.newarticle}>
          <h2>مقاله جدید</h2>
          <Input label="عنوان" name="title" onChange={changeart} />
          <Input label="تاریخ" name="date" onChange={changeart} />
          <Input label="نویسنده" name="author" onChange={changeart} />
          <Input label="زمان خواندن" name="readTime" onChange={changeart} />
          <Textarea label="متن" onChange={changearea} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CreatArticle;
