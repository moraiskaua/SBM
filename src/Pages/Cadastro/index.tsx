import mobileBg from "../../assets/mobile-bg.png";
import beerIcon from "../../assets/beer-icon.png";
import signupBg from "../../assets/signup-bg.png";
import emailIcon from "../../assets/email-icon.png";
import userIcon from "../../assets/user-icon.png";
import passIcon from "../../assets/pass-icon.png";
import * as C from "./styles";

export default () => {

    return (
        <C.Container imgUrl={innerWidth > 430 ? signupBg : mobileBg}>

            <C.TopSide>
                <C.SBMIcon src={beerIcon} />
                <C.LogoLabel>SBM</C.LogoLabel>
            </C.TopSide>

            <C.LoginFormArea>
                <C.LabelArea>
                    <C.LoginLabel>Fazer Cadastro</C.LoginLabel>
                </C.LabelArea>

                <C.IconInputArea>
                    <C.IconImg src={emailIcon} />
                    <C.Input placeholder="E-mail para cadastro" type="email" />
                </C.IconInputArea>

                <C.IconInputArea>
                    <C.IconImg src={userIcon} />
                    <C.Input placeholder="Nome de usuário" type="text"/>
                </C.IconInputArea>

                <C.IconInputArea>
                    <C.IconImg src={passIcon} />
                    <C.Input placeholder="Senha" type="password" />
                </C.IconInputArea>

                <C.IconInputArea>
                    <C.IconImg src={passIcon} />
                    <C.Input placeholder="Confirmar senha" type="password" />
                </C.IconInputArea>

                <C.LabelBottomArea >
                    <C.CheckBox type="checkbox" id="checkbox-remember-me" />
                    <C.BottomLabel smallLabel={false} htmlFor="checkbox-remember-me">Lembre-se de mim</C.BottomLabel>
                </C.LabelBottomArea>

                <C.LabelBottomArea>
                    <C.CheckBox type="checkbox" id="checkbox-terms" />
                    <C.BottomLabel smallLabel={false} htmlFor="checkbox-terms">
                        Concordo com os <C.BottomLabelLink to="/termos">termos de serviço</C.BottomLabelLink > e a <C.BottomLabelLink to="/politicas">política de privacidade</C.BottomLabelLink > do aplicativo.
                        </C.BottomLabel>
                </C.LabelBottomArea>

                <C.LabelBottomArea>
                    <C.CheckBox type="checkbox" id="checkbox-emails" />
                    <C.BottomLabel smallLabel={false} htmlFor="checkbox-emails">Me enviar e-mails promocionais do aplicativo.</C.BottomLabel>
                </C.LabelBottomArea>

                <C.LoginButton>Confirmar</C.LoginButton>
                <C.BottomLabelHelpLink to="/ajuda">Precisa de ajuda?</C.BottomLabelHelpLink>

                <C.LabelBottomSideArea>
                    <C.BottomLabel smallLabel={true}>Já possui uma conta?</C.BottomLabel>
                    <C.BottomSideLabelLink to="/">Fazer login</C.BottomSideLabelLink>
                </C.LabelBottomSideArea>

            </C.LoginFormArea>
        </C.Container>
    );
}