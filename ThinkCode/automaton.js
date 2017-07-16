function Automaton()
{
   this.states = [true, false, false];
}

Automaton.prototype.readCommands = function(commands)
{
  commands.forEach((e,i)=> {
    if (e === '1') this.states = [false, true, false]
    if (e === '0') {
      if (this.states[0]){
        this.states = [true, false, false];
      } else if (this.states[1]){
        this.states = [false, false, true];
      } else if (this.states[2]){
        this.states = [false, true, false];
      }
    }
  })
  return this.states[1];
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.
console.log(myAutomaton.readCommands(["1", "0", "0", "1"])); //true
console.log(myAutomaton.readCommands(["1"]));// true
console.log(myAutomaton.readCommands(["1", "0", "0", "1", "0"]));//false
