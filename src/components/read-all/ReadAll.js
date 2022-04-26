import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Api } from "../../api/api";

import { ItemCard } from "../item-card/ItemCard";

import "./ReadAll.css";

export function ReadAll() {
  // useState
  const [listaResultadoApi, atualizarListaResultadoApi] = useState();
  const [offset,setOffset] = useState(0);

  const {name} = useParams();

  const getResult = async()=>{
    console.log(offset)
    const resultado = await Api.buildApiGetRequest(Api.readAllCharactersUrl(offset));
    if(!(resultado.status===404)){

      const dados = await resultado.json();
      atualizarListaResultadoApi({
        ...listaResultadoApi,
        data:dados.results,
        total:dados.total
      });
    }
      
  }

  const setNext = ()=>{
    if((listaResultadoApi.total-offset)>8){
      setOffset(offset+8);
    }
  }

  const setPrev = ()=>{
    if(offset>=8){
      let temp = offset-8;
      if(temp>=0){
        setOffset(temp);
      }
    }
  }

  const getResultByName = async()=>{
    const resultado = await Api.buildApiGetRequest(Api.readCharacterByNameUrl(name));
    if(!(resultado.status===404) && !(resultado.status===400)){
      const dados = await resultado.json();
      atualizarListaResultadoApi({
        ...listaResultadoApi,
        data:dados.characters
      });
    }
      
  }

  useEffect(()=>{
    if(name!=="0"){
      getResultByName();
    }else{
      getResult();
    }
  },[name,offset])
  // useEffect

  if (!listaResultadoApi) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="page view">
    <nav className="controller">
      <div className="back" onClick={setPrev}> {"<"} </div>
      <div className="next" onClick={setNext}> {">"} </div>
    </nav>
    <div className="read-all">
      {listaResultadoApi?
        listaResultadoApi.data.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))
        :null
      }
    </div>
    </section>
  );
}