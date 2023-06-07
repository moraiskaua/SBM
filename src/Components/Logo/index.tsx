import iconSBM from "../../assets/beer-icon.png";
import { Container } from "./styles";

interface LogoProps {
    text: boolean;
}

export default ({ text }: LogoProps) => {
    return (
        <Container>
            <img src={iconSBM} alt="Ícone SBM" />
            {text &&
                <h1>SBM</h1>
            }
        </Container>
    );
}