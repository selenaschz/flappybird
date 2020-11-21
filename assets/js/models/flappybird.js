class FlappyBird {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.jumpImpulse = 70;
    this.vy = 3;

    this.sprite = new Image();
    this.sprite.src = 'assets/img/bird.png';
    // sprite setup

    this.drawCount = 0;
    this.movements = {
      up: false
    }
  }

  onKeyEvent(event) {
    // iteration 2: configure frame animation
  }

  draw() {
    if (this.sprite.isReady) {
      // draw sprite
      this.drawCount++;
      // animate sprite
    }
  }

  animate() {
    // iteration 2: configure frame animation
    this.animateFrame();
  }

  animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
    // iteration 2: animate the sprite
  }

  move() {
    // iteration 2: move the y
  }

  collides(element) {
    // iteration 3: check collisions (true|false)
  }

}
