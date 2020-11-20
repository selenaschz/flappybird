class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 434;
    this.vx = 3;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    this.bgImg.isReady = false;
    this.bgImg.onload = () => {
      this.bgImg.isReady = true;
      this.bgImg.height = this.height;
      this.bgImg.width = this.width;
    }

    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    this.footerImg.isReady = false;
    this.footerImg.onload = () => {
      this.footerImg.isReady = true;
      this.footerImg.height = 70;
      this.footerImg.width = this.width;
    }
  }

  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
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
  }

  move() {
    this.x -= this.vx;
    if (this.x + this.width <= 0) {
      this.x = 0;
    }
  }
}
