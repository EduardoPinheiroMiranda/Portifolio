import Styled from "styled-components"

export const Container = Styled.div`
    
    height: calc(100vh - 10rem);

    margin-top: 30rem;

    

    >div{
        margin: 0 auto;
        >span{
            color: ${({ theme }) => theme.colors.colorText};

            font-size: 2.4rem;
            font-weight: 800;

            display: block;
            margin: 2rem 3rem 8rem 3rem;
        }

        >.card{
            display: flex;
            align-items: center;
            justify-content: space-between;

        

            >svg{
                color: ${({ theme }) => theme.colors.backgroundCard};

                width: 4rem;
                height: 4rem;

            }

            >div{
                
                width: 29rem;
                

                padding: 2rem;

                display: flex;
                gap: 3rem;
                overflow-x: auto;
            }

        }
    }


    


`