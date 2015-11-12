import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
const buttonStyle = {
    height: '50px',
    width: '200px'
};
let Button2 = React.createClass({
    buttonClick: function(){
            this.props.manejadorButtonClick();
   },
    render: function(){
        return (
          <Button bsStyle="primary" style={buttonStyle} onClick={this.buttonClick}>
Reiniciar partida </Button>
) }
});
module.exports = Button2;
