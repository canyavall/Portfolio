export class Pill {
  constructor(ctx, position, type) {
    this.ctx = ctx;
    this.type = type;
    this.position = position;
  };

  render(){
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], 3, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }
}
