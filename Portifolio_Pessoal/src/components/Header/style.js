import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundHeader};

    min-width: 36rem;
    width: 100%;
    height: 10rem;

    padding: 0 3rem;

    

    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    

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

            cursor: pointer;

            transition: all 500ms;
        }

        .rotate{
            transform: rotate(90deg);
        }
        
    }

`
