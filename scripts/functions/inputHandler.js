let inputDirections = {
    x: 0,
    y: 0,
};
let lastInputDirections = { x: 0, y: 0 };

window.addEventListener('keydown', event => {
    switch(event.key) {
        case 'ArrowUp':
            if(lastInputDirections.y !== 0) break ;
            inputDirections = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if(inputDirections.y !== 0) break ;
            inputDirections = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if(inputDirections.x !== 0) break ;
            inputDirections = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if(inputDirections.x !== 0) break ;
            inputDirections = { x: 1, y: 0 };
            break;
    }
});

export function getInputDirections() {
    lastInputDirections = inputDirections;
    return inputDirections;
}
