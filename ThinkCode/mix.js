function mix(s1, s2) {
  //Remove spaces and capital letters
  let str1 = s1.replace(/ /g,'').replace( /[^a-z]/g, '' );
  let str2 = s2.replace(/ /g,'').replace( /[^a-z]/g, '' );

  //Prepare 2 objects,
  let combined = "";
  str1.concat(str2).split("").forEach((e)=> {if (combined.indexOf(e) === -1) combined += e})
  let obj1 = {};
  let obj2 = {};
  str1.split("").forEach((e) => (obj1[e] === undefined) ?  obj1[e] = 1 : obj1[e] += 1);
  str2.split("").forEach((e) => (obj2[e] === undefined) ?  obj2[e] = 1 : obj2[e] += 1);
  let finalObject = {};
  let finalString = "";
  let max = 0;

  combined.split("").forEach((e) => {
    let value = null;
    let stringCase = null
    if (obj1[e] > obj2[e] ) {
      value = obj1[e];
      stringCase = 1;
    } else if (obj2[e] > obj1[e] || obj1[e] === undefined){
      value = obj2[e];
      stringCase = 2;
    } else if (obj1[e] === obj2[e]){
      value = obj1[e];
      stringCase = "=";
    } else if (obj2[e] === undefined) {
      value = obj1[e];
      stringCase = 1;
    } else if (obj1[e] === undefined) {
      value = obj2[e];
      stringCase = 2;
    }
    if(value > 1){
        if (max < value) max = value;
        if (finalObject[value]) {
          finalObject[value].push([stringCase, e]);
        }else{
          finalObject[value] =[[stringCase, e]];
        }
    }
  });
  for (var i = max; i > 1; i--) {
    if (finalObject[i])
      finalString += finalObject[i].sort().map((e) => {
        return (e[0] +":"+ e[1].repeat(i) + "/");
      })
  }
  let cleanFinalString = finalString.replace(/,/g,'');
  return cleanFinalString.substring(0, cleanFinalString.length-1);
}


//console.log(mix("Are they here", "yes, they are here"))// "2:eeeee/2:yy/=:hh/=:rr"
//console.log(mix("looping is fun but dangerous", "less dangerous than coding"))//, "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
console.log(mix(" In many languages", " there's a pair of functions"))// , "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
// console.log(mix("Lords of the Fallen", "gamekult")) //, "1:ee/1:ll/1:oo"
// console.log(mix("codewars", "codewars"))//, ""
// console.log(mix("A generation must confront the looming ", "codewarrs"))//, "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
