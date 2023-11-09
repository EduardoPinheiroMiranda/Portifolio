import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundHeader};

    min-width: 36rem;
    width: 100%;
    height: 10rem;

    padding: 0 3rem;

    border-radius: 0 0 2rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        width: 100%;

        display: flex;
        justify-content: space-between;

        div{
            color: ${({ theme }) => theme.colors.colorText};

            font-size: 1.6rem;
            font-weight: 900;

            display: grid;
            align-items: center;
        }
        
        svg{
            color: ${({ theme }) => theme.colors.colorText};

            width: 2rem;
            height: 2rem;
        }
        
    }

`