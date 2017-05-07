/**
 * We create the object ball
 * @type {Object}
 */
export class Ball{
  constructor(radius, position, ctx, players) {
    this.radius = radius;
    this.position = position;
    this.ctx = ctx;
    this.players = players;
    this.speed = 0.1;
    this.changeRightY = false;
    this.changeLeftY = false;
    //Direction defines if we need to increment or decrement the move
    this.direction = [2,2];
  }


/**
 * Renders the ball in the canvas
 */
render() {
  this.ctx.beginPath();
  this.ctx.arc(this.position[0], this.position[1], this.radius, 0,2*Math.PI);
  this.ctx.fillStyle = 'white';
  this.ctx.fill();
  this.ctx.stroke();
};

/**
 * Move the ball and checks the collision with the paddles
 * @param  {[object]} paddleLeft  Left paddle
 * @param  {[object]} paddleRight Right paddle
 */
move (paddleLeft, paddleRight) {
  let xPositionRadius = this.position[0] + this.radius * this.direction[0];
  let yPositionRadius = this.position[1] + this.radius * this.direction[1];
  this.paddleColission(paddleLeft, paddleRight, xPositionRadius, yPositionRadius);
  this.boardCollision(xPositionRadius, yPositionRadius);

  //Move the ball
  this.position[0] += this.direction[0];
  this.position[1] += this.direction[1];
};

boardCollision (xPositionRadius, yPositionRadius){

  if (yPositionRadius <= 0){
      this.direction[1] *= -1
      this.position[1] = 0 + this.radius;
    };
    if (yPositionRadius >= this.ctx.canvas.clientHeight){
      this.direction[1] *= -1
      this.position[1] = this.ctx.canvas.clientHeight - this.radius;
    };
    if (xPositionRadius <= 0){
      this.direction[0] *= -1;
      this.position[0] = 0 + this.radius;
      this.players[1].score++;
      this.players[1].scoreTime = new Date().getTime();
    };
    if (xPositionRadius >= this.ctx.canvas.clientWidth){
      this.direction[0] *= -1
      this.position[0] = this.ctx.canvas.clientWidth - this.radius;
      this.players[0].score++;
      this.players[0].scoreTime = new Date().getTime();
    }
}

  /**
   * [description]
   * @param  {[object]} paddleLeft  Left paddle object
   * @param  {[object]} paddleRight Right paddle object
   */
   paddleColission (paddleLeft, paddleRight, xPositionRadius, yPositionRadius) {
     //Check the paddleLeft position for the collision
     if (this.position[0]-this.radius <= paddleLeft.position[0] + paddleLeft.width &&
         this.position[1] >= paddleLeft.position[1] &&
         this.position[1] <= paddleLeft.position[1] + paddleLeft.height &&
         this.direction[0] < 0
       ){
         this.position[0] = paddleLeft.position[0] + paddleLeft.width + this.radius;
         this.direction[0] *= (this.direction[0] > -5) ? (-1 - this.speed) : -1;
         if (this.changeLeftY === true) this.direction[1] *= -1;
     }

    //Check the paddleRight position for the collision
    if (this.position[0] + this.radius >= paddleRight.position[0] &&
        this.position[1] >= paddleRight.position[1] &&
        this.position[1] <= paddleRight.position[1] + paddleRight.height &&
        this.direction[0] > 0
      ){
        this.position[0] = paddleRight.position[0] - this.radius;
        this.direction[0] *= (this.direction[0] < 5) ? (-1 - this.speed) : -1;
        if (this.changeRightY === true) this.direction[1] *= -1;
    }
  }
}
