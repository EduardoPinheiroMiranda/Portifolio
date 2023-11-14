import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundCard};

    min-width: 25rem;
    max-width: 30rem;
    width: 100%;

    padding: 2rem 3rem;

    border-radius: 1rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    >div:nth-child(1){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        >img{
            width: 20rem;
            height: 10rem;
        }

        >span{
            color: ${({ theme }) => theme.colors.colorText};
            
            font-size: 1.6rem;
            font-weight: 600;
            text-align: center;

            margin-bottom: 2rem;
            margin-top: 1rem;

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

    >span{
        color: ${({ theme }) => theme.colors.colorText};
    
        font-size: 1.6rem;
        font-weight: 600;

        margin-bottom: 2rem;
    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;

        .tecnologi{

            min-width: 20rem;
            width: 100%;
            height: 5rem;

            display: flex;
            flex-wrap: wrap;
            overflow: auto;
            gap: 0.5rem;

            padding: 0.5rem;
            
            div{
                
                >svg{
                    width: 4rem;
                    height: 4rem;
                    border-radius: 0.5rem;
                }
            }
        }

        >svg{
            color: ${({ theme }) => theme.colors.background};

            width: 2rem;
            height: 2rem;
        }

        

    }

   

`
