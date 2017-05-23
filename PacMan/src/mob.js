export class Mob {
  constructor(ctx, ai, color) {
    this.ctx = ctx;
    this.ai = ai;
    this.color = color;
    this.radius = 9;
    this.speed = 1;

    // "up", "down", "left", "right" Direction to move
    this.direction = [false, true, false, false];
    this.go = [true, true, true, true];
    this.position = [100,300];

  };
  /**
 * Change the position of the Pacman depending on the direction
 */
  move(level){
    //prepare variables
    let xPositionPlusRadius = this.position[0] + this.radius + 1;
    let xPositionMinusRadius = this.position[0] - this.radius - 1;
    let yPositionPlusRadius = this.position[1] + this.radius + 1;
    let yPositionMinusRadius = this.position[1] - this.radius - 1;
    this.go = [true, true, true, true];

    //Check Collisions
    this.wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level);
    if (this.ai === true) this.newDirection();

    //Modify direction
    if (this.direction[0] && this.go[0]) this.position[1] -= this.speed;
    if (this.direction[1] && this.go[1]) this.position[1] += this.speed;
    if (this.direction[2] && this.go[2]) this.position[0] -= this.speed;
    if (this.direction[3] && this.go[3]) this.position[0] += this.speed;
  }

  wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level) {
    for (let i = 0; i < level.walls.length; i++) {
      let startX = level.walls[i].rect[0],
          startY = level.walls[i].rect[1],
          endX = level.walls[i].rect[0] + level.walls[i].rect[2],
          endY = level.walls[i].rect[1] + level.walls[i].rect[3];

      //Control possible direction depending on the actual direction
      if (yPositionMinusRadius === endY && xPositionMinusRadius < endX && xPositionPlusRadius > startX ) this.go[0] = false; //go up
      if (yPositionPlusRadius === startY && xPositionMinusRadius < endX && xPositionPlusRadius > startX) this.go[1] = false; //go down
      if (xPositionMinusRadius === endX && yPositionPlusRadius > startY && yPositionMinusRadius < endY)  this.go[2] = false; //go left
      if (xPositionPlusRadius === startX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[3] = false; //go right
    }
  }

  /**
   * If ia is true, then we move the mob randomly when he collides
   * @return {[type]} [description]
   */
  newDirection(){
    let possibleDirections = [];
    let changeDirection = false;
    for (let i = 0; i < this.go.length; i++) {
      if (this.go[i]) possibleDirections.push(i);
      if (this.direction[i] === true && this.go[i] === false) changeDirection = true;
    }
    //Check if we need to change directions
    if (changeDirection){
      this.direction = [false, false, false, false];
      let ii = Math.floor(Math.random() * possibleDirections.length);
      this.direction[possibleDirections[ii]] = true;
    }
  }
}
