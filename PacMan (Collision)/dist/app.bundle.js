/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mob = exports.Mob = function () {
  function Mob(ctx, ai, color) {
    _classCallCheck(this, Mob);

    this.ctx = ctx;
    this.ai = ai;
    this.color = color;
    this.radius = 9;
    this.speed = 1;

    // "up", "down", "left", "right" Direction to move
    this.direction = [false, true, false, false];
    this.go = [true, true, true, true];
    this.position = [100, 300];
  }

  _createClass(Mob, [{
    key: "move",

    /**
    * Change the position of the Pacman depending on the direction
    */
    value: function move(level) {
      //prepare variables
      var xPositionPlusRadius = this.position[0] + this.radius + 1;
      var xPositionMinusRadius = this.position[0] - this.radius - 1;
      var yPositionPlusRadius = this.position[1] + this.radius + 1;
      var yPositionMinusRadius = this.position[1] - this.radius - 1;
      this.go = [true, true, true, true];

      //Check Collisions
      this.wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level);
      this.boardCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius);
      if (this.ai === true) this.newDirection();

      //Modify direction
      if (this.direction[0] && this.go[0]) this.position[1] -= this.speed;
      if (this.direction[1] && this.go[1]) this.position[1] += this.speed;
      if (this.direction[2] && this.go[2]) this.position[0] -= this.speed;
      if (this.direction[3] && this.go[3]) this.position[0] += this.speed;
    }

    /**
     * Check the wall collisions and sets the possible directions
     * @param  {[type]} xPositionPlusRadius  [description]
     * @param  {[type]} xPositionMinusRadius [description]
     * @param  {[type]} yPositionPlusRadius  [description]
     * @param  {[type]} yPositionMinusRadius [description]
     * @param  {[type]} level                [description]
     * @return {[type]}                      [description]
     */

  }, {
    key: "wallCollision",
    value: function wallCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius, level) {
      for (var i = 0; i < level.walls.length; i++) {
        var startX = level.walls[i].rect[0],
            startY = level.walls[i].rect[1],
            endX = level.walls[i].rect[0] + level.walls[i].rect[2],
            endY = level.walls[i].rect[1] + level.walls[i].rect[3];

        //Control possible direction depending on the actual direction
        if (yPositionMinusRadius === endY && xPositionMinusRadius < endX && xPositionPlusRadius > startX) this.go[0] = false; //go up
        if (yPositionPlusRadius === startY && xPositionMinusRadius < endX && xPositionPlusRadius > startX) this.go[1] = false; //go down
        if (xPositionMinusRadius === endX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[2] = false; //go left
        if (xPositionPlusRadius === startX && yPositionPlusRadius > startY && yPositionMinusRadius < endY) this.go[3] = false; //go right
      }
    }
    /**
     * Check the board Collision and resends the mob to the other side
     * @param  {[type]} xPositionPlusRadius  [description]
     * @param  {[type]} xPositionMinusRadius [description]
     * @param  {[type]} yPositionPlusRadius  [description]
     * @param  {[type]} yPositionMinusRadius [description]
     * @return {[type]}                      [description]
     */

  }, {
    key: "boardCollision",
    value: function boardCollision(xPositionPlusRadius, xPositionMinusRadius, yPositionPlusRadius, yPositionMinusRadius) {
      if (xPositionPlusRadius == 0) this.position[0] = this.ctx.canvas.clientWidth;
      if (xPositionMinusRadius == this.ctx.canvas.clientWidth) this.position[0] = 0;
      if (yPositionPlusRadius == 0) this.position[1] = this.ctx.canvas.clientHeight;
      if (yPositionMinusRadius == this.ctx.canvas.clientHeight) this.position[1] = 0;
    }
    /**
     * If ia is true, then we move the mob randomly when he collides
     * @return {[type]} [description]
     */

  }, {
    key: "newDirection",
    value: function newDirection() {
      var possibleDirections = [];
      var changeDirection = false;
      for (var i = 0; i < this.go.length; i++) {
        if (this.go[i]) possibleDirections.push(i);
        if (this.direction[i] === true && this.go[i] === false) changeDirection = true;
      }
      //Check if we need to change directions
      if (changeDirection) {
        this.direction = [false, false, false, false];
        var ii = Math.floor(Math.random() * possibleDirections.length);
        this.direction[possibleDirections[ii]] = true;
      }
    }
  }]);

  return Mob;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pill = exports.Pill = function () {
  function Pill(ctx, position, type) {
    _classCallCheck(this, Pill);

    this.ctx = ctx;
    this.type = type;
    this.position = position;
  }

  _createClass(Pill, [{
    key: "render",
    value: function render() {
      this.ctx.beginPath();
      this.ctx.arc(this.position[0], this.position[1], 3, 0 * Math.PI, 1.75 * Math.PI, false);
      this.ctx.fillStyle = "white";
      this.ctx.fill();
    }
  }]);

  return Pill;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(5);

var _level = __webpack_require__(7);

var _pacman = __webpack_require__(8);

var _ghost = __webpack_require__(6);

var _pill = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    //Initiate variables
    this.width = 300;
    this.height = 350;
    this.ctx = this.prepareDOM();
    this.intervalId = 0;

    //Create objects
    this.board = new _board.Board(this.ctx);
    this.pacman = new _pacman.Pacman(this.ctx, false, "Yellow");
    this.ghosts = this.createGhosts(6);
    this.level = new _level.Level(this.ctx);
  }

  /**
   * Play the game
   */


  _createClass(Game, [{
    key: 'play',
    value: function play() {
      this.board.render();
      this.pacman.render();
      this.ghosts.forEach(function (element) {
        return element.render();
      });
      this.level.render();
      this.listeners();
      this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
    }

    /**
     * Start the Canvas, it saves the canvas context
       */

  }, {
    key: 'prepareDOM',
    value: function prepareDOM() {
      //create the canvas
      var canvas = document.createElement('canvas');
      canvas.id = "canvas";
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.style = "border:1px solid #000000;";
      window.document.body.appendChild(canvas);

      //Get canvas
      return canvas.getContext('2d');
    }

    /**
     * Reset all the canvas to do the move effect
     */

  }, {
    key: 'resetCanvas',
    value: function resetCanvas() {
      this.mobCollision();
      this.board.render();
      this.level.render();
      this.pacman.move(this.level);
      this.pacman.render();
      for (var i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].move(this.level);
        this.ghosts[i].render();
      }
    }
    /**
     * Check if there's a collision between Pacman and the ghosts
     */

  }, {
    key: 'mobCollision',
    value: function mobCollision() {}
    // for (let i = 0; i < this.ghosts.length; i++) {
    //   if (this.pacman.position[0] - this.pacman.radius == this.ghosts[i].position[0] + this.ghosts[i].radius
    //      && this.pacman.position[1] == this.ghosts[i].position[1]){
    //     alert("got you");
    //   }
    // }


    /**
     * Listen for any event in the game
     * @return {[type]} [description]
     */

  }, {
    key: 'listeners',
    value: function listeners() {
      var _this = this;

      document.addEventListener('keydown', function (event) {
        _this.changePropertyEvent(event.keyCode, true);
      });

      document.addEventListener('keyup', function (event) {
        _this.changePropertyEvent(event.keyCode, false);
      });
    }

    /**
     * Change the move controllers depending the user
     * @param  {[integer]} keyCode keycode pressed or unpressed
     * @param  {[boolean]} value   change the value of the controller
     */

  }, {
    key: 'changePropertyEvent',
    value: function changePropertyEvent(keyCode, value) {
      switch (keyCode) {
        case 37:
          this.pacman.direction[2] = value;
          break;
        case 38:
          this.pacman.direction[0] = value;
          break;
        case 39:
          this.pacman.direction[3] = value;
          break;
        case 40:
          this.pacman.direction[1] = value;
          break;
      }
    }
    /**
     * [createGhosts description]
     * @param  {[type]} num Max. 5 ghosts
     * @return {[type]}     [description]
     */

  }, {
    key: 'createGhosts',
    value: function createGhosts(num) {
      var resArr = [];
      var color = 0;
      var ghostColors = ["Pink", "Red", "Blue", "Orange", "Brown", "Violet"];
      for (var i = 0; i < num; i++) {
        resArr.push(new _ghost.Ghost(this.ctx, true, ghostColors[color]));
        if (color == ghostColors.length) color = 0;
        color++;
      }
      return resArr;
    }
  }]);

  return Game;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

