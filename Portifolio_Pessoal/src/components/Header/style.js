import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundHeader};

    width: 100%;
    height: 10rem;

    padding: 0 3.5rem;

    border-radius: 0 0 2rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        color: ${({ theme }) => theme.colors.colorText};

        font-size: 2.4rem;
        font-weight: 900;

        display: flex;
        align-items: center;

        span{
            margin-left: 1rem;
            margin: 0 1rem;
        }
    }

`

export const Navegation = Styled.ul`
    width: 37rem;

    display: flex;
    justify-content: space-between;

    ul{
        font-size: 1.6rem;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.colorText};
        cursor: pointer;
    }
`