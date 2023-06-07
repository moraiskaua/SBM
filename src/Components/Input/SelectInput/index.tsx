import { Container } from "./styles";

interface SelectInputProps {
    label: string;
}

export default ({ label }: SelectInputProps) => {
    return (
        <Container>
            <label htmlFor={label}>{label}</label>
            <select id={label}>
                <option value="0"> </option>
            </select>
        </Container>
    );
}