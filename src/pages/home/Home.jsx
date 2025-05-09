import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";
import Article from "../../components/article/Article";

function Home() {
  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سالار" />

      <div className="container">
        <h2>لیست مقالات</h2>
        <div className={styled.articles}>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        </div>
      </div>
    </div>
  );
}
export default Home;
