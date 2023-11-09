import Styled from "styled-components"

export const Container = Styled.div`

    margin-top: 30rem;

    >span{
        color: ${({ theme }) => theme.colors.colorText};

        font-size: 4rem;
        font-weight: 600;

    }

    .cards{

        width: 100%;

        display: flex;
        align-items: center;
        padding: 0 1rem;

        

        >div{
            max-width: 144rem;

            display: flex;
            gap: 2.5rem;
            overflow-x: auto;
        }

        >svg{
            font-size: 5rem;
            margin: 0 1rem;
        }
    }
`
