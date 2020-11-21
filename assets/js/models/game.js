class Game {

  constructor(canvasId, onGameEnd) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 384;
    this.canvas.height = 498;
    this.ctx = this.canvas.getContext('2d');

    this.drawIntervalId = undefined;
    this.fps = 1000 / 60;

    // iteration 1: setup the backgound

    // iteration 2: setup the flappy

    // iteration 2: setup the flappy

    this.pipes = [];
    this.drawPipesCount = 0;
    this.pipesFrequency = 100;

    // bonus: setup the score
  }
  

  onKeyEvent(event) {
    // iteration 2: link flappy key events
  }

  start() {
    // Iteration 1: each 60f clear - move - draw - [next iterations: addPipes - checkCollisions - checkScore]
  }

  stop() {
    // Iteration 1: stop the game
  }

  restart() {
    // Bonus: restart on demand
  }

  end() {
    // Iteration 4: stop the game and setup score
  }

  clear() {
    // Iteration 1: clean the screen
  }

  move() {
    // Iteration 1: move the background
    // Iteration 2: move the flappy
    // Iteration 3: move the pipes
  }

  addPipes() {
    // Iteration 3: each draw pipes frequency cycles concat a pair of pipes to the pipes array and reset the draw cycle
  }

  randPairOfPipes() {
    // Iteration 3: return two new pipes inside an array. MIND THE GAP
  }

  checkCollisions() {
    // Iteration 4: check pipes collisions among flappy
  }

  checkScore() {
    // Bonus
  }

  draw() {
    // Iteration 1: draw the background
    // Iteration 2: draw the flappy
    // Iteration 2: draw the pipes
    // Bonus: draw the score
  }
}
