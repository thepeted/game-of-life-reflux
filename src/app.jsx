var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');
var Controls = require('./components/controls');

var Game = React.createClass({
  render: function(){
    return <div>
      <h1>Conway's Game of Life (Reflux)</h1>
      <Board/>
      <Controls/>
    </div>
  }
});

var element = React.createElement(Game, {});
ReactDOM.render(element, document.querySelector('.container'));
