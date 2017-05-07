/**
 * Object Board
 * @param {[object]} ctx Canvas context
 */
export class Board{
  constructor(ctx){
    this.ctx = ctx;
  }

  /**
   * Renders the Board in the canvas
   */
  render() {
    //draw the board
    this.ctx.fillStyle = '#FD8844';
    this.ctx.fillRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);

    //draw the line
    this.ctx.beginPath();
    this.ctx.moveTo(this.ctx.canvas.clientWidth/2, 0);
    this.ctx.lineTo(this.ctx.canvas.clientWidth/2, this.ctx.canvas.clientHeight);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
  }
}
