import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25em;
`;

export const Section = styled.section`
    
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

export const Slider = styled.div`
    margin-top: 3em;

    .swiper{
        .swiper-pagination{
            background: transparent;
        }
        .swiper-slide{
            display: flex;
            justify-content: center;
            border: 1px solid #121212;
        }
        .swiper-button-next{
            background-color: transparent;
            color: #2D9AA6;
        }

        .swiper-button-prev{
            background-color: transparent;
            color: #2D9AA6;
        }
    }
`;

export const Unavailable = styled.div`

    background-color: #202020;
    height: 40em;
    width: 18em;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;


    div{
        background: transparent;
        width: 16.25em;
        height: 4.5em;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid;
        border-image: linear-gradient(90deg, #41A66C 0%, #2D9AA6 100%) 1;

        span{
            background: linear-gradient(90deg, #41A66C 0%, #2D9AA6 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.5em;
        }
    }
`;