import { Link } from "react-router-dom";
import styled from "styled-components";

type ImgProps = {
    imgUrl: string;
}

type LabelProps = {
    smallLabel: boolean;
}

export const Container = styled.div<ImgProps>`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-size: cover;
    overflow-y: auto;
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;

    @media (max-width: 430px) {

    display: none;
}
`;

export const SBMIcon = styled.img`
    background-color: #CE7A1B;
    border-radius: 50%;
    width: 60px;
    height: 60px;
`;

export const LogoLabel = styled.h1`
    font-size: 48px;
    margin-left: 10px;
    font-family: 'roboto';
    color: #FF9824;
`;

export const LoginFormArea = styled.div`
    height: 600px;
    width: 380px;
    background-color: #2C2013;
    opacity: .90;
    padding: 25px;
    border-radius: 32px;

    @media (max-width: 430px) {

        width: 95vw;
    }
`;

export const LabelArea = styled.div`
    display: flex;
    justify-content: start;
    color: white;
`;

export const LoginLabel = styled.h1`
    color: whitesmoke;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 25px;
    margin: 20px 10px;
    opacity: 1;
`;

export const IconInputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #635446;
    opacity: .45;
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    margin-top: 7px;
`;

export const IconImg = styled.img`
    max-width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
`;

export const Input = styled.input`
    width: 100%;
    color: whitesmoke;
    text-align: start;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    background-color: transparent;
    padding: 5px;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: whitesmoke;
    }
`;

export const LabelBottomArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 15px;
`;

export const CheckBox = styled.input`
    min-width: 15px;
    background-color: #635446;
    opacity: .45;
    margin-right: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const BottomLabel = styled.label<LabelProps>`
    font-size: ${props => props.smallLabel ? '11px' : '13px'};
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    color: whitesmoke;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 890px) {

        font-size: ${props => props.smallLabel ? '11px' : '12px'};
    }
`;

export const BottomLabelLink = styled(Link)`
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #FF9824;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }
`;

export const LoginButton = styled.button`
    margin: 10px 0px;
    width: 100%;
    padding: 15px;
    color: whitesmoke;
    border-radius: 8px;
    background-color: #FF9824;
    font-weight: bold;
    font-size: 15px;
    transition: all ease .4s;
    opacity: 1;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;

export const LabelBottomSideArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

export const BottomSideLabelLink = styled(Link)`
    font-size: 11px;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #FF9824;
    margin-left: 7px;

    &:hover {
        text-decoration: underline;
    }
`;

export const BottomLabelHelpLink = styled(Link)`
    display: flex;
    justify-content: center;
    font-size: 11px;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #FF9824;
    margin-left: 7px;

    &:hover {
        text-decoration: underline;
    }
`;