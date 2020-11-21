class Pipe {

  constructor(ctx, x, y, height, mode) {
    this.ctx = ctx;
    this.x = x;
    this.vx = 3;
    this.y = y;
    this.height = height;
    this.mode = mode;

    this.img = new Image();
    this.img.src = `assets/img/pipe-${mode}.png`;
    this.img.isReady = false;
    this.img.onload = () => {
      this.img.isReady = true;
      this.width = this.img.width;
    }
    this.isChecked = false;
  }

  draw() {
    if (this.img.isReady) {

      let ySeek = 0;
      switch (this.mode) {
        case 'top':
          ySeek = (this.height > this.img.height) ? 0 : this.img.height - this.height;
          break;
        case 'bottom':
          ySeek = 0
          break;
      }

      this.ctx.drawImage(
        this.img,
        0,
        ySeek,
        Math.min(this.img.width, this.width),
        Math.min(this.img.height, this.height),
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  move () {
    this.x -= this.vx;
  }
}
