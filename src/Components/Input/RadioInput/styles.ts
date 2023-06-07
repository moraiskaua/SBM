import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem 1.5rem 0 0;

    > label {
        color: ${({ theme }) => theme.colors.gray600};
        font-family: ${({ theme }) => theme.fontFamily.sans};
        font-weight: bold;
    }

    > div {
        display: flex;
        align-items: center;

        input[type=radio] {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid black;
            border-radius: 50%;
            outline: none;

            &:checked {
                background-color: ${({theme}) => theme.colors.primary};
                border: 2px solid ${({theme}) => theme.colors.primary};
                box-shadow: inset 0 0 0 3px whitesmoke;
            }

            &:hover {
                cursor: pointer;
            }
        }
        
        label {
            margin-left: -2.2rem;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;