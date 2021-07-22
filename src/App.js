import React from "react";
import Header from "./components/Header/Header/Header";
import Container from "./components/Main/Main";
import Footer from "./components/Footer/Footer/Footer";
import GlobalStyle from "./GlobalStyles";



function App() {
  return (
    <div>
      <GlobalStyle />

      <Header />

      <Container />

      <Footer />
    </div>
  );
}

export default App;
