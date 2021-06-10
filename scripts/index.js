import { updateSnake, renderSnake, SNAKE_SPEED_PER_SECOND } from './snake.js';
let lastRenderTimeStamp = 0;
const gameBoard = document.getElementById('game-board');

const updateGame = () => {
    updateSnake();
}

const renderGame = () => {
    gameBoard.innerHTML = '';
    renderSnake(gameBoard);
}

function GameLoop(currentTimeStamp) {
    window.requestAnimationFrame(GameLoop);
    
    const secondsSinceLastRender = (currentTimeStamp - lastRenderTimeStamp) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED_PER_SECOND) return ;
    
    lastRenderTimeStamp = currentTimeStamp;

    updateGame();
    renderGame();
}

window.requestAnimationFrame(GameLoop);
