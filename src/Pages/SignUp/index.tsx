import { Container, LoginFormArea, LabelArea, LabelBottomArea } from "./styles";
import mobileBg from "../../assets/mobile-bg.png";
import signupBg from "../../assets/signup-bg.png";
import emailIcon from "../../assets/email-icon.png";
import userIcon from "../../assets/user-icon.png";
import passIcon from "../../assets/pass-icon.png";
import Input from "../../Components/Input";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default () => {
    const [termsCheckbox, setTermsCheckbox] = useState<boolean>(false);
    const [promoCheckbox, setPromoCheckbox] = useState<boolean>(false);

    const handleToggleTermsCheckbox = () => {
        setTermsCheckbox(!termsCheckbox);
    }

    const handleTogglePromoCheckbox = () => {
        setPromoCheckbox(!promoCheckbox);
    }

    return (
        <Container imgUrl={innerWidth > 430 ? signupBg : mobileBg}>
            <LoginFormArea>
                <LabelArea>
                    <h1>Fazer Cadastro</h1>
                </LabelArea>

                <Input img={emailIcon} type="email" placeholder="E-mail para cadastro" width="100%" />
                <Input img={userIcon} type="text" placeholder="Nome de usuário" width="100%" />
                <Input img={passIcon} type="password" placeholder="Senha" width="100%" />
                <Input img={passIcon} type="password" placeholder="Confirmar senha" width="100%" />

                <LabelBottomArea>
                    <input type="checkbox" onChange={handleToggleTermsCheckbox} id="terms-checkbox" />
                    <label htmlFor="terms-checkbox">
                        Concordo com os <NavLink to="/terms">termos de serviço</NavLink > e a <NavLink to="/privacy-policies">política de privacidade</NavLink > do aplicativo.</label>
                </LabelBottomArea>

                <LabelBottomArea>
                    <input type="checkbox" onChange={handleTogglePromoCheckbox} id="promo-checkbox" />
                    <label htmlFor="promo-checkbox">Me enviar e-mails promocionais do aplicativo.</label>
                </LabelBottomArea>

                <button>Confirmar</button>
                <NavLink to="/help">Precisa de ajuda?</NavLink>

                <LabelBottomArea>
                    <label>Já possui uma conta?</label>
                    <NavLink to="/login">Fazer login.</NavLink>
                </LabelBottomArea>
            </LoginFormArea>
        </Container>
    );
}