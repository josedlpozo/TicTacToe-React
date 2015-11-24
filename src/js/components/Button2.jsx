// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

var TresEnRayaActions = require('../actions/TresEnRayaActions');

// Importo componente Button de bootstrap
import { Button } from 'react-bootstrap';

// Estilo del componente
const buttonStyle = {
    height: '50px',
    marginLeft: '30%',
    marginTop: '70px',
    width: '200px'
};

// Componente React button
let Button2 = React.createClass({
    // Click delega acción a app
    buttonClick: function(){
            TresEnRayaActions.reiniciarJuego();
   },
   // renderizo
    render: function(){
        return (
          <Button className="centrar" bsStyle="primary" style={buttonStyle} onClick={this.buttonClick}>
Reiniciar partida </Button>
) }
});
module.exports = Button2;
