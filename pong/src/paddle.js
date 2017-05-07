/**
 * Defines the paddle to be played
 * @param {[object]} ctx Canvas ctx
 */
export class Paddle {
  constructor(position, ctx) {
    this.ctx = ctx;
    this.position = position;
    this.width = 15;
    this.height = 60;
    this.speed = 4;
    this.direction = 0;
  }

  /**
   * Renders the paddle in the canvas
   */
  render() {
    this.ctx.fillStyle = 'rgba(0, 0, 255, 0.30';
    this.ctx.fillRect(this.position[0], this.position[1], this.width, this.height);
  };

  /**
   * Move the paddle, the paddle must be moved only horizontal
   */
  move() {

    //We don't allow the paddle to go out from the board
    //But we move to the top or bottom depending on the key pressed
    if (this.directionTop == true) this.position[1] += -this.speed;
    if (this.directionBottom == true) this.position[1] += this.speed;
    if (this.direction == 0 ) this.position[1];
    if (this.position[1] < 0 ) this.position[1] = 0;
    if (this.position[1] > this.ctx.canvas.clientHeight - this.height ) this.position[1] = this.ctx.canvas.clientHeight - this.height;
  };
}
