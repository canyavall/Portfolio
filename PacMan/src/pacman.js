export class Pacman {
  constructor(ctx) {
    this.ctx = ctx;
    this.radius = 10;
    this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    this.direction = [false, false, false, false];//
    this.go = [true, true, true, true];
    this.position = [100,100];
  };
  /**
   * Render the pacman in the screen depending on the position of the object
   * @return {[type]} [description]
   */
  render(){
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
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, arc1Start, arc1End, false);
    this.ctx.fillStyle = "rgb(255, 255, 0)";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.position[0], this.position[1], this.radius, arc2Start, arc2End, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(eyeX, eyeY, 2, 0 * Math.PI, 1.75 * Math.PI, false);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
  };
    /**
   * Change the position of the Pacman depending on the direction
   */
  move(level){
    //prepare variables
    let xPositionPlusRadius = this.position[0] + this.radius;
    let xPositionMinusRadius = this.position[0] - this.radius;
    let yPositionPlusRadius = this.position[1] + this.radius;
    let yPositionMinusRadius = this.position[1] - this.radius;
    this.go = [true, true, true, true];
    //Check Collisions
    this.boardCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius);
    this.wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level);

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
    }

    wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level) {
      for (let i = 0; i < level.walls.length; i++) {
        let startX = level.walls[i].start[0],
            startY = level.walls[i].start[1],
            endX = level.walls[i].end[0],
            endY = level.walls[i].end[1],
            vWall = false;

        if (yPositionMinusRadius === endY && xPositionMinusRadius < endX && xPositionPlusRadius > endX) this.go[0] = false;
        if (yPositionPlusRadius === startY && xPositionMinusRadius < endX && xPositionPlusRadius > endX) this.go[1] = false;
        if (startX === endX && xPositionMinusRadius === startX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[2] = false;
        if (yPositionMinusRadius === endY && xPositionMinusRadius < endX && xPositionPlusRadius > startX) this.go[0] = false;
        if (startX != endX && yPositionPlusRadius === endY && xPositionMinusRadius < endX && xPositionPlusRadius >= startX) this.go[1] = false;
        if (xPositionMinusRadius === endX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[2] = false;
        if (xPositionPlusRadius === startX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[3] = false;
      }
}
}
