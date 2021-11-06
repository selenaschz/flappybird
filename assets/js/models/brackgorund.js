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
    // iteration 1: draw the static backgorund img
    
    // iteration 1: draw footer img twice

  move() {
    // iteration 1: move the ground
    // iteration 1: check bounds and reset position
  }
}
