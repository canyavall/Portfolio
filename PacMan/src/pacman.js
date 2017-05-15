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
<<<<<<< HEAD
    //Change mouth position
    let arc1Start = 0.25 * Math.PI,
        arc1End = 1.25 * Math.PI,
        arc2Start = 0.75 * Math.PI,
        arc2End = 1.75 * Math.PI,
        eyeX = this.position[0] + 2,
        eyeY = this.position[1] - 6;

    if (this.direction[0] === true){
      arc2Start = 1.75 * Math.PI;
      arc2End = 0.75 * Math.PI;
      eyeX = this.position[0] - 6,
      eyeY = this.position[1] - 2;
    }
    if (this.direction[1] === true){
      arc1Start = 0.75 * Math.PI;
      arc1End = 1.75 * Math.PI;
      arc2Start = 1.25 * Math.PI;
      arc2End = 0.25 * Math.PI;
      eyeX = this.position[0] + 6,
      eyeY = this.position[1] + 2;
    }
    if (this.direction[2] === true){
      arc1Start = 1.25 * Math.PI;
      arc1End = 0.25 * Math.PI;
      arc2Start = 1.75 * Math.PI;
      arc2End = 0.75 * Math.PI;
    }
=======
    let headDirection = this.checkHeadDirection();
>>>>>>> master
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc1Start"], headDirection["arc1End"], false);
    this.ctx.fillStyle = "rgb(255, 255, 0)";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc2Start"], headDirection["arc2End"], false);
    this.ctx.fill();
    this.ctx.beginPath();
<<<<<<< HEAD
    this.ctx.arc(eyeX, eyeY, 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
=======
    this.ctx.arc(headDirection["eyeX"], headDirection["eyeY"], 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
>>>>>>> master
  };

<<<<<<< HEAD
    //Modify direction
    if (this.direction[0] && this.go[0]) this.position[1] -= this.speed;
    if (this.direction[1] && this.go[1]) this.position[1] += this.speed;
    if (this.direction[2] && this.go[2]) this.position[0] -= this.speed;
    if (this.direction[3] && this.go[3]) this.position[0] += this.speed;
  }
  /**
   * [boardCollision description]
   * @param  {[integer]} xPositionPlusRadius  Radius plus x position
   * @param  {[integer]} xPositionMinusRadius Radius minus x position
   * @param  {[integer]} yPositionPlusRadius  Radius plus y position
   * @param  {[integer]} yPositionMinusRadius Radius minus y position
    */
    boardCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius){
      if (yPositionMinusRadius === 0) this.go[0] = false;
      if (yPositionPlusRadius === this.ctx.canvas.clientHeight) this.go[1] = false;
      if (xPositionMinusRadius === 0) this.go[2] = false;
      if (xPositionPlusRadius === this.ctx.canvas.clientWidth) this.go[3] = false;
=======
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
>>>>>>> master
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
