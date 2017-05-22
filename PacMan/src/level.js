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
                    [0,0,5,this.ctx.canvas.clientHeight],
                    [0,0,this.ctx.canvas.clientWidth,5],
                    [0,this.ctx.canvas.clientHeight - 5,this.ctx.canvas.clientWidth,10],
                    [this.ctx.canvas.clientWidth-5,0,5,this.ctx.canvas.clientHeight],

                    [27,27,30,25],
                    [79,27,43,25],
                    [145,0,10,52],
                    [177,27,43,25],
                    [242,27,30,25],

                    [27,74,30,10],
                    [79,74,10,60],
                    [111,74,78,10],
                    [211,74,10,60],
                    [243,74,30,10],
                  ];
    let walls = [];
    for (let i = 0; i < poolWalls.length; i++) {
      walls.push(new Wall(this.ctx, poolWalls[i]));
    }
    return walls;
  }
}
