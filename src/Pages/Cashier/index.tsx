import Header from "../../Components/Header";
import { IoSearchOutline } from "react-icons/io5";
import { Container } from "./styles";

export default () => {
    return (
        <>
            <Header title="Caixa" />
            <Container>
                <div>
                    <h1>Comprar Produtos</h1>
                    <div>
                        <IoSearchOutline />
                        <input type="text" placeholder="Pesquisar" />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h4>Velho Barreiro</h4>
                                <span>#321223</span>
                            </td>
                            <td>
                                <h4>R$ 12,00</h4>
                            </td>
                            <td>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Velho Barreiro</h4>
                                <span>#321223</span>
                            </td>
                            <td>
                                <h4>R$ 12,00</h4>
                            </td>
                            <td>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Velho Barreiro</h4>
                                <span>#321223</span>
                            </td>
                            <td>
                                <h4>R$ 12,00</h4>
                            </td>
                            <td>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Velho Barreiro</h4>
                                <span>#321223</span>
                            </td>
                            <td>
                                <h4>R$ 12,00</h4>
                            </td>
                            <td>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Velho Barreiro</h4>
                                <span>#321223</span>
                            </td>
                            <td>
                                <h4>R$ 12,00</h4>
                            </td>
                            <td>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}