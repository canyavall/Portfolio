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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(4);

var _player = __webpack_require__(6);

var _ball = __webpack_require__(3);

var _paddle = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Main function to play the game
 * @param {[type]} widthCanvas  [description]
 * @param {[type]} heightCanvas [description]
 */
var Game = exports.Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    // Prepare Parameters
    this.width = 600;
    this.height = 400;
    this.intervalId = 0;
    this.players = [];
    this.maxScore;

    // Prepare DOM
    this.canvasContext = this.prepareDOM();

    //Create players
    this.createPlayers();

    //Prepare objects
    this.board = new _board.Board(this.canvasContext);
    this.ball = new _ball.Ball(5, [100, 350], this.canvasContext, this.players);
    this.paddleLeft = new _paddle.Paddle([30, this.height / 2], this.canvasContext);
    this.paddleRight = new _paddle.Paddle([this.width - 30, this.height / 2], this.canvasContext);

    //Control the events
    this.listeners();
  }

  /**
  * Method to initiate the game
  */


  _createClass(Game, [{
    key: 'play',
    value: function play() {
      //Create initial board
      this.board.render();

      //Render players
      for (var i = 0; i < this.players.length; i++) {
        this.players[i].render();
      } //Create initial ball
      this.ball.render();
      //Create initial paddle
      this.paddleLeft.render();
      this.paddleRight.render();
      //Move the ball
      this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
    }
  }, {
    key: 'resetCanvas',


    /**
     * Reset the canvas and control if the game is over
     */
    value: function resetCanvas() {

      // Render all
      this.board.render();
      //Render players
      for (var i = 0; i < this.players.length; i++) {
        //If players scores max score
        if (this.players[i].score === this.maxScore) {
          this.players[i].winMsg();
          clearInterval(this.intervalId);
          setTimeout(function () {
            if (confirm("Do you want to play again?")) document.location.reload();
          }, 1000);
        }
        this.players[i].render();
      }

      //Show scores messages
      this.scoreMessages();

      //Move ball and paddles
      this.ball.move(this.paddleLeft, this.paddleRight);
      this.paddleLeft.move();
      this.paddleRight.move();

      //Render paddles and ball
      this.paddleLeft.render();
      this.paddleRight.render();
      this.ball.render();
    }

    /**
     * Prepare the DOM
     */

  }, {
    key: 'prepareDOM',
    value: function prepareDOM() {
      //create the canvas
      var canvas = document.createElement('canvas');
      canvas.id = "canvas";
      canvas.width = this.width;
      canvas.height = this.height;
      window.document.body.appendChild(canvas);

      //Get canvas
      return canvas.getContext('2d');
    }

    /**
     * Pepare the listeners
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
     * Change objects properties depending on the event runed
     * @param  {[integer]} keyCode     [description]
     * @param  {[boolean]} value       [description]
     */

  }, {
    key: 'changePropertyEvent',
    value: function changePropertyEvent(keyCode, value) {
      switch (keyCode) {
        case 87:
          this.paddleLeft.directionTop = value;
          break;
        case 83:
          this.paddleLeft.directionBottom = value;
          break;
        case 81:
          this.ball.changeLeftY = value;
          break;
        case 80:
          this.paddleRight.directionTop = value;
          break;
        case 76:
          this.paddleRight.directionBottom = value;
          break;
        case 186:
          this.ball.changeRightY = value;
          break;
      }
    }

    /**
     * create players of the game
     */

  }, {
    key: 'createPlayers',
    value: function createPlayers() {
      //Get player names
      var firstPlayer = prompt("Please, write the name of the first player. \n You'll play on the left with the keys 'W' and 'S' to move the paddle and 'Q' to change ball direction");
      var secondPlayer = prompt("Please, write the name of the second player. \n You'll play on the right with the keys 'P' and 'L' and '`' to change ball direction");
      var scoreMaximum = parseInt(prompt("Please, write the Maximum number of scores to win the game"));

      //Control player, if there's no name, the name will be Player1/Player2

      firstPlayer = firstPlayer === '' ? "Player 1" : firstPlayer;
      secondPlayer = secondPlayer === '' ? "Player 2" : secondPlayer;
      if (Number.isInteger(scoreMaximum) === false || scoreMaximum <= 0) {
        this.maxScore = 1;
      } else {
        this.maxScore = scoreMaximum;
      }
      this.players.push(new _player.Player(firstPlayer, [this.width / 2 - 100, 30], this.canvasContext));
      this.players.push(new _player.Player(secondPlayer, [this.width / 2 + 50, 30], this.canvasContext));
    }

    /**
     * Show messages depending on the score
     */

  }, {
    key: 'scoreMessages',
    value: function scoreMessages() {
      // Actual date to control the score message
      var actualDate = new Date().getTime();
      for (var i = 0; i < this.players.length; i++) {
        if (this.players[i].scoreTime + 2000 >= actualDate && this.players[i].scoreTime != 0) this.players[i].scoreMsg();
      }
    }
  }]);

  return Game;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

