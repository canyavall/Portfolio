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

                    [27,27,34,25],
                    [83,27,40,25],
                    [145,0,10,52],
                    [177,27,40,25],
                    [239,27,34,25],

                    [27,74,34,10],
                    [83,74,10,101],
                    [115,74,70,10],
                    [207,74,10,101],
                    [239,74,34,10],

                    [0,106,61,69],
                    [84,107,39,5],
                    [145,79,10,52],
                    [177,107,39,5],
                    [239,106,61,69],

                    [112,154,10,60],
                    [145,154,10,10],
                    [179,154,10,60],
                    [112,214,77,10],
                  ];
    let walls = [];
    for (let i = 0; i < poolWalls.length; i++) {
      walls.push(new Wall(this.ctx, poolWalls[i]));
    }
    return walls;
  }
}
