// Variables requeridas de React al no importarlas  en html
var React = require('react');
var ReactDOM = require('react-dom');

// Componente app que renderizo
const App = require("./App.jsx");
ReactDOM.render(<App />,
document.getElementById('contenedor'));
