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
`;

export const LoginFormArea = styled.div`
    margin: auto;
    height: 37.5rem;
    width: 24rem;
    background-color: #2C2013;
    opacity: .90;
    padding: 25px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;

    button {
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
    }

    a {
        font-size: .8rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        font-style: italic;
        text-decoration: none;
        text-align: center;
        color: #FF9824;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 430px) {
        width: 95vw;
    }
`;

export const LabelArea = styled.div`
    display: flex;
    justify-content: start;
    color: white;

    h1 {
        color: whitesmoke;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 25px;
        margin: 20px 10px;
        opacity: 1;
    }
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
    align-items: center;
    flex-direction: row;
    margin-top: 1rem;
    gap: 0rem .5rem;

    input {
        min-width: 1rem;
        min-height: 1rem;
        background-color: #635446;
        opacity: .25;

        &:hover {
            cursor: pointer;
        }
    }

    label {
        font-size: .77rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        font-style: italic;
        color: whitesmoke;

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 430px) {
            font-size: .87rem;
        }
    }

    a {
        font-size: .8rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        font-style: italic;
        text-decoration: none;
        color: #FF9824;

        &:hover {
            text-decoration: underline;
        }
    }

    &:last-child {
        justify-content: center;
        gap: 0rem 1rem;
    }
`;