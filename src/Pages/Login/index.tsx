import { Container, LeftSide, LabelArea, LabelBottomArea, LoginFormArea, RightSide, TopSide } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import woodBg from "../../assets/wood-bg.png";
import imageBg from "../../assets/image-1-bg.png";
import mobileBg from "../../assets/mobile-bg.png";
import userIcon from "../../assets/user-icon.png";
import passIcon from "../../assets/pass-icon.png";
import Logo from "../../Components/Logo";
import Input from "../../Components/Input";

export default () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [checked, setchecked] = useState<boolean>(false);

    const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    }

    const handleToggleCheckbox = () => {
        setchecked(!checked);
    }

    return (
        <Container>
            <LeftSide imgUrl={innerWidth > 430 ? woodBg : mobileBg}>
                <TopSide>
                    <Logo text={true}/>
                </TopSide>
                <LoginFormArea>
                    <LabelArea>
                        <h1>Fazer Login</h1>
                    </LabelArea>

                    <Input img={userIcon} type="text" placeholder="E-mail ou nome de usuário"
                        onChange={handleUserEmail}
                        value={userEmail}
                    />
                    <Input img={passIcon} type="password" placeholder="Senha"
                        onChange={handleUserPassword}
                        value={userPassword}
                    />

                    <LabelBottomArea>
                        <input type="checkbox" onChange={handleToggleCheckbox} id="checkbox" />
                        <label htmlFor="checkbox">Lembre-se de mim.</label>
                        <NavLink to="/help">Precisa de ajuda?</NavLink>
                    </LabelBottomArea>

                    <button>Entrar</button>
                    <NavLink to="/forgot-my-password">Esqueci minha senha</NavLink>

                    <LabelBottomArea>
                        <label>Ainda não tem uma conta?</label>
                        <NavLink to="/sign-up">Fazer cadastro.</NavLink>
                    </LabelBottomArea>
                </LoginFormArea>
            </LeftSide>
            <RightSide imgUrl={imageBg} />
        </Container>
    );
}