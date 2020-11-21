class Background {

  constructor(ctx) {
    this.ctx = ctx;
    // positions

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    // load and set ready

    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    // load and set ready
    
  }

  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
      // draw both images
    }
  }

  move() {
    // move the ground

    // check bounds
  }
}
