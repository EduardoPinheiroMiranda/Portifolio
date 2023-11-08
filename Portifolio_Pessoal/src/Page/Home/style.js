import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background}; 

    max-width: 100%;
    height: 476.5rem;

    
    .margin{
        height: 10rem;
    }

`

export const Page = Styled.div`

    .header{
        position: fixed;
        top: 0;
        z-index: 10;
    }

    main{
        max-width: 144rem;
        padding: 0 5rem;

        margin: 0 auto;

        position: relative;
    }

`

export const Description = Styled.div`

    color: ${({ theme }) => theme.colors.colorText};
    margin-top: 10rem;

    h1{
        font-size: 4rem;
        font-weight: 600;

        margin-bottom: 3rem;
    }

    p{
        font-size: 3rem;
        font-weight: 600;

        width: 40rem;
    }

`

export const SocialMedia = Styled.div`

    margin-top: 14rem;

    display: flex;
    gap: 5rem;

    >a{
        text-decoration: none;

        svg{
            color: ${({ theme }) => theme.colors.colorIcon};
            width: 5rem;
            height: 5rem;

            cursor: pointer;
            transition: all 500ms;
        }
        .github{
            border-radius: 50%;
        }
        .github:hover{   
            background-color: ${({ theme }) => theme.colors.colorText};
            color: ${({ theme }) => theme.colors.colorGithub};

            box-shadow: 0px 0.5px 5px 0.1px ${({ theme }) => theme.colors.colorText};
        }

        .linkedin{
            
            border-radius: 0.5rem;
        }

        .linkedin:hover{
            background-color: ${({ theme }) => theme.colors.colorText};
            color: ${({ theme }) => theme.colors.colorLinkedin};

            box-shadow: 0px 0.5px 5px 0.1px ${({ theme }) => theme.colors.colorText};
        }

        
    }


    
`

export const Tecnologi = Styled.div`
    svg{
        color: ${({ theme }) =>  theme.colors.colorIcon};

        width: 8rem;
        height: 8rem;
    }

    svg:nth-child(1){
        position: absolute;
        top: -2.5rem;
        left: 124rem;
        z-index: 1;
    }

    svg:nth-child(2){
        position: absolute;
        bottom: 1rem;
        left: 77rem;
        z-index: 1;
    }

    svg:nth-child(3){
        position: absolute;
        top: 5rem;
        left: 87rem;
        z-index: 1;
    }
`

export const Section = Styled.div`

`