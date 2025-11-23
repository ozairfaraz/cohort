let board = document.getElementById("board");
const blockHeight = 50;
const blockWidth = 50;
const blocks = [];
const snake = [{ x: 5, y: 5 }];
let direction = "up";
let cols = Math.floor(board.clientWidth / blockHeight);
let rows = Math.floor(board.clientHeight / blockWidth);

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.innerText = `${row}-${col}`;
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("snake");
  });
}

setInterval(() => {
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

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("snake");
  });

  snake.unshift(head);
  snake.pop();

  render();
}, 400);

addEventListener("keydown", (event) => {
    if ((event.key === "ArrowUp") || (event.key === "w")) {
        direction = "up";
    }
    else if ((event.key === "ArrowDown") || (event.key === "s")) {
        direction = "down";
    }
    else if ((event.key === "ArrowLeft") || (event.key === "a")) {
        direction = "left";
    }
    else if ((event.key === "ArrowRight") || (event.key === "d")) {
        direction = "right";
    }
});
