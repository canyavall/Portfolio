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

                    [30,30,35,25],
                    [85,30,40,25],
                    [145,0,10,52],
                    [175,30,40,25],
                    [235,30,35,25],

                    [30,75,35,10],
                    [85,75,10,70],
                    [115,75,70,10],
                    [205,75,10,70],
                    [235,75,35,10],

                    [0,105,65,40],
                    [85,105,40,10],
                    [145,75,10,40],
                    [175,105,40,10],
                    [235,105,60,40],

                    [115,135,10,30],
                    [115,135,30,10],
                    [145,135,10,10],
                    [179,135,10,60],
                    [112,214,77,10],
                  ];
    let walls = [];
    for (let i = 0; i < poolWalls.length; i++) {
      walls.push(new Wall(this.ctx, poolWalls[i]));
    }
    return walls;
  }
}
