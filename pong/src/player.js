/**
 * Player attributes
 * @param  {[string]} name name of the player
 */
export class Player{
  constructor(name, position, context) {
    this.context = context;
    this.position = position;
    this.name = name;
    this.score = 0;
    this.scoreTime = 0
  }

  render(){
    let textToShow = `${this.name}: ${this.score}`;
    this.context.font = "20px Calibri";
    this.context.fillStyle = "white";
    this.context.fillText(textToShow,this.position[0],this.position[1]);
  }

  scoreMsg() {
    this.context.font = "20px Calibri";
    this.context.textAlign="center";
    this.context.fillStyle = "pink";
    this.context.fillText("Gotcha!",this.context.canvas.clientWidth/2,75);
  }
  
  winMsg() {
    this.context.font = "50px Calibri";
    this.context.fillStyle = "green";
    this.context.textAlign="center";
    let msg = `${this.name} WINS!!`;
    this.context.fillText(msg,this.context.canvas.clientWidth/2,this.context.canvas.clientHeight/2);
  }
}
