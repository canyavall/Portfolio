import {Board} from './board.js';
import {Player} from './player.js';
import {Ball} from './ball.js';
import {Paddle} from './paddle.js';
/**
 * Main function to play the game
 * @param {[type]} widthCanvas  [description]
 * @param {[type]} heightCanvas [description]
 */
export class Game {
  constructor(){
    // Prepare Parameters
    this.width = 600;
    this.height = 400;
    this.intervalId = 0;
    this.players = [];
    this.maxScore;

    // Prepare DOM
    this.canvasContext = this.prepareDOM();

    //Create players
    this.createPlayers();

    //Prepare objects
    this.board = new Board(this.canvasContext);
    this.ball = new Ball(5, [100,350], this.canvasContext, this.players);
    this.paddleLeft = new Paddle([30, this.height /2], this.canvasContext);
    this.paddleRight = new Paddle([this.width - 30,this.height /2], this.canvasContext);

    //Control the events
    this.listeners();
  }


  /**
  * Method to initiate the game
  */
  play() {
    //Create initial board
    this.board.render();

    //Render players
    for (let i = 0; i < this.players.length; i++) this.players[i].render();

    //Create initial ball
    this.ball.render();
    //Create initial paddle
    this.paddleLeft.render();
    this.paddleRight.render();
    //Move the ball
    this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
  };

  /**
   * Reset the canvas and control if the game is over
   */
   resetCanvas() {

    // Render all
    this.board.render ();
    //Render players
    for (let i = 0; i < this.players.length; i++){
      //If players scores max score
      if (this.players[i].score === this.maxScore){
        this.players[i].winMsg();
        clearInterval(this.intervalId);
        setTimeout(() =>{
          if (confirm("Do you want to play again?")) document.location.reload();
        }, 1000);
      }
      this.players[i].render();
    }

    //Show scores messages
    this.scoreMessages();

    //Move ball and paddles
    this.ball.move(this.paddleLeft, this.paddleRight);
    this.paddleLeft.move();
    this.paddleRight.move();

    //Render paddles and ball
    this.paddleLeft.render ();
    this.paddleRight.render ();
    this.ball.render();
  }

  /**
   * Prepare the DOM
   */
  prepareDOM() {
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
  * All eventlisteners are here
  */
  listeners() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode == 87) {
        this.paddleLeft.directionTop = true;
      }else if (event.keyCode == 83){
        this.paddleLeft.directionBottom = true;
      }else if (event.keyCode == 81){
        this.ball.changeLeftY = true;
      }else if (event.keyCode == 80) {
        this.paddleRight.directionTop = true;
      }else if (event.keyCode == 76){
        this.paddleRight.directionBottom = true;
      }else if (event.keyCode == 186){
        this.ball.changeRightY = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.keyCode == 87) {
        this.paddleLeft.directionTop = false;
      }else if (event.keyCode == 83){
        this.paddleLeft.directionBottom = false;
      }else if (event.keyCode == 81){
        this.ball.changeLeftY = false;
      }else if (event.keyCode == 80) {
        this.paddleRight.directionTop = false;
      }else if (event.keyCode == 76){
        this.paddleRight.directionBottom = false;
      }else if (event.keyCode == 186){
        this.ball.changeRightY = false;
      }
    });
  }

  /**
   * create players of the game
   */
  createPlayers() {
    //Get player names
    let firstPlayer = prompt ("Please, write the name of the first player. \n You'll play on the left with the keys 'W' and 'S' to move the paddle and 'Q' to change ball direction");
    let secondPlayer = prompt ("Please, write the name of the second player. \n You'll play on the right with the keys 'P' and 'L' and '`' to change ball direction");
    let scoreMaximum = parseInt(prompt ("Please, write the Maximum number of scores to win the game"));

    //Control player, if there's no name, the name will be Player1/Player2

    firstPlayer = (firstPlayer === '') ? "Player 1" : firstPlayer;
    secondPlayer = (secondPlayer === '') ? "Player 2" : secondPlayer;
    if (Number.isInteger(scoreMaximum) === false || scoreMaximum <= 0){
      this.maxScore = 1;
    }else{
      this.maxScore = scoreMaximum;
    }
    this.players.push(new Player(firstPlayer, [this.width / 2 - 100,30], this.canvasContext));
    this.players.push(new Player(secondPlayer, [this.width / 2 + 50,30], this.canvasContext));
  }

  /**
   * Show messages depending on the score
   */
  scoreMessages() {
    // Actual date to control the score message
    let actualDate = new Date().getTime();

    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].scoreTime + 2000 >= actualDate && this.players[i].scoreTime != 0){
        this.players[i].scoreMsg();
        if (this.players[i].strikeCounter === 3){
          this.players[i].strikeMsg("Good Job!");
        }else if (this.players[i].strikeCounter === 5){
          this.players[i].strikeMsg("Awesome!");
        }else if (this.players[i].strikeCounter === 7){
        this.players[i].strikeMsg("OMG!");
        }else if (this.players[i].strikeCounter === 10){
          this.players[i].strikeMsg("God like!");
        }
      }
    }
  }

}
