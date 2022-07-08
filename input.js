// variables to control the direction of the worm: its last destination and its destination after input.
//the values wil be changed after taking inputs from the player
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

//function to take control inputs from the player: a switch with each button being a case with corresponding direction
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}