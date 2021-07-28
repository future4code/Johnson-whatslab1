import React from "react";
import styled from "styled-components";

// ======================== Toda a estilização do app com Styled-Components ======================== //

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
  background-color: #bffcc6;

  width: 40vw;
  margin: 5px;
  padding: 10px;
  word-wrap: break-word;
  border-radius: 10px;

  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  position: relative;

  //Animação - KeyFrame adicionado ao GlobalStyled Components
  animation-name: balaoSurgindo;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-duration: 0.2s;

  &:after {
    content: "";
    border: 15px solid transparent;
    border-top-color: #bffcc6;
    position: absolute;
    top: 0px;
    right: -8px;
  }
`;

const BalaoRosa = styled.div`
  background-color: #ffc9de;
  width: 40vw;
  margin: 10px;
  font-size: 16px;
  padding: 2px 10px;
  word-wrap: break-word;
  border-radius: 10px;
  position: relative;

  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);

  //Animação - KeyFrame adicionado ao GlobalStyled Components
  animation-name: balaoSurgindo;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-duration: 0.2s;

  strong {
    font-size: 0.8rem;
    color: #e47262;
  }
  p {
    margin: 2px 0px;
  }

  &:after {
    content: "";
    border: 15px solid transparent;
    border-top-color: #ffc9de;
    position: absolute;
    top: 0px;
    left: -8px;
  }
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
  padding-left: 10px;

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
  background-color: #64bd56;
  cursor: pointer;
  color: #fff;
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

// ======================== Toda a lógica do app ======================== //

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
    this.setState({
      mensagens: novaMensagemArray,
      mensagensValue: "",
      userValue: "",
    });
  };

  baloesMensagem = () =>
    this.state.mensagens.map((mensagens, indice) => {
      console.log(mensagens);
      if (
        mensagens.user === "eu" ||
        mensagens.user === "Eu" ||
        mensagens.user === ""
      ) {
        return <BalaoVerde key={indice}>{mensagens.texto}</BalaoVerde>;
      } else {
        return (
          <BalaoRosa key={indice}>
            <strong>{mensagens.user}</strong>
            <p>{mensagens.texto}</p>
          </BalaoRosa>
        );
      }
    });

  // Solução emcontrada aqui: https://pt.stackoverflow.com/questions/44796/colocar-clique-do-bot%C3%A3o-na-tecla-enter
  enviandoComEnter = (event) => {
    if (event.which == 13) {
      return this.enviarMensagem();
    }
  };

  // Não consegui pensar em uma implementação =(
  deletarMensagens = () => {};

  // Emitir sons de envio de mensagem e de delete
  // Não consegui pensar em uma implementação =(
  //Talves um splice()?
  sonsEnvioEDelete = () => {};

  render() {
    return (
      <>
        <ContainerInputs>
          <DivisaoUsuario>
            <EstilizacaoInputUsuario
              onChange={this.onChangeUserValue}
              value={this.state.userValue}
              onKeyPress={this.enviandoComEnter}
              placeholder="Usuário"
            ></EstilizacaoInputUsuario>
          </DivisaoUsuario>

          <DivisaoMensagem>
            <EstilizacaoInputMensagem
              onChange={this.onChangeMensagensValue}
              value={this.state.mensagensValue}
              onKeyPress={this.enviandoComEnter}
              placeholder="Digite uma mensagem"
            ></EstilizacaoInputMensagem>
          </DivisaoMensagem>

          <EstilizacaoBotao onClick={this.enviarMensagem}>
            Enviar
          </EstilizacaoBotao>
        </ContainerInputs>

        <EnviandoMensagens>{this.baloesMensagem()}</EnviandoMensagens>
      </>
    );
  }
}

export default MensagensNaTela;
