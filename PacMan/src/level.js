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
                    [[0,0],[this.ctx.canvas.clientWidth,0]],
                    [[0,0],[0,this.ctx.canvas.clientHeight]],
                    [[0,this.ctx.canvas.clientHeight],[this.ctx.canvas.clientWidth,this.ctx.canvas.clientHeight]],
                    [[this.ctx.canvas.clientWidth,0],[this.ctx.canvas.clientWidth,this.ctx.canvas.clientHeight]],
                    [[21,0],[21,38]],
                    [[21,60],[21,90]],
                    [[0,90],[21,90]],
                    [[42,21],[72,21]],
                    [[95,0],[95,50]],
                    [[120,21],[165,21]],
                    [[120,21],[120,60]],
                    [[165,21],[165,60]],
                    [[143,42],[143,60]],
                  ];
    let walls = [];
    for (let i = 0; i < poolWalls.length; i++) {
      let startX = poolWalls[i][0][0],
          startY = poolWalls[i][0][1],
          endX = poolWalls[i][1][0],
          endY = poolWalls[i][1][1];
      walls.push(new Wall(this.ctx, poolWalls[i][0], poolWalls[i][1]));
      //walls.push(new Wall(this.ctx, [this.ctx.canvas.clientWidth - startX, startY], [this.ctx.canvas.clientWidth - endX, endY]));
    }
    return walls;
  }
}
