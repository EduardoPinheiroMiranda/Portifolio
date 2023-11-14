import Styled from "styled-components"

export const Container = Styled.section`

    max-width: 144rem;
    margin: 0 auto;
    padding: 0 4rem;

    margin-bottom: 10rem;
    opacity: 0;
    transition: all 500ms;

    span{
        color: ${({ theme }) => theme.colors.colorText};

        display: block;
        margin: 2rem 3rem 8rem 3rem;

        font-size: 2.4rem;
        font-weight: 600;
    }

    div{
        min-width: 25rem;
        width: 100%;

        overflow-x: auto;

        display: flex;
        align-items: center;

        svg{
            color: ${({ theme }) => theme.colors.backgroundCard};

            width: 4rem;
            height: 4rem;
            cursor: pointer;
        }
    }

`

export const Card = Styled.div`
    min-width: 29rem;
    width: 100%;
    padding: 2rem;

    display: flex;
    align-items: center;
    overflow: auto;
    gap: 3rem;

    .certificade{
        background-color: ${({ theme }) => theme.colors.backgroundCard};
        
        width: 20rem;
        padding: 1rem;

        border-radius: 1rem;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: grid;
        place-items: center;

        img{
            width: 22rem;
            border-radius: 1rem
        }
    }

`