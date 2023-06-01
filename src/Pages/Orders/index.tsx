import Header from "../../Components/Header";
import { Container } from "./styles";
import img from "../../assets/beer-icon.png";

export default () => {
    return (
        <Container>
            <Header title="Pedidos" />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Qtd</th>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Pagamento</th>
                            <th>Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4>1</h4></td>
                            <td>
                                <h4>#321223</h4>
                                <img src={img} />
                            </td>
                            <td><h4>Cerveja</h4></td>
                            <td><h4>R$ 7,21</h4></td>
                            <td><h4>PIX</h4></td>
                            <td><h4>Will Smith</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </Container>
    );
}