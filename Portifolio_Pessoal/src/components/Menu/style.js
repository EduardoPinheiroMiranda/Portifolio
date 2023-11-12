import Styled from "styled-components"

export const Container = Styled.div`



    background-color: rgba(0,0,0,0.3);

    width: 100%;
    height: 100vh;

        
    position: fixed;
    z-index: 2;

    nav{

        background-color: ${({ theme }) => theme.colors.backgroundHeader};

        width: 11rem;

        padding: 2rem 1.5rem 3rem;
        border-radius: 0 0 0 2rem;

        margin: 1rem auto;

        box-shadow: 0 4px 4px rgba(0,0,0,0.25);

        display: grid;

        position: absolute;
        top: -1.6rem;
        right: -0.1rem;

        transition: all 500ms;

        animation-name: menu;
        animation-duration: 500ms;




        a{
            color: ${({ theme }) => theme.colors.colorText};

            font-size: 1.4rem;
            font-weight: 900;

            text-decoration: none;

            margin-bottom: 2rem;

            cursor: pointer;
            

        }
    }

`