import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
const buttonStyle = {
    height: '50px',
    marginLeft: '30%',
    marginTop: '70px',
    width: '200px'
};
let Button2 = React.createClass({
    buttonClick: function(){
            this.props.manejadorButtonClick();
   },
    render: function(){
        return (
          <Button className="centrar" bsStyle="primary" style={buttonStyle} onClick={this.buttonClick}>
Reiniciar partida </Button>
) }
});
module.exports = Button2;
