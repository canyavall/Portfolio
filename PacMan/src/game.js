import {Board} from './board.js';
import {Level} from './level.js';
import {Pacman} from './pacman.js';
import {Ghost} from './ghost.js';

export class Game {
  constructor() {
    //Initiate variables
    this.width = 300;
    this.height = 400;
    this.ctx = this.prepareDOM();
    this.intervalId = 0

    //Create objects
    this.board = new Board(this.ctx);
    this.pacman = new Pacman(this.ctx, false, "Yellow");
    this.pinki = new Ghost(this.ctx, true, "Pink");
    this.bliwi = new Ghost(this.ctx, true, "Blue");
    this.oniwi = new Ghost(this.ctx, true, "Orange");
    this.rediwi = new Ghost(this.ctx, true, "Red");
    this.level = new Level(this.ctx);
  }

  /**
   * Play the game
   */
  play(){
    this.board.render();
    this.pacman.render();
    this.pinki.render();
    this.bliwi.render();
    this.oniwi.render();
    this.rediwi.render();
    this.level.render();
    this.listeners();
    this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
  }

  /**
   * Start the Canvas, ti saves the canvas context
     */
  prepareDOM () {
    //create the canvas
    let canvas = document.createElement('canvas');
    canvas.id     = "canvas";
    canvas.width  = this.width;
    canvas.height = this.height;
    canvas.style = "border:1px solid #000000;";
    window.document.body.appendChild(canvas);

    //Get canvas
    return canvas.getContext('2d');
  }

  /**
   * Reset all the canvas to do the move effect
   */
  resetCanvas(){
    this.mobCollision();
    this.board.render();
    this.level.render();
    this.pacman.move(this.level);
    this.pacman.render();
    this.pinki.move(this.level);
    this.pinki.render();
    this.bliwi.move(this.level);
    this.bliwi.render();
    this.oniwi.move(this.level);
    this.oniwi.render();
    this.rediwi.move(this.level);
    this.rediwi.render();
  }
  /**
   * Check if there's a collision between Pacman and the ghosts
   */
  mobCollision(){
    if (this.pacman.position[0] - this.pacman.radius == this.pinki.position[0] + this.pinki.radius
       && this.pacman.position[1] == this.pinki.position[1]){
      alert("got you");
    }
  }

  /**
   * Listen for any event in the game
   * @return {[type]} [description]
   */
   listeners () {
    document.addEventListener('keydown', (event) => {
      this.changePropertyEvent (event.keyCode, true)
    });

    document.addEventListener('keyup', (event) => {
      this.changePropertyEvent (event.keyCode, false)
    });
  }

  /**
   * Change the move controllers depending the user
   * @param  {[integer]} keyCode keycode pressed or unpressed
   * @param  {[boolean]} value   change the value of the controller
   */
  changePropertyEvent (keyCode, value){
    switch(keyCode) {
      case 37:
        this.pacman.direction[2] = value;
        break;
      case 38:
        this.pacman.direction[0] = value;
        break;
      case 39:
        this.pacman.direction[3] = value;
        break;
      case 40:
        this.pacman.direction[1] = value;
        break;
    }
  }
}
