var React = require('react');
var Reflux = require('reflux');
var WorldStore = require("../stores/world-store.jsx");
var Actions = require('../actions.jsx');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(WorldStore, 'onChange')
  ],
  componentWillMount: function(){
    Actions.getRandom();
  },
  componentDidMount: function(){
    this.interval = setInterval(Actions.getNext,100);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  getInitialState: function(){
    return {
      board: []
    }
  },
  render: function(){
    return <div className="wrapper">
      {this.renderGrid()}
    </div>
  },
  renderGrid: function(){
    return this.state.board.map(function(row,i){
      return <div className="row" key={i}>
        {row.map(function(cell,i){
          return <div className={cell ? "alive" : ""} key={i}></div>
        })}
      </div>
    })
  },
  onChange: function(event, grid){
    this.setState({
      board: grid
    });
  }
});
