import { Link } from "react-router-dom";
import styled from "styled-components";

type ImgProps = {
    imgUrl: string;
}

type LabelProps = {
    smallLabel: boolean;
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div<ImgProps>`
    height: 100%;
    flex: 2;
    z-index: 2;
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, .60) 35px 22px 70px 4px;

    @media (max-width: 430px) {
        
        flex: 1;
    }

    @media (min-width: 431px) and (max-width: 890px) {

        flex: 5;
    }
`;

export const TopSide = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 50px;
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

export const BottomSide = styled.div`
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginFormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 380px;
    background-color: #2C2013;
    opacity: .87;
    border-radius: 32px;

    @media (max-width: 430px) {

        width: 95vw;
    }

    @media (min-width: 431px) and (max-width: 1300px) {

        width: 90%;
    }
`;

export const LabelArea = styled.div`
    display: flex;
    width: 80%;
    justify-content: start;
    color: white;
`;

export const LoginLabel = styled.h1`
    color: whitesmoke;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
    opacity: 1;
`;

export const IconInputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #635446;
    opacity: .45;
    width: 80%;
    border-radius: 8px;
    padding: 15px;
    margin-top: 15px;
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
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: whitesmoke;
    }
`;

export const LabelBottomArea = styled.div<LabelProps>`
    width: ${props => props.smallLabel ? '100%' : '80%'};
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.smallLabel ? 'center' : 'space-between'};
    margin-top: 15px;
`;

export const CheckBox = styled.input`
    width: 19px;
    background-color: #635446;
    opacity: .45;

    &:hover {
        cursor: pointer;
    }
`;

export const BottomLabel = styled.label<LabelProps>`
    font-size: ${props => props.smallLabel ? '11px' : '13px'};
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    color: whitesmoke;
    margin-right: ${props => props.smallLabel ? '15px' : '40px'};

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 890px) {

        font-size: ${props => props.smallLabel ? '11px' : '12px'};
    }
`;

export const BottomLabelLink = styled(Link)<LabelProps>`
    font-size: ${props => props.smallLabel ? '11px' : '13px'};
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #FF9824;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 890px) {

        font-size: ${props => props.smallLabel ? '11px' : '12px'};
    }
`;

export const LoginButton = styled.button`
    margin: 10px 0px;
    width: 80%;
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

export const RightSide = styled.div<ImgProps>`
    height: 100vh;
    flex: 5;
    z-index: 1;
    background-image: url(${(props) => props.imgUrl});
    background-position: center;
    background-size: cover;

    @media (max-width: 430px) {
        
        flex: 0;
    }
`;