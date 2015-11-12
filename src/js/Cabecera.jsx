var React = require('react');
var ReactDOM = require('react-dom');

var Cabecera = React.createClass({
    render: function(){
return (
<header className="centrar">
          {this.props.texto}
</header> )
} });
module.exports = Cabecera;
