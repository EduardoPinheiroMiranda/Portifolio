import Styled from "styled-components"

export const Container = Styled.div`
    margin-top: 30rem;

    >span{
        color: ${({ theme }) => theme.colors.colorText};

        font-size: 4rem;
        font-weight: 800;

        margin-bottom: 6.5rem;
    }

    >.card{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 6.5rem;

        >svg{
            color: ${({ theme }) => theme.colors.backgroundHeader};

            width: 10rem;
            height: 10rem;
            margin: 0 1rem;

        }

        >div{
            
            min-width: 29rem;
            

            padding: 2rem;

            display: flex;
            gap: 3rem;
            overflow-x: auto;
        }

    }


`