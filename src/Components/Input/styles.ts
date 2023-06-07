import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #635446;
    opacity: .45;
    width: 80%;
    border-radius: 8px;
    padding: 15px;
    margin-top: 15px;

    input {
        padding-left: 1rem;
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
    }
`;