// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

var TresEnRayaActions = require('../actions/TresEnRayaActions');

// Componentes a renderizar
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


// Componente TextInput
var TextInput = React.createClass({
  // Devuelve dimension inicial del tablero
  getInitialState: function() {
    return {value: '3'};
  },
  // Cambio de estado
  handleChange: function(event, eventkey) {
    this.setState({value: event.target.value});
  },
  // Click en boton que delega en app
  click: function(){
    TresEnRayaActions.nuevoTamaño(this.state.value);
  },
  // renderizo
  render: function() {
    var value = this.state.value;
    return (
      <div className="centrar">
        <p> Introduzca el número de casillas con las que quiere jugar </p>
        <input type="" value={value} onChange={this.handleChange} />
        <button onClick={this.click}>Set</button>
      </div>
    )
  }
});

module.exports = TextInput;