__webpack_require__(1);

var game = new _game.Game();
game.play();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * We create the object ball
 * @type {Object}
 */
var Ball = exports.Ball = function () {
  function Ball(radius, position, ctx, players) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.position = position;
    this.ctx = ctx;
    this.players = players;
    this.speed = 0.1;
    this.changeRightY = false;
    this.changeLeftY = false;
    //Direction defines if we need to increment or decrement the move
    this.direction = [2, 2];
  }

  /**
   * Renders the ball in the canvas
   */


  _createClass(Ball, [{
    key: 'render',
    value: function render() {
      this.ctx.beginPath();
      this.ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
      this.ctx.stroke();
    }
  }, {
    key: 'move',


    /**
     * Move the ball and checks the collision with the paddles
     * @param  {[object]} paddleLeft  Left paddle
     * @param  {[object]} paddleRight Right paddle
     */
    value: function move(paddleLeft, paddleRight) {
      var xPositionRadius = this.position[0] + this.radius * this.direction[0];
      var yPositionRadius = this.position[1] + this.radius * this.direction[1];
      this.paddleColission(paddleLeft, paddleRight, xPositionRadius, yPositionRadius);
      this.boardCollision(xPositionRadius, yPositionRadius);

      //Move the ball
      this.position[0] += this.direction[0];
      this.position[1] += this.direction[1];
    }
  }, {
    key: 'boardCollision',
    value: function boardCollision(xPositionRadius, yPositionRadius) {

      if (yPositionRadius <= 0) {
        this.direction[1] *= -1;
        this.position[1] = 0 + this.radius;
      };
      if (yPositionRadius >= this.ctx.canvas.clientHeight) {
        this.direction[1] *= -1;
        this.position[1] = this.ctx.canvas.clientHeight - this.radius;
      };
      if (xPositionRadius <= 0) {
        this.direction[0] *= -1;
        this.position[0] = 0 + this.radius;
        this.players[1].score++;
        this.players[1].scoreTime = new Date().getTime();
      };
      if (xPositionRadius >= this.ctx.canvas.clientWidth) {
        this.direction[0] *= -1;
        this.position[0] = this.ctx.canvas.clientWidth - this.radius;
        this.players[0].score++;
        this.players[0].scoreTime = new Date().getTime();
      }
    }

    /**
     * [description]
     * @param  {[object]} paddleLeft  Left paddle object
     * @param  {[object]} paddleRight Right paddle object
     */

  }, {
    key: 'paddleColission',
    value: function paddleColission(paddleLeft, paddleRight, xPositionRadius, yPositionRadius) {
      //Check the paddleLeft position for the collision
      if (this.position[0] - this.radius <= paddleLeft.position[0] + paddleLeft.width && this.position[1] >= paddleLeft.position[1] && this.position[1] <= paddleLeft.position[1] + paddleLeft.height && this.direction[0] < 0) {
        this.position[0] = paddleLeft.position[0] + paddleLeft.width + this.radius;
        this.direction[0] *= this.direction[0] > -5 ? -1 - this.speed : -1;
        if (this.changeLeftY === true) this.direction[1] *= -1;
      }

      //Check the paddleRight position for the collision
      if (this.position[0] + this.radius >= paddleRight.position[0] && this.position[1] >= paddleRight.position[1] && this.position[1] <= paddleRight.position[1] + paddleRight.height && this.direction[0] > 0) {
        this.position[0] = paddleRight.position[0] - this.radius;
        this.direction[0] *= this.direction[0] < 5 ? -1 - this.speed : -1;
        if (this.changeRightY === true) this.direction[1] *= -1;
      }
    }
  }]);

  return Ball;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Object Board
 * @param {[object]} ctx Canvas context
 */
