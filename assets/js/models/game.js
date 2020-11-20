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

    this.pipes = [];
    this.drawPipesCount = 0;
    this.pipesFrequency = 100;
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
        this.addPipes();
        this.checkCollisions();
      }, this.fps)
    }
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.pipes = this.pipes.filter(pipe => pipe.x + pipe.width >= 0);
  }

  move() {
    this.background.move();
    this.flappybird.move();
    this.pipes.forEach(pipe => pipe.move());
  }

  addPipes() {
    if (this.flappybird.sprite.isReady && (this.drawPipesCount % this.pipesFrequency === 0)) {
      console.log('entro')
      this.pipes = this.pipes.concat(this.randPairOfPipes());
      this.drawPipesCount = 0;
    }
  }

  randPairOfPipes() {
    const space = this.canvas.height - this.background.footerImg.height;
    const gap = (this.flappybird.height * 2) + this.flappybird.jumpImpulse;
    const topSize = Math.floor(Math.random() * (space - gap) * 0.75)
    const bottomSize = space - topSize - gap;
    return [
      new Pipe(this.ctx, this.canvas.width, 0, topSize, 'top'),
      new Pipe(this.ctx, this.canvas.width, this.canvas.height - this.background.footerImg.height - bottomSize, bottomSize, 'bottom'),
    ]
  }

  checkCollisions() {
    const pipe = this.pipes.some(pipe => this.flappybird.collides(pipe));
    if (pipe || (this.flappybird.y + this.flappybird.height) >= this.background.y) {
      this.stop();
    }
  }

  draw() {
    this.background.draw();
    this.flappybird.draw();
    this.pipes.forEach(pipe => pipe.draw());
    this.drawPipesCount++;
  }
}
