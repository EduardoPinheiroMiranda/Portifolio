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


    @media(min-width: 640px){

        >div{
            .nav{
                display: block;
            }
        }
        svg{
            display: none;
        }

        
    }

    @media(min-width: 770px){
        span{
            font-size: 2.4rem;
        }


    }

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        
    }

`

export const SmallerMenu = Styled.div`
    color: ${({ theme }) => theme.colors.colorText};

    font-size: 1.6rem;
    font-weight: 900;

    width: 100%;

    display: flex;
    justify-content: space-between;

    >div{
        display: grid;
    }

    >svg{
        width: 2rem;
        height: 2rem;

        cursor: pointer;
        transition: all 500ms;
    }

    .rotate{
        transform: rotate(90deg);
    } 
`

export const Nav = Styled.nav`
    
    width: 100%;

    display: none;

    >div{
        display: flex;
        justify-content: end;
        gap: 3rem;
    }

    a{
        color: ${({ theme }) => theme.colors.colorText};

        font-size: 1.6rem;
        font-weight: 900;

        text-decoration: none;

    }
`