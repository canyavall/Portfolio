import {Wall} from './wall.js';
export class Level {
  constructor(ctx) {
    this.ctx = ctx;
    this.walls = this.createWalls();
  }
  render(){
    this.walls.forEach((element) => element.render());
  }
  createWalls(){
    //Some logic to import the walls from a file or create
    //them from IA
    //Now, we are using a fixed pool of walls
    let poolWalls = [
                    [0,0,10,this.ctx.canvas.clientHeight],
                    [0,0,this.ctx.canvas.clientWidth,10],
                    [0,this.ctx.canvas.clientHeight - 10,this.ctx.canvas.clientWidth,10],
                    [this.ctx.canvas.clientWidth-10,0,10,this.ctx.canvas.clientHeight],
                    [50,50,10,40],
                  ];
    let walls = [];
    for (let i = 0; i < poolWalls.length; i++) {
      walls.push(new Wall(this.ctx, poolWalls[i]));
    }
    return walls;
  }
}
