import React from 'react';
import Button from '../../components/button/Button';
import Fieldset from '../../components/fieldset/Fieldset';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import { Api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import './Login.css';


export default function Login(){
    const navigate = useNavigate();

    const login = async(event)=>{
        event.preventDefault();
        const preload = {
            email:event.target.inputEmail.value,
            password:event.target.inputPassword.value
        }
        const response = await Api.buildApiPostRequest(Api.makeLoginUrl(),preload);
        await response.json().then(
            result=>{
                localStorage.setItem('keyLogin',result.token);
                navigate('/view/0');
            }
        );
    }

    return (
        <section className='page login'>
            <Form onSubmit={login}>
                <img src='/assets/logo-blue-croped.gif' alt='logo blueEdtech'></img>
                <Fieldset>
                    <Input type={"email"} name={"inputEmail"} description={"Email"} />
                    <Input type={"password"} name={"inputPassword"} description={"Password"}/>
                    <Button description={"Quero Me Logar"} />
                    <Button description={"Quero Me Registrar"} className="btn-red" onClick={(event)=>{event.preventDefault(); navigate('/register')}}/>
                </Fieldset>
            </Form>
        </section >
    );
}