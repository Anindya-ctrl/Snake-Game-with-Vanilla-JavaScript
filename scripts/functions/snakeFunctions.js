import { snakeBody } from '../snake.js';
import { onTheTopOfSnakeBody } from './foodFunctions.js';
let newSegments = 0;
export let gameOver = false;

function outsideGameboard(position) {
    return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21;
}

function snakeIntersection() {
    return onTheTopOfSnakeBody(snakeBody[0], { ignoreHead: true });
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function addSegments() {
    for(let i = 0;  i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
}

export function checkDeath() {
    gameOver = outsideGameboard(snakeBody[0]) || snakeIntersection();
}
