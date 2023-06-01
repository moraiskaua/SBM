import { Container } from "./styles";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'email' | 'password';
    placeholder: string;
    img: string;
    width?: string;
}

export default ({ type, placeholder, img, width }: InputProps) => {
    return (
        <Container style={{ width }}>
            <img src={img} />
            <input type={type} placeholder={placeholder} />
        </Container>
    );
}