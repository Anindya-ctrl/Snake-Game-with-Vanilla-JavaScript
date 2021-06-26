const pauseButton = document.getElementById('pause-button');
const resumeButton = document.getElementById('resume-button');

export let paused = false;

pauseButton.addEventListener('click', () => paused = true);
resumeButton.addEventListener('click', () => paused = false);
