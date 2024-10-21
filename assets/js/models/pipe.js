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
    this.img.src = `assets/img/pipe-${mode}.png`;

    this.img.onload = () => {
      this.width = this.img.width;
    }

    this.isScored = false; //To check the score in the game
  }

  draw() {
    // iteration 3: draw the pipe don't worry if looks unscaled. You can start drawing a green rectangle
    let imgCropY = 0;
    if (this.img.complete) {
      switch(this.mode) {
        case 'top':
          //If height parameter is less than the height of the image, crop the img
          imgCropY = (this.height <= this.img.height) ? this.img.height - this.height : 0;
          break;
        case 'bottom':
          imgCropY = 0; //In Bottom Mode don't crop the image
          break;
      }

      this.ctx.drawImage(
        this.img,
        0,
        imgCropY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    
  }

  move () {
    // iteration 3: move the pipe
    this.x -= this.vx;
  }
}
