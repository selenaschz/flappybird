class Game {

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 384;
    this.canvas.height = 498;
    this.ctx = this.canvas.getContext('2d');

    this.drawIntervalId = undefined;
    this.fps = 1000 / 60;

    this.background = new Background(this.ctx);
    this.flappybird = new FlappyBird(
      this.ctx,
      70,
      Math.floor(this.canvas.height / 2),
    );
  }

  onKeyEvent(event) {
    this.flappybird.onKeyEvent(event);
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollisions();
      }, this.fps)
    }
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  move() {
    this.background.move();
    this.flappybird.move();
  }

  checkCollisions() {
    if ((this.flappybird.y + this.flappybird.height) >= this.background.y) {
      this.stop();
    }
  }

  draw() {
    this.background.draw();
    this.flappybird.draw();
  }
}
