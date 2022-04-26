import React from "react";
import Button from "../../components/button/Button";
import Fieldset from "../../components/fieldset/Fieldset";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import validations from "../../scripts/validatios";
import { Api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const register = async(event)=>{
    event.preventDefault();
    const preload = {
        name:event.target.inputName.value,
        username:event.target.inputUserName.value,
        email:event.target.inputEmail.value,
        password:event.target.inputPassword.value,
        photo:event.target.inputPhoto.value,
    }
    const response = await Api.buildApiPostRequest(Api.createUserUrl(),preload);
    const result = await response.json();
    console.log(result);
  }
  
  return (
    <section className="page register">
      <Form onSubmit={register}>
        <img src="/assets/logo-blue-croped.gif" alt="logo blueEdtech"></img>
        <Fieldset>
          <Input name={"inputName"} description={"Nome"} required={true} />
          <Input name={"inputUserName"} description={"Nome de Usuário"} required={true} />
          <Input type={"email"} name={"inputEmail"} description={"E_mail"} required={true} onChange={validations.email}/>
          <Input
            type={"password"}
            name={"inputPassword"}
            description={"Password"}
            required={true}
          />
          <Input name={"inputPhoto"} description={"Foto"} required={true}/>
          <Button description={"Quero Me Registrar"} />
          <Button
            description={"Quero Me Logar"}
            className="btn-red"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          />
        </Fieldset>
      </Form>
    </section>
  );
}
