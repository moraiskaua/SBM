import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

export const RouteList = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    );
}