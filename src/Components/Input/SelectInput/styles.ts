import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    > label {
        color: ${({ theme }) => theme.colors.gray600};
        font-family: ${({ theme }) => theme.fontFamily.sans};
        font-weight: bold;
    }

    select {
        background-color: ${({theme}) => theme.colors.gray300};
        width: 8rem;
        padding: .7rem;
        border: 1px solid black;
        border-radius: 5px;
    }
`;