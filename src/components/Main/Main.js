import React from "react";
import styled from "styled-components";
import background from "../images/BackgroundWhats.png";
import { MensagensNaTela } from "../LabelsMenssenger/LabelsMessenger/MensagensNaTela.js";

const SecaoMensagens = styled.div`
  border: 1px solid #a1a1a1;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url(${background});

  height: 100vh;
  display: flex;

  flex-direction: column-reverse;

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
