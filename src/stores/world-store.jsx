var GameOfLife = require('../game-of-life');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getRandom: function(){
    this.grid = GameOfLife.generateRandomGrid(this.height,this.width);
    this.triggerChange();
  },
  getNext: function(){
    var nextGrid = GameOfLife.generateNextGen(this.grid);
    this.grid = nextGrid;
    this.triggerChange();
  },
  triggerChange: function(){
    this.trigger('change', this.grid);
  },
  height: 50,
  width: 70
});
