class Background {

  constructor(ctx) {
    this.ctx = ctx;
    // positions
    this.x = 0;
    this.y = 434;
    this.vx = 3;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    // set image dimensions
    this.bgImg.width = this.width;
    this.bgImg.height = this.height;


    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    // set image dimensions
    this.footerImg.width = this.width;
    this.footerImg.height = 64;
  
  }

  draw() {
    this.ctx.drawImage(
      this.bgImg,
      0,
      0,
      this.bgImg.width,
      this.bgImg.height
    )

    this.ctx.drawImage(
      this.footerImg,
      this.x,
      this.y,
      this.footerImg.width,
      this.footerImg.height
    )

    this.ctx.drawImage(
      this.footerImg,
      this.x + this.footerImg.width,
      this.y,
      this.footerImg.width,
      this.footerImg.height
    )
  }

  move() {
    // move the ground
    this.x -= this.vx;
    // check bounds
    if (this.x + this.width <= 0) {
      this.x = 0
    }
  }
}
