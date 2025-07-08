import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import styled from "./creatarticle.module.css";
import { useState } from "react";
function CreatArticle() {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1);
  };

  const decrement = () => {
    setcounter(counter - 1);
  };
  return (
    <div>
      <Navbar title="سالار" />
      <div className="container">
        <div className={styled.newarticle}>
          <h2>مقاله جدید</h2>
          <button onClick={increment}>increment</button>
          <span>{counter}</span>
          <button onClick={decrement}>discrement</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CreatArticle;
