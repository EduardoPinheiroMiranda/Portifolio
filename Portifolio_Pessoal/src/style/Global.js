import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        scroll-padding-top: 100px;
        scroll-behavior: smooth;
    }

    :root{
        font-size: 62.5%;
        
    }


    ::-webkit-scrollbar{
        display: none;
    }

    @keyframes floteTop {
        0%{
            transform: translateY(-10px)
        }
        50%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-10px)
        }

    }

    @keyframes floteDown {
        0%{
            transform: translateY(10px)
        }
        50%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(10px)
        }
    }

    @keyframes menu{
        0%{
            transform: translateX(11rem);
            opacity: 0;
        }

        100%{
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes element {
        0%{
            transform: translateX(-36rem);
        }
        100%{
            transform: translateX(0);
            opacity: 1;
        }
    }

`