__webpack_require__(3);

var game = new _game.Game();
game.play();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
  function Board(ctx) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      //draw the board
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
    }
  }]);

  return Board;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ghost = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mob = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ghost = exports.Ghost = function (_Mob) {
  _inherits(Ghost, _Mob);

  function Ghost(ctx, ai, color) {
    _classCallCheck(this, Ghost);

    var _this = _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this, ctx, ai, color));

    _this.ctx = ctx;
    _this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    _this.direction = [true, false, false, false];
    _this.position = [150, 150];
    return _this;
  }

  _createClass(Ghost, [{
    key: "render",
    value: function render() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position[0] - this.radius, this.position[1], this.radius * 2, this.radius);
      this.ctx.beginPath();
      this.ctx.arc(this.position[0], this.position[1], this.radius, 1 * Math.PI, 0 * Math.PI, false);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(this.position[0] - 3, this.position[1], 2, 0 * Math.PI, 1.75 * Math.PI, false);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(this.position[0] + 4, this.position[1], 2, 0 * Math.PI, 1.75 * Math.PI, false);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
    }
  }]);

  return Ghost;
}(_mob.Mob);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wall = __webpack_require__(9);

var _pill = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Level = exports.Level = function () {
  function Level(ctx) {
    _classCallCheck(this, Level);

    this.ctx = ctx;
    this.matrix = this.setMatrix();
    this.walls = this.createWalls();
    this.pills = this.createPills();
  }

  _createClass(Level, [{
    key: 'render',
    value: function render() {
      this.walls.forEach(function (element) {
        return element.render();
      });
      this.pills.forEach(function (element) {
        return element.render();
      });
    }
  }, {
    key: 'setMatrix',
    value: function setMatrix() {
      return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
  }, {
    key: 'createWalls',
    value: function createWalls() {
      var _this = this;

      var poolWalls = [];
      var counterx = 0;
      var countery = 0;

      //create from matrix
      for (var i = 0; i < this.matrix.length; i++) {
        if (counterx == 30) {
          counterx = 0;
          countery++;
        }
        if (this.matrix[i] == 1) {
          if (this.matrix[i - 1] == 1 && counterx != 30 && counterx != 0) {
            poolWalls[poolWalls.length - 1][2] += 10;
          } else {
            poolWalls.push([counterx * 10, countery * 10, 10, 10]);
          }
        }
        counterx++;
      }

      //Merge blocks
      var finalPoolWalls = [];
      var createNormal = false;
      for (var _i = 0; _i < poolWalls.length; _i++) {
        createNormal = true;
        for (var u = 0; _i < finalPoolWalls.length; u++) {
          if (finalPoolWalls[u][0] == poolWalls[_i][0] && finalPoolWalls[u][2] == poolWalls[_i][2] && finalPoolWalls[u][1] + finalPoolWalls[u][3] == poolWalls[_i][1]) {
            finalPoolWalls[u][3] += poolWalls[_i][3];
            createNormal = false;
          }
        }
        if (createNormal == true) finalPoolWalls.push(poolWalls[_i]);
      }

      var walls = [];
      poolWalls.forEach(function (element) {
        return walls.push(new _wall.Wall(_this.ctx, element));
      });
      console.log(finalPoolWalls.length);
      console.log(walls.length);
      return walls;
    }
  }, {
    key: 'createPills',
    value: function createPills() {
      var _this2 = this;

      var poolPills = [[20, 20], [43, 20], [66, 20], [89, 20], [112, 20], [135, 20], [165, 20], [188, 20], [211, 20], [234, 20], [257, 20], [280, 20]];
      //let poolPills = [];
      //while(let i != 0)
      var pills = [];
      poolPills.forEach(function (element) {
        return pills.push(new _pill.Pill(_this2.ctx, element));
      });
      return pills;
    }
  }]);

  return Level;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pacman = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mob = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pacman = exports.Pacman = function (_Mob) {
  _inherits(Pacman, _Mob);

  function Pacman(ctx, ai, color) {
    _classCallCheck(this, Pacman);

    var _this = _possibleConstructorReturn(this, (Pacman.__proto__ || Object.getPrototypeOf(Pacman)).call(this, ctx, ai, color));

    _this.ctx = ctx;
    _this.speed = 1;
    // "up", "down", "left", "right" Direction to move
    _this.direction = [false, false, false, false]; //
    _this.position = [151, 245];
    return _this;
  }

  _createClass(Pacman, [{
    key: "render",

    /**
     * Render the pacman in the screen depending on the position of the object
     * @return {[type]} [description]
     */
    value: function render() {
      var headDirection = this.checkHeadDirection();
      this.ctx.beginPath();
      this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc1Start"], headDirection["arc1End"], false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(this.position[0], this.position[1], this.radius, headDirection["arc2Start"], headDirection["arc2End"], false);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(headDirection["eyeX"], headDirection["eyeY"], 2, 0 * Math.PI, 1.75 * Math.PI, false);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
    }
  }, {
    key: "checkHeadDirection",
    value: function checkHeadDirection() {
      //Change mouth position
      var head = {};
      head["arc1Start"] = 0.25 * Math.PI;
      head["arc1End"] = 1.25 * Math.PI;
      head["arc2Start"] = 0.75 * Math.PI;
      head["arc2End"] = 1.75 * Math.PI;
      head["eyeX"] = this.position[0] + 2, head["eyeY"] = this.position[1] - 6;
      if (this.direction[0] === true) {
        head["arc2Start"] = 1.75 * Math.PI;
        head["arc2End"] = 0.75 * Math.PI;
        head["eyeX"] = this.position[0] - 6, head["eyeY"] = this.position[1] - 2;
      }
      if (this.direction[1] === true) {
        head["arc1Start"] = 0.75 * Math.PI;
        head["arc1End"] = 1.75 * Math.PI;
        head["arc2Start"] = 1.25 * Math.PI;
        head["arc2End"] = 0.25 * Math.PI;
        head["eyeX"] = this.position[0] + 6, head["eyeY"] = this.position[1] + 2;
      }
      if (this.direction[2] === true) {
        head["arc1Start"] = 1.25 * Math.PI;
        head["arc1End"] = 0.25 * Math.PI;
        head["arc2Start"] = 1.75 * Math.PI;
        head["arc2End"] = 0.75 * Math.PI;
      }
      return head;
    }
  }]);

  return Pacman;
}(_mob.Mob);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wall = exports.Wall = function () {
  function Wall(ctx, rect) {
    _classCallCheck(this, Wall);

    this.ctx = ctx;
    this.rect = rect;
  }

  _createClass(Wall, [{
    key: 'render',
    value: function render() {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3]);
    }
  }]);

  return Wall;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body {\r\n  max-width: 100%;\r\n  overflow-x: hidden;\r\n}\r\ncanvas{\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 25%;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);