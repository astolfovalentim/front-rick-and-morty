import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button className={props.className?props.className + " button-h":"button-h"} onClick={props.onClick?props.onClick:null}>
          {props.description}
      </button>
    </>
  );
}
