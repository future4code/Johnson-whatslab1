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
    padding: 0% 0%;
    background-color: none;
  }

`

const DivisaoMensagem = styled.div`
  background-color: white;
  padding: 0.7% 25%;
  border-radius: 20px;
  display: flex;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 0% 0%;
    background-color: none;
  }
`

const EstilizacaoInput = styled.input`
  border: none;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 38vw;
    border-radius: none;
    background-color: none;
  }

`
const EstilizacaoBotao = styled.button`
  border: none;
  background-color: white;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 13vw;
    border-radius: none;
  }

`

function LabelsMessenger() {
  return (
    <Container>
      <DivisoesSecundarias >
      <EstilizacaoInput placeholder="Usuário"></EstilizacaoInput>
      </DivisoesSecundarias >

      <DivisaoMensagem>
      <EstilizacaoInput placeholder="insira sua mensagem"></EstilizacaoInput>
      </DivisaoMensagem>

      <DivisoesSecundarias>
      <EstilizacaoBotao>enviar</EstilizacaoBotao>
      </DivisoesSecundarias>

    </Container>
  );
}

export default LabelsMessenger;
