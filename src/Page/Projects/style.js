import Styled from "styled-components"

export const Container = Styled.section`

    max-width: 144rem;
    margin: 0 auto;
    
    margin-bottom: 10rem;
    opacity: 0;
    transition: all 500ms;

    >span{
        color: ${({ theme }) => theme.colors.colorText};

        font-size: 2.4rem;
        font-weight: 600;

        display: block;
        margin: 2rem 3rem ;

    }

    .cards{
        display: flex;
        align-items: center;

        >div{
            min-width: 29rem;
            width: 100%;
            padding: 2rem;

            display: flex;
            gap: 3rem;
            overflow-x: auto;
        }

        >svg{
            color: ${({ theme }) => theme.colors.backgroundCard};

            width: 4rem;
            height: 4rem;

            cursor: pointer;
        }
    }
`
