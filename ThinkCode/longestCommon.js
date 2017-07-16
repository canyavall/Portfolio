function LCS(x, y) {
  let ax = x.split("");
  let ay = y.split("");
  let controller = false;
  let bufferString = "";
  let finalstring = "";
  let indexcontroller = 0;
  ax.forEach((e,i)=>{
    if (controller === false) if (bufferString.length > finalstring.length) finalstring = bufferString;
    if (ay.indexOf(e) !== -1){
      if (indexcontroller === 0) {
        indexcontroller = ay.indexOf(e);
        bufferString = e;
        indexcontroller++;
        controller = true;
      }else{
        if (indexcontroller === ay.indexOf(e)){
          bufferString += e;
          controller = true;
          indexcontroller++;
        }else{
          controller = false;
          indexcontroller=0;
        }
      }

    }else{
      controller = false;
    }
  });

  return finalstring;
}

console.log(LCS("a", "b"));// ""
console.log(LCS("abcdefghijkl", "abc"));//, "abc"
console.log(LCS("abcdefghijk", "ghi"));//, "abc"
console.log(LCS("abcdefabc", "abcd"));//, "abc"
