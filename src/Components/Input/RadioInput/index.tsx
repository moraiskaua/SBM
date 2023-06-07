import { Container } from "./styles";

interface RadioInputProps {
    label: string;
    firstValue: string;
    secondValue: string;
}

export default ({ label, firstValue, secondValue }: RadioInputProps) => {
    return (
        <Container>
            <label>{label}</label>
            <div>
                <input type="radio" name={label} id={firstValue} value={firstValue} />
                <label htmlFor={firstValue} >{firstValue}</label>
                <input type="radio" name={label} id={secondValue} value={secondValue} />
                <label htmlFor={secondValue} >{secondValue}</label>
            </div>
        </Container>
    );
}