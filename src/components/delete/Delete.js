import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../api/api";
import Fieldset from "../fieldset/Fieldset";
import Button from "../button/Button";
import Form from "../form/Form";

import "./Delete.css";

export function Delete(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const handleDelete = async event => {
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteCharacterUrl(id));

        navigate("/view/0");
    };

    const cancel =(event)=>{
        event.preventDefault();
        navigate('/view/0');
    }
    return (
        <section className="page">
        <Form onSubmit={handleDelete}>
            <Fieldset>
                <label className={"label"} >
                    Tem certeza que deseja remover este registro?
                </label>
                <Button className="button button--red" description={'Remover'} />
                <Button description={"Cancelar"} className="button button--grey" onClick={cancel}/>
            </Fieldset>
        </Form>
        </section>
    );
}
