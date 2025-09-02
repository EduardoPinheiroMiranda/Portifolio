import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #202020;
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.4em;

    img{
        display: none;
    }

    @media (max-width: 900px) {

        img{
            display: block;
            width: 50;
            height: 50;
        }
    }
`;

export const Options = styled.a<{marked: boolean}>`
    color: ${(props) => !props.marked ? "#FFFFFF" : "#41A66C"};
    min-width: 3.1em;
    text-decoration: none;
    text-align: center;
    font-size: 1em;
    font-weight: bold;

    transition: color 300ms;

    div{
        width: 0%;
        height: 1.5px;
        margin-top: 5px;
        transition: width 300ms;
    }
    
    &:hover{
        color: #41A66C;

        div{
            background-color: #41A66C;
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`;