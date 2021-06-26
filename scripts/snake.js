import { getInputDirections } from './functions/inputHandler.js';
import { addSegments } from './functions/snakeFunctions.js';

export const SNAKE_SPEED_PER_SECOND = 5;
export const snakeBody = [{
    x: 11,
    y: 11,
}];

export const updateSnake = () => {
    addSegments();
    const inputDirection = getInputDirections();

    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export const renderSnake = gameBoard => {
    snakeBody.forEach(segment => {
        const newSegment = document.createElement('div');

        newSegment.style.gridColumnStart = segment.x;
        newSegment.style.gridRowStart = segment.y;
        newSegment.classList.add('snake');

        gameBoard.appendChild(newSegment);
    });
}
