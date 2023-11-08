import Styled from "styled-components"

export const Contaniner = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundCard};


    min-width: 25rem;
    max-width: 30rem;
    height: 40rem;

    padding: 2rem 3rem;

    border-radius: 1rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    text-align: center;

    svg{
        width: 8rem;
        height: 8rem;
        margin-bottom: 1rem;
    }

    >span{
        color: ${({ theme }) => theme.colors.colorText};
        font-size: 1.6rem;
        font-weight: 800;
    }
    
    >p{
        color: ${({ theme }) => theme.colors.colorText};
        font-size: 1.6rem;
        font-weight: 6; 
        margin-top: 1rem;
        text-align: justify;
    }

`