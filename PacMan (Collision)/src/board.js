export class Board {
  constructor(ctx) {
    this.ctx = ctx;
  }
  render () {
    //draw the board
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
  }
}
