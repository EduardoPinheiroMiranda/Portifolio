import Styled from "styled-components"

export const Container = Styled.section`
    
    margin: 30rem 0 10rem 0;
    opacity: 0;

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