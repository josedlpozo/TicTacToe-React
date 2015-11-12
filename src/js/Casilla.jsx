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
    render: function(){
        return (
        <Button bsStyle="success" style={casillaStyle} className={this.props.valor==="-" ? "clickable":"no_clickable"}
        onClick={this.casillaClick}>
{this.props.valor} </Button>
) }
});
module.exports = Casilla;
