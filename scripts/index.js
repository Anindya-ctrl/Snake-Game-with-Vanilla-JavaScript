import { updateSnake, renderSnake, SNAKE_SPEED_PER_SECOND } from './snake.js';
import { updateFood, renderFood } from './food.js';
import { gameOver, checkDeath } from './functions/snakeFunctions.js';
import { paused } from './functions/pauseAndResume.js';

const gameBoard = document.getElementById('game-board');

const updateGame = () => {
    updateSnake();
    updateFood();
}

const renderGame = () => {
    checkDeath();
    gameBoard.innerHTML = '';
    renderSnake(gameBoard);
    renderFood(gameBoard);
}

const GameLoop = setInterval(() => {
    if(gameOver) {
        clearInterval(GameLoop);

        if(confirm('Game Over :(\nPress OK to restart')) {
            window.location = '/';
        }
    }
    if(paused) return ;

    updateGame();
    renderGame();
}, (1 / SNAKE_SPEED_PER_SECOND) * 1000);
