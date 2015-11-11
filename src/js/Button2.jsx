
var React = require('react');
var ReactDOM = require('react-dom');
const buttonStyle = {
    height: '100px',
    width: '100px'
};
let Button2 = React.createClass({
    buttonClick: function(){
            this.props.manejadorButtonClick();
   },
    render: function(){
        return (
          <button style={buttonStyle} onClick={this.buttonClick}>
Reiniciar partida </button>
) }
});
module.exports = Button2;
