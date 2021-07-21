import React from "react";
import styled from "styled-components";
import LabelsMessenger from "../LabelsMenssenger/LabelsMessenger/MessengerLabels";
import background from "../images/BackgroundWhats.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 80vh;
`;

const SecaoMensagens = styled.section`
  border: 1px solid #a1a1a1;
  width: 60vw;
  height: 70vh;
  background-image: url(${background});
`;

function Container() {
  return (
    <Main>
      <SecaoMensagens>

        <LabelsMessenger />
        
      </SecaoMensagens>
    </Main>
  );
}

export default Container;