import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  height: 60px;

  background-color: #d5d5d5;
  width: 100vw;
  color: #616161;
`;

function Footer() {
  return (
    <Container>
      <p> WhatsLab1 </p>

      <p>Gabriela &copy; Gabriel </p>
    </Container>
  );
}

export default Footer;
