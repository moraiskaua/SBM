import { Container } from "./styles";

interface SupplierInputLabel {
    label: string;
}

export default ({label}: SupplierInputLabel) => {
    return(
        <Container>
            <label htmlFor="">{label}</label>
            <input type="text" />
        </Container>
    );
}