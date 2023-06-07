import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    width: 95%;
    height: 80%;
    background-color: whitesmoke;
    border-radius: 10px;

    > div:first-child {
        background-color: ${({theme}) => theme.colors.primary};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 1.3rem;

        h1 {
            font-family: ${({theme}) => theme.fontFamily.sans};
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
        }
    }

    > div:nth-child(2) {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 3.5rem;

        div {
            display: flex;
            gap: 0 40px;
        }

        button {
            background-color: ${({theme}) => theme.colors.primary};
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            padding: .8rem;
            width: 13rem;
            margin-top: 2.5rem;
        }
    }
`;