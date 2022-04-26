import React from "react";
import { Routes, Route } from "react-router-dom";
import {Header} from '../structure/header/Header';
import VerifyAuth from "../components/verifyAuth/VerifyAuth";

export default function MenuRoutes(){
    return (
        <Routes>
            
            <Route path="/" exact={true} element={<></>} />

            <Route path="/register" exact={true} element={<></>} />

            <Route path="/view/:name" exact={true} element={<VerifyAuth><Header search={true} /></VerifyAuth>} />

            <Route path="/viewOne/:id" element={<VerifyAuth><Header/></VerifyAuth>} />

            <Route path="/add" element={<VerifyAuth><Header/></VerifyAuth>} />

            <Route path="/update/:id" element={<VerifyAuth><Header/></VerifyAuth>} />

            <Route path="/delete/:id" element={<VerifyAuth><Header/></VerifyAuth>} />
        </Routes>
    );
}