import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');

const casillaStyle = {
    height: '100px',
    width: '100px'
};
let Casilla = React.createClass({
    casillaClick: function(){
        if(this.props.valor==="-"){
            this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
} },
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
        <Button bsStyle={this.getJugador()} style={casillaStyle} className={this.props.valor==="-" ? "clickable":"no_clickable"}
        onClick={this.casillaClick}>
{this.props.valor} </Button>
) }
});
module.exports = Casilla;
