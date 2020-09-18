const ball = document.getElementById('ball');

const moveUp = () => {
    let pos = ball.style.top;
    console.log(parseInt(pos))
    ball.style.top = (parseInt(pos)-20)+'px';
}
const moveDown = () => {
    let pos = ball.style.bottom;
    console.log(parseInt(pos))
    ball.style.bottom = (parseInt(pos)-20)+'px';
}
const moveRight = () => {
    let pos = ball.style.right;
    console.log(parseInt(pos))
    ball.style.right = (parseInt(pos)-20)+'px';
}

const moveLeft = () => {
    let pos = ball.style.left;
    console.log(parseInt(pos))
    ball.style.left = (parseInt(pos)-20)+'px';
}
