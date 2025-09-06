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

export const ScrollView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 4em;

    .swiper{
        width: 100%;
        height: 6.25em;

        .icon{
            background-color: #202020;
            border-radius: 0.6em;

            display: flex;
            justify-content: center;
            align-items: center;

            img{
                background: transparent;
                width: 70px;
                height: 70px;
            }
        }
    }


`;