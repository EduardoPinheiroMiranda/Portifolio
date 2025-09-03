import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 10px 30px;
    border-bottom: 1px solid #202020;
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;


    @media (max-width: 700px) {
        #horizontalMenu{ display: none}

        #verticalMenu{
            display: block;
        }
    }
`;
