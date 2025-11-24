let board = document.getElementById("board");
let startPage = document.getElementById("start-page");
let startBtn = document.getElementById("start-btn");
let overPage = document.getElementById("over-page");
let restartBtn = document.getElementById("restart-btn");
let highScoreElement = document.getElementById("high-score");
let scoreElement = document.getElementById("score");
let timeElement = document.getElementById("time");

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = `00:00`;
let minutes = 0;
let seconds = 0;
let timerIntervalId = null;
const blockHeight = 50;
const blockWidth = 50;
const blocks = [];
let snake = [{ x: 3, y: 2 }];
let direction = "down";
let cols = Math.floor(board.clientWidth / blockHeight);
let rows = Math.floor(board.clientHeight / blockWidth);
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let intervalId = null;

// block creation logic
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

// game render logic
function render() {
  blocks[`${food.x}-${food.y}`].classList.add("food");

  let head = null;
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  // food cosumption logic
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    snake.unshift(head);
    score += 10;
    scoreElement.innerText = score;
    if (score > highScore) {
      highScore = score;
      highScoreElement.innerText = highScore;
      localStorage.setItem("highScore", highScore);
    }
    render();
  }

  // game over conditions
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    overPage.style.display = "flex";
    return;
    // alert("Game Over!");
  }

  

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("snake");
  });
  snake.unshift(head);
  snake.pop();
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("snake");
  });
}

// game controls
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "w") {
    direction = "up";
  } else if (event.key === "ArrowDown" || event.key === "s") {
    direction = "down";
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    direction = "left";
  } else if (event.key === "ArrowRight" || event.key === "d") {
    direction = "right";
  }
});

// start game logic
startBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 300);
  // timer logic
  timerIntervalId = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    let minStr = minutes.toString();
    let secStr = seconds.toString();

    timeElement.innerText = `${minStr}:${secStr}`;
  }, 1000);
});

// restart game logic
restartBtn.addEventListener("click", () => {
  overPage.style.display = "none";
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("snake");
  });
  snake = [{ x: 3, y: 2 }];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  direction = "down";
  score = 0;
  scoreElement.innerText = score;
  time = `00:00`;
  minutes = 0;
  seconds = 0;
  timeElement.innerText = time;
  intervalId = setInterval(() => {
    render();
  }, 300);
});
