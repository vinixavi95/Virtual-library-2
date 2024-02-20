import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../componentes/home/index";
import LibraryMenu from "../../componentes/menu";
import Books from "../../componentes/livros/index";

const Rotas = () => {

    return (
        <div>
            <LibraryMenu/>
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/livros" exact element={<Books />} />
                <Route path="*" element = {<Navigate replace to="/home"/>} />
            </Routes>
        </div>
    )
};

export default Rotas;