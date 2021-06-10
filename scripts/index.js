let lastRenderTimeStamp = 0;
const SNAKE_SPEED_PER_SECOND = 2;

function GameLoop(currentTimeStamp) {
    window.requestAnimationFrame(GameLoop);
    
    const secondsSinceLastRender = (currentTimeStamp - lastRenderTimeStamp) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED_PER_SECOND) return ;
    
    lastRenderTimeStamp = currentTimeStamp;
    console.log('Rendered~');
}

window.requestAnimationFrame(GameLoop);
