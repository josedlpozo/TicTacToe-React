// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

// Componentes a renderizar
const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const Button2 = require('./Button2.jsx');
const TextInput = require('./TextInput.jsx');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";

// Clase de aplicación --> Master
var App = React.createClass({

    // Estado inicial
    getInitialState: function(){
      let rows = 3;
      var x = new Array(rows);
      for (var i = 0; i < rows; i++) {
        x[i] = new Array(rows);
      }
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < rows; j++) {
          x[i][j] = '-';
        }
      }
      return {
        rows : 3,
        ganador : false,
        turno: JUGADORX,
        valores: x
      };
    },
    // Establece numero de filas y valores
    setRowsAndValores: function(row){
      let rows = row;
      var x = new Array(rows);
      for (var i = 0; i < rows; i++) {
        x[i] = new Array(rows);
      }
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < rows; j++) {
          x[i][j] = '-';
        }
      }
      return {
        rows : rows,
        ganador : false,
        turno: JUGADORX,
        valores: x
      }
    },
    // Comprobar si hay ganador tras click en tablero
    comprobarGanador: function(vals, newVal){

      // Compruebo filas
			var nRow, nCol;
      nRow = 0;
      nCol = 0;
      var num = 0;
      while(nRow<this.state.rows){
        while(nCol<this.state.rows){
          if(vals[nRow][nCol] === newVal){
            num++;
          }else{
            num = 0;
          }
          nCol++;
        }
        if(num === this.state.rows) return true;
        nRow++;
        num = 0;
        nCol = 0;
      }

      //Compruebo columnas
      nRow = 0;
      nCol = 0;
      var num = 0;
      while(nCol<this.state.rows){
        while(nRow<this.state.rows){
          if(vals[nRow][nCol] === newVal){
            num++;
          }else{
            num = 0;
          }
          nRow++;
        }
        if(num === this.state.rows) return true;
        nCol++;
        num = 0;
        nRow = 0;
      }
      nRow = 0;
      num = 0;
      // Compruebo diagonal principal
      while(nRow<this.state.rows){
        if(vals[nRow][nRow] === newVal){
          num++;
        }else{
          num = 0;
        }
        nRow++;
      }
      if(num === this.state.rows) return true;

      nCol = this.state.rows-1;
      nRow = 0;
      num = 0;
      // Compruebo antidiagonal
      while(nCol>= 0 && nRow<this.state.rows){
        if(vals[nRow][nCol] === newVal){
          num++;
        }else{
          num = 0;
        }
        nRow++;
        nCol--;
      }
      if(num === this.state.rows) return true;

			return false;
	  },
    // Comprobar si ha sido un empate tras un click
    comprobarEmpate: function(vals){
      var empate = 0;
      var nRow, nCol;
      for (nRow = 0; nRow < this.state.rows; nRow++) {
          for (nCol = 0; nCol < this.state.rows; nCol++) {
            if (vals[nRow][nCol] !== '-') {
                empate++;
            }
        }
      }
      let cuadros = this.state.rows*this.state.rows;
      if(empate === cuadros) return true;
    },
    // Reinicia el estado inicial
    reiniciarClick: function(){
      var reinicio = confirm("Desea realmente reiniciar la partida?");
      if (reinicio == true) {
        this.setState(this.setRowsAndValores(this.state.rows));
      }
    },
    // Click en Casilla - Tablero
    appClick: function(numeroFila, numberoColumna){
      let valores = this.state.valores;
      let nuevoValor = this.state.turno === JUGADORX ? 'X':'0';
      valores[numeroFila][numberoColumna] = nuevoValor;
      // Cambio de estado
      this.setState({
        turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
        valores: this.state.valores
      });
      // Compruebo ganador o empate
      if(this.comprobarGanador(valores, nuevoValor)){
        this.state.ganador = true;
	    	alert("Ha ganado: " + this.state.turno);
	    }else{
        if(this.comprobarEmpate(valores)){
  	    	alert("Ha sido un empate!");
  	    }
      }
    },
    // Introduce texto de tamaño de tablero
    textInputClick: function(rows){
      let y = parseInt(rows,10);
      if(typeof y === 'number'){
        if(y>2 && y<8){
          this.setState(this.setRowsAndValores(y));
        }else if(y<=2){
          alert("Dimensiones demasiado pequeñas");
        }else if(y>=8){
          alert("Dimensiones demasiado grandes");
        }else{
          alert("No es un número");
        }
      }
    },
    // Hay ganador --> sirve para bloquear clicks en el tablero
    getGanador: function(){
      return this.state.ganador;
    },
    // renderizo
    render: function(){
      var texto;
      texto = "Turno del " + this.state.turno;
      return (
        <div>
          <Cabecera texto={texto}/>
          <Tablero ganador={this.state.ganador} valores={this.state.valores} manejadorTableroClick={this.appClick}/>
          <Button2 manejadorButtonClick={this.reiniciarClick}/>
          <TextInput manejadorTextInput={this.textInputClick}/>
        </div> )
} });
module.exports = App;
