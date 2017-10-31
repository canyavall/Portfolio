function chessBoardCellColor(cell1, cell2) {
    let cell1Col = cell1.match(/[ACEG]/i) ? 1 : 0;
    let cell1Row = cell1.split("")[1] % 2;

    //1: black, 0: white
    let cell1Color = (cell1Col === cell1Row) ? 1 : 0 ;


    let cell2Col = cell2.match(/[ACEG]/i) ? 1 : 0;
    let cell2Row = cell2.split("")[1] % 2;

    //1: black, 0: white
    let cell2Color = (cell2Col === cell2Row) ? 1 : 0 ;



    return (cell1Color === cell2Color) ? true : false;


}

console.log(chessBoardCellColor("A1","C3")); // true
console.log(chessBoardCellColor("A1","H3")); //false
console.log(chessBoardCellColor("A1","A2")); // false
