import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background}; 

    min-width: 36rem;
    width: 100%;
    height: 100vh;

    >main{
        height: calc(100vh - 10rem);
        overflow-y: auto;

        transition: all 500ms;

        
      


        .toTop{
            
            background-color: ${({ theme }) => theme.colors.backgroundHeader};
            
            width: 3rem;
            height: 3rem;

            border-radius: 50%;

            position: fixed;
            bottom:  2rem;
            right: 2rem;

            display: grid;
            place-items: center;

            a{
                text-decoration: none;
                color: ${({ theme }) => theme.colors.colorText};


                svg{
                    width: 2rem;
                    height: 2rem;
                }
            }
        }

        .hide{
            display: none;
        }

        .show{
            animation-name: element;
            animation-duration: 1000ms;
            animation-fill-mode: forwards;
        }

        
    }

    >.hide{
        display: none;
    }

    

`
