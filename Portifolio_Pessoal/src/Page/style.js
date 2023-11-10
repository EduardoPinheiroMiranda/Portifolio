import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background}; 

    min-width: 36rem;
    max-width: 100%;
    height: 100vh;

    main{
        height: calc(100vh - 10rem);
        overflow-y: auto;
    }
`
