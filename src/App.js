import React, { Component } from "react";
import "./style.css";

class App extends Component {

constructor(props){
    super(props);
     this.state={
        numero: 0,
        estadoBotao: 'Iniciar'
    };
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
    this.timer = null;
}

    vai(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.estadoBotao = 'Iniciar';                        
        } else {
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
    
            },100);
            state.estadoBotao = 'Pausar';
        }
        this.setState(state);        
    }

    limpar(){
        let state = this.state;
        state.numero = 0;        
        this.setState(state);

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.estadoBotao = 'Iniciar';                        
        }
    }

    render() {
        return (
            <div className="container">
                <img src={require("./assets/cronometro.png")} className="img" />
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.estadoBotao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        );
    }
}

export default App;
