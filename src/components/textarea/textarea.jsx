import styled from "./textarea.module.css";
function Textarea(props) {
  return (
    <div className={styled.changeart}>
      <label>{props.label}</label>
      <textarea onChange={props.onChange}></textarea>
    </div>
  );
}
export default Textarea;
