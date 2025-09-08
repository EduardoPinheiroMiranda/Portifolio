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

export const Description = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div{

        p{
            font-size: 1.25em;
            color: #FFFFFF;
            line-height: 23px;
            margin-bottom: 20px;

            span{
                color: #41A66C;
            }
        }
    }

    img{
        width: 450px;
        height: 370px;
    }

    @media(max-width: 900px){
        flex-direction: column;
    }

    @media (max-width: 425px) {
        div p{
            font-size: 1em;
        }

        img{
            width: 280px;
            height: 220px;
        }
    }
`;