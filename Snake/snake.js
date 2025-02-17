
// recopila todos los datos necesarios .
let snake = [{x: 150, y: 150},
            {x: 140, y: 150}, 
            {x: 130, y: 150},
            {x: 120, y: 150},
            {x: 110, y: 150}];
let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");
let dx = 10;
let dy = 0;
let foodX;
let foodY;
let score = 0;


// para dibujar la serpiente promero dibujamos un pedazo luego con un forEach dibujamos la serpiente
function drawSnakePart(snakePart) {
    ctx.fillStyle = '#18ec58';
    ctx.strokeStyle = '#104131';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    
} 
function drawSnake() {
    snake.forEach(drawSnakePart)
} 


// limpiamos el canvas
function clearCanvas() {
    ctx.fillStyle = '#1e4d3d';
    ctx.strokeStyle = 'black';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeRect(0, 0, c.width, c.height);
}
// cada que se mueve horizontalmente se le suma 10 a la coordenada x o se resta 10
function moveSnakeRight() {
    let head = {x: snake[0].x + dx, y: snake[0].y+dy};
    snake.unshift(head);
    let didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        createFood();
        score += 10;
        document.getElementById('score').innerHTML = score;
    } else {
        snake.pop();
    }
}

// se crea la comida de la serpiente en una posicion aleatoria y tambien una condicional para que no se genere en la serpiente
function randomTen(min,max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}
function createFood() {
    foodX = randomTen(0, c.width - 10);
    foodY = randomTen(0, c.height - 10);
    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY;
        if (foodIsOnSnake)
            createFood();
    });
}
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.beginPath();
    ctx.arc(foodX + 5, foodY + 5, 5, 0, 2 * Math.PI);   
    ctx.fill();
    ctx.stroke();
}
// dibujar un círculo con ctx
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'darkblue';
// ctx.beginPath();
// ctx.arc(x, y, radius, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();

// se crea una funcion para saber si la serpiente se choca con ella misma o con las paredes
function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
            return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > c.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > c.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

// se crea una funcion para mostrar una pantalla de game over 
function gameOver() {
    ctx.font = 'bold 30px Arial';
        ctx.fillStyle = 'white';    
        ctx.textAlign = 'center';
    ctx.font = '30px Arial';
    ctx.fillText('Game Over', c.width / 2, c.height / 2);
    ctx.fillText('Score: ' + score, c.width / 2, c.height / 2 + 60);
    
}

let isVisible = true;
 function animacionGameOver() { 
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = `rgba(255, 255, 255, ${isVisible ? 1 : 0.5})`;
    gameOver();
    isVisible = !isVisible;
    requestAnimationFrame(animacionGameOver);
 }

// se crea una funcion para reiniciar el juego
function resetGame() {
    snake = [{x: 150, y: 150},
        {x: 140, y: 150}, 
        {x: 130, y: 150},
        {x: 120, y: 150},
        {x: 110, y: 150}];
    dx = 10;
    dy = 0;
    score = 0;
    document.getElementById('score').innerHTML = score;
}

// se crea un intervalo para que se ejecute la funcion principal cada 100 milisegundos donde se renderiza la comida y la serpiente
function main(){
    setInterval(() => {
        if (didGameEnd()) {
            animacionGameOver();
            return;
        }
        clearCanvas();
        drawFood();
        moveSnakeRight();
        drawSnake();
    }, 100);
} 
// se crea un evento para que la serpiente cambie de direccion segun la tecla direcionales que se presione
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const ENTER_KEY = 13;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }if (keyPressed === ENTER_KEY) {
        iniciarJuego()
    }
}


drawInicio()
document.addEventListener("keydown", changeDirection);


function drawInicio() {
    // set transparency value
    ctx.globalAlpha = 0.7;
        // Escribir el texto
        ctx.font = 'bold 30px Arial';
        ctx.fillStyle = 'white';    
        ctx.textAlign = 'center';
        ctx.fillText('Presiona Enter' , c.width / 2, c.height / 2);
        ctx.fillText('para iniciar el Juego!' , c.width / 2, (c.height / 2)+30); 
    }

function iniciarJuego(){
        createFood();
        main() 
    }
