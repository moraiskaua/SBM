import styled, { css } from "styled-components";

interface ContainerProps {
    isMenuOpen: boolean;
    imgUrl: string;
}

export const Container = styled.aside<ContainerProps>`
    max-height: 100vh;
    background-image: url(${(props) => props.imgUrl});
    padding: 2rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    div {
        display: flex;

        img {
        background-color: #CE7A1B;
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }

    h1 {
        font-size: 48px;
        margin-left: .25rem;
        font-family: 'roboto';
        color: ${({ theme }) => theme.colors.primary};
    }    
}

    nav {
        flex: 1;
        width: 100%;
        height: 100%;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            list-style: none;
        }

        li {
            height: 2.15rem;
            width: 90%;
            padding: 1.5rem .3rem;

            a {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: whitesmoke;
                opacity: .7;
                text-decoration: none;
                text-transform: uppercase;
                font-family: 'Raleway', sans-serif;

                span {
                    font-weight: bold;
                    transition: color .3s;
                }
                
                svg {
                    width: 1.65rem;
                    height: 1.65rem;
                    color: ${({ theme }) => theme.colors.primary};
                }

                &.active {
                    opacity: 1;
                }
                
                & > div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: .8rem ;
                    background-color: rgba(40, 32, 24, .45);
                    border-radius: 8px;
                }
            }
        }
    }



    ${({ isMenuOpen }) => isMenuOpen ?

        css`
    width: 16.3rem;
    transition: width .3s ease-out;
    `:
        css`
    width: 5rem;
    transition: width .3s ease-out;

    h1 {
        display: none
    }
    
    nav {
        flex: 1;
        width: 100%;
        height: 100%;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
        }

        li {
            height: 2.15rem;
            width: 70%;
            padding: 1.5rem .3rem;
            border-radius: 8px;
            
            a {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: .7;

                span {
                    display: none;
                }
                
                svg {
                    width: 2rem;
                    height: 2rem;
                    color: ${({theme}) => theme.colors.primary};
                }

                &.active {
                    opacity: 1;

                    svg {
                        color: whitesmoke;
                    }

                    & > div {
                        background-color: rgba(255, 152, 36, .45);
                        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .27) inset;
                    }
                }

                & > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .5rem;
                    background-color: transparent;
                    border-radius: 8px;
                }
            }
        }
    }
`}

`;