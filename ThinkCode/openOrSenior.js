//The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
//They would like your help with an application form that will tell prospective members
//which category they will be placed. To be a senior, a member must be at least 55 years
//old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26;
//the better the player the lower the handicap.


function openOrSenior(data){
  return data.map((person) => (person[0]>=55 && person[1]>7)?"Senior": "Open");
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));//['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));//['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));//['Senior', 'Open', 'Open', 'Open'])
