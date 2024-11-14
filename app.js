var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[i].length; j++){
            if(grid[i][j]) {
                let area = calculateArea(grid, i, j)
                if(area > maxArea) maxArea = area
            }
        }
    }
    return maxArea
};


function calculateArea(grid, i, j){
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j]===0){
        return 0
    }

    grid[i][j] = 0
    return 1 + calculateArea(grid, i+1, j) + calculateArea(grid, i, j+1) + calculateArea(grid, i-1 , j) + calculateArea(grid, i, j-1)
}