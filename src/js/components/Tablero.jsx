// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

// Componente a renderizar
const Casilla = require('./Casilla.jsx');

// Componente tablero
var Tablero = React.createClass({
  // renderizo
  render: function(){
    let casillas = this.props.valores.map(function(valoresFila, indiceFila){
      let fila = valoresFila.map(function(valor, indiceColumna){
        let mykey = ""+indiceFila+indiceColumna;
        return (
          <Casilla ganador={this.props.ganador} valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
        )
      }.bind(this));
    return (
      <div className="centrar" key={"fila"+indiceFila}>
        {fila}
      </div>
    )
    }.bind(this));
    return (
      <div className="centrar">
        {casillas}
      </div>
    );
  }
});

module.exports = Tablero;
