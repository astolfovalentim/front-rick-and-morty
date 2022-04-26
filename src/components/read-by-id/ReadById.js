import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { Api } from "../../api/api";
import Fieldset from "../fieldset/Fieldset";
import Form from "../form/Form";

import "./ReadById.css";

export function ReadById(props) {
    const {id} = useParams();

    const [item, setItem] = useState("");

    useEffect(() => {
        if (!item) {
            getItemData();
        }
    });

    const getItemData = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readCharacterByIdUrl(id));

        const dados = await resultado.json();
        console.log(dados);
        setItem(dados);
    };

    return (
        <section className="page">
        <Form >
            <Fieldset>
                <Link to={`/update/${id}`} className="button button--blue">
                    Editar
                </Link>

                <Link to={`/delete/${id}`} className="button button--red">
                    Remover
                </Link>
                <div className="card box_item">
                    <h1 className="card__title">{item.name}</h1>
                    <img src={item.imageUrl} alt={item.name} className="preview-image" />
                </div>
            </Fieldset>
        </Form>
        </section>
    );
}
