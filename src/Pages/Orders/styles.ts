import styled from "styled-components";

export const Container = styled.div`
    > div {
        width: 78%;
        background-color: whitesmoke;
        
            table {
                width: 100%;
                border-spacing: 0;
                border-collapse: collapse;

            thead {
                background-color: ${({ theme }) => theme.colors.primary};
                color: white;
            }

                th {
                    padding: .8rem .5rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                    font-family: 'roboto', sans-serif;
                    text-align: center;
                }

                    td {
                        padding: 1rem 0rem;
                        border-left: 1px solid #D9D9D9;
                        border-radius: 1px solid #D9D9D9;
                        text-align: center;

                        h4 {
                            color: #929292;
                            font-family: 'roboto', sans-serif;
                            font-size: 1.1rem;
                        }

            &:first-child {
                width: 7rem;
            }

            &:nth-child(2) {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }

            &:nth-child(3) {
                width: 12rem;
            }

            &:last-child {
                width: 12rem;
            }
        }
    }
}
`;