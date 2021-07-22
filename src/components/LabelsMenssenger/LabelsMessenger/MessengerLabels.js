import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  background-color: #fff;

  justify-content: space-around;
  border-top: 1px solid #a1a1a1;

  margin-top: 64.4vh;
`;

function LabelsMessenger() {
  return (
    <Container>
      <input placeholder="Digite aqui"></input>
      <input placeholder="insira sua mensagem"></input>
      <button>enviar</button>
    </Container>
  );
}

export default LabelsMessenger;
