import {Mob} from './mob.js';

export class Ghost extends Mob{
  constructor(ctx, ai, color) {
    super(ctx, ai, color);
    this.ctx = ctx;
    this.radius = 10;
    this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    this.direction = [false, true, false, false];
    this.position = [100,300];
  }
  render(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position[0]-10, this.position[1], 20, 10);
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
