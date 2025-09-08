import styled from "styled-components";


export const Container = styled.section`
    background-color: #202020;

    height: 40em;
    margin-top: 3em;
`;

export const Titles = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;


    span{
        background: transparent;
        color: #41A66C;
        font-size: 1em;
    }

    h2{
        background: transparent;
        color: #FFFFFF;
        font-size: 2em;
        font-weight: 500;

        @media(max-width: 380px){
            font-size: 1.5em;
        }
    }
`;