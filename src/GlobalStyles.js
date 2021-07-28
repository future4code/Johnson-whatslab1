
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
    }

    html{
        height: 100vh;
    }


    /// Para inserir as animações no momento do envio das mensagens

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
