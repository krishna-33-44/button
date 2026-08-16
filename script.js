const button = document.querySelector('.glass-btn');
const sound = new Audio('FAHH.mp3');

button.addEventListener('click', () =>
{
    //rewind to start so spamming instanly replay
    sound.currentTime = 0;
    sound.play();
});

