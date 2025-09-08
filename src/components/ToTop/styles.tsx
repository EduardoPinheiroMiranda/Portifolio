import styled from "styled-components";


export const Container = styled.button<{visible: boolean}>`

    background-color: #41A66C;

    width: 3em;
    height: 3em;

    border: none;
    border-radius: 50%;
    cursor: pointer;

    display: ${({visible}) => visible ? "flex" : "none"};
    justify-content: center;
    align-items: center;

    position: fixed;
    right: 3em;
    bottom: 3em;

    z-index: 5;


    img{
        background: transparent;
        width: 30px;
        height: 30px;
    }
`;