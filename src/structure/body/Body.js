import './Body.css';

export default function Body(props){
    return (
        <section className='body'>
            {props.children}
        </section>
    )
}