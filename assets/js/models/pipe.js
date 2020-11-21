class Pipe {

  constructor(ctx, x, y, height, mode) {
    this.ctx = ctx;
    this.x = x;
    this.vx = 3;
    this.y = y;
    this.height = height;
    this.mode = mode;

    this.img = new Image();
    // iteration 3: load the source checking the mode and setup this.with (must be the image with)
  }

  draw() {
    if (this.img.isReady) {
      // iteration 3: draw the pipe don't worry if looks unscaled
    }
  }

  move () {
    // iteration 3: move the pipe
  }
}
