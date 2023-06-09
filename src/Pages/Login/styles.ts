import styled from "styled-components";

type ImgProps = {
    imgUrl: string;
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

export const TopSide = styled.div`
    padding-top: 2.8rem;
`;

export const LeftSide = styled.div<ImgProps>`
    height: 100%;
    flex: 2;
    z-index: 2;
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, .60) 35px 22px 70px 4px;
    display: flex;
    flex-direction: column;

    @media (max-width: 430px) {
        flex: 1;
    }

    @media (min-width: 431px) and (max-width: 890px) {
        flex: 5;
    }
`;

export const LoginFormArea = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 24rem;
    background-color: #2C2013;
    opacity: .87;
    border-radius: 32px;

    button {
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

    h1 {
        color: whitesmoke;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 10px;
        opacity: 1;
    }
`;

export const LabelBottomArea = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;

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
        margin-right: 2.8rem;

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