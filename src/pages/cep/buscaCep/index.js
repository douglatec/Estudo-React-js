import React, {Component} from 'react';
import {link} from 'react-router-dom';
import './index.css';

//https://www.youtube.com/watch?v=gqk9T7onNCQ&list=PL2hDwB8DzXGOxIuijrYNrPrKcjQERQtbO&index=1

//https://viacep.com.br/

export default class BuscaCep extends Component{
constructor(props){
    super(props);
    this.state={
        cep:[]
    }
}

componentDidMount(){
    fetch('https://viacep.com.br/ws/01001000/json/')
    .then(cep=>cep.json().then(cep=>this.setState({cep})))
}

render(){
    const {cep} = this.state;
    console.log(cep);
    console.log(cep.logradouro);
    console.log(cep.complemento);
    console.log(cep.localidade);
    

    return this.state.cep.map((cep, index) => {

        <div>
            <div key={index} >
                <h5> CEp:{cep.localidade}</h5>                
            </div>
        </div>
    })

    
};
    
}



