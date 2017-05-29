# Pacman (Road Map) Game

In the collision version of Pacman, we could see that for the movement of the MOB and the possible direction of Pacman, we were checking the current position of every mob with the position of the walls.

It represented for me 2 issues:
* The performance is low as you need to check the position with every wall, in the best cases we would have 48 walls and we would have to check for 4 ghosts + 1 Pacman versus 48 walls and their 4 sides, it means that for every pixel moved we would need to do 768 calculations. It is not a lot when we are talking about 4 ghosts, but, what would happen if we want to place 1000 ghosts? (Yes, this is not the aim of the game but...) it means  200.000 operations for every pixel, too much....

* With the collision method we had one problem, the IA for Ghost is pretty random and dumb, after the collision chose one possible direction randomly... in order to be able to offer some IA to the ghosts, we would need a Road Map (like the navigator in the car) to calculate the best way to capture Pacman

So, I decided to create Pacman using a Road Map instead of wall colission.

The tools and methods used for this project are:
* Language
  * JavaScript ES6
  * CSS3
  * HTML5
* Tools
  * Webpack
  * Node
  * Babel  
