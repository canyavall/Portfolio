import {Mob} from './mob.js';

export class Pacman extends Mob {
  constructor(ctx, ai) {
    super(ctx, ai);
    this.ctx = ctx;
    this.radius = 10;
    this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    this.direction = [false, false, false, false];//
    this.position = [100,100];
  };
  /**
   * Render the pacman in the screen depending on the position of the object
   * @return {[type]} [description]
   */
  render(){
    let headDirection = this.checkHeadDirection();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc1Start"], headDirection["arc1End"], false);
    this.ctx.fillStyle = "rgb(255, 255, 0)";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc2Start"], headDirection["arc2End"], false);
    this.ctx.fill();
  };

  checkHeadDirection(){
    //Change mouth position
    let head = {};
    head["arc1Start"] = 0.25 * Math.PI;
    head["arc1End"] = 1.25 * Math.PI;
    head["arc2Start"] = 0.75 * Math.PI;
    head["arc2End"] = 1.75 * Math.PI;
    if (this.direction[0] === true){
      head["arc2Start"] = 1.75 * Math.PI;
      head["arc2End"] = 0.75 * Math.PI;
    }
    if (this.direction[1] === true){
      head["arc1Start"] = 0.75 * Math.PI;
      head["arc1End"] = 1.75 * Math.PI;
      head["arc2Start"] = 1.25 * Math.PI;
      head["arc2End"] = 0.25 * Math.PI;
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
