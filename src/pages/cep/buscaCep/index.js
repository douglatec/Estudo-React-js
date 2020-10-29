import React, { Component } from "react";
import { link } from "react-router-dom";
import "./index.css";

//https://www.youtube.com/watch?v=gqk9T7onNCQ&list=PL2hDwB8DzXGOxIuijrYNrPrKcjQERQtbO&index=1

//https://viacep.com.br/

export default class BuscaCep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/"
      // o retorno desse json conta uma estrutura de array
      /*[
          {
              a:aaaa,
              b:bbb
          }, // indica um novo item no array dentro do json
          {
              a:aaa
              b:bbb
          }

    ]*/
    ).then((cep) => cep.json().then((cep) => this.setState({ cep })));
  }

  render() {
    return this.state.cep.map((
      //falei besteira, voce pode usar dessa forma tambem
      cep,
      index // nao pode usar na funcao map { 'e preciso usar (
    ) => (
      <div>
        <div key={index}>
          <h5> CEP:{cep.localidade}</h5>
        </div>
      </div>
    ));
  }
}
