import React, { useEffect, useState } from "react";
import verifyAuth from '../../scripts/verifyAuth';
import { useNavigate } from 'react-router-dom';

export default function VerifyAuth(props){
    const [auth,setAuth] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        setAuth({
            ...auth,
            auth:verifyAuth()
        });
    },[props.children])
 return (
    <>
        {auth?auth.auth?props.children:navigate('/'):navigate('/')}
    </>
 );
}