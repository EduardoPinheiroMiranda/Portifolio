import Styled from "styled-components"

export const Container = Styled.section`
    position: relative;
    margin: 0 3rem;

    animation-name: element;
    animation-duration: 1000ms;
`
export const Description = Styled.div`

    color: ${({ theme }) => theme.colors.colorText};
    margin-top: 10rem;

    h1{
        font-size: 2.4rem;
        font-weight: 600;

        margin-bottom: 5rem;
    }

    p{
        font-size: 1.6rem;
        font-weight: 400;
        width: 16rem;

        span{
            font-weight: 900;
        }
    }

`

export const SocialMedia = Styled.div`

   margin-top: 20rem;

   display: flex;
   gap: 5rem;

    >a{
        text-decoration: none;

        svg{
            width: 3rem;
            height: 3rem;

            cursor: pointer;
            transition: all 500ms;
        }
        
        .github{
            color: ${({ theme }) => theme.colors.colorIcon};
            border-radius: 50%;
        }

        .github:hover{
            background-color: ${({ theme }) => theme.colors.colorText};
            color: ${({ theme }) => theme.colors.colorGithub};
            box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.colorText};
        }

        .linkedin{
            color: ${({ theme }) => theme.colors.colorIcon};
            border-radius: 0.5rem;
        }

        .linkedin:hover{
            background-color: ${({ theme }) => theme.colors.colorText};
            color: ${({ theme }) => theme.colors.colorLinkedin};
            box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.colorText}; */
        }

    }
    
`

export const Tecnologi = Styled.div`
    svg{
        color: ${({ theme }) =>  theme.colors.colorIcon};
        width: 5rem;
        height: 5rem;
        transition: all 500ms;
        
    }

    svg:nth-child(1){
        position: absolute;
        top: -2rem;
        right: 3rem;
        z-index: 1;

        animation: floteTop 5s linear infinite;
    }

    svg:nth-child(1):hover{
        color: ${({ theme }) => theme.colors.gitHover};
    }


    svg:nth-child(2){
        position: absolute;
        top: 70%;
        right: 5rem;
        z-index: 1;

        animation: floteDown 5s linear infinite;
    }

    svg:nth-child(2):hover{
        color: ${({ theme }) => theme.colors.nodeHover};
    }

    svg:nth-child(3){
        position: absolute;
        top: 30%;
        right: 8rem;
        z-index: 1;
        animation: floteTop 5s linear infinite;
    }

    svg:nth-child(3):hover{
        color: ${({ theme }) => theme.colors.reactHover};
    }
`


