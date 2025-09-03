import styled from "styled-components";

export const Container = styled.div`
    display: none;

    button{
        border: none;
        cursor: pointer;
    }
`;


export const Menu = styled.div<{open: boolean}>`
    background-color: #202020;
    width: 20em;
    height: 100vh;
    padding: 10px;

    position: fixed;
    right: 0;
    top: 0;

    transform: ${props => props.open ? "translateX(0)" : "translateX(20em)"};
    transition: transform 300ms;
`;


export const ButtonClose = styled.div`
    background-color: #202020;
    display: flex;
    justify-content: flex-end;


    button{
        display: flex;
        
        img{ background-color: #202020; }
    }
`;


export const Navigation = styled.nav`
    margin-top: 20px;
`;


export const Option = styled.li<{marked: boolean}>`
    background-color: #202020;

    list-style: none;
    padding: 1em;
    border-bottom: 1px solid #121212;

    a{
        background-color: #202020;
        color: ${props => props.marked ? "#41A66C" : "#FFFFFF"};
        text-decoration: none;
        font-size: 1em;
        transition: color 300ms;

        &:hover{
            color: #41A66C;
        }
    }
`;