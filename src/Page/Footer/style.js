import Styled from "styled-components";

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundCard};

    font-size: 1.2rem;
    font-weight: 400;

    width: 100%;
    height: 13rem;

    padding: 2rem 4rem;


    >span{
        color: ${({ theme }) => theme.colors.colorText};

    }

    >div{
        
        display: flex;
        gap: 4rem;

        margin: 1rem 0;

        >div:nth-child(1){
            display: flex;
            flex-direction: column;
            gap: 1rem;

            a{
                color: ${({ theme }) => theme.colors.colorText};
                text-decoration: none;

                display: flex;
                align-items: center;
                gap: 0.5rem;

                cursor: pointer;

                svg{
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }

    >div:nth-child(2){

        p{
            color: ${({ theme }) => theme.colors.colorText};
            margin-bottom: 1rem;
        }
        
        a{
            text-decoration: none;
        }
    }

    
`