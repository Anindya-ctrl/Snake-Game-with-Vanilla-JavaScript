import { snakeBody } from '../snake.js';

const GRID_SIZE = 21;

function getRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}

export function onTheTopOfSnakeBody(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false;

        return segment.x === position.x && segment.y === position.y;
    });
}

export function getRandomFoodPosition() {
    let newFoodPosition ;

    while(!newFoodPosition || onTheTopOfSnakeBody(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition();
    }

    return newFoodPosition;
}
