//The game board is mapped out as a grid, and here is where the size of the grid is defined:
const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math,random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}