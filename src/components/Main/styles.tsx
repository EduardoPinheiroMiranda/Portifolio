import styled from "styled-components";
import Image from "next/image";


export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 6.25em 0;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        gap: 2em;
    }
`;

export const Informations = styled.div`
    max-width: 100%;
`;

export const Description = styled.div`
    h1{
        font-size: 3em;
        background: linear-gradient(90deg,  #41A66C 0%, #2D9AA6 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        color: #FFFFFF;
        font-size: 1.25em;
        margin-top: 1.5em;
        line-height: 1.4em;

        span{
            color: #41A66C;
            font-weight: bold;
        }
    }

    @media(max-width: 500px) {
        h1{ font-size: 2em; }
        p{ font-size: 1em; }
    }
`;

export const Contact = styled.div`
    margin-top: 5em;
    max-width: 27em;
    
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: row;

    div{
        display: flex;
        flex-direction: row;
        gap: 1.25em;
    }


    @media(max-width: 500px) {
        align-items: center;
        button{
            width: 10em;
            height: 4em;
        }
    }
`;

export const Button = styled.button`
    background-color: #41A66C;
    width: 12.5em;
    height: 5em;
    border: none;
    border-radius: 0.65em;
    cursor: pointer;

    transition: background-color 300ms;

    span{
        background: transparent;
        color: #FFFFFF;

        font-size: 1.25em;
        font-weight: bold;
        text-decoration: none;
    }

    &:hover{
        background-color: #1c9450
    }
`;

export const ImagePerfil = styled(Image)`
    width: 450px;
    height: 370px;

    margin: auto;

    @media (max-width: 900px) {
        width: 500px;
        height: 420px;
    }
    
    @media (max-width: 550px) {
        width: 400px;
        height: 320px;
    }
    
    @media (max-width: 450px) {
        width: 340px;
        height: 260px;
    }

    @media (max-width: 320px) {
        width: 280px;
        height: 220px;
    }
`;

export const Icon = styled(Image)`
    width: 50px;
    height: 50px;
    
    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }
`;
