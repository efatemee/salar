import styled from "./input.module.css";
function Input(props) {
  return (
    <div className={styled.changeart}>
      <label>{props.label}</label>
      <input name={props.name} onChange={props.onChange} type="text" />
    </div>
  );
}
export default Input;
