import React from "react";
import { useNavigate,Link } from "react-router-dom";
import Input from '../../components/input/Input';
import "./Header.css";

function Header(props) {
    const navigate = useNavigate();
    
    const getSearchInput = (event)=>{
        event.preventDefault();
        let name = event.target.value;
        if(name===""){
            name="0";
        }
        navigate('/view/'+name);
    }

    const logout = ()=>{
        localStorage.removeItem('keyLogin');
        navigate('/');
    }

    return (
        <header className="header">
            <Link to="/view/0">
                <img src="/assets/logo-blue-croped.gif" alt="Blue Edtech" width = "15%" height = "auto"/>
            </Link>
            {
                props.search?
                    <Input className={"search"} onChange={getSearchInput}/>
                    :null
            }
            <nav>
                <Link to="/view/0">Listar</Link>
                <Link to="/add">Adicionar</Link>
                <label className="link" onClick={logout}>Sair</label>
            </nav>
        </header>
    );
}

export { Header};