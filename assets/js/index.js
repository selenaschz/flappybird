window.addEventListener('load', () => {
  const startBtn = document.getElementById('restart-btn');
  
  const game = new Game('canvas-game', () => {
    startBtn.classList.toggle('hidden');
  });
  game.start();

  document.addEventListener('keydown', (event) => {
    if (game.drawIntervalId) {
      game.onKeyEvent(event)
    } else {
      startBtn.classList.toggle('hidden');
      game.restart()
    }
  });
  document.addEventListener('keyup', (event) => game.onKeyEvent(event));
});
