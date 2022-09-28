document.addEventListener("DOMContentLoaded", (event) => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      let winnerPlayer = playerTime === 0 ? "O" : "X";
      alert("O jogo Acabou - O vencedor foi o jogador " + winnerPlayer);
      resetInterface();
      resetGame();
    }, 10);
  }
  updateSquares(position);
}

function updateSquares(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetInterface() {
  let squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i];
    square.innerHTML = "";
  }
}

// Botao Reset

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  resetInterface();
  resetGame();
});
