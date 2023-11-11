import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background}; 

    min-width: 36rem;
    max-width: 100%;
    height: 100vh;

    main{
        height: calc(100vh - 10rem);
        overflow-y: auto;

        position: relative;

        .toTop{
            background-color: ${({ theme }) => theme.colors.backgroundHeader};
            color: ${({ theme }) => theme.colors.colorText};

            width: 3rem;
            height: 3rem;

            border-radius: 50%;

            position: fixed;
            bottom:  2rem;
            right: 2rem;

            display: grid;
            place-items: center;

            svg{
                width: 2rem;
                height: 2rem;
            }
        }

        .hide{
            display: none;
        }
    }
`
