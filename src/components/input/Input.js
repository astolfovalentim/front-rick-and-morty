import "./Input.css";

export default function Input(props) {
  return (
    <>
      <label htmlFor={props.name} className={"label"}>
        {props.description}
      </label>
      <input
        id={props.name}
        type={props.type ? props.type : "text"}
        name={props.name}
        className={props.className ? props.className + " input" : "input"}
        onChange={props.onChange ? props.onChange : null}
        ref={props.ref?props.ref:null}
        required={props.required?true:false}
        defaultValue={props.defaultValue?props.defaultValue:null}
      />
    </>
  );
}
