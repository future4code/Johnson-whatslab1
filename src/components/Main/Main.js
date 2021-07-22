import React from "react";
import styled from "styled-components";
import LabelsMessenger from "../LabelsMenssenger/LabelsMessenger/MessengerLabels";
import background from "../images/BackgroundWhats.png";

const SecaoMensagens = styled.section`
  border: 1px solid #a1a1a1;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
`;

function Container() {
  return (

      <SecaoMensagens>

        <LabelsMessenger />
        
      </SecaoMensagens>

  );
}

export default Container;
