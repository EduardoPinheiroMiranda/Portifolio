import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundCard};

    width: 30rem;

    padding: 3rem 4rem;

    border-radius: 1rem;
    margin-top: 6.5rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    >img{
        max-width: 30rem;
        height: 10rem;

        margin-bottom: 2rem;

    }

    >span{
        color: ${({ theme }) => theme.colors.colorText};
        
        font-size: 1.6rem;
        font-weight: 600;
        text-align: center;

        margin-bottom: 2rem;

        display: block;
    }

    >p{
        color: ${({ theme }) => theme.colors.colorText};
        
        font-size: 1.6rem;
        font-weight: 400;
        text-align: justify;

        height: 16rem;
        overflow-y: auto;
        
        margin-bottom: 3.5rem;
    }

    .controlls{
        width: 100%;
        display: flex;
        justify-content: space-between;

        margin-top: 2rem;

        >a{
            button{
                background-color: ${({ theme }) => theme.colors.colorButton};
                color: ${({ theme }) => theme.colors.backgroundHeader};

                font-size: 1.6rem;
                font-weight: 600;

                width: 9rem;
                height: 3rem;

                border-radius: 0.5rem;
                border: none;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

                cursor: pointer;
            }  
                
        }
    }

`

export const Tecnologi = Styled.div`
    width: 100%;
    height: 10rem;

    >span{
        color: ${({ theme }) => theme.colors.colorText};
    
        font-size: 1.6rem;
        font-weight: 600;

        margin-bottom: 2rem;
    }

    >div{
        padding: 2rem 0;

        display: flex;
        justify-content: center;
        align-items: center;

        .tecnologi{
            height: 5rem;
            overflow-y: auto;

            

            >svg{
                width: 4rem;
                height: 4rem;
                margin: 0.5rem;
                border-radius: 0.5rem;
            }
        }

        

    }

   

`
