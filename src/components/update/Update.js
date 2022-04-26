import { useEffect, useState } from "react";
import { Api } from "../../api/api";
import { useParams } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import "./Update.css";
import Form from "../form/Form";
import Fieldset from "../fieldset/Fieldset";
import { useNavigate } from 'react-router-dom';

export function Update(props) {
    const {id} = useParams();

    const [item, setItem] = useState();

    const [previewImage, setPreviewImage] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (!item) {
            getItemData();
        }
    });

    const getItemData = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readCharacterByIdUrl(id));

        const dados = await resultado.json();

        setItem(dados);
        console.log(dados);
        setPreviewImage({
            ...previewImage,
            image:dados.imageUrl
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.inputName.value;
        const imagemUrl = event.target.inputImage.value;

        const dados = {
            name:nome,
            imageUrl:imagemUrl,
        };

        const resultado = await Api.buildApiPutRequest(
            Api.updateCharacterUrl(id),
            dados
        );

        const jsonResultado = await resultado.json();

        navigate(`/viewOne/${jsonResultado._id}`);
    };

    const updatePreview = event => {
        setPreviewImage({
            ...previewImage,
            image:event.target.value
        });
    };

    return (
        <div className="page update">
            {item?
            <Form onSubmit={handleSubmit}>
                <Fieldset>
                    <Input name={"inputName"} description={"Nome:"} defaultValue={item.name}/>
                    <Input name={"inputImage"} description={"Url da Imagem:"} defaultValue={item.imageUrl} onChange={updatePreview}/>
                    <div className="box_image">
                        <label className="label">
                            Preview da imagem
                        </label>
                        <img
                            src={previewImage?previewImage.image:null}
                            className="preview-image"
                            alt="Prévia da Imagem"
                        />   
                    </div>    
                <Button
                    description="Editar"
                />
                </Fieldset>
            </Form>
            :null}
        </div>
    );
}
