const start = document.getElementById('start');
const stop = document.getElementById('stop');
const basketBall = document.querySelector('#frame');


const bounce = () => {
basketBall.classList.add('game');
}



start.addEventListener('click', bounce);


const raise = () => {
    basketBall.classList.add('over');
}


stop.addEventListener('click', raise);
