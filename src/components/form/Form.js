import './Form.css';

export default function Form(props){
    return (
        <form className={props.className?props.className+' form':'form'} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
}