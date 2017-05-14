export class Mob {
  constructor(ctx, ai) {
    this.ctx = ctx;
    this.ai = ai;
    this.radius = 10;
    this.speed = 1;
    this.direction = [false, true, false, false];
    this.go = [true, true, true, true];
    this.position = [100,300];
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

  /**
   * If random  is true, then we move the mob randomly when he collides
   * @return {[type]} [description]
   */
  newDirection(){
    let possibleDirections = [];

    for (let i = 0; i < this.go.length; i++) {
      if (this.go[i]) possibleDirections.push(i);
    }
    if (possibleDirections.length < 4){
      //console.log(this.position);
      //console.log(possibleDirections);
      this.direction = [false, false, false, false];
      let ii = Math.floor(Math.random() * possibleDirections.length);
      // console.log(ii);
      this.direction[possibleDirections[ii]] = true;
    }
  }
}
