import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3em;
`;


export const Titles = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5px;


    span{
        color: #41A66C;
        font-size: 1em;
    }

    h2{
        color: #FFFFFF;
        font-size: 2em;
        font-weight: 500;

        @media(max-width: 380px){
            font-size: 1.5em;
        }
    }
`;

export const ServicesOffered = styled.section`
    display: flex;
    flex-direction: column;

    @media(max-width: 780px) {
        flex-direction: row;
        justify-content: space-around;

        div{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ListServices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Service = styled.div`

    max-width: 19em;
    padding: 0.7em;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    span{
        background: linear-gradient(90deg,  #41A66C 0%, #2D9AA6 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 1.25em;
        font-weight: 500;
        text-align: center;
    }

    p{
        color: #FFFFFF;
        font-size: 1em;
    }
`;