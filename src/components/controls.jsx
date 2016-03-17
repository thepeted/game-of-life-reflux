var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = React.createClass({
  render: function(){
    return <div className="controls">
      <span className="button" onClick={this.handleClick}>Restart</span>
    </div>
  },
  handleClick: function(){
    Actions.getRandom();
  }
});
