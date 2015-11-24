// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

// Componente cabecera
var Cabecera = React.createClass({
   // renderizo
    render: function(){
return (
<header className="centrar">
          {this.props.texto}
</header> )
} });
module.exports = Cabecera;
