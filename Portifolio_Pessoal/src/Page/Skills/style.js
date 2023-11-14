import Styled from "styled-components"

export const Container = Styled.section`
    
    max-width: 144rem;
    margin: 30rem auto 10rem;
    padding: 0 4rem;
    
    opacity: 0;
    transition: all 500ms;

    >div{
        margin: 0 auto;
        >span{
            color: ${({ theme }) => theme.colors.colorText};

            font-size: 2.4rem;
            font-weight: 800;

            display: block;
            margin: 2rem 3rem;
        }

        >.card{
            display: flex;
            align-items: center;
            justify-content: space-between;

        

            >svg{
                color: ${({ theme }) => theme.colors.backgroundCard};

                width: 4rem;
                height: 4rem;

                cursor: pointer;

            }

            >div{
                
                min-width: 29rem;
                width: 100%;
                

                padding: 2rem;

                display: flex;
                gap: 3rem;
                overflow-x: auto;
            }

        }
    }


    


`