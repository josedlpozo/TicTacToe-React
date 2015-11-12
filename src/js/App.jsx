var React = require('react');
var ReactDOM = require('react-dom');
import { Button } from 'react-bootstrap';

const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const Button2 = require('./Button2.jsx');
const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";


var App = React.createClass({

    getInitialState: function(){
      return {
        turno: JUGADORX,
        valores: [
          ['-', '-', '-'],
          ['-', '-', '-'],
          ['-', '-', '-']
        ] };
    },
    comprobarGanador: function(vals, newVal){
      
      // Compruebo filas
			var nRow, nCol;
      nRow = 0;
      nCol = 0;
      var num = 0;
      while(nRow<3){
        while(nCol<3){
          if(vals[nRow][nCol] === newVal){
            num++;
          }else{
            num = 0;
          }
          nCol++;
        }
        if(num === 3) return true;
        nRow++;
        num = 0;
        nCol = 0;
      }

      //Compruebo columnas
      nRow = 0;
      nCol = 0;
      var num = 0;
      while(nCol<3){
        while(nRow<3){
          if(vals[nRow][nCol] === newVal){
            num++;
          }else{
            num = 0;
          }
          nRow++;
        }
        if(num === 3) return true;
        nCol++;
        num = 0;
        nRow = 0;
      }

      //Diagonal principal
      if((vals[0][0] === vals[1][1]) && (vals[0][0] === vals[2][2]) && (vals[0][0] === newVal)){
        return true;
      }

      //Antidiagonal
      if((vals[0][2] === vals[1][1]) && (vals[0][2] === vals[2][0]) && (vals[0][2] === newVal)){
        return true;
      }
			return false;
	  },
    comprobarEmpate: function(vals){
      var empate = 0;
      var nRow, nCol;
      for (nRow = 0; nRow < 3; nRow++) {
          for (nCol = 0; nCol < 3; nCol++) {
            if (vals[nRow][nCol] !== '-') {
                empate++;
            }
        }
      }
      if(empate === 9) return true;
    },
    reiniciarClick: function(){
      var reinicio = confirm("Desea realmente reiniciar la partida?");
      if (reinicio == true) {
        this.setState(this.getInitialState());
      }
    },
    appClick: function(numeroFila, numberoColumna){
      let valores = this.state.valores;
      let nuevoValor = this.state.turno === JUGADORX ? 'X':'0';
      valores[numeroFila][numberoColumna] = nuevoValor;
      this.setState({
        turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
        valores: this.state.valores
      });
      if(this.comprobarGanador(valores, nuevoValor)){
	    	alert("Ha ganado: " + this.state.turno);
	    }else{
        if(this.comprobarEmpate(valores)){
  	    	alert("Ha sido un empate!");
  	    }
      }
    },
    render: function(){
      var texto;
      texto = "Turno del " + this.state.turno;
      return (
        <div>
          <Cabecera texto={texto}/>
          <Tablero valores={this.state.valores} manejadorTableroClick={this.appClick}/>
          <Button2 manejadorButtonClick={this.reiniciarClick}/>
        </div> )
} });
module.exports = App;
