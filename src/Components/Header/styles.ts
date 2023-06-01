import styled from "styled-components";

export const Container = styled.header`
    background-color: white;
    height: 5.25rem;
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.25rem;

    h1 {
        font-family: 'roboto', sans-serif;
        font-weight: bold;
        font-size: 28px;
    }

    div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;