import {Mob} from './mob.js';

export class Pacman extends Mob {
  constructor(ctx, ai, color) {
    super(ctx, ai, color);
    this.ctx = ctx;
    this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    this.direction = [false, false, false, false];//
    this.position = [154,235];
  };
  /**
   * Render the pacman in the screen depending on the position of the object
   * @return {[type]} [description]
   */
  render(){
    let headDirection = this.checkHeadDirection();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc1Start"], headDirection["arc1End"], false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc2Start"], headDirection["arc2End"], false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(headDirection["eyeX"], headDirection["eyeY"], 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
  };

  checkHeadDirection(){
    //Change mouth position
    let head = {};
    head["arc1Start"] = 0.25 * Math.PI;
    head["arc1End"] = 1.25 * Math.PI;
    head["arc2Start"] = 0.75 * Math.PI;
    head["arc2End"] = 1.75 * Math.PI;
    head["eyeX"] = this.position[0] + 2,
    head["eyeY"] = this.position[1] - 6;
    if (this.direction[0] === true){
      head["arc2Start"] = 1.75 * Math.PI;
      head["arc2End"] = 0.75 * Math.PI;
      head["eyeX"] = this.position[0] - 6,
      head["eyeY"] = this.position[1] - 2;
    }
    if (this.direction[1] === true){
      head["arc1Start"] = 0.75 * Math.PI;
      head["arc1End"] = 1.75 * Math.PI;
      head["arc2Start"] = 1.25 * Math.PI;
      head["arc2End"] = 0.25 * Math.PI;
      head["eyeX"] = this.position[0] + 6,
      head["eyeY"] = this.position[1] + 2;
    }
    if (this.direction[2] === true){
      head["arc1Start"] = 1.25 * Math.PI;
      head["arc1End"] = 0.25 * Math.PI;
      head["arc2Start"] = 1.75 * Math.PI;
      head["arc2End"] = 0.75 * Math.PI;
    }
    return head;
  }
}
