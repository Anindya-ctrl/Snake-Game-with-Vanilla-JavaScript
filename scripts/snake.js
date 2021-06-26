import { getInputDirections } from './inputHandler.js';

export const SNAKE_SPEED_PER_SECOND = 5;
const snakeBody = [{
    x: 11,
    y: 11,
}, {
    x: 12,
    y: 11,
}, {
    x: 13,
    y: 11,
}];

export const updateSnake = () => {
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
