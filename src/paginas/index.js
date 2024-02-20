import React from "react";
import { Route, Routes } from "react-router-dom";
import RotasPagina from "./rotas-pagina/index";

const Menu = () => {

    return (
        <div>
            <Routes>
                <Route path="*" element={<RotasPagina />} />
            </Routes>
        </div>
    )
};

export default Menu;