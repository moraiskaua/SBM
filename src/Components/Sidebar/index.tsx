import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import beerIcon from "../../assets/beer-icon.png";
import woodBg from "../../assets/wood-bg.png";
import { BiDrink } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { RiTruckLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setMenuOpen(false);
    };

    return (
        <Container
            imgUrl={woodBg}
            isMenuOpen={menuOpen}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <img src={beerIcon} alt="Ícone SBM" />
                <h1>SBM</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <div>
                                <span>Home</span>
                                <HiOutlineHome />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders">
                            <div>
                                <span>Pedidos</span>
                                <BiDrink />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stock">
                            <div>
                                <span>Estoque</span>
                                <VscGraph />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/suppliers">
                            <div>
                                <span>Fornecedores</span>
                                <RiTruckLine />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cashier">
                            <div>
                                <span>Caixa</span>
                                <RiMoneyDollarCircleLine />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}