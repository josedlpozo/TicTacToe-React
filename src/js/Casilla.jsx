import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');

const casillaStyle = {
    height: '100px',
    width: '100px'
};
let Casilla = React.createClass({
    casillaClick: function(){

        if(this.props.valor==="-" && this.props.ganador !== true){
            this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
} },
    getClassName: function(){
      if(this.props.ganador === true){
        return "no_clickable";
      }else if(this.props.ganador !== true && this.props.valor === "-"){
        return "clickable";
      }else{
        return "no_clickable";
      }
    },
    getJugador: function(){
        if(this.props.valor==="-"){
          return "info";
        }else if(this.props.valor==="X"){
          return "success";
        }else{
          return "danger";
        }
    },
    render: function(){
        return (
        <Button bsStyle={this.getJugador()} style={casillaStyle} className={this.getClassName()}
        onClick={this.casillaClick}>
{this.props.valor} </Button>
) }
});
module.exports = Casilla;
