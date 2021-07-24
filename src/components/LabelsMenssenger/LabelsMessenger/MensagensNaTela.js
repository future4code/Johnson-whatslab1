import React from "react";

import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  max-width: 100%;
  background-color: #dcdcdc;
  justify-content: space-around;
  border-top: 1px solid #a1a1a1;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-top: 0vh;
    height: 25vh;
  }
`;

const EnviandoMensagens = styled.div`
  display: flex;
  padding: 0 5px;
  flex-direction: column-reverse;
`;
const BalaoVerde = styled.div`
  align-self: flex-end;
  background-color: lightgreen;

  width: 40vw;
  margin: 5px;
  padding: 10px;
  word-wrap: break-word;
  border-radius: 10px;

  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

const BalaoRosa = styled.div`
  background-color: lightpink;
  width: 40vw;
  margin: 10px;
  font-size: 16px;
  padding: 10px;
  word-wrap: break-word;
  border-radius: 10px;
`;

const DivisaoUsuario = styled.div`
  background-color: white;
  padding: 0.8% 2%;
  border-radius: 10px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: -1% -1%;
    background-color: none;
    margin: 10px 0;
    width: 92%;
    border-radius: 5px;
  }
`;
const EstilizacaoInputUsuario = styled.input`
  border: none;
  outline: 0;
  width: 15vw;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 20vw;
    border-radius: none;
    background-color: none;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    width: 10vw;
  }
`;
const DivisaoMensagem = styled.div`
  background-color: white;
  padding: 0.8% 2%;
  border-radius: 10px;
  display: flex;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 0% -0%;
    background-color: none;
    padding: 10px 0;
    width: 90vw;
    border-radius: 5px;
  }
`;
const EstilizacaoInputMensagem = styled.input`
  border: none;
  outline: 0;
  width: 50vw;
  padding-left:10px ;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    
    border-radius: none;
    background-color: none;
    width: 100vw;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    width: 13vw;
  }
`;
const EstilizacaoBotao = styled.button`
  border: 1px solid darkgrey;
  background-color: #a4d4c4;
  cursor: pointer;
  color: grey;
  padding: 0.8% 2%;
  border-radius: 10px;

  :hover {
    box-shadow: 0 1.5px 1px grey;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 13vw;
    border-radius: none;
    padding: 5px 0;
    width: 90vw;
    margin-top: 15px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    width: 7vw;
  }
`;

export class MensagensNaTela extends React.Component {
  state = {
    mensagens: [],
    userValue: "",
    mensagensValue: "",
  };

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value });
  };

  onChangeMensagensValue = (event) => {
    this.setState({ mensagensValue: event.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      user: this.state.userValue,
      texto: this.state.mensagensValue,
    };
    const novaMensagemArray = [novaMensagem, ...this.state.mensagens];
    this.setState({ mensagens: novaMensagemArray, mensagensValue: "" });
  };

  render() {
    return (
      <>
        <ContainerInputs>
          <DivisaoUsuario>
            <EstilizacaoInputUsuario
              onChange={this.onChangeUserValue}
              value={this.state.userValue}
              placeholder="Usuário"
            ></EstilizacaoInputUsuario>
          </DivisaoUsuario>

          <DivisaoMensagem>
            <EstilizacaoInputMensagem
              onChange={this.onChangeMensagensValue}
              value={this.state.mensagensValue}
              placeholder="Digite uma mensagem"
            ></EstilizacaoInputMensagem>
          </DivisaoMensagem>

          <EstilizacaoBotao onClick={this.enviarMensagem}>
            Enviar
          </EstilizacaoBotao>
        </ContainerInputs>

        <EnviandoMensagens>
          {this.state.mensagens.map((mensagens, indice) => {
            if (mensagens.userValue === "eu" || "Eu") {
              return <BalaoVerde key={indice}>{mensagens.texto}</BalaoVerde>;
            } else {
              return (
                <BalaoRosa key={indice}>
                  <strong>{mensagens.userValue}</strong>:{mensagens.texto}
                </BalaoRosa>
              );
            }
          })}
        </EnviandoMensagens>
      </>
    );
  }
}

export default MensagensNaTela;
