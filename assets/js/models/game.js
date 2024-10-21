class Game {

  constructor(canvasId, onGameEnd) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 384;
    this.canvas.height = 498;
    this.ctx = this.canvas.getContext('2d');

    this.drawIntervalId = undefined;
    this.fps = 1000 / 60;

    // iteration 1: setup the backgroundo
    this.background = new Background(this.ctx);
    
    // iteration 2: setup the flappy
    this.flappybird = new FlappyBird(this.ctx, 50, Math.floor(this.canvas.height / 2));

    this.pipes = [];
    this.drawPipesCount = 0;
    this.pipesFrequency = 100;

    // bonus: setup the score
    this.score = 0;
    this.onGameEnd = onGameEnd;
  }
  

  onKeyEvent(event) {
    // iteration 2: link flappy key events
    this.flappybird.onKeyEvent(event);

  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        // Iteration 1: each 60f clear - move - draw - [next iterations: addPipes - checkCollisions - checkScore]
        this.clear();
        this.move();
        this.draw();
        this.drawPipesCount++;

        if ( this.drawPipesCount === this.pipesFrequency ) {
          this.drawPipesCount = 0;

          this.addPipes();
          this.pipes.forEach((pipe) => {
            pipe.draw();
            pipe.move();
          })
        }
        this.checkCollisions();
        this.checkScore();

      }, this.fps);
    }
  }

  stop() {
    // Iteration 1: stop the game
    clearInterval(this.drawIntervalId);
  }

  restart() {
    // Bonus: restart on demand
    this.pipes = [];
    this.flappybird.x = 50;
    this.flappybird.y = Math.floor(this.canvas.height / 2);
    this.score = 0;
    this.start();
  }

  end() {
    // Iteration 4: stop the game and setup score
    this.stop();
    
    const restartLogo = new Image();
    restartLogo.src = 'assets/img/restart.png';

    //onload to make sure the image is loaded
    restartLogo.onload = () => {
      this.ctx.drawImage(
        restartLogo, 
        Math.floor((this.canvas.width - restartLogo.width) / 2), 
        Math.floor((this.canvas.height - restartLogo.height) / 2));
    };
  }

  clear() {
    // Iteration 1: clean the screen
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    //Remove the pipes with x less than 0
    this.pipes = this.pipes.filter((pipe) => pipe.x + pipe.width >= 0);
  }

  move() {
    // Iteration 1: move the background
    this.background.move();
    // Iteration 2: move the flappy
    this.flappybird.move();
    // Iteration 3: move the pipes
    this.pipes.forEach((pipe) => pipe.move());
  }

  addPipes() {
    // Iteration 3: each draw pipes frequency cycles concat a pair of pipes to the pipes array and reset the draw cycle
    this.pipes = this.pipes.concat(this.randPairOfPipes());
    this.drawPipesCount = 0;
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
    // Iteration 4: check pipes collisions among flappy and end game if any pipe collides with the bird
    this.pipes.forEach(pipe => {
      if (this.flappybird.collides(pipe)) {
        this.end();
      }
    })

    if ((this.flappybird.y + this.flappybird.height) >= this.background.y || this.flappybird.y <= 0) {
      this.end();
    }

    
  }

  checkScore() {
    // Bonus
    for (let i = 0; i < this.pipes.length / 2; i += 2) {
      const pipe = this.pipes[i];
      //isScored() checks if these pipes has been scored
      if (this.flappybird.x > pipe.x + pipe.width && !pipe.isScored) {
        this.score++;
        pipe.isScored = true;
        this.pipes[i+1].isScored = true;
      }
    }
  }

  draw() {
    // Iteration 1: draw the background
    this.background.draw();

    // Iteration 2: draw the flappy
    this.flappybird.draw();

    // Iteration 2: draw the pipes
    this.pipes.forEach(pipe => pipe.draw());
    this.drawPipesCount++;

    this.ctx.save();
    // Bonus: draw the score
    this.ctx.fillStyle = "white";
    this.ctx.font = "25px FlappyFont";
    this.ctx.fillText(this.score, 15, 30);
    
    this.ctx.restore();

  }
}
