import styled from "styled-components";


export const Container = styled.footer`
    background-color: #202020;

    margin-top: 3em;

    display: flex;
    justify-content: center;

    padding-bottom: 5em;
`;

export const Section = styled.section`
    background: transparent;
    width: 1200px;
    padding: 2em 1.85em;
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

export const ContactSection = styled.div`
    background: transparent;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2.5em;

    margin-top: 3em;

    @media(max-width: 900px){
        flex-direction: column;
    }
`;

export const Information = styled.div`
    background-color: #202020;
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin-bottom: 3em;

    p{
        background-color: #202020;
        color: #FFFFFF;
        font-size: 1em;
        line-height: 19px;
    }

    div{
        background-color: #202020;
        display: flex;
        flex-direction: row;
        gap: 3em;

        a{
            background: transparent;
            img{
                background: transparent;
                width: 50px;
                height: 50px;
            }
        }
    }
`;

export const Form = styled.form`
    background: transparent;

    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;

    label{
        background: transparent;
        color: #FFFFFF;

        font-size: 1.25em;
        font-weight: 500;

        margin-bottom: 10px;
    }

    input, textarea{
        background-color: #F1F1F1;
        height: 3em;
        font-size: 1em;

        padding: 1.25em 0.9em;

        border: none;
        border-radius: 10px;

        margin-bottom: 1.87em;
    }

    textarea{ height: 12.5em; }

    div{
        background: transparent;
        display: flex;
        justify-content: flex-end;

        button{
            background-color: #41A66C;
            height: 3em;
            width: 18.75em;

            border: none;
            border-radius: 10px;
            margin-top: 1.25em;

            margin-right: 0;
            cursor: pointer;

            span{
                background: transparent;
                color: #FFFFFF;
                font-size: 1.25em;
            }

            @media(max-width: 425px){
                width: 100%;
            }
        }
    }
`;