import React from "react";
import styled from "styled-components";
import background from "../images/BackgroundWhats.png";
import { MensagensNaTela } from "../LabelsMenssenger/LabelsMessenger/MensagensNaTela.js";

const SecaoMensagens = styled.div`
  display: flex;

  border: 1px solid #a1a1a1;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url(${background});

  height: 97vh;

  flex-direction: column-reverse;

  //Inserindo barra de rolagem nas conversas
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: lightgrey;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 96.5vh;
  }
`;

function ContainerInputs() {
  return (
    <>
      <SecaoMensagens>
      <MensagensNaTela />
      </SecaoMensagens>
    </>
  );
}

export default ContainerInputs;
