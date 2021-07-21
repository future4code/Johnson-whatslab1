import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Poppins', sans-serif;
        width: 100vw;
        height: 100vh;
    }

    body{
        background-color: #ffffff;
    }
`;
export default GlobalStyles;
