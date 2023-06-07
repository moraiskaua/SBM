import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div:first-child {
        width: 55vw;
        height: 100vh;
        background-color: whitesmoke;

        > div:first-child {
            width: 100%;
            height: 5.5rem;
            background-color: ${({ theme }) => theme.colors.primary};
            padding: 1rem 0rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 1rem;
            font-family: 'roboto', sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            color: whitesmoke;

            > div {
                width: 16rem;
                padding: 1rem 0;
                background-color: white;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-radius: 12px;
                padding-left: 1rem;

                input {
                    border: none;
                    display: flex;
                    text-align: center;
                    padding-right: 1.8rem;
                    width: 100%;

                    &:focus {
                        outline: none;
                    }
                }

                svg {
                    color: black;
                }
            }
        }

        table {
            width: 100%;
            border-spacing: 0;
            border-collapse: collapse;
            
            thead {
                background-color: #CBCBCB;
            }

            th {
                padding: .8rem .5rem;
                font-size: 1rem;
                text-transform: uppercase;
                font-family: 'roboto', sans-serif;
                text-align: center;
            }

            td {
                padding: 1.3rem 0rem;
                border-bottom: 1px solid #D9D9D9;
                text-align: center;

                h4 {
                    font-weight: 600;
                    font-family: 'roboto', sans-serif;
                    font-size: 1.1rem;
                }

                span {
                    color: #929292;
                }

                button {
                    background-color: #D9D9D9;
                    padding: .6rem 1rem;
                    border-radius: 8px;
                    border: none;
                    margin: 0rem .3rem;
                    color: whitesmoke;
                    font-weight: bold;

                    &:last-child {
                        background-color: ${({ theme }) => theme.colors.primary};
                    }
                }

                &:last-child {
                    > span {
                        background-color: #F0F0F0;
                        color: black;
                        padding: .6rem 1rem;
                        border-radius: 8px;
                    }
                }
            }
        }
    }
`;