var Board = exports.Board = function () {
  function Board(ctx) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
  }

  /**
   * Renders the Board in the canvas
   */


  _createClass(Board, [{
    key: 'render',
    value: function render() {
      //draw the board
      this.ctx.fillStyle = '#FD8844';
      this.ctx.fillRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);

      //draw the line
      this.ctx.beginPath();
      this.ctx.moveTo(this.ctx.canvas.clientWidth / 2, 0);
      this.ctx.lineTo(this.ctx.canvas.clientWidth / 2, this.ctx.canvas.clientHeight);
      this.ctx.strokeStyle = 'white';
      this.ctx.stroke();
    }
  }]);

  return Board;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines the paddle to be played
 * @param {[object]} ctx Canvas ctx
 */
var Paddle = exports.Paddle = function () {
  function Paddle(position, ctx) {
    _classCallCheck(this, Paddle);

    this.ctx = ctx;
    this.position = position;
    this.width = 15;
    this.height = 60;
    this.speed = 4;
    this.direction = 0;
  }

  /**
   * Renders the paddle in the canvas
   */


  _createClass(Paddle, [{
    key: 'render',
    value: function render() {
      this.ctx.fillStyle = 'rgba(0, 0, 255, 0.30';
      this.ctx.fillRect(this.position[0], this.position[1], this.width, this.height);
    }
  }, {
    key: 'move',


    /**
     * Move the paddle, the paddle must be moved only horizontal
     */
    value: function move() {

      //We don't allow the paddle to go out from the board
      //But we move to the top or bottom depending on the key pressed
      if (this.directionTop == true) this.position[1] += -this.speed;
      if (this.directionBottom == true) this.position[1] += this.speed;
      if (this.direction == 0) this.position[1];
      if (this.position[1] < 0) this.position[1] = 0;
      if (this.position[1] > this.ctx.canvas.clientHeight - this.height) this.position[1] = this.ctx.canvas.clientHeight - this.height;
    }
  }]);

  return Paddle;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Player attributes
 * @param  {[string]} name name of the player
 */
var Player = exports.Player = function () {
  function Player(name, position, context) {
    _classCallCheck(this, Player);

    this.context = context;
    this.position = position;
    this.name = name;
    this.score = 0;
    this.scoreTime = 0;
  }

  _createClass(Player, [{
    key: "render",
    value: function render() {
      var textToShow = this.name + ": " + this.score;
      this.context.font = "20px Calibri";
      this.context.fillStyle = "white";
      this.context.fillText(textToShow, this.position[0], this.position[1]);
    }
  }, {
    key: "scoreMsg",
    value: function scoreMsg() {
      this.context.font = "20px Calibri";
      this.context.textAlign = "center";
      this.context.fillStyle = "pink";
      this.context.fillText("Gotcha!", this.context.canvas.clientWidth / 2, 75);
    }
  }, {
    key: "winMsg",
    value: function winMsg() {
      this.context.font = "50px Calibri";
      this.context.fillStyle = "green";
      this.context.textAlign = "center";
      var msg = this.name + " WINS!!";
      this.context.fillText(msg, this.context.canvas.clientWidth / 2, this.context.canvas.clientHeight / 2);
    }
  }]);

  return Player;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "html, body {\r\n  max-width: 100%;\r\n  overflow-x: hidden;\r\n}\r\ncanvas{\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 25%;\r\n  border: solid 1px rgba(178, 95, 124, 1));\r\n}\r\n", ""]);

// exports


/***/ }),
/* 8 */
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
/* 9 */
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
	fixUrls = __webpack_require__(10);

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
/* 10 */
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