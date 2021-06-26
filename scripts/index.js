import { updateSnake, renderSnake, SNAKE_SPEED_PER_SECOND } from './snake.js';
const gameBoard = document.getElementById('game-board');

const updateGame = () => {
    updateSnake();
}

const renderGame = () => {
    gameBoard.innerHTML = '';
    renderSnake(gameBoard);
}

setInterval(() => {
    updateGame();
    renderGame();
}, (1 / SNAKE_SPEED_PER_SECOND) * 1000);
