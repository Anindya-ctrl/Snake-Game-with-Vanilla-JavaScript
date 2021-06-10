export const SNAKE_SPEED_PER_SECOND = 5;
const snakeBody = [{
    x: 11,
    y: 11,
}];

export const updateSnake = () => {

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
