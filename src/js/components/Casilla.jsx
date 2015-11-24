var TresEnRayaActions = require('../actions/TresEnRayaActions');
// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

// Importo componente Button de bootstrap
import { Button } from 'react-bootstrap';

// Estilo del componente
const casillaStyle = {
    height: '100px',
    width: '100px'
};

// Componente casilla
let Casilla = React.createClass({
    // Click que delega en app
    casillaClick: function(){
        if(this.props.valor==="-" && this.props.ganador !== true){
            TresEnRayaActions.jugarPosicion(this.props.indiceFila, this.props.indiceColumna);
          }
    },
    // Devuelve tipo de clase --> clickable o no para bloquear
    getClassName: function(){
      if(this.props.ganador === true){
        return "no_clickable";
      }else if(this.props.ganador !== true && this.props.valor === "-"){
        return "clickable";
      }else{
        return "no_clickable";
      }
    },
    // Devuelve jugador actual --> también cambia el color del boton
    getJugador: function(){
        if(this.props.valor==="-"){
          return "info";
        }else if(this.props.valor==="X"){
          return "success";
        }else{
          return "danger";
        }
    },
    // renderizo
    render: function(){
        return (
        <Button bsStyle={this.getJugador()} style={casillaStyle} className={this.getClassName()}
        onClick={this.casillaClick}>
{this.props.valor} </Button>
) }
});
module.exports = Casilla;
