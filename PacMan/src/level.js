import {Wall} from './wall.js';
import {Pill} from './pill.js';

export class Level {
  constructor(ctx) {
    this.ctx = ctx;
    this.walls = this.createWalls();
    this.pills = this.createPills();
  }
  render(){
    this.walls.forEach((element) => element.render());
    this.pills.forEach((element) => element.render());
  }
  createWalls(){
    //Some logic to import the walls from a file or create
    //them from IA
    //Now, we are using a fixed pool of walls
    let poolWalls = [
                    [0,0,10,(this.ctx.canvas.clientHeight / 2) - 20],
                    [0,(this.ctx.canvas.clientHeight / 2) + 20,10,this.ctx.canvas.clientHeight],
                    [0,0,this.ctx.canvas.clientWidth,10],
                    [0,this.ctx.canvas.clientHeight - 10,this.ctx.canvas.clientWidth,10],
                    [this.ctx.canvas.clientWidth - 10,0,10,(this.ctx.canvas.clientHeight / 2) - 20],
                    [this.ctx.canvas.clientWidth - 10,(this.ctx.canvas.clientHeight / 2) + 20,10,this.ctx.canvas.clientHeight],

                    [30,30,35,25], [85,30,40,25], [145,0,10,52], [175,30,40,25], [235,30,35,25],

                    [30,75,35,10], [85,75,10,70], [115,75,70,10], [205,75,10,70], [235,75,35,10],

                    [0,105,65,40], [85,105,40,10], [145,75,10,40], [175,105,40,10], [235,105,70,40],

                    [115,135,25,30], [160,135,25,30], [115,160,70,15],

                    [0,165,65,40], [85,165,10,40], [145,195,10,40], [205,165,10,40], [235,165,65,40], [115,195,70,10],

                    [30,225,35,10], [55,225,10,40], [85,225,40,10], [175,225,40,10], [235,225,35,10], [235,225,10,40],

                    [0,255,35,10], [85,255,10,40], [35,285,90,10], [115,255,70,10], [145,255,10,40], [205,255,10,40],
                    [175,285,90,10], [265,255,35,10]
                  ];
    let walls = [];
    poolWalls.forEach((element) => walls.push(new Wall(this.ctx, element)));
    return walls;
  }

  createPills(){
    let poolPills = [
      [20,20], [43,20], [66,20], [89,20], [112,20], [135,20],
      [165,20], [188,20], [211,20], [234,20], [257,20], [280,20]
    ];
    let pills = [];
    poolPills.forEach((element) => pills.push(new Pill(this.ctx, element)));
    return pills;
  }
}
