import iconSBM from "../../assets/beer-icon.png";
import { Container } from "./styles";

export default () => {
    return (
        <Container>
            <img src={iconSBM} alt="Ícone SBM" />
            <h1>SBM</h1>
        </Container>
    );
}