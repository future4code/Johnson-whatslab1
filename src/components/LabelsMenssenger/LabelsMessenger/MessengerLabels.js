import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7%;
  width: 100%;

  background-color: #DCDCDC;

  justify-content: space-around;
  border-top: 1px solid #a1a1a1;

  margin-top: 90.4vh;
`;

const DivisoesSecundarias = styled.div`
  background-color: white;
  padding: 0.2% 2%;
  border-radius: 20px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: -1% -1%;
    background-color: none;
  }
`

const DivisaoMensagem = styled.div`
  background-color: white;
  padding: 0.7% 25%;
  border-radius: 20px;
  display: flex;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 0% -0%;
    background-color: none;
  }
`

const EstilizacaoInputUsuario = styled.input`
  border: none;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 20vw;
    border-radius: none;
    background-color: none;
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 10vw;
  }

`
const EstilizacaoInputMensagem = styled.input`
  border: none;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 40vw;
    border-radius: none;
    background-color: none;
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 13vw;
  }


`
const EstilizacaoBotao = styled.button`
  border: none;
  background-color: white;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 13vw;
    border-radius: none;
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 7vw;
  }


`

function LabelsMessenger() {
  return (
    <Container>
      <DivisoesSecundarias >
      <EstilizacaoInputUsuario placeholder="Usuário"></EstilizacaoInputUsuario>
      </DivisoesSecundarias >

      <DivisaoMensagem>
      <EstilizacaoInputMensagem placeholder="insira sua mensagem"></EstilizacaoInputMensagem>
      </DivisaoMensagem>

      <DivisoesSecundarias>
      <EstilizacaoBotao>enviar</EstilizacaoBotao>
      </DivisoesSecundarias>

    </Container>
  );
}

export default LabelsMessenger;
