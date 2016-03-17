var GameOfLife = {
  generateRandomGrid: function(height, width){
    var grid = [];
    for (var i = 0; i < height; i++){
      var row = [];
      for (var j = 0; j < width; j++){
        row.push(Math.round(Math.random()));
      }
      grid.push(row);
    }
    return grid;
  },
  generateNextGen: function(grid){
    //get values for the height and width of the existing grid
    var height = grid.length;
    var width = grid[0].length;

    //when building the new grid we'll need to know how many neighbouring cells
    //are alive
    var calculateNeighbours = function(x,y){
      //grab the references to the cell's neighbouring columns and rows
      var topRow = x-1 < 0 ? (height - 1) : x-1;
      var bottomRow = (x+1 === height) ? 0 : x+1;
      var leftColumn = y-1 < 0 ? (width - 1) : y-1;
      var rightColumn = (y+1 === width) ? 0 : y+1;
      //calculate and return the total amount of neightbours
      var total = 0;
      total+= grid[topRow][leftColumn];
      total+= grid[topRow][y];
      total+= grid[topRow][rightColumn];
      total+= grid[x][leftColumn];
      total+= grid[x][rightColumn];
      total+= grid[bottomRow][leftColumn];
      total+= grid[bottomRow][y];
      total+= grid[bottomRow][rightColumn];
      return total;
    };

    //build the newGrid by iterating over the existing grid
    var newGrid = [];
    for (var i = 0; i < height; i++){
      var row = [];
      for (var j = 0; j < width; j++){
        //we need to know if the cell in the existing grid is alive(1) or
        //dead(0) in order to apply the rules of the game
        var cellIsAlive = grid[i][j];
        //pass the co-ordinates of this cell to the calculateNeighbours function
        //to get the number of neighbours
        var totalNeighbours = calculateNeighbours(i,j);

        //apply the rules of Game of Life
        if (cellIsAlive) {
                if (totalNeighbours < 2) {
                    row.push(0);
                } else if (totalNeighbours > 3){
                    row.push(0);
                } else {
                    row.push(1);
                }
            }
        if (!cellIsAlive) {
            if (totalNeighbours === 3) {
            row.push(1);
        } else {
            row.push(0);
            }
        }
      }
      newGrid.push(row);
    }
    return newGrid;
  }
};

module.exports = GameOfLife;
