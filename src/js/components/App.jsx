// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');
var TresEnRayaStore = require('../stores/TresEnRayaStores');
// Componentes a renderizar
const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const Button2 = require('./Button2.jsx');
const TextInput = require('./TextInput.jsx');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";

function getAppStateFromStore() {
  return {
    rows: TresEnRayaStore.getRows(),
    ganador: TresEnRayaStore.getGanador(),
    empate: TresEnRayaStore.getEmpate(),
    turno: TresEnRayaStore.getTurno(),
    movimientos: TresEnRayaStore.getMovimientos(),
    valores: TresEnRayaStore.getValores()
  };
}

// Clase de aplicación --> Master
var App = React.createClass({
    // Estado inicial
    getInitialState: function(){
      return getAppStateFromStore();
    },
    componentDidMount() {
      TresEnRayaStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
      TresEnRayaStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {

      let state = getAppStateFromStore();
      console.log(state);
      this.setState(state);

      if(state.ganador === true){
	    	alert("Ha ganado: " + state.turno);
	    }else{
        if(state.empate === true){
  	    	alert("Ha sido un empate!");
  	    }
      }


    },
    // renderizo
    render: function(){
      var texto;
      texto = "Turno del " + this.state.turno;
      return (
        <div>
          <Cabecera texto={texto}/>
          <Tablero valores={this.state.valores} ganador={this.state.ganador}/>
          <Button2 />
          <TextInput />
          <div>Movimientos {this.state.movimientos}</div>
        </div> )
} });
module.exports = App;
