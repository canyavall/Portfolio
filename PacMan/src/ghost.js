import {Mob} from './mob.js';

export class Ghost extends Mob{
  constructor(ctx, ai, color) {
    super(ctx, ai, color);
    this.ctx = ctx;
    this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    this.direction = [true, false, false, false];
    this.position = [150,150];
  }
  render(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position[0]- this.radius, this.position[1], this.radius*2, this.radius);
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, 1 * Math.PI, 0 * Math.PI, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0]-3, this.position[1], 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0]+4, this.position[1], 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
  }
}
