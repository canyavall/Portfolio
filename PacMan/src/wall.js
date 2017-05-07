export class Wall {
  constructor(ctx, start, end) {
    this.ctx = ctx;
    this.start = start;
    this.end = end;
  }
  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.start[0], this.start[1]);
    this.ctx.lineTo(this.end[0], this.end[1]);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }
}
