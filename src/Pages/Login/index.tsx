import { Link } from "react-router-dom";
import Cadastro from "../Cadastro";
import { useState } from "react";
import imageBg from "../../assets/image-1-bg.png";
import woodBg from "../../assets/wood-bg.png";
import mobileBg from "../../assets/mobile-bg.png";
import beerIcon from "../../assets/beer-icon.png";
import userIcon from "../../assets/user-icon.png";
import passIcon from "../../assets/pass-icon.png";
import * as C from "./styles";

export default () => {

    const [checked, setchecked] = useState<boolean>(false);

    return (
        <C.Container>
            <C.LeftSide imgUrl={innerWidth > 430 ? woodBg : mobileBg}>

                <C.TopSide>
                    <C.SBMIcon src={beerIcon} />
                    <C.LogoLabel>SBM</C.LogoLabel>
                </C.TopSide>

                <C.BottomSide>
                    <C.LoginFormArea>
                        <C.LabelArea>
                            <C.LoginLabel>Fazer Login</C.LoginLabel>
                        </C.LabelArea>

                        <C.IconInputArea>
                            <C.IconImg src={userIcon} />
                            <C.Input placeholder="E-mail ou nome de usuário" />
                        </C.IconInputArea>
                        <C.IconInputArea>
                            <C.IconImg src={passIcon} />
                            <C.Input placeholder="Senha" type="password" />
                        </C.IconInputArea>

                        <C.LabelBottomArea smallLabel={false}>
                            <C.CheckBox type="checkbox" id="checkbox" />
                            <C.BottomLabel smallLabel={false} htmlFor="checkbox">Lembre-se de mim</C.BottomLabel>
                            <C.BottomLabelLink to="/ajuda" smallLabel={false}>Precisa de ajuda?</C.BottomLabelLink>
                        </C.LabelBottomArea>

                        <C.LoginButton>Entrar</C.LoginButton>
                        <C.BottomLabelLink to="/esqueci-minha-senha" smallLabel={true}>Esqueci minha senha</C.BottomLabelLink>
                        <C.LabelBottomArea smallLabel={true}>
                            <C.BottomLabel smallLabel={true}>Ainda não tem uma conta?</C.BottomLabel>
                            <C.BottomLabelLink to="/cadastro" smallLabel={true}>Fazer cadastro</C.BottomLabelLink>
                        </C.LabelBottomArea>
                    </C.LoginFormArea>
                </C.BottomSide>

            </C.LeftSide>
            <C.RightSide imgUrl={imageBg} />
        </C.Container>
    );
}