import styled from "./Nevbar.module.css";

function Nevbar(props) {
  return (
    <div className="">
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>لیست مقالات</li>
            <li>مقاله جدید </li>
            <li>دوباره</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nevbar;
