import './Fieldset.css';

export default function Fieldset(props){
    return (
        <fieldset className={props.className?props.className+' fieldset':'fieldset'}>
            {props.children}
        </fieldset>
    );
}