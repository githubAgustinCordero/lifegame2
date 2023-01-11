var colors = ['red', 'green', 'blue', 'purple', 'orange'];
function start(){
	// create a 2D array to represent the grid
	// var grid = [
		// [0,0,0,0,0],
		// [0,0,1,0,0],
		// [0,0,1,0,0],
		// [0,0,1,0,0],
		// [0,0,0,0,0]
	// ];

	var grid = initializeRandomGrid(200, 200, 0.3);

	var canvas = document.getElementById('game-of-life');
	var ctx = canvas.getContext('2d');

	// function to count the number of alive neighbors
	function countAliveNeighbors(grid, x, y) {
		var count = 0;
		for (var i = -1; i <= 1; i++) {
			for (var j = -1; j <= 1; j++) {
				var row = (x + i + grid.length) % grid.length;
				var col = (y + j + grid[0].length) % grid[0].length;
				count += grid[row][col];
			}
		}
		count -= grid[x][y];
		return count;
	}

	// function to update the grid to the next generation
	function updateGrid(grid) {
		var newGrid = [];
		for (var i = 0; i < grid.length; i++) {
			newGrid[i] = [];
			for (var j = 0; j < grid[i].length; j++) {
				var aliveNeighbors = countAliveNeighbors(grid, i, j);
				if (grid[i][j]) {
					newGrid[i][j] = (aliveNeighbors === 2 || aliveNeighbors === 3) ? 1 : 0;
				} else {
					newGrid[i][j] = (aliveNeighbors === 3) ? 1 : 0;
				}
			}
		}
		for (var i = 0; i < grid.length; i++) {
			for (var j = 0; j < grid[i].length; j++) {
				if(newGrid[i][j] == 1){
					var randomColor = colors[Math.floor(Math.random() * colors.length)];
					ctx.fillStyle = randomColor;
				}else{
					ctx.fillStyle = 'white';
				}
				ctx.fillRect(i * 10, j * 10, 10, 10);
			}
		}
		return newGrid;
	}

	// update the grid a few times
	setInterval(function() {
		grid = updateGrid(grid);
	}, 100); // actualizar cada segundo
}

function initializeRandomGrid(rows, cols, aliveChance) {
    var grid = [];
    for (var i = 0; i < rows; i++) {
        grid[i] = [];
        for (var j = 0; j < cols; j++) {
            grid[i][j] = Math.random() < aliveChance ? 1 : 0;
        }
    }
    return grid;
}