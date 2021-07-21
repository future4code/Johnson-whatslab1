import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  background-color: #d5d5d5;
  width: 100vw;
  color: #616161;
`;

function Header() {
  return (
    <Container>
      <h1>WhatsLab1</h1>
    </Container>
  );
}

export default Header;
