import { onTheTopOfSnakeBody, getRandomFoodPosition } from './functions/foodFunctions.js';
import { expandSnake } from './functions/snakeFunctions.js'

let foodBody = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function updateFood() {
    if(onTheTopOfSnakeBody(foodBody)) {
        expandSnake(EXPANSION_RATE);

        foodBody = getRandomFoodPosition();
    }
}

export function renderFood(gameBoard) {
    const newFoodElement = document.createElement('div');

    newFoodElement.style.gridColumnStart = foodBody.x;
    newFoodElement.style.gridRowStart = foodBody.y;
    newFoodElement.classList.add('food');

    gameBoard.appendChild(newFoodElement);
}
