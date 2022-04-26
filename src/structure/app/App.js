import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from '../footer/Footer';
import './App.css';
import PageRoutes from "../../routes/PageRoutes";
import MenuRoutes from "../../routes/MenuRoutes";
import Body from "../body/Body";

export function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <MenuRoutes />
                <Body>
                    <PageRoutes />
                </Body>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
