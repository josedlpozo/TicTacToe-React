import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');

var TextInput = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event, eventkey) {
    this.setState({value: event.target.value});
  },
  click: function(){
    this.props.manejadorTextInput(this.state.value);
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
        <input type="" value={value} onChange={this.handleChange} />;
        <button onClick={this.click}>Set</button>
      </div>
    )
  }
});

module.exports = TextInput;
