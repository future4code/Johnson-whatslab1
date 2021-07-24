
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
    }


    
    @keyframes balaoSurgindo {
        from {
            opacity: 0;
            transform: translateY(10px)
        }
        to {
            opacity: 1;
            transform: translateY(0px)
        }
    }
    

    
`

export default GlobalStyles;
