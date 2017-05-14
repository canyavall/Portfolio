export class Wall {
  constructor(ctx, rect) {
    this.ctx = ctx;
    this.rect = rect;
  }
  render() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3]);
  }
}
