import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import MainPage from "../Pages/MainPage";
import Orders from "../Pages/Orders";
import Stock from "../Pages/Stock";
import Suppliers from "../Pages/Suppliers";
import Cashier from "../Pages/Cashier";
import SignUp from "../Pages/SignUp";

export const RouteList = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<Home />} />
                <Route path="orders" element={<Orders />} />
                <Route path="stock" element={<Stock />} />
                <Route path="suppliers" element={<Suppliers />} />
                <Route path="cashier" element={<Cashier />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
}