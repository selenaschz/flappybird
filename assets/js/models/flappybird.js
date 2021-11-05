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
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.horizontalFrames = 3;
    this.sprite.verticalFrames = 1;
    this.sprite.onload = () => {
      this.sprite.frameWith = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
      this.width = this.sprite.frameWith;
      this.height = this.sprite.frameHeight;
    }

    this.drawCount = 0;
  }

  onKeyEvent(event) {
    const isJumping = event.type === 'keydown';
    switch (event.keyCode) {
      case KEY_UP:
        // iteration 2: jump! if necessary =D
    }
  }

  draw() {
    // draw sprite
    
    // animate sprite
    this.animate();
  }

  animate() {
    // iteration 2: configure frame animation
  }

  move() {
    // iteration 2: move the y
  }

  collides(element) {
    // iteration 3: check collisions (true|false)
  }
}
