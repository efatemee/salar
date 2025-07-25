import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>
              <Link to="/">لیست مقالات</Link>
            </li>
            <li>
              <Link to="/creat-article">مقالات جدید</Link>
            </li>
            <li>
              <Link to="/about">درباره</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
