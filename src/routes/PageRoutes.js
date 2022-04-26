import React from "react";
import { Routes, Route } from "react-router-dom";
import { ReadAll } from "../components/read-all/ReadAll";
import { ReadById } from "../components/read-by-id/ReadById";
import { Create } from "../components/create/Create";
import { Update } from "../components/update/Update";
import { Delete } from "../components/delete/Delete";
import VerifyAuth from "../components/verifyAuth/VerifyAuth";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export default function PageRoutes(){
    return (
        <Routes>
            

            <Route path="/" exact={true} element={<Login/>} />

            <Route path="/register" exact={true} element={<Register/>} />

            <Route path="/view/:name" exact={true} element={<VerifyAuth><ReadAll/></VerifyAuth>} />

            <Route path="/viewOne/:id" element={<VerifyAuth><ReadById/></VerifyAuth>} />

            <Route path="/add" element={<VerifyAuth><Create/></VerifyAuth>} />

            <Route path="/update/:id" element={<VerifyAuth><Update/></VerifyAuth>} />

            <Route path="/delete/:id" element={<VerifyAuth><Delete/></VerifyAuth>} />
        </Routes>
    );